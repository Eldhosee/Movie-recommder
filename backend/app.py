from flask import Flask, jsonify, request
import requests
from dotenv import load_dotenv
import os
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle
from flask_cors import CORS
from fuzzywuzzy import process


load_dotenv()

app = Flask(__name__)
CORS(app)

def load_data():
    if os.path.exists('movies_list.pkl') and os.path.exists('similarity.pkl'):
        # Load data from pickle files if they exist
        movies = pickle.load(open("movies_list.pkl", 'rb'))
        similarity = pickle.load(open("similarity.pkl", 'rb'))
    else:
        # Load data from CSV file
        movie = pd.read_csv('dataset.csv')
        movies = movie[['id', 'title', 'overview', 'genre']]
        movies['tags'] = movies['overview'] + movies['genre']

        # Preprocess data
        new_data = movies[['id', 'title', 'tags']]
        cv = CountVectorizer(max_features=10000, stop_words='english')
        vector = cv.fit_transform(new_data['tags'].values.astype('U')).toarray()
        similarity = cosine_similarity(vector)

        # Save preprocessed data to pickle files
        with open('movies_list.pkl', 'wb') as f:
            pickle.dump(movies, f)
        with open('similarity.pkl', 'wb') as f:
            pickle.dump(similarity, f)

    return movies, similarity

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
    selected_movie = data['movie'].lower()
    print(selected_movie)
    movies, similarity = load_data()
    movie_titles = movies['title'].str.lower().str.strip().tolist()
    best_match = process.extractOne(selected_movie, movie_titles, score_cutoff=80)

    if not best_match:
        return jsonify({'error': 'Movie not found'}), 404

    matched_title = best_match[0]
    index = movies[movies['title'].str.lower().str.strip() == matched_title].index[0]
    distance = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda vector:vector[1])
    
    recommend_movie = [movies.iloc[i[0]].title for i in distance[1:6]]
    
    # Fetch details 
    recommend_details = []
    for movie_title in recommend_movie:
        movie_details = fetch_poster(movie_title)
        if movie_details:
            recommend_details.append(movie_details)
    return jsonify({'movies': recommend_movie, 'posters': recommend_details})

if __name__ == '__main__':
    app.run(debug=True)
