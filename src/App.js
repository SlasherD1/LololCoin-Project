import React from "react";
import { useState } from "react";
import "./App.css";
import "./assets/fonts/Lazydog.otf";
import bgAlter1 from "./assets/images/Gambar-2.png";
import Background1 from "./assets/images/Background-1.png";
import AnimatsiS1 from "./assets/images/Lolol-A.gif";
import AnimatsiS2 from "./assets/images/Lolol-B.gif";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat min-h-screen w-full text-white flex items-center justify-center px-6 md:px-16 lg:px-32 py-20 text-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={Background1}
          alt="Background"
          className="
    absolute inset-0 w-full h-full 
    object-cover object-center 
    sm:object-top md:object-center 
    sm:h-[80%] md:h-full 
    -z-10
  "
        />

        {/* Hero Content */}
        <div className="max-w-6xl w-full flex flex-col items-center justify-center gap-6 mt-40 sm:mt-60 md:mt-72 lg:mt-80 xl:mt-[-200px]">
          <img
            src={AnimatsiS1}
            alt="Animated Gif"
            className="w-full h-auto max-w-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl scale-100 md:scale-110 lg:scale-125 xl:scale-150"
          />

          {/* Optional Text */}
          {/* <h2 className="text-base md:text-xl text-sm bg-yellow-500 rounded-xl font-bold text-black px-4 py-2">
            CA : BBCL8cnqNwqQGoc3xJeM88oJmFAC2srnE2YUMHLMAHMm
          </h2> */}
        </div>
      </section>

      <br></br>

      <section className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20">
        <div className="flex items-center xl:gap-40 gap-10 justify-center mb-10 text-center lg:text-left">
          {/* Gambar */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={AnimatsiS2}
              alt="Logo"
              className="w-full max-w-[700px] min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-auto drop-shadow-2xl rounded-sm object-contain"
            />
          </div>
        </div>
        <br></br>
        <div className="flex justify-center font-bold text-8xl font-boldoa">
          LOL.. WHAT'S THIS?
        </div>
        <div className="flex justify-center mt-[20px]">
          <p className="text-center text-xl max-w-4xl leading-relaxed">
            LOL.. What's this? It's your ultimate destination for uncontrollable
            laughter and internet nostalgia! Dive into a world of memes where
            humor knows no limits, and classic troll faces rule the screen.
            Whether you’re here to giggle or burst into full-on LOLs, we’ve got
            the content that will take you back to the golden days of online
            hilarity. So don’t hold back — laugh your heart out and
            let the LOLs roll!
          </p>
        </div>
      </section>

      <section className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 xl:gap-40 text-center lg:text-left">
          {/* Konten Teks */}
          <div className="flex flex-col gap-4 max-w-xl w-full">
            <h1 className="font-semibold text-[28px] md:text-8xl leading-tight font-boldoa">
              JOIN THE
              <br></br>
              LOLOLOL
            </h1>
            <p className="text-base md:text-lg font-semibold">
              Ready to join the LOLols? Become a part of our meme-loving
              community and never miss a moment of the chaos. With fresh
              content, familiar faces, and the kind of humor that defined a
              generation, you're just one click away from meme heaven. Click
              “Join Now” and step into the world where trolls aren’t scary —
              they’re legendary.
            </p>
            <div className="flex justify-left">
              <div className="bg-gray-200 px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition w-fit font-bold text-black text-xl rounded-2xl">
                JOIN NOW
              </div>
            </div>
          </div>

          {/* Gambar */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={bgAlter1}
              alt="Logo"
              className="w-full max-w-[500px] min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-auto object-contain drop-shadow-2xl rounded-sm"
            />
          </div>
        </div>
      </section>

      <br></br>
      <Footer />
    </>
  );
};

export default App;
