import React, { useContext, useEffect, useState } from 'react';
import { Moviecontext } from '../Context/Moviecontext';
import { useParams } from 'react-router-dom';
import imagenotfound from '../assets/notfound.svg';

const Moviedetails = () => {
  const { id } = useParams();
  const { moviedetails } = useContext(Moviecontext);


  const [detail, setDetail] = useState(null);

  useEffect(() => {

    const foundDetail = moviedetails.find(movie => movie.id === id);
    setDetail(foundDetail);
  }, [id, moviedetails]);
  return (
    <div >
      <div className='w-full h-[600px] text-white'>
        <div className='w-full h-full'>
          <div className='absolute w-full h-[600px] bg-gradient-to-t from-black'></div>
          {detail ? (
            detail.primaryImage ? (
              <img className="w-full h-full object-cover p-6" src={detail.primaryImage.url} alt="Movie Poster" />
            ) : (
              <img className="w-full h-full p-6" src={imagenotfound} alt="Default Movie Poster" />
            )
          ) : (
            <p>Loading...</p>
          )}
          {detail && (<>
            <div className='absolute lg:w-auto max-lg:w-full top-1/2 left-1 transform  -translate-y-1/2 p-4 md:p-8 max-sm:p-0'>
              <h1 className='text-5xl max-md:text-4xl font-bold flex justify-center mb-8'>{detail.originalTitleText.text}</h1>
            </div>
            <div className='flex'>
              <div id='left' className=' w-[50%] max-md:w-[100%]   items-center'>
                <div className='flex flex-wrap m-6'>
                  <div className="w-[100px] max-w-[250px] p-2 h-auto max-h-[50px] m-3 border-2 rounded-full flex justify-center items-center">
                    <p className="text-white text-center">type:{detail.titleType.text}</p>
                  </div>
                  <div className="w-auto max-w-[250px]  p-2 h-auto max-h-[50px] m-3 border-2 rounded-full flex justify-center items-center">
                    <p className="text-white text-center">Release Date:{detail.releaseDate.day}-{detail.releaseDate.month}-{detail.releaseDate.year}</p>
                  </div>
                </div>
                <div>
                  <div className='m-7'>
                    <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Cast</span></h2>
                    <p className="text-white "><span className='text-xl  mr-4'></span>{detail.primaryImage.caption.plainText}</p>
                  </div>
                </div>
                <br />
                <div className='m-7'>
                  <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Details</span></h2>
                  <p className="text-white ">{detail.titleType.text} is a thrilling  film . It features a star-studded cast including {detail.primaryImage.caption.plainText}. The movie was released on {detail.releaseDate.day}-{detail.releaseDate.month}-{detail.releaseDate.year} and falls under the category of {detail.titleType.text}.</p>
                  <p className="text-white ">Don't miss out on this action-packed adventure that will keep you on the edge of your seat!</p>
                </div>
              </div>
              <div id='right' className='w-[50%] max-h-[500px] max-md:hidden'>
                <img className="w-full h-full object-contain p-6" src={detail.primaryImage.url} alt="Movie Poster" />
              </div>
            </div>

          </>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
