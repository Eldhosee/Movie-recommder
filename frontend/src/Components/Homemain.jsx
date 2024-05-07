import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';

const Homemain = () => {
    

    return (
        
        <div>
        <h1 className='mt-[10%]  text-4xl md:text-5xl text-white font-bold flex justify-center mb-12'>Features </h1>
        <div  className="grid  mb-[10%] grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            <motion.div
                className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center justify-center bg-[#1A1A1A] mx-auto"
                initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
            >
                <img className="w-[60%] p-6" src={img1} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">Personalized Movie Recommendations</div>
                    <p className="text-white text-base">
                        Input your favorite movie and instantly receive a curated list of 5 similar picks. No more endless scrolling - we bring the best to you.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="max-w-sm rounded overflow-hidden flex flex-col items-center justify-center shadow-lg bg-[#1A1A1A] mx-auto"
                initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
            >
                <img className="w-[60%] p-6" src={img2} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">Sleek Movie Details Display</div>
                    <p className="text-white text-base">
                        Dive deep into recommended movies with vibrant posters and concise summaries. Whether blockbusters or hidden gems, we've got you covered.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="max-w-sm rounded overflow-hidden flex flex-col items-center justify-center shadow-lg bg-[#1A1A1A] mx-auto"
                initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
            >
                <img className="w-[60%] p-4" src={img3} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">Seamless External API Integration</div>
                    <p className="text-white text-base">
                        Explore beyond borders with our integrated movie database API. Get up-to-date info without leaving our platform.
                    </p>
                </div>
            </motion.div>
        </div>
        </div>
    );
};

export default Homemain;
