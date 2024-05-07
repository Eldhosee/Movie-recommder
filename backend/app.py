from flask import Flask, jsonify, request
import requests
from dotenv import load_dotenv
import os
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle

load_dotenv()

app = Flask(__name__)


def load_data():
    if os.path.exists('movies_list.pkl') and os.path.exists('similarity.pkl'):
       
        with open('movies_list.pkl', 'rb') as f:
            movies = pickle.load(f)
        with open('similarity.pkl', 'rb') as f:
            similarity = pickle.load(f)
    else:
        
        movie = pd.read_csv('dataset.csv')
        movies = movie[['id', 'title', 'overview', 'genre']]
        movies['tags'] = movies['overview'] + movies['genre']
        
        # Preprocess data
        new_data = movies[['id', 'title', 'tags']]
        cv = CountVectorizer(max_features=10000, stop_words='english')
        vector = cv.fit_transform(new_data['tags'].values.astype('U')).toarray()
        similarity = cosine_similarity(vector)
        
        # Save preprocessed data 
        with open('movies_list.pkl', 'wb') as f:
            pickle.dump(new_data, f)
        with open('similarity.pkl', 'wb') as f:
            pickle.dump(similarity, f)
    
    return new_data, similarity

# Fetch movie details 
def fetch_poster(movie):
    url = f"https://moviesdatabase.p.rapidapi.com/titles/search/title/{movie}"
    querystring = {"exact": "true", "titleType": "movie", "limit": "1"}
    headers = {
        "X-RapidAPI-Key": os.getenv('API_KEY'),
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
    }
    response = requests.get(url, headers=headers, params=querystring)
    data = response.json()
    return data

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    selected_movie = data['movie']
    
    # Load data and similarity scores
    movies, similarity = load_data()
    
    # Find index of selected movie
    index = movies[movies['title'] == selected_movie].index[0]
    
    # Sort similarity scores
    distance = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda vector: vector[1])
    
    # Get top 5 recommended movies
    recommend_movie = [movies.iloc[i[0]].title for i in distance[1:6]]
    
    # Fetch details 
    recommend_details = []
    for movie_title in recommend_movie:
        movie_details = fetch_poster(movie_title)
        if movie_details:
            recommend_details.append(movie_details)
    
    return jsonify({'movies': recommend_movie, 'details': recommend_details})

if __name__ == '__main__':
    app.run(debug=True)
