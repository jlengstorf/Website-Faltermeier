import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import { ReactComponent as Phone } from "../img/phone.svg";
import { ReactComponent as Mail } from "../img/mail.svg";
import { ReactComponent as Pin } from "../img/pin.svg";

const Herosection = ({ herosection }) => {
  let str = herosection.title;
  let index = str.indexOf(" ");
  let firstChunk = str.substr(0, index);
  let secondChunk = str.substr(index + 1);

  let strAddress = herosection.address;
  let indexAddress = strAddress.indexOf("93");
  let firstChunkAddress = strAddress.substr(0, indexAddress);
  let secondChunkAddress = strAddress.substr(indexAddress);

  return (
    <div class="h-auto">
      <div class="relative">
        <GatsbyImage
          loading="eager"
          image={herosection.imageObject.image.childImageSharp.gatsbyImageData}
          alt={herosection.imageObject.alt}
        />
        <div class="mini:w-10/12 sm:w-8/12 md:w-10/12 lg:4/12 mx-auto -mt-20 midi:mt-53-r-minus md:mt-90-r-minus lg:mt-0 md:mx-0 absolute mini:transform mini:-translate-x-1/2 lg:-translate-x-0 lg:transform-none lg:-bottom-0 lg:mb-10 mini:left-1/2 lg:left-0 lg:ml-10 p-5 mini:p-25p md:p-50p bg-opacity-80 bg-white max-w-xl">
          <h1 class="text-primary text-25p md:text-40p font-bold">
            {firstChunk} <br /> {secondChunk}
          </h1>
          <h2 class="mb-50p text-secondary text-20p md:text-25p font-medium md:w-11/12">
            {herosection.subtitle}
          </h2>
          <h3 class="mb-25p text-18p md:text-25p font-semibold">
            {herosection.contactText}
          </h3>
          <a href={`tel:${herosection.telephoneLink}`}>
            <div class="flex items-center mb-2">
              <Phone class="w-18p sm:w-20p md:w-25p mr-3" />
              <div class="w-full">
                <div class="text-18p md:text-25p">{herosection.telephone}</div>
              </div>
            </div>
          </a>
          <a
            href={`mailto:${herosection.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="flex items-center mb-2">
              <Mail class="w-18p sm:w-20p md:w-25p mr-3" />
              <div class="w-full">
                <div class="text-18p md:text-25p">{herosection.email}</div>
              </div>
            </div>
          </a>
          <a
            href="https://goo.gl/maps/PsdvJ4mKVZuu4YVi6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="flex items-start mb-25p md:mb-50p">
              <Pin class="w-18p sm:w-20p md:w-25p mr-3 md:mt-1 mt-0.5" />
              <div class="w-full">
                <div class="text-18p md:text-25p">
                  {firstChunkAddress} <br /> {secondChunkAddress}
                </div>
              </div>
            </div>
          </a>
          <div class="w-full flex justify-center">
            <a
              href="/#termin-vereinbaren"
              class="text-20p md:text-25p text-white bg-cta px-25p py-3 mx-auto"
            >
              {herosection.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
