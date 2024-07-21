import { CiSearch } from 'react-icons/ci';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaUserDoctor } from 'react-icons/fa6';
export default function Services() {
  return (
    <>
      <h2 className="text-center my-4">Our services</h2>
      <div className="serviceUnderline mx-auto"></div>
      <p className="text-secondary px-3 text-center my-4 col-lg-9 mx-auto">
        We provide the best choices for you. Adjust it to your health needs and
        make sure you under go treatment with our highly qualified doctors you
        can consult with us which type of service is suitable for your health
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
    </>
  );
}
