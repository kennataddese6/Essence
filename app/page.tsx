import Hero from './ui/hero';
import Image from 'next/image';
import secondImage from '@/assets/secondImage.png';
import thirdImage from '@/assets/thirdImage.png';
import Services from './ui/services';
export default function Home() {
  return (
    <>
      <div className="col-lg-11 col-xl-11 col-xxl-9 mx-auto">
        <Hero />
        <Services />
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
              medical equipment from around the globe.Our commitment to
              excellence ensures that healthcare providers have access to the
              latest reliable tools.
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
              medical equipment from around the globe.Our commitment to
              excellence ensures that healthcare providers have access to the
              latest reliable tools.
            </p>
            <button className="service-button my-2 w-30 py-2 mx-5">
              Learn more
            </button>
          </div>
          <div className="col-lg-6 ">
            <Image src={thirdImage} alt="Hero Image" className="hero-image" />
          </div>
        </div>
        <div className="col-lg-9 mx-auto py-4 feedbacks">
          <h2 className="text-center text-white">
            What people are saying about us
          </h2>
          <div
            className="serviceUnderline mx-5 my-5 mx-auto"
            style={{ backgroundColor: 'white !important' }}
          ></div>
          <div className="d-flex justify-content-between col-lg-9 mx-auto ">
            <div>Kenna T.</div>
            <p>"This guys are the deal. I have received the best attibute"</p>
          </div>
        </div>
        <h1>Hello3</h1>
        <h1>Hello4</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>
    </>
  );
}
