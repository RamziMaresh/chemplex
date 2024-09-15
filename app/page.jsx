import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Home1 from "@/components/homes/home-1";
import Hero4 from "@/components/homes/home-1/heros/Hero4";
import Header1 from "@/components/headers/Header1";
import { mainDemoOnepage } from "@/data/menu";
import Footer1 from "@/components/footers/Footer1";

import Hero6 from "@/components/homes/home-1/heros/Hero6";
import Hero7 from "@/components/homes/home-1/heros/Hero7";

export const metadata = {
  title:
    "Chemplex Home || ",
  description:
    "",
};

export default function Home() {
  
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Navigation Panel           <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">*/}
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">

            <Header1 links={mainDemoOnepage} />
          </nav>
          {/* End Navigation Panel */}
          <main id="main">
            {/* Home Section */}
            <Hero4 />
            <Home1 />

          </main>
          {/* Footer */}
          <footer>
            <Footer1/>
          </footer>
          {/* End Footer */}
        </div>
      </div>
    </>
  );
}
