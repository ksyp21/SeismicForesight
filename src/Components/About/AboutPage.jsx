import React, { useState } from "react";
import earthquakebackground from "../../assets/images/earthquake-background.webp";
import image from "../../assets/images/earthquake-background.jpeg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  React.useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoplay);
  }, []);

  const slides = [
    {
      url: "https://i.natgeofe.com/n/ea3d92b5-0e46-47c5-ab35-bab7d616ec4f/01nepalday2_3x2.jpg",
    },
    {
      url: "https://i.natgeofe.com/n/07b2d210-adaa-4391-b6fb-b998480094ae/03nepalday2_3x2.jpg",
    },
    {
      url: "https://i.natgeofe.com/n/37587d8c-58d8-45f6-9ef8-1a3dca57454c/09nepalday2_3x2.jpg",
    },
  ];

  const slides2 = [
    {
      url: "https://i.natgeofe.com/n/ffbad9b8-1eff-4f00-9ec9-c6ff6e48f7fb/05nepalday2_3x2.jpg",
    },
    {
      url: "https://i.natgeofe.com/n/94221d42-0830-4408-9314-ff47e96fb9d9/03nepalquakegallery_3x2.jpg",
    },
    {
      url: "https://i.natgeofe.com/n/5c824b2a-b6ce-402f-893d-017ef6d44692/06nepalquakegallery_3x2.jpg",
    },
  ];

  return (
    <>
      <div className="mainAboutPage" id="mainAboutPage">

        
        <div
          className="bg-fixed h-36 flex items-center justify-center bg-gray-300"
        >
          <div className="text-black text-center font-satisfy text-6xl">
            About Earthquake
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className=" content-center px-4 py-8">
            <div className="max-w-full h-96 w-full m-auto relative group">
              <div
                style={{ backgroundImage: `url(${slides2[currentIndex].url})` }}
                className="w-full h-full bg-center bg-cover duration-1000 ease-in-out flex items-center justify-center opacity-100 brightness-100 "
              >
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-8xl text-center font-satisfy brightness-120">
                  {slides2[currentIndex].text}
                </div>
              </div>

              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>

              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="text-5xl py-8">Earthquake</div>
            <div className="text-md font-normal text-justify">
              Earthquakes are natural geological phenomena caused by the sudden
              release of energy in the Earth's crust, primarily due to the
              movement of tectonic plates along faults. These faults, including
              normal, reverse, and strike-slip faults, experience stress buildup
              until it exceeds the strength of the rocks, resulting in seismic
              waves propagating through the ground. Measured using instruments
              like seismometers, earthquakes are classified by their magnitude
              on scales like the Richter or moment magnitude scale.
              <p>
                {" "}
                Our website aims to raise awareness and provide timely alerts to
                users about potential earthquakes. The impacts of earthquakes
                can be catastrophic, leading to damage to infrastructure, loss
                of life, and triggering secondary hazards like landslides and
                tsunamis. Mitigating earthquake risk involves resilient
                infrastructure, building codes enforcement, education, and early
                warning systems to minimize the impact on communities.
              </p>
            </div>
          </div>

          <div className="px-2">
            <div className="text-5xl py-8">Prevention</div>
            <div className="text-md font-normal text-justify">
              While predicting earthquakes remains a challenging task,
              prevention measures can significantly mitigate the impact of
              seismic events. Building codes play a crucial role in ensuring
              structural resilience against earthquakes. Incorporating
              seismic-resistant designs and materials into new constructions, as
              well as retrofitting existing buildings, enhances their ability to
              withstand ground motion. Public awareness campaigns and education
              initiatives also play a vital role in promoting earthquake
              preparedness and safety.
              
              <p>

               Teaching individuals and communities
              about the importance of securing furniture, conducting regular
              drills, and having emergency kits can save lives and reduce
              property damage. Furthermore, investments in early warning systems
              and infrastructure improvements, such as reinforced bridges and
              lifeline utilities, bolster societal resilience to seismic
              hazards. By prioritizing prevention strategies and fostering a
              culture of preparedness, we can mitigate the devastating effects
              of earthquakes and build safer, more resilient communities for
              generations to come.
              </p>
            </div>
          </div>

          <div className="px-4">
            <div className="text-md font-normal text-justify">
              <div className="max-w-full h-96 w-full m-auto relative group">
                <div
                  style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                  }}
                  className="w-full h-full bg-center bg-cover duration-1000 ease-in-out flex items-center justify-center opacity-100 brightness-100 "
                >
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-8xl text-center font-satisfy brightness-120">
                    {slides[currentIndex].text}
                  </div>
                </div>

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="flex text-center justify-center my-4 mx-16">
          <iframe
            height="600"
            src="https://www.youtube.com/embed/A_j6_7bmY20?si=uJ-jtMGhN5nIBzVR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-screen pb-24"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
