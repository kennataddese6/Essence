import Hero from "../ui/hero";
import Services from "../ui/services";
import Benefits from "../ui/benefits";
import Feedbacks from "../ui/feedbacks";
import Products from "../ui/products";
import Location from "../ui/location";
export default function Home() {
  return (
    <>
      <div className="col-lg-11 col-xl-11 col-xxl-9 mx-auto">
        <Hero />
        <Services />
        <Benefits />
        <Feedbacks />
        <Products />
        <Location />
      </div>
    </>
  );
}
