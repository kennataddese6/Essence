import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '@/assets/heroImage.png';
import Image from 'next/image';
export default function Hero() {
  return (
    <div className="heroContainer col-xl-12 col-xxl-9">
      <div className=" col-lg-6 herotextcontainer">
        <h1 className="my-2 text-center text-lg-start p-2">
          Empowering health care with quality
        </h1>
        <p className="my-2 text-secondary text-center text-lg-start p-2">
          We are dedicated to enhancing healthcare by providing top-tier medical
          equipment from around the globe.Our commitment to excellence ensures
          that healthcare providers have access to the latest reliable tools.
        </p>
        <button className="btn btn-primary my-2 w-30 py-2">Learn more</button>
      </div>
      <div className="col-lg-6 ">
        <Image src={heroImage} alt="Hero Image" className="hero-image" />
      </div>
    </div>
  );
}
