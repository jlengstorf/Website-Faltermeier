import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

const Methods = ({ methods }) => {
  return (
    <div class="px-5 mini:px-25p mt-100p sm:mt-200p mx-auto" id="Leistungen">
      <h2 class="mb-15p sm:mb-30p text-primary font-bold text-25p sm:text-40p text-center">
        {methods.title}
      </h2>
      <h3 class="mb-35p sm:mb-80p text-secondary font-medium text-20p sm:text-25p text-center">
        {methods.subtitle}
      </h3>
      <div class="flex flex-col lg:flex-row flex-wrap lg:justify-between mb-50p md:mb-80p">
        {methods.method.map((item) => (
          <React.Fragment>
            <div class="border-secondary border-solid border-4 p-25p mb-35p md:mb-50p sm:w-8/12 md:w-6/12 lg:w-30pro mx-auto">
              {item.imageObject !== null && (
                <GatsbyImage
                  class=" mb-25p lg:mb-50p"
                  image={item.imageObject.image.childImageSharp.gatsbyImageData}
                  alt={item.imageObject.alt}
                />
              )}

              <h4 class="mb-15p font-semibold text-20p lg:text-25p">
                {item.title}
              </h4>
              <div class="text-15p mini:text-16p lg:text-18p">
                {item.description}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Methods;
