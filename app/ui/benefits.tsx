import Image from 'next/image';
import thirdImage from '@/assets/thirdImage.png';
import secondImage from '@/assets/secondImage.png';

export default function Benefits() {
  return (
    <>
      <div className="heroContainer col-xl-11 col-xxl-9">
        <div className="col-lg-6 ">
          <Image src={secondImage} alt="Hero Image" className="hero-image" />
        </div>
        <div className=" col-lg-6 herotextcontainer">
          <h2 className="mx-5 text-center text-lg-start ">
            Leading healthcare providers
          </h2>
          <div className="serviceUnderline mx-5 my-3"></div>
          <p className="mx-3 mx-lg-5  text-secondary text-center text-lg-start py-2">
            We are dedicated to enhancing healthcare by providing top-tier
            medical equipment from around the globe.Our commitment to excellence
            ensures that healthcare providers have access to the latest reliable
            tools.
          </p>
          <button className="service-button my-2 w-30 py-2 mx-5">
            Learn more
          </button>
        </div>
      </div>

      <div className="heroContainer col-xl-11 col-xxl-9 flex-wrap-reverse">
        <div className=" col-lg-6 herotextcontainer">
          <h2 className="my-2 text-center text-lg-start py-2 px-3 px-lg-5">
            Your health is the most important
          </h2>
          <div className="serviceUnderline mx-5 my-3"></div>
          <p className="mx-3 mx-lg-5  text-secondary text-center text-lg-start py-2">
            We are dedicated to enhancing healthcare by providing top-tier
            medical equipment from around the globe.Our commitment to excellence
            ensures that healthcare providers have access to the latest reliable
            tools.
          </p>
          <button className="service-button my-2 w-30 py-2 mx-5">
            Learn more
          </button>
        </div>
        <div className="col-lg-6 ">
          <Image src={thirdImage} alt="Hero Image" className="hero-image" />
        </div>
      </div>
    </>
  );
}
