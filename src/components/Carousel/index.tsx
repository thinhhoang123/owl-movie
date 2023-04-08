import * as React from 'react';
import { Splide, SplideTrack } from '@splidejs/react-splide';

export interface CarouselProps {
  render?: JSX.Element[];
  option?: object;
}

export default function Carousel(props: CarouselProps) {
  return (
    <Splide
      hasTrack={false}
      className="splide-custom"
      options={{
        type: 'loop',
        focus: 'center',
        perPage: 1,
        ...props.option,
      }}
    >
      <SplideTrack>{props.render}</SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <i className="fad fa-chevron-left"></i>
        </button>
        <button className="splide__arrow splide__arrow--next">
          <i className="fad fa-chevron-right"></i>
        </button>
      </div>
    </Splide>
  );
}
