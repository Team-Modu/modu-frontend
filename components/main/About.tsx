import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const MAX_COUNT = 3;
  const [index, setIndex] = useState(1);
  const [isImageLoading, setisImageLoading] = useState(false);
  const [carouselSrc, setCarouselSrc] = useState<string>(
    "/images/carousel/1.jpg"
  );

  const increaseIndex = () => {
    if (isImageLoading) {
      return;
    }
    setIndex((i) => {
      if (i === MAX_COUNT) {
        return 1;
      }
      return i + 1;
    });
  };

  const decreaseIndex = () => {
    if (isImageLoading) {
      return;
    }
    setIndex((i) => {
      if (i === 1) {
        return MAX_COUNT;
      }
      return i - 1;
    });
  };

  useEffect(() => {
    setCarouselSrc(`/images/carousel/${index}.jpg`);
  }, [index]);

  return (
    <div className="max-screen basic-padding flex flex-col">
      <div className="transport-container my-auto">
        <div className="col-span-1 w-full h-full relative">
          <Image
            src={carouselSrc}
            layout="fill"
            objectFit="fill"
            // width={"100%"}

            // height={"100%"}
            alt={`#${index} Image`}
            onLoadStart={() => {
              setisImageLoading(true);
            }}
            onLoadingComplete={() => {
              setisImageLoading(false);
            }}
          />
        </div>
        <div className="col-span-1 border-y border-r flex bg-slate-50">
          <div className="w-1/12 flex justify-center items-center">
            <div
              className={`w-7 h-7 text-blue-300 rounded-full text-center shadow-md text-lg ${
                !isImageLoading ? "hover:cursor-pointer" : "hover:cursor-wait"
              }`}
              onClick={decreaseIndex}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </div>
          <div className="w-5/6 items-center justify-around flex flex-col">
            <div>
              <h1 className="font-bold text-4xl">휠체어도 지체없이 빠르게.</h1>
              <span className="font-extrabold text-xl">
                with{" "}
                <span className="text-amber-500 text-3xl font-black">
                  modu bus
                </span>
              </span>
              <p className="text-lg mt-2 font-medium">
                {" "}
                이동이 불편한 사회적 약자를 위한 저상버스 이용의 편의 극대화
              </p>
            </div>
            <div>
              {index}/{MAX_COUNT}
            </div>
          </div>
          <div className="w-1/12 flex justify-center items-center">
            <div
              className={`w-7 h-7 text-blue-300 rounded-full text-center shadow-md text-lg ${
                !isImageLoading ? "hover:cursor-pointer" : "hover:cursor-wait"
              }`}
              onClick={increaseIndex}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="transport-container">
          <div className="col-span-1">asdf</div>
          <div className="col-span-1 transport-subway"></div>
        </div> */}
    </div>
  );
};

export default About;
