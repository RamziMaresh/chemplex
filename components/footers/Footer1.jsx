import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer1() {
  return (
    <footer
      className="page-section-footer footer"
    >
      <div className="container">
        <div className="row pb-0 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link href={"/"} className="mb-30">
              <Image
                src="/assets/images/logo-dark.png"
                width={205}
                height={34}
                className="light-mode-logo"
                alt="Company Logo"
              />

              <Image
                src="/assets/images/logo-white.png"
                width={205}
                height={34}
                className="dark-mode-logo"
                alt="Company Logo"
              />
            </Link>

            <p className="text-white">
              <br />
              International Chemical Complex for Light Industries (Chemplex).
            </p>

          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Company</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Social Media</h3>
                <ul className="fw-menu clearlist">
                  <FooterSocials />
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Legal </h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.path}>{elm.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
            </div>
          </div>
        </div>
        <hr />
        {/* Footer Text */}
        <div className="row text-white">
          <div className="col-md-4 col-lg-3">
            <b>© {new Date().getFullYear()} | All rights reserved.</b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>Based in Jeddah, Kingdom of Saudi Arabia</b>
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top">
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
