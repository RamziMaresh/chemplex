import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Contact from "@/components/homes/home-1/Contact";

import Portfolio from "@/components/homes/home-1/Portfolio";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import dynamic from "next/dynamic";
import Image from "next/image";
import Faqs from "../home-9/Faq";
import Form9 from "@/components/blog/commentForm/Form9";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export default function Home1({ onePage = false, dark = false }) {
  return (
    <>

    {/** ≈
      <section
        className="page-section scrollSpysection"
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-20 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Our Vision & Mission</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="About Us!" />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">


              {onePage ? (
                <a
                  href="#team"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Download Company Profile{" "}
                    <i
                      className="mi-download size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Download Company Profile{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              ) : (
                <Link
                  href=""
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                  Download Company Profile{" "}
                  <i
                      className="mi-arrow-down size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Download Company Profile{" "}
                    <i
                      className="mi-arrow-down size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              )}
            </div>
          </div>
          <About />
        </div>
      </section>
*/}

{/* 
      <section
        className="page-section  scrollSpysection"
        id="team"
      >
        <Team />
      </section>

     
      <section
        className="page-section  scrollSpysection"
        id="products"
      >
        <Portfolio />
      </section>
     
      <hr className="mt-0 mb-0"/>
      <section
        className="page-section"
      >
        <Benefits />{" "}
      </section>
*/}



      {/* 
      <section
        className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}
      >
        {" "}
        {dark ? <Testimonials2 /> : <Testimonials />}
      </section>



      <hr className="mt-0 mb-0" />
      <section
        className="page-section"
      >
                <div className="container position-relative">

        <Faqs/>{" "}
        </div>
      </section>
*/}


{/** 
      <hr className="mt-0 mb-0"/>
      <section
        className="page-section  scrollSpysection"
        id="careers"
      >
        <div className="container position-relative">
          <div className="row mb-0 mb-xs-30">
                      <h3 className="section-title mb-30">Careers</h3>
                        <h5>We Give Our People The Opportunity And Support To Achieve More Than They Ever Thought Possible.</h5><br />
                        <Form9 />
          </div>
        </div>
      </section>
*/}

      <hr className="mt-0 mb-0"/>
      <section
        className="page-section  scrollSpysection"
        id="contact"
      >
        <Contact />{" "}
      </section>


    </>
  );
}
