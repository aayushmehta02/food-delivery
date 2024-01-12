import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Search from './Search';
export default function Carouselllll() {
   

  return (
    <div className='carousel-search'>
        <div className='wrapping'>
            <div className='carousel-wrapping'>
                <Carousel interval={2000} indicatorColor="transparent" variant = "fullscreen">
                    <div>
                        <img src='https://source.unsplash.com/random/?burger' className='carouselimg'/>
                    </div>
                    <div>
                    <img src='https://source.unsplash.com/random/?fast-food' className='carouselimg' />
                    </div>
                    <div>
                    <img src='https://source.unsplash.com/random/?pizza' className='carouselimg'/>
                    
                    </div>
                
                </Carousel>
            </div>
        
        <div className='searching'>
            <Search className="search"/>
        </div>
        
        </div>
    
    </div>
  )
}
