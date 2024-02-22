import React, { useState } from "react";
import Layout from "../components/layout";
import TestimoniesDesktop from "../components/testimonies_desktop";
import TestimoniesMobile from "../components/testimonies_mobile";
import Google from "../assets/google_partner.svg";
import Meta from "../assets/meta_business_partner.svg";
import Semrush from "../assets/semrush_agency_partner.svg";
import Amazon from "../assets/amazon_ads.svg";
import Strategies from "../components/strategies";

const HomePage = () => {
  const [effectButtonOne, setEffectButtonOne] = useState(false);
  const [effectButtonTwo, setEffectButtonTwo] = useState(false);
  return (
    <Layout title="Bonaparte">
      <div id="hero" className="h-screen container flex md:flex-row flex-col justify-center items-center text-center px-4 bg-cover bg-center" style={{backgroundImage: "url('path_to_your_background_image.jpg')"}}>
        <div id="title" className="md:w-1/2">
          <h1 className="text-9xl md:text-[150px] text-shadow-solid shadow-orange">grow your brand</h1>
        </div>
        <div id="content" className="md:w-1/2">
          <div id="text" className="max-w-[420px] mx-auto">
            <p className="text-3xl md:text-left mb-20">Take your
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange relative inline-block">
            <span class="relative text-white">business</span>
            </span>to new heights with our no-nonsense approach to digital marketing.</p>
          </div>
          <div id="button" className="justify-center">
          <a href='https://calendly.com/hellobonaparte/meet-greet'><button className={`${effectButtonOne && "animate-push"} md:inline-block w-[200px] text-lg font-bold bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5`}
            onClick={() => {setEffectButtonOne(true);}} onAnimationEnd={() => setEffectButtonOne(false)}>Book a RDV</button></a>
            <a href='https://calendly.com/hellobonaparte/meet-greet'><button className={`${effectButtonTwo && "animate-push"} hidden md:inline-block w-[200px] ml-2 text-lg font-bold bg-olive text-green px-8 p-[14px] rounded-full border-2 border-green border-solid transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5`}
            onClick={() => {setEffectButtonTwo(true);}} onAnimationEnd={() => setEffectButtonTwo(false)}>Get in Touch</button></a>
          </div>
        </div>
      </div>  
      <div id="strategies" className="mb-20">
        <Strategies />
      </div>
      <div id="cta" className="bg-olive p-10 my-10">
        <div className="container flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2"><h2 className="md:text-5xl md:font-extrabold text-center">Ready to <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange relative inline-block">
            <span className="relative text-white">Conquer?</span></span></h2></div>
          <div className="md:w-1/2 text-xl text-center"><p className="hidden md:block max-w-[380px] mx-auto mb-8">Take your business to new heights with our no-nonsense approach to marketing.</p>
          <a href='https://calendly.com/hellobonaparte/meet-greet'><button className={`${effectButtonOne && "animate-push"} md:inline-block w-[200px] text-lg font-bold bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5`}
            onClick={() => {setEffectButtonOne(true);}} onAnimationEnd={() => setEffectButtonOne(false)}>Book a RDV</button></a>
            <a href='https://calendly.com/hellobonaparte/meet-greet'><button className={`${effectButtonTwo && "animate-push"} hidden md:inline-block w-[200px] ml-2 text-lg font-bold bg-olive text-green px-8 p-[14px] rounded-full border-2 border-green border-solid transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5`}
            onClick={() => {setEffectButtonTwo(true);}} onAnimationEnd={() => setEffectButtonTwo(false)}>Get in Touch</button></a>
          </div>  
        </div>
      </div>
      <div className="bg-gradient-to-b from-olive to-white p-10">
      <div id="backed-by" className="container flex flex-col md:flex-row items-center">
        <div className="md:w-2/5">
          <h2 className="text-xl font-semibold md:w-auto w-[300px] text-center md:text-left md:m-auto mb-12">Partnered with industry-leading tactical partners</h2>
        </div>
        <div id="vendor_logo" className="flex flex-wrap md:w-4/5">
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto mb-10"><img src={Google} alt="Google Partner" className="h-10" /></div>
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto mb-10"><img src={Meta} alt="Meta Business Partner" className="h-10" /></div>
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto"><img src={Semrush} alt="SemRush Agency Partner" className="h-10" /></div>
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto"><img src={Amazon} alt="Amazon Ads" className="h-9" /></div>
        </div>
      </div>
      </div>
       <div id="testimonies">
        <div id="testimonies_mobile" className="block sm:hidden bg-white">
          <div className="container block sm:hidden"><TestimoniesMobile /></div>
        </div>
        <div id="testimonies_desktop" className="hidden sm:block bg-white">
          <div className="container hidden sm:block bg-white"><TestimoniesDesktop /></div>
        </div>
      </div>
      <div id="cta" className="bg-gradient-to-b from-white to-olive p-10 mb-6">
        <div className="container flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2"><h2 className="md:text-5xl md:font-extrabold text-center">Ready to <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange relative inline-block">
            <span className="relative text-white">Conquer?</span></span></h2></div>
          <div className="md:w-1/2 text-xl text-center"><p className="hidden md:block max-w-[380px] mx-auto mb-8">Take your business to new heights with our cutting-edge marketing strategies.</p>
          <a href='https://calendly.com/hellobonaparte/meet-greet'><button className={`${effectButtonOne && "animate-push"} md:inline-block w-[200px] text-lg font-bold bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5`}
            onClick={() => {setEffectButtonOne(true);}} onAnimationEnd={() => setEffectButtonOne(false)}>Book a RDV</button></a>
          <a href='https://calendly.com/hellobonaparte/meet-greet'><button className={`${effectButtonTwo && "animate-push"} hidden md:inline-block w-[200px] ml-2 text-lg font-bold bg-olive text-green px-8 p-[14px] rounded-full border-2 border-green border-solid transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5`}
            onClick={() => {setEffectButtonTwo(true);}} onAnimationEnd={() => setEffectButtonTwo(false)}>Get in Touch</button></a>
          </div>  
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

export const Head = () => (
  <>
    <title>Bonaparte | Your Digital Strategist</title>
    <link
      as="font"
      crossorigin="anonymous"
      href="/fonts/Mulish.woff2"
      rel="preload"
      type="font/woff2"
    />
  </>
);