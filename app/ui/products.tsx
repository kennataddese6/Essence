import Image from "next/image";
import eqip1 from "@/assets/equip1.jpg";
import eqip2 from "@/assets/equip2.jpg";
import eqip3 from "@/assets/equip3.jpg";
import eqip4 from "@/assets/equip4.webp";
import { FaStar } from "react-icons/fa";
export default function Products() {
  return (
    <>
      <h2 className="text-center mt-5 mb-4">Check our latest Products</h2>
      <div className="serviceUnderline mx-auto mb-5"></div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 grid-flow-row">
        <div className="hover:-translate-y-1 transition-all border border-gray-400 rounded-2xl hover:shadow-2xl max-w-72 justify-self-center">
          <Image
            src={eqip1}
            alt="product image"
            width={250}
            className="object-contain h-44"
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
        <div className="hover:-translate-y-1 transition-all border border-gray-400 rounded-2xl hover:shadow-2xl max-w-72 justify-self-center">
          <Image
            src={eqip2}
            alt="product image"
            width={250}
            height={150}
            className="object-contain h-44"
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
        <div className="hover:-translate-y-1 transition-all border border-gray-400 rounded-2xl hover:shadow-2xl max-w-72 justify-self-center">
          <Image
            src={eqip3}
            alt="product image"
            width={250}
            height={150}
            className="object-contain h-44"
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
        <div className="hover:-translate-y-1 transition-all border border-gray-400 rounded-2xl hover:shadow-2xl max-w-72 justify-self-center">
          <Image
            src={eqip4}
            alt="product image"
            width={250}
            height={150}
            className="object-contain h-44"
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
    </>
  );
}
