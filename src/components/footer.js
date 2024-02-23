import React from "react";
import { Link } from "gatsby";
import IconX from "../assets/icon_x.svg";
import IconLinkedIn from "../assets/icon_linkedin.svg";
import IconMail from "../assets/icon_mail.svg";
import Logo from "../assets/logo_bonaparte_white.svg";
import Subscribe from "./subscribe";

const Footer = () => {
  return (
    <footer className="bg-green text-olive-light p-5">
        <div id="footer_content_mobile" className="md:hidden flex flex-col">
          <div className="mx-auto mt-4">
            <Link to="/"><Logo className="h-5" alt="Bonaparte" /></Link>
          </div>
          <div className="my-8 border-t border-olive"></div> {/* Horizontal line */}
          <div id="socialmedia_icons_mobile" className="flex justify-center space-x-6 mb-8">
            <Link to="https://x.com/bonapartedigital" ><IconX className="h-5" alt="X" /></Link>
            <Link to="https://www.linkedin.com/bonapartedigital" ><IconLinkedIn className="h-5" alt="LinkedIn" /></Link>
            <Link to="mailto:hello@bonapartedigital.com" ><IconMail className="h-5" alt="email" /></Link>
          </div>
          <div id="copyright" className="text-center">
            <p>© {new Date().getFullYear()} BONAPARTE | All Rights Reserved | <Link to="/privacy-policy">Privacy Policy</Link></p>
          </div>
        </div>
        <div id="footer_content_desktop" className="hidden md:flex md:flex-col mx-auto px-4">
          <div id="upper-footer" className="flex container max-w-screen-xl px-10 md:mt-6">
            <div className="w-1/3">
              <Link to="/"><Logo className="h-5" alt="Bonaparte" /></Link>
              <p>We're not just a digital marketing agency; we're your strategic partners in world-class branding and digital domination.</p>
              </div>
            <div className="w-1/3 text-center">
              <p className="text-xl">Talk To Us</p>
              <a href='https://calendly.com/hellobonaparte/meet-greet' className="md:inline-block text-md font-bold bg-olive text-green px-6 py-2 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5">Book a RDV</a></div>
            <div className="w-1/3 pl-8">
              <p className="text-xl mb-2">Subscribe to our debriefs</p>
              <Subscribe></Subscribe>
            </div>
          </div>
          <div className="my-8 border-t border-olive"></div> {/* Horizontal line */}
          <div id="lower-footer" className="flex container max-w-screen-xl justify-between px-10">
            <div id="copyright" className="text-center">
              <p>© {new Date().getFullYear()} BONAPARTE | All Rights Reserved | <Link to="/privacy-policy" className="hover:text-olive">Privacy Policy</Link></p>
            </div>
            <div className="">
              <Link to="#strategies" className="px-4 hover:text-olive">Strategies</Link>
              <Link to="#testimonies" className="px-4 hover:text-olive">Testimonies</Link>
             {/*<Link to="/insights" className="px-4 hover:text-olive">Insights</Link> */}
            </div>
            <div id="socialmedia_icons" className="flex space-x-6">
             <Link to="https://x.com/bonapartedigital" ><IconX className="h-5" alt="X" /></Link>
             <Link to="https://www.linkedin.com/bonapartedigital" ><IconLinkedIn className="h-5" alt="LinkedIn" /></Link>
             <Link to="mailto:hello@bonapartedigital.com" ><IconMail className="h-5" alt="email" /></Link>
            </div>
          </div>
        </div>
    </footer> 
  );
};

export default Footer;
