import React from "react";

import { Link } from "gatsby";

import { ReactComponent as Phone } from "../img/footer-phone.svg";
import { ReactComponent as Mail } from "../img/footer-mail.svg";
import { ReactComponent as Pin } from "../img/footer-pin.svg";

const Footer = ({ herosection, content, contact, footer }) => {
  let strAddress = herosection.address;
  let indexAddress = strAddress.indexOf("93");
  let firstChunkAddress = strAddress.substr(0, indexAddress);
  let secondChunkAddress = strAddress.substr(indexAddress);

  return (
    <footer class="px-5 mini:px-25p py-50p sm:py-100p mt-50p sm:mt-100p bg-footerBg">
      <div class="text-center max-w-1700p mx-auto">
        <h4 class="sm:hidden font-semibold text-25p">
          {herosection.contactText}
        </h4>
        <div class=" sm:hidden flex justify-center space-x-5 my-50p">
          <a href={`tel:+${herosection.telephoneLink}`}>
            <Phone class="w-8" />
          </a>
          <a
            href={`mailto:${herosection.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail class="w-8" />
          </a>
          <a
            href="https://goo.gl/maps/PsdvJ4mKVZuu4YVi6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Pin class="w-8" />
          </a>
        </div>
        <div class=" sm:hidden flex justify-center space-x-5 my-50p">
          <Link class="font-semibold" to="/impressum">
            Impressum
          </Link>
          <Link class="font-semibold" to="/datenschutz">
            Datenschutz
          </Link>
        </div>
        <div class="hidden sm:flex justify-around lg:justify-between mb-100p">
          <nav class="flex flex-col text-left text-15p mini:text-16p sm:text-18p space-y-2">
            <Link to="/">Start</Link>
            {content !== "" && <Link to="/#aktuelles">Aktuelles</Link>}
            <Link to="/#konzept">Konzept</Link>
            <Link to="/leistungen">Leistungen</Link>
            <Link to="/praxis">Praxis</Link>
            <Link to="/#kontakt">Kontakt</Link>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </nav>
          <div class="hidden lg:block">
            <h4 class="mb-25p text-semibold text-18p sm:text-25p text-left">
              {contact.openingHours.title}
            </h4>
            <table class="text-left text-15p mini:text-16p sm:text-18p">
              {contact.openingHours.days.map((item) => (
                <tr class="p-0 leading-8">
                  <td class="p-0 pr-2">{item.day}</td>

                  {item.times[0].time !== "geschlossen" ? (
                    <React.Fragment>
                      <td class="p-0 pr-1 mini:pr-2">{item.times[0].time}</td>
                      {item.times[1] && (
                        <React.Fragment>
                          <td class="p-0 pr-1 mini:pr-2">und</td>
                          <td class="p-0">{item.times[1].time}</td>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <td class="p-0 pr-1 mini:pr-2"></td>
                      <td class="p-0 pr-1 mini:pr-2"></td>
                      {item.times[1] && (
                        <td class="p-0">{item.times[1].time}</td>
                      )}
                    </React.Fragment>
                  )}
                </tr>
              ))}
            </table>
          </div>
          <div class="text-left">
            <h4 class="mb-25p text-semibold text-18p sm:text-25p">
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
        <div>{`${new Date().getFullYear()} ${footer.copyright}`}</div>
        <a href="https://agenturignis.de">
          Webdesign & Betreuung: Agentur ignis
        </a>
      </div>
    </footer>
  );
};

export default Footer;
