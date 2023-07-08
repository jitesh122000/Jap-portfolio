import React from "react";
// import installNode from "../assets/portfolio/installNode.jpg";
import minigame from "../assets/portfolio/miniGame.jpg";
import weatherapp from "../assets/portfolio/weatherApp.jpg";
import tictactoe from "../assets/portfolio/tictactoe.jpg";
import amazon from "../assets/portfolio/amazoneClone.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
import ScrollAnimation from "./ScrollAnimation";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: minigame,
      Clink:"https://github.com/jitesh122000/mathsGame/tree/main",
      Dlink:"https://majestic-semolina-a862eb.netlify.app/"

      
    },
    {
      id: 2,
      src: weatherapp,
      Clink:"https://github.com/jitesh122000/Weather-app",
      
    },
    {
      id: 3,
      src: tictactoe,
      Dlink:"https://codepen.io/Jitesh-aryan/pen/poQrwRE" ,
      Clink:"https://codepen.io/Jitesh-aryan/pen/poQrwRE" ,
      
    },
    {
      id: 4,
      Clink:"https://github.com/jitesh122000/amazon-clone",
      src: amazon,
      
    },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        
          {portfolios.map(({ id, src, Dlink, Clink, }) => (
            <ScrollAnimation direction="down">
            <div key={id} className="shadow-md shadow-gray-600 duration-200 hover:scale-105 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md object-fill"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-gray-500 hover:text-gray-300"><a href={Dlink}> Demo</a>
                 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-gray-500 hover:text-gray-300">
                  <a href={Clink}>Code</a>
                </button>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
