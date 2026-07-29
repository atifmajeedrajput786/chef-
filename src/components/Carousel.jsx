import Slider from 'react-slick'
import { forwardRef } from 'react'

// Mirrors the settings used across the original template's slick sliders,
// with custom prev/next arrow elements rendered outside the slider (as in the source markup).
const Carousel = forwardRef(function Carousel({ children, slidesToShow = 1, className = '', settings = {} }, ref) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1030, settings: { slidesToShow, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 780, settings: { slidesToShow: Math.min(slidesToShow, 2), slidesToScroll: 1 } },
      { breakpoint: 380, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    ...settings,
  }

  return (
    <Slider ref={ref} className={className} {...defaultSettings}>
      {children}
    </Slider>
  )
})

export default Carousel
