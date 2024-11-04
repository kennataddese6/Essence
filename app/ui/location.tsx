"use client";
import { motion } from "framer-motion";
export default function Location() {
  return (
    <div className="flex flex-wrap-reverse my-5">
      <div className="w-full lg:w-1/2 rounded-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8311494583613!2d38.787831774066376!3d8.987680189636338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853c14f0e2d5%3A0x32ce0404870c8088!2sEthiopian%20Skylight%20Hotel!5e0!3m2!1sen!2set!4v1730382389754!5m2!1sen!2set"
          height="450"
          allowFullScreen
          loading="lazy"
          className="w-full rounded-3xl"
        ></iframe>
      </div>
      <div className="w-full lg:w-1/2 rounded-3xl">
        <motion.h2
          className="text-center text-lg-start lg:ml-24 lg:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          Where we reside
        </motion.h2>
        <div className="w-28 h-0.5 bg-black lg:ml-24 lg:mt-4 bg-gradient-to-r from-green-400 to-blue-500"></div>
      </div>
    </div>
  );
}
