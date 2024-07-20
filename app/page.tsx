import Hero from './ui/hero';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { FaUserDoctor } from 'react-icons/fa6';
import secondImage from '@/assets/secondImage.png';
import thirdImage from '@/assets/thirdImage.png';
export default function Home() {
  return (
    <>
      <div className="col-lg-11 col-xl-11 col-xxl-9 mx-auto">
        <Hero />
        <h2 className="text-center my-4">Our services</h2>
        <div className="serviceUnderline mx-auto"></div>
        <p className="text-secondary px-3 text-center my-4 col-lg-9 mx-auto">
          We provide the best choices for you. Adjust it to your health needs
          and make sure you under go treatment with our highly qualified doctors
          you can consult with us which type of service is suitable for your
          health
        </p>
        <div className="serviceContainer my-2">
          <div className="py-3">
            <CiSearch
              fontSize={66}
              color="dodgerblue"
              className="d-block mx-auto"
            />
            <h5 className="text-center m-2 ">Search Medicine</h5>
            <p className="px-3 text-center text-secondary">
              Choose your medicine from thousands of general and trusted brands
            </p>
          </div>
          <div className="py-3">
            <FaUserDoctor
              fontSize={66}
              color="dodgerblue"
              className="d-block mx-auto"
            />
            <h5 className="text-center m-2 ">Buy Products</h5>
            <p className="px-3 text-center text-secondary">
              Choose your medicine from thousands of general and trusted brands
            </p>
          </div>
          <div className="py-3">
            <AiOutlineMedicineBox
              fontSize={66}
              color="dodgerblue"
              className="d-block mx-auto"
            />
            <h5 className="text-center m-2 ">Assure quality</h5>
            <p className="px-3 text-center text-secondary">
              Choose your medicine from thousands of general and trusted brands
            </p>
          </div>
        </div>
        <button className="service-button mx-auto my-4">Learn More</button>
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
