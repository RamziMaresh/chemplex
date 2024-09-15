"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/about-image.jpg"
              className="image-fullwidth relative"
              alt="Image about "
            />
          </div>
          {/* End Image */}

        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <p className="text-gray">
        International Chemical Complex for Light Industries (Chemplex) manufacturing facility was established in 1996. 
        It is engaged in producing various high quality blended products for the furniture painting and refinishing paint 
        industry for example thinners, varnishes and recently added adhesive glue products link contact glue and wood glue.
        </p>
        <h4 className="h5">Our Vision & Mission</h4>
        <p className="text-gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. 

        </p>
      </div>
    </div>
  );
}
