import Image from 'next/image';
import Hero from './ui/hero';
import Services from './ui/services';
import Benefits from './ui/benefits';
import Feedbacks from './ui/feedbacks';
import eqip1 from '@/assets/equip1.jpg';
import eqip2 from '@/assets/equip2.jpg';
import eqip3 from '@/assets/equip3.jpg';
import eqip4 from '@/assets/equip4.webp';
import { FaStar } from 'react-icons/fa';
export default function Home() {
  return (
    <>
      <div className="col-lg-11 col-xl-11 col-xxl-9 mx-auto">
        <Hero />
        <Services />
        <Benefits />
        <Feedbacks />
        <h2 className="text-center mt-5 mb-4">Check our latest Products</h2>
        <div
          className="serviceUnderline mx-auto mb-5"
          style={{ background: 'black' }}
        ></div>
        <div className="d-flex justify-content-around flex-wrap productsContainer">
          <div>
            <Image
              src={eqip1}
              alt="product image"
              width={250}
              height={150}
              className="productImage"
            />
            <h5 className="text-center bold-text m-1">Thermocare</h5>
            <p className="text-secondary text-center my-1 mx-2">
              <small>
                This is the best equiment now. Take it without hesitation
              </small>
            </p>
            <p className="text-center m-1 bold-text">$499</p>
            <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar />
            </p>
            <button className="order-button">Buy Now</button>
          </div>
          <div>
            <Image
              src={eqip2}
              alt="product image"
              width={250}
              height={150}
              className="productImage"
            />
            <h5 className="text-center bold-text m-1">Microbiaz</h5>
            <p className="text-secondary text-center my-1 mx-2">
              <small>
                This is the best equiment now. Take it without hesitation
              </small>
            </p>
            <p className="text-center m-1 bold-text">$899</p>
            <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar />
              <FaStar />
            </p>
            <button className="order-button">Buy Now</button>
          </div>
          <div>
            <Image
              src={eqip3}
              alt="product image"
              width={250}
              height={150}
              className="productImage"
            />
            <h5 className="text-center bold-text m-1">Lepu</h5>
            <p className="text-secondary text-center my-1 mx-2">
              <small>
                This is the best equiment now. Take it without hesitation
              </small>
            </p>
            <p className="text-center m-1 bold-text">$799</p>
            <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </p>
            <button className="order-button">Buy Now</button>
          </div>
          <div>
            <Image
              src={eqip4}
              alt="product image"
              width={250}
              height={150}
              className="productImage"
            />
            <h5 className="text-center bold-text m-1">Shenzhen</h5>
            <p className="text-secondary text-center my-1 mx-2">
              <small>
                This is the best equiment now. Take it without hesitation
              </small>
            </p>
            <p className="text-center m-1 bold-text">$699</p>
            <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <button className="order-button">Buy Now</button>
          </div>
        </div>
        <button className="service-button mx-auto my-5">View More</button>
      </div>
    </>
  );
}
