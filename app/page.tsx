import Hero from './ui/hero';
import Image from 'next/image';
import secondImage from '@/assets/secondImage.png';
import thirdImage from '@/assets/thirdImage.png';
import Services from './ui/services';
import perfectface from '@/assets/perfect-face.jpg';
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
        <div className="col-lg-10 mx-lg-auto  px-2 my-4 py-4 py-lg-5 feedbacks">
          <h2 className="text-center text-white">
            What people are saying about us
          </h2>
          <div
            className="serviceUnderline mx-5  my-4 my-lg-5 mx-auto"
            style={{ backgroundColor: 'white !important' }}
          ></div>
          <div className="d-flex flex-wrap justify-content-between col-lg-9 mx-auto ">
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
                "This guys are the deal. I have received the best attibute.
                There patience and growing intel is what makes them the best
                There patience and growing intel is what makes them the best "
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
