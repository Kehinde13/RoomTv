import React, { useState } from 'react'
import background from '../images/nollywood-background.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

function Nollywood() {
 /* personalize the slider */
 const [sliderRef, setSliderRef] = useState(null)
  
 /* sliderSettings to store the carousel settings */

 const sliderSettings = {
      //number of slides to keep in view 
     responsive: [
         {
             breakpoint: 768,
             settings: {
                 slidesToShow: 3, 
             }
         },
       {
         breakpoint: 600,
         settings: {
            slidesToShow: 2, 
         }
       }
     ],
     arrows: false,
     speed: 300,
     slidesToShow: 4,
     slidesToScroll: 1, //number of slides to move while navigating
     infinite: false, //boolean to dertermine if carousel continues in a loop
 }

 const nollywood = [
     {
         id: "1",
         title: "Anikulapo",
         image: "./images/Anikulapo.jpg",
         desc: "After an affair with a queen leads to his demise, an eager traveler encounters a mystical bird with the power to give him another life",
         trailer: "https://www.youtube.com/watch?v=rXIKrHPaB-o"
     },
 
     {
         id:"2",
         title: "Blood Sisters",
         image: "./images/blood-sisters.jpg",
         desc: "Bound by a dangerous secret, friends Sarah and Kemi are forced to go on the run after a wealthy groom disappears during his engagement party.",
         trailer: "https://www.youtube.com/watch?v=r9sSydb5ec8"
     },
 
     {
         id: "3",
         title: "Citation",
         image: "./images/Citation.jpg",
         desc: "A bright student in Nigeria takes on the academic establishment when she reports a popular professor who tried to rape her.",
         trailer: "https://www.youtube.com/watch?v=1eMAYynMc1w"
     },
 
     {
         id: "4",
         title: "Soole",
         image: "./images/Soole.jpeg",
         desc: "A crooked bus driver solicits passengers at exorbitant ticket prices, assembling a varied bunch for the long ride to Enugu.",
         trailer: "https://www.youtube.com/watch?v=T_uJZHxcplk&t=7s"
     },
 
     {
         id: "5",
         title: "Sugar Rush",
         image: "./images/Sugar-rush.jpeg",
         desc: "Sugar sisters accidentally discover $800,000 in the house of a corrupt man, Chief Douglas.",
         trailer: "https://www.youtube.com/watch?v=pvoYpx6W2RM"
     },
 
     {
         id: "6",
         title: "The man of God",
         image: "./images/The man of God.jpg",
         desc: "Samuel forsakes his harsh religious upbringing to live his own life -- but his soul remains caught between the world and the faith he left behind.",
         trailer: "https://www.youtube.com/watch?v=E5ugUvUTFpE"
     }
 ]

 


  return (
    <div className='mb-5'>
        <Typewriter 
          options={{
            strings: [
            'Welcome To RoomTv',
            'Your Number One Site For The latest Movies',
            'Nollywood',
            'Hollywood',
            'Animations',
            'Series'
            ],
            wrapperClassName: 'effect',
            autoStart: true,
            loop: true,
          }}
        />
        <h1 className='font-bold text-3xl md:text-5xl p-5'>Nollywood</h1>
       <img src={background} alt="" className='w-full md:h-[500px]'/>
       <div className="content relative">
       <button 
        onClick={sliderRef?.slickPrev} 
        className='absolute top-36 z-10 bg-slate-100 rounded-2xl p-2 dark:text-black'>
            <FaChevronLeft />
        </button>
        <button 
        onClick={sliderRef?.slickNext}
        className='absolute right-1 top-36 z-10 bg-slate-100 rounded-2xl p-2 dark:text-black'>
            <FaChevronRight />
        </button>
        <Slider ref={setSliderRef} {...sliderSettings}>
           {nollywood.map((movie, index) => (
             <div key={index} className='px-3 border-none'>
                <img src={movie.image} alt={movie.title}
                 className='h-72 rounded-md my-3 w-[300px]'/>
                <button className='bg-amber-200 p-2 rounded-lg dark:text-black'>
                <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
                   Watch Trailer
                </a></button>
                <p className='hidden lg:block'>{movie.desc}</p>
             </div>
           ))}
        </Slider>
       </div>
       
    </div>
  )
}

export default Nollywood