import React, { useState } from 'react'
import background from '../images/series-background.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function Series() {
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

 const series = [

    {
      id:"1",
      image: "./images/Breaking-bad.jpg",
      desc: "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
      trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY"
    },

    {
       id:"2",
       image: "./images/GOT.jpg",
       desc: "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.",
       trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },

    {
       id:"3",
       image: "./images/narcos.jpg",
       desc: "Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late '80s in this raw, gritty original series.",
       trailer: "https://www.youtube.com/watch?v=xl8zdCY-abw"
    },

    {
       id: "4",
       image: "./images/suits.jpg",
       desc: "Mike Ross, a talented young college dropout, is hired as an associate by Harvey Specter, one of New York's best lawyers. They must handle cases while keeping Mike's qualifications a secret.",
       trailer: "https://youtu.be/85z53bAebsI"
    },

    {
       id: "5",
       image: "./images/the-boys.jpg",
       desc: "Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good. What happens when the heroes go rogue and start abusing their powers?",
       trailer: "https://www.youtube.com/watch?v=5SKP1_F7ReE",
    },

   {
       id: "6",
       image: "./images/witcher.jpg",
       desc: "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
       trailer: "https://www.youtube.com/watch?v=ndl1W4ltcmg"
   }
]

 


  return (
    <div className='mb-5'>
      <h1 className='font-bold text-3xl md:text-5xl p-5'>Series</h1>
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
           {series.map((movie, index) => (
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


export default Series