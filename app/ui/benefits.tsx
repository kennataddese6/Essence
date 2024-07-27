'use client';
import Image from 'next/image';
import thirdImage from '@/assets/thirdImage.png';
import secondImage from '@/assets/secondImage.png';
import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <>
      <div className="heroContainer col-xl-11 col-xxl-9">
        <div className="col-lg-6 ">
          <Image src={secondImage} alt="Hero Image" className="hero-image" />
        </div>
        <div className=" col-lg-6 herotextcontainer">
          <motion.h2
            className="mx-5 text-center text-lg-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            Leading healthcare providers
          </motion.h2>
          <motion.div
            className="serviceUnderline mx-5 my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeIn' }}
          ></motion.div>
          <motion.p
            className="mx-3 mx-lg-5  text-secondary text-center text-lg-start py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeIn' }}
          >
            We are dedicated to enhancing healthcare by providing top-tier
            medical equipment from around the globe.Our commitment to excellence
            ensures that healthcare providers have access to the latest reliable
            tools.
          </motion.p>
          <motion.button
            className="service-button my-2 w-30 py-2 mx-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeIn' }}
          >
            Learn more
          </motion.button>
        </div>
      </div>

      <div className="heroContainer col-xl-11 col-xxl-9 flex-wrap-reverse">
        <div className=" col-lg-6 herotextcontainer">
          <motion.h2
            className="my-2 text-center text-lg-start py-2 px-3 px-lg-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            Your health is the most important
          </motion.h2>
          <motion.div
            className="serviceUnderline mx-5 my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeIn' }}
          ></motion.div>
          <motion.p
            className="mx-3 mx-lg-5  text-secondary text-center text-lg-start py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeIn' }}
          >
            We are dedicated to enhancing healthcare by providing top-tier
            medical equipment from around the globe.Our commitment to excellence
            ensures that healthcare providers have access to the latest reliable
            tools.
          </motion.p>
          <motion.button
            className="service-button my-2 w-30 py-2 mx-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: 'easeIn' }}
          >
            Learn more
          </motion.button>
        </div>
        <div className="col-lg-6 ">
          <Image src={thirdImage} alt="Hero Image" className="hero-image" />
        </div>
      </div>
    </>
  );
}
