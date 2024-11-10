import Image from "next/image";
import eqip1 from "@/assets/equip1.jpg";
import eqip2 from "@/assets/equip2.jpg";
import eqip3 from "@/assets/equip3.jpg";
import eqip4 from "@/assets/equip4.webp";
import { FaStar } from "react-icons/fa";
import { getAllProducts } from "../(server)/actions/actions";
export default async function Products() {
  const products = await getAllProducts();

  return (
    <>
      <h2 className="text-center mt-5 mb-4">Check our latest Products</h2>
      <div className="serviceUnderline mx-auto mb-5"></div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 grid-flow-row">
        {products.map((product, index) => (
          <div
            key={index}
            className="hover:-translate-y-1 transition-all border border-gray-400 rounded-2xl hover:shadow-2xl max-w-72 justify-self-center"
          >
            <Image
              src={`http://localhost:3000/image/${product._id}`}
              alt="product image"
              width={250}
              height={150}
              className="object-cover h-52  w-72 rounded-t-2xl"
            />
            <h5 className="text-center bold-text m-1">{product.name}</h5>
            <p className="text-secondary text-center my-1 mx-2">
              <small>{product.description}</small>
            </p>
            <p className="text-center m-1 bold-text">{product.price}</p>
            <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <button className="order-button">Buy Now</button>
          </div>
        ))}
      </div>
      <button className="service-button mx-auto my-5">View More</button>
    </>
  );
}
