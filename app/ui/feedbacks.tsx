'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import perfectface from '@/assets/perfect-face.jpg';
import Slider from 'react-slick';

export default function Feedbacks() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="col-lg-10 mx-lg-auto  px-3 my-5 py-4 py-lg-5 feedbacks">
        <h2 className="text-center text-white">
          What people are saying about us
        </h2>
        <div
          className="serviceUnderline mx-5  my-4 my-lg-4 mx-auto"
          style={{ background: 'white !important' }}
        ></div>
        <div className="d-flex flex-wrap justify-content-between col-lg-9 mx-auto  py-4 ">
          <div className="text-white  d-flex align-items-center  col-lg-6 py-2  mx-auto mx-lg-0">
            <div className="customerProfile">
              <Image
                src={perfectface}
                width={100}
                alt="profile"
                className="customerImage"
              />
            </div>
            <div className="mx-4">
              <h4 className="my-1">Kenna Taddese</h4>
              <p>Co-founder</p>
            </div>
          </div>
          <div className="col-lg-6 p-3">
            <p className="text-white text-center text-lg-start">
              "This guys are the deal. I have received the best attibute. There
              patience and growing intel is what makes them the best There
              patience and growing intel is what makes them the best "
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
}
