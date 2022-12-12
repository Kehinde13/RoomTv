import React, { useState } from 'react'
import background from '../images/super-hero-background.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function SuperHero() {
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

 const Superhero = [
    {
        id:"1",
        image: "./images/doctor strange.jpg",
        desc: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.",
        trailer: "https://www.youtube.com/watch?v=aWzlQ2N6qqg"
      },
 
      {
         id:"2",
         image: "./images/black-adam.jpg",
         desc: "In ancient Kahndaq, Teth Adam was bestowed the almighty powers of the gods. After using these powers for vengeance, he was imprisoned, becoming Black Adam.",
         trailer: "https://www.youtube.com/watch?v=mkomfZHG5q4",
      },
 
      {
         id:"3",
         image: "./images/black-panther.jpg",
         desc: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death.",
         trailer: "https://www.youtube.com/watch?v=_Z3QKkl1WyM"
      },
 
      {
         id: "4",
         image: "./images/the-batman.jpg",
         desc: "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past",
         trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4"
      },
 
      {
         id: "5",
         image: "./images/thor.jpg",
         desc: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods",
         trailer: "https://www.youtube.com/watch?v=Go8nTmfrQd8",
      },
 
]
 


  return (
    <div className='pb-5'>
       <h1 className='font-bold text-3xl md:text-5xl p-5'>SuperHero Movies</h1>
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
           {Superhero.map((movie, index) => (
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

export default SuperHero