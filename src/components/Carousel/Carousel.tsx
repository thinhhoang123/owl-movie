import * as React from 'react';
import Slider from 'react-slick';
import { isMobile } from 'react-device-detect';

export interface ICarouselProps {
  setting?: any;
  children: React.ReactNode;
}

const Carousel = React.forwardRef((props: ICarouselProps, ref) => {
  const settings = props.setting
    ? props.setting
    : {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !isMobile,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <Slider ref={ref} {...settings}>
      {props.children}
    </Slider>
  );
});

export default Carousel;
