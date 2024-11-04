"use client";
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="col-lg-11 col-xl-11 col-xxl-9">
      <div className="footerItem">
        <h5 className="white-text p-3 ps-4">
          <div className="logo">
            <div className="text-white">
              <span className="footermark bold-text">E</span>Essence
            </div>
          </div>
        </h5>
        <p className="white-text ps-3 flex">
          <MdLocationOn color="white" fontSize={24} />
          <span className="ms-1 ">Bole, A.A Ethiopia</span>
        </p>
        <p className="white-text ps-3 flex">
          <MdPhone color="white" fontSize={24} />
          <span className="ms-1 ">+251 991 374186</span>
        </p>
        <p className="white-text ps-3 flex">
          <MdOutlineEmail color="white" fontSize={24} />
          <span className="ms-2 ">essence@gmail.com</span>
        </p>
      </div>
      <div className="footerItem">
        <h5 className="white-text p-3">Company</h5>
        <p className="white-text ps-3 ">About</p>
        <p className="white-text ps-3 ">Testimonials</p>
        <p className="white-text ps-3 ">Find a Product</p>
        <p className="white-text ps-3 ">Meds</p>
      </div>
      <div className="footerItem">
        <h5 className="white-text p-3">Region</h5>
        <p className="white-text ps-3 ">Addis Ababa</p>
        <p className="white-text ps-3 ">Adama</p>
        <p className="white-text ps-3 ">Hawassa</p>
        <p className="white-text ps-3 ">Gonder</p>
      </div>
      <div className="footerItem">
        <h5 className="white-text p-3 ps-4">Follow us</h5>
        <p className="white-text ps-3 flex">
          <CiFacebook color="white" fontSize={32} className="m-1" />
          <FaXTwitter color="white" fontSize={32} className="m-1" />
          <CiInstagram color="white" fontSize={32} />
        </p>
      </div>
    </footer>
  );
}
