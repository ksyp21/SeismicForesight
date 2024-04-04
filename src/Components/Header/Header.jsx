import  { useState } from "react";
import { easeInCubic, FlipProvider, useFlip } from "react-easy-flip";
import "../../style.css";
import logo from '../../assets/images/logo.png'

const tabs = [
  {
    id: "home",
    text: "HOME",
  },
  {
    id: "about-us",
    text: "About Us",
  },

  {
    id: "dataset",
    text: "Dataset",
  },
  {
    id: "contact",
    text: "CONTACT",
  },
];

export default function Header() {
  const [selectedTab, setSelectedTab] = useState("home");

  const selectedTabHandler = (id) => {
    setSelectedTab(id);
  };

  const aniationOption = {
    duration: 500,
    easing: easeInCubic,
  };
  const flipRootId = "flipRoot";

  useFlip(flipRootId, aniationOption);

  return (
    <FlipProvider>
      <div className="main w-full flex lg:gap-96  md:gap-28 sm:gap-20 pt-3 border shadow-xl" data-flip-root-id={flipRootId}>

        <div className="w-40 h-20 flex justify-start">
      <img src={logo} alt="" />
        </div>
        <div className="flex w-1/2 justify-center items-center">
          {tabs?.map((item, index) => {
            return (
              <>

              <div>
              </div>
              <div
                onClick={() => selectedTabHandler(item.id)}
                className="flex-col w-full text-center cursor-pointer hover:text-red-800"
                key={index}
              >
                {item.text}

                {selectedTab === item.id ? (
                  <div className="active-tab" data-flip-id="highlight" />
                ) : (
                  <div className="non-active-tab" />
                )}
              </div>
              </>
            );
          })}
        </div>
      </div>
    </FlipProvider>
  );
}
