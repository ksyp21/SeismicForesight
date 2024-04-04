import  { useState } from "react";
import { easeInCubic, FlipProvider, useFlip } from "react-easy-flip";
import "../../style.css";

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
      <div className="main w-full flex justify-center pt-3 border shadow-xl" data-flip-root-id={flipRootId}>
        <div className="flex w-1/2 justify-center items-center">
          {tabs?.map((item, index) => {
            return (
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
            );
          })}
        </div>
      </div>
    </FlipProvider>
  );
}
