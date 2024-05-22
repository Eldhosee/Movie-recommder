import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import imagenotfound from '../assets/notfound.svg';
import 'swiper/css/pagination';
import { Moviecontext } from '../Context/Moviecontext';
import { Link } from 'react-router-dom';
const MovieSwiper = () => {
  const { moviedetails, movie } =useContext(Moviecontext) 
  return (
    <>
      <Swiper
        spaceBetween={50}
        breakpoints={{
          // When window width is >= 640px (sm breakpoint)
          640: {
            slidesPerView: 1,
          },
          // When window width is >= 768px (md breakpoint)
          768: {
            slidesPerView: 2,
          },
          // When window width is >= 1024px (lg breakpoint)
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={true} 
        modules={[Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {moviedetails.length !== 0 ? (
          moviedetails.map((key, index) => (
         
            <SwiperSlide key={index}>
            <Link to={`/details/${key.id}`}>
              <div
                className="max-w-sm w-[400px] h-[400px] rounded overflow-hidden shadow-lg flex flex-col items-center justify-center bg-[#1A1A1A] mx-auto"
              >
                <div className='w-[90%] h-[90%]'>
                  {key.primaryImage && key.primaryImage.url ? ( // Check if primaryImage and url exist
                    <img className="w-full h-full object-cover p-6" src={key.primaryImage.url} alt="Movie Poster" />
                  ) : (
                    <img className="w-full h-full p-6" src={imagenotfound} alt="Default Movie Poster" />
                  )}
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-white">{key.originalTitleText.text}</div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
            
          ))
        ) : (
          movie.map((key, index) => (
            <SwiperSlide key={index}>
              <div
                className="max-w-sm w-[400px] h-[400px] rounded overflow-hidden shadow-lg flex flex-col items-center justify-center bg-[#1A1A1A] mx-auto"
              >
                <img className="w-[60%] p-6" src={imagenotfound} alt="Default Movie Poster" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-white">{key}</div>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default MovieSwiper;
