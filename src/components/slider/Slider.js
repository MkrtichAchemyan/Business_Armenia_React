import React, { Component} from 'react'
import 'jquery'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css';
import './slider.css';


class Slider extends Component{
   swiper

  componentDidMount(){
   this.swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
  }
  render(){
    const {slides} = this.props
    const slide = slides.map(item=>

            <div className="blog-slider__item swiper-slide" key={item.id}>
              <div className="blog-slider__img">
                <img src={item.img} alt=""/>
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">{item.date}</span>
                <div className="blog-slider__title">{item.title}</div>
                <div className="blog-slider__text">
                  {item.text}
                </div>
                <a href="#" className="blog-slider__button">READ MORE</a>
              </div>
            </div>
    )
    return(
      <>
        <div className="">
          <div className="slider">
            <div className="blog-slider">
              <div className="blog-slider__wrp swiper-wrapper">
                {slide}
              </div>
              <div className="blog-slider__pagination"></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Slider