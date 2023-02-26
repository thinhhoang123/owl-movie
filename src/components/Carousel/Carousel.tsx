import * as React from 'react';
import Slider from 'react-slick';
import { isMobile } from 'react-device-detect';

export interface ICarouselProps {
  setting?: any;
  children: React.ReactNode;
}

export default function Carousel(props: ICarouselProps) {
  console.log(props.setting);
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

  return <Slider {...settings}>{props.children}</Slider>;
}
