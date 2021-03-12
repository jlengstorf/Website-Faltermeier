import React from "react";

import { Link } from "gatsby";

import MobileMenu from "../components/mobileMenu";

import { ReactComponent as Logo } from "../img/logo-dr-faltermeier.svg";
import { ReactComponent as Phone } from "../img/header-phone.svg";

const Header = ({ herosection, content }) => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.toggle("w-full");
    document.body.classList.toggle("fixed");
    document.body.classList.toggle("overflow-y-hidden");

    setVisible(!visible);
  };

  const makeInvisible = () => {
    document.body.classList.remove("h-full");
    document.body.classList.remove("fixed");
    document.body.classList.remove("overflow-y-hidden");

    setVisible(false);
  };

  return (
    <React.Fragment>
      <header
        class="relative flex justify-between items-end mx-5 mini:mx-25p sm:mx-auto py-6 lg:pb-0 sm:px-6 max-w-1700p"
        id="start"
      >
        <Link class="w-48 lg:w-1/4 xl:w-80" to="/#Start">
          <Logo
            class="w-full"
            alt={"Logo Praxis Dr. Faltermeier"}
            title={"Logo Praxis Dr. Faltermeier"}
          />
        </Link>
        <nobr>
          <a
            href={`tel:${herosection.telephoneLink}`}
            class="h-25p flex justify-center text-20p mb-1.5"
          >
            <Phone class="h-full sm:mr-2" />
            <span class="hidden sm:inline text-center">
              {herosection.telephone}
            </span>
          </a>
        </nobr>
        <nav class="hidden lg:block space-x-25p h-28p sm:h-1/2 text-20p mb-2 text-center">
          <Link class="text-primary hover:text-secondary" to="/">
            Start
          </Link>
          {content !== "" && (
            <Link
              class="lg:hidden xl:inline text-primary hover:text-secondary"
              to="/#aktuelles"
            >
              Aktuelles
            </Link>
          )}
          <Link class="text-primary hover:text-secondary" to="/#konzept">
            Konzept
          </Link>
          <button
            class="focus:outline-none text-primary hover:text-secondary"
            onClick={toggleVisible}
            onKeyDown={toggleVisible}
          >
            Leistungen
          </button>
          <Link class="text-primary hover:text-secondary" to="/praxis">
            Praxis
          </Link>
          <Link class="text-primary hover:text-secondary" to="/#kontakt">
            Kontakt
          </Link>
        </nav>
        <MobileMenu
          content={content}
          toggleVisible={toggleVisible}
          visible={visible}
        />
      </header>
      <div class="hidden lg:inline-block h-0 max-h-0">
        <nav
          onMouseLeave={makeInvisible}
          class={`${
            visible
              ? "max-h-screen fixed p-8 pt-4 bg-white right-0 z-50 transition-height duration-200 ease-out overflow-hidden"
              : "max-h-0 fixed p-8 pt-0 pb-0 bg-white right-0 z-50 transition-all duration-200 ease-out overflow-hidden"
          }`}
        >
          <div class="flex space-x-8">
            <div class="space-y-4">
              <div class="flex flex-col">
                <h2 class="text-primary text-20p mb-2">Ästhetik</h2>
                <Link
                  to="/leistungen/amalgamsanierung"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Amalgamsanierung
                </Link>
                <Link
                  to="/leistungen/kunststofffuellungen"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Kunststofffüllungen
                </Link>
                <Link
                  to="/leistungen/keramikinlays-onlays"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Keramikinlays/onlays
                </Link>
                <Link
                  to="/leistungen/keramischer-zahnersatz"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Keramischer Zahnersatz
                </Link>
                <Link
                  to="/leistungen/veneers"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Veneers
                </Link>
              </div>
              <div class="flex flex-col">
                <h2 class="text-primary text-20p mb-2">Parodontologie</h2>
                <Link
                  to="/leistungen/parodontitistherapie"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Parodontitistherapie
                </Link>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex flex-col">
                <h2 class="text-primary text-20p mb-2">Prophylaxe</h2>
                <Link
                  to="/leistungen/mundhygiene"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Mundhygiene
                </Link>
              </div>
              <div class="flex flex-col">
                <h2 class="text-primary text-20p mb-2">Oralchirurgie</h2>
                <Link
                  to="/leistungen/prf-methode"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  PRF Methode
                </Link>
                <Link
                  to="/leistungen/knochenaufbau"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Knochenaufbau
                </Link>
                <Link
                  to="/leistungen/weisheitszahnentfernung"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Weisheitszahnentfernung
                </Link>
                <Link
                  to="/leistungen/zahnentfernung"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Zahnentfernung
                </Link>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex flex-col">
                <h2 class="text-primary text-20p mb-2">Implantologie</h2>
                <Link
                  to="/leistungen/keramikimplantate"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Keramikimplantate
                </Link>
              </div>
              <div class="flex flex-col">
                <h2 class="text-primary text-20p mb-2">Zahnschienen</h2>
                <Link
                  to="/leistungen/schienentherapie"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  class="mb-2"
                >
                  Schienentherapie
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
