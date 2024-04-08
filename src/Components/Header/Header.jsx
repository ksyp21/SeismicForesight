import { useState } from "react";
import { easeInCubic, FlipProvider, useFlip } from "react-easy-flip";
import "../../style.css";
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from "react-router-dom";

const tabs = [
  {
    id: "home",
    text: "HOME",
    link: "/"
  },
  {
    id: "about-us",
    text: "About ",
    link: "/aboutpage"
  },

  {
    id: "alert",
    text: "Alert",
    link: "/alert"
  },
  {
    id: "login",
    text: "Log In",
    link: "/login"
  }
];

export default function Header() {
  const [selectedTab, setSelectedTab] = useState("home");

  const selectedTabHandler = (id) => {
    setSelectedTab(id);
  };

  const animationOption = {
    duration: 500,
    easing: easeInCubic,
  };
  const flipRootId = "flipRoot";

  useFlip(flipRootId, animationOption);

  return (
    <FlipProvider>
      <div className="main w-full flex lg:gap-96 md:gap-28 sm:gap-20 pt-3 border shadow-xl" data-flip-root-id={flipRootId}>
        <div className="w-40 h-20 flex justify-start">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex w-1/2 justify-center items-center">
          {tabs.map((item) => (
            <NavLink
              onClick={() => selectedTabHandler(item.id)}
              className="flex-col w-full text-center cursor-pointer hover:text-red-800"
              key={item.id} // Use unique key prop
              to={item.link}
            >
              {item.text}
              {selectedTab === item.id ? (
                <div className="active-tab" data-flip-id="highlight" />
              ) : (
                <div className="non-active-tab" />
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </FlipProvider>
  );
}
