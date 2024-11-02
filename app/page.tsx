import Hero from "./ui/hero";
import Services from "./ui/services";
import Benefits from "./ui/benefits";
import Feedbacks from "./ui/feedbacks";
import Products from "./ui/products";

export default function Home() {
  return (
    <>
      <div className="col-lg-11 col-xl-11 col-xxl-9 mx-auto">
        <Hero />
        <Services />
        <Benefits />
        <Feedbacks />
        <Products />
        <div className="bg-primary flex flex-column">
          <div className="w-50 bg-warning">Where we Reside</div>
          <div>
            here
            {/*<iframe
              className="w-50"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8311494583613!2d38.787831774066376!3d8.987680189636338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853c14f0e2d5%3A0x32ce0404870c8088!2sEthiopian%20Skylight%20Hotel!5e0!3m2!1sen!2set!4v1730382389754!5m2!1sen!2set"
              height="450"
              allowFullScreen
              loading="lazy"
            ></iframe> */}
          </div>
        </div>
      </div>
    </>
  );
}
