import React, { useState } from 'react'
import background from '../images/animation-background.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function Animation() {
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
 
  const animation = [
    {
        id:"1",
        image: "./images/arcane.jpg",
        desc: "The origins of two iconic League champions, set in the utopian Piltover and the oppressed underground of Zaun.",
        trailer: "https://youtu.be/fXmAurh012s"
      },
 
      {
         id:"2",
         image: "./images/naruto.jpg",
         desc: "Naruto, an adolescent ninja, dreams of becoming the Hokage in his village.",
         trailer: "https://youtu.be/1WLO0Owi5-A",
      },
 
      {
         id:"3",
         image: "./images/castlevania.jpg",
         desc: "Inspired by the popular video game series, this anime series is a dark medieval fantasy. It follows the last surviving member of the disgraced Belmont clan, Trevor Belmont, trying to save Eastern Europe from extinction at the hands of Vlad Dracula Tepes",
         trailer: "https://www.youtube.com/watch?v=L7iWXfZzEMc"
      },
 
      {
         id: "4",
         image: "./images/dragon-ball.jpg",
         desc: "Dragon Ball  follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil",
         trailer: "https://youtu.be/sxufB6DxXk0"
      },
 
      {
         id: "5",
         image: "./images/spiderman.jpg",
         desc: "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.",
         trailer: "https://youtu.be/g4Hbz2jLxvQ",
      },
 
     {
         id: "6",
         image: "./images/rick-and-morty.jpg",
         desc: "Rick, an alcoholic sociopath and scientist, lives with his daughter Beth's family. Apart from building gadgets, he takes his morally right but dimwit grandson Morty on absurd intergalactic adventures",
         trailer: "https://youtu.be/hl1U0bxTHbY"
     }
]
 
  
 
 
   return (
     <div className='mb-5'>
      <h1 className='font-bold text-3xl md:text-5xl p-5'>Animations</h1>
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
            {animation.map((movie, index) => (
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


export default Animation