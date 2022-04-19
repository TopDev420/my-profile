import React from "react"
import Slider from "react-slick"

export const Slides = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 598,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <Slider {...settings}>
        {data.data &&
          data.data.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 py-5">
              {" "}
              <div className="icon">
                <i className={d.icon}></i>
              </div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
      </Slider>
    </div>
  )
}
