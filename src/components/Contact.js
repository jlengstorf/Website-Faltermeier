import React from "react";

import { ReactComponent as Phone } from "../img/phone.svg";
import { ReactComponent as Mail } from "../img/mail.svg";
import { ReactComponent as Pin } from "../img/pin.svg";

import Form from "../components/Form";

const Contact = ({ contact, herosection }) => {
  let strAddress = herosection.address;
  let indexAddress = strAddress.indexOf("93");
  let firstChunkAddress = strAddress.substr(0, indexAddress);
  let secondChunkAddress = strAddress.substr(indexAddress);

  return (
    <div
      id="kontakt"
      class="px-5 mini:px-25p mt-100p sm:mt-200p max-w-1000p mx-auto text-center"
    >
      <h2 class="mb-15p sm:mb-30p text-primary font-bold text-25p sm:text-40p">
        {contact.title}
      </h2>
      <h3 class="mb-40p sm:mb-80p text-secondary font-medium text-20p sm:text-25p">
        {contact.subtitle}
      </h3>
      <div class="flex flex-col justify-around w-full space-y-35p sm:space-y-50p mb-50p sm:mb-80p">
        {contact.attributes.map((item) => (
          <div key={item.text} class="w-full flex">
            <img
              class="h-50p mr-25p"
              loading="lazy"
              src={item.imageObject.image.publicURL}
              alt={item.imageObject.alt}
            />
            <div class="text-15p mini:text-16p sm:text-18p text-left">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div
        id="termin-vereinbaren"
        class="flex flex-col md:flex-row md:justify-around sm:mb-80p mb-50p"
      >
        <div class="mb-50p md:mb-0">
          <h4 class="mb-25p text-primary font-semibold text-18p sm:text-25p text-left">
            {contact.openingHours.title}
          </h4>
          <table class="text-left text-15p mini:text-16p sm:text-18p">
            {contact.openingHours.days.map((item) => (
              <tr class="p-0 leading-8">
                <td class="p-0 pr-1.5 mini:pr-2">{item.day}</td>
                {item.times[0].time !== "geschlossen" ? (
                  <React.Fragment>
                    <td class="p-0 pr-1.5 mini:pr-2">{item.times[0].time}</td>
                    {item.times[1] && (
                      <React.Fragment>
                        <td class="hidden mini:block sm:hidden p-0 pr-1.5 mini:pr-2">
                          &
                        </td>
                        <td class="hidden sm:block p-0 pr-1.5 mini:pr-2">
                          und
                        </td>
                        <td class="p-0">{item.times[1].time}</td>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <td class="p-0 pr-1.5 mini:pr-2"></td>
                    <td class="hidden mini:block p-0 pr-1.5 mini:pr-2"></td>
                    {item.times[1] && item.times[1] !== "geschlossen" && (
                      <td class="p-0">{item.times[1].time}</td>
                    )}
                  </React.Fragment>
                )}
              </tr>
            ))}
          </table>
          <a
            class="block sm:hidden text-left mt-25p text-15p mini:text-16p sm:text-18p text-secondary"
            href={`tel:+${herosection.telephoneLink}`}
          >
            Termine auch nach Vereinbarung
          </a>
          <div class="hidden sm:block text-left mt-25p text-15p mini:text-16p sm:text-18p text-secondary">
            Termine auch nach Vereinbarung
          </div>
        </div>
        <div class="text-left">
          <h4 class="mb-25p text-primary font-semibold text-18p sm:text-25p text-left">
            {herosection.contactText}
          </h4>
          <a
            href={`tel:${herosection.telephoneLink}`}
            class="flex items-center w-full mb-2"
          >
            <Phone class="w-18p sm:w-20p md:w-25p mr-3" />
            <div>
              <div class="w-full text-15p mini:text-16p sm:text-18p">
                {herosection.telephone}
              </div>
            </div>
          </a>
          <a
            href={`mailto:${herosection.email}`}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center w-full mb-2"
          >
            <Mail class="w-18p sm:w-20p md:w-25p mr-3" />
            <div>
              <div class="w-full text-15p mini:text-16p sm:text-18p">
                {herosection.email}
              </div>
            </div>
          </a>
          <a
            href="https://goo.gl/maps/PsdvJ4mKVZuu4YVi6"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-start w-full"
          >
            <Pin class="w-18p sm:w-20p md:w-25p mr-3 mt-0.5" />
            <div>
              <div class="w-full text-15p mini:text-16p sm:text-18p">
                {firstChunkAddress} <br /> {secondChunkAddress}
              </div>
            </div>
          </a>
        </div>
      </div>
      <Form appointment={contact.appointment} />
      <div class="w-full aspect-w-12 aspect-h-9 mb-50 sm:mb-100">
        <iframe
          src={contact.googleMapsLink}
          loading="lazy"
          title="Google Maps Einbettung"
          width="1200"
          height="900"
          allowfullscreen=""
          aria-hidden="false"
        />
      </div>
    </div>
  );
};

export default Contact;
