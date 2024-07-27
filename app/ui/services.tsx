'use client';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaUserDoctor } from 'react-icons/fa6';
import { motion } from 'framer-motion';
export default function Services() {
  return (
    <>
      <motion.h2
        className="text-center my-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeIn' }}
      >
        Our services
      </motion.h2>
      <motion.div
        className="serviceUnderline mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: 'easeIn' }}
      ></motion.div>
      <motion.p
        className="text-secondary px-3 text-center my-4 col-lg-9 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeIn' }}
      >
        We provide the best choices for you. Adjust it to your health needs and
        make sure you under go treatment with our highly qualified doctors you
        can consult with us which type of service is suitable for your health
      </motion.p>
      <div className="serviceContainer my-2">
        <motion.div
          className="py-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: 'easeIn' }}
        >
          <CiSearch
            fontSize={66}
            color="dodgerblue"
            className="d-block mx-auto"
          />
          <h5 className="text-center m-2 ">Search Medicine</h5>
          <p className="px-3 text-center text-secondary">
            Choose your medicine from thousands of general and trusted brands
          </p>
        </motion.div>
        <motion.div
          className="py-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1, ease: 'easeIn' }}
        >
          <FaUserDoctor
            fontSize={66}
            color="dodgerblue"
            className="d-block mx-auto"
          />
          <h5 className="text-center m-2 ">Buy Products</h5>
          <p className="px-3 text-center text-secondary">
            Choose your medicine from thousands of general and trusted brands
          </p>
        </motion.div>
        <motion.div
          className="py-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3, ease: 'easeIn' }}
        >
          <AiOutlineMedicineBox
            fontSize={66}
            color="dodgerblue"
            className="d-block mx-auto"
          />
          <h5 className="text-center m-2 ">Assure quality</h5>
          <p className="px-3 text-center text-secondary">
            Choose your medicine from thousands of general and trusted brands
          </p>
        </motion.div>
      </div>
      <motion.button
        className="service-button mx-auto my-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: 'easeIn' }}
      >
        Learn More
      </motion.button>
    </>
  );
}
