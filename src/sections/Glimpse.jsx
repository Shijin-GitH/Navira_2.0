import { Marquee } from "../components/ui/marquee";
import Heading from "../components/Heading";

export default function Glimpse() {
  return (
    <div id="glimpse" className="flex flex-col gap-10 items-center justify-center">
      <Heading mainTitle="GLIMPSES OF" highlightedTitle="NAVIRA" />
      <div className="flex flex-col ">
        <Marquee>
          <img
            src="/assets/images/img1.jpg"
            alt=""
            className="w-50 sm:w-80 md:w-100 rounded-xl"
          />
          <img
            src="/assets/images/img2.jpg"
            alt=""
            className="w-50 sm:w-80 md:w-100 rounded-xl"
          />
          <img
            src="/assets/images/img3.jpg"
            alt=""
            className="w-50 sm:w-80 md:w-100 rounded-xl"
          />
          <img
            src="/assets/images/img4.jpg"
            alt=""
            className="w-50 sm:w-80 md:w-100 rounded-xl"
          />
        </Marquee>
        <Marquee reverse={true}>
          <img
            src="/assets/images/img5.jpg"
            alt=""
            className="w-50 sm:w-80 md:w-100 rounded-xl"
          />
          <img
            src="/assets/images/img6.jpg"
            alt=""
            className="w-50 sm:w-80 md:w-100 rounded-xl"
          />
          <img
            src="/assets/images/img7.jpg"
            alt=""
            className="w-50 sm:w-80 md:w-100 rounded-xl"
          />
          <img
            src="/assets/images/img8.jpg"
            alt=""
            className="w-50 sm:w-80 md:w-100 rounded-xl"
          />
        </Marquee>
      </div>
    </div>
  );
}
