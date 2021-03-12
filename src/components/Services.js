import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import { Link } from "gatsby";

const Services = ({ services }) => {
  return (
    <div
      class="px-5 mini:px-25p mt-100p sm:mt-200p mx-auto text-center"
      id="Leistungen"
    >
      <h2 class="mb-15p sm:mb-30p text-primary font-bold text-25p sm:text-40p">
        {services.title}
      </h2>
      <h3 class="mb-35p sm:mb-80p text-secondary font-medium text-20p sm:text-25p">
        {services.subtitle}
      </h3>
      <div class="flex flex-col lg:flex-row lg:justify-between lg:space-x-50p space-y-35p sm:space-y-50p lg:space-y-0 mb-50p sm:mb-80p sm:w-8/12 md:w-6/12 lg:w-full mx-auto">
        {services.service.map((item) => (
          <div class="w-full lg:w-1/3">
            <GatsbyImage
              class="border-b-8 border-primary border-solid mb-25p sm:mb-50p"
              image={item.imageObject.image.childImageSharp.gatsbyImageData}
              alt={item.imageObject.alt}
            />
            <h4 class="mb-25p font-semibold text-20p sm:text-25p">
              {item.title}
            </h4>
            <div class="mb-25p w-10/12 mx-auto text-15p mini:text-16p sm:text-18p">
              {item.description}
            </div>
            <Link
              class="text-15p mini:text-16p sm:text-18p text-secondary font-semibold"
              to={item.serviceLink.linkUrl}
            >
              {item.serviceLink.linkText}
            </Link>
          </div>
        ))}
      </div>
      <Link
        class="text-cta font-semibold text-20p sm:text-25p"
        to={services.servicesLink.linkUrl}
      >
        {services.servicesLink.linkText}
      </Link>
    </div>
  );
};

export default Services;
