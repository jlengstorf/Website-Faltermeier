import React from "react";
import { Link } from "gatsby";

import { ReactComponent as Back } from "../img/zurueck.svg";

const MobileMenu = ({ content, toggleVisible, visible }) => {
  const [visibleSection, setVisibleSection] = React.useState("start");

  return (
    <div class="relative lg:hidden">
      <input
        class="hidden"
        type="checkbox"
        id="menu-btn"
        onClick={toggleVisible}
        onKeyDown={toggleVisible}
      />
      <label
        htmlFor="menu-btn"
        class="cursor-pointer float-right pl-0 h-25p mb-1.5 select-none flex flex-col justify-around"
      >
        <span
          class={`${
            visible
              ? "relative transform rotate-45 top-2 block bg-primary h-0.5 w-7 transition-transform duration-200"
              : "relative top-0 block bg-primary h-0.5 w-7 transition-all duration-200"
          }`}
        />
        <span
          class={`${
            visible
              ? "relative bg-white"
              : "relative top-0 block bg-primary h-0.5 w-7 transition-all duration-200"
          }`}
        />
        <span
          class={`${
            visible
              ? "relative transform -rotate-45 -top-2 block bg-primary h-0.5 w-7 transition-transform duration-200"
              : "relative top-0 block bg-primary h-0.5 w-7 transition-all duration-200"
          }`}
        />
      </label>
      <nav
        class={`${
          visible
            ? "max-h-screen z-20 fixed lg:hidden bg-white mt-12 w-full h-screen p-4 right-0 transition-height duration-200 ease-out overflow-hidden"
            : "max-h-0 z-20 hidden fixed lg:hidden bg-white mt-12 w-full h-screen p-4 right-0 transition-height duration-200 ease-out overflow-hidden"
        }`}
      >
        <div class="w-26rem mx-auto">
          <div class={`${visibleSection === "start" ? "flex" : "hidden"}`}>
            <div class="flex flex-col ml-10">
              <div class="mb-25p px-5 pt-3 text-primary font-semibold text-25p sm:text-40p">
                Menü
              </div>
              <Link
                class="pb-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
                to="/"
              >
                Start
              </Link>
              {content !== "" && (
                <Link
                  class="lg:hidden xl:inline py-2 px-5 text-20p sm:text-25p font-medium"
                  onClick={toggleVisible}
                  onKeyDown={toggleVisible}
                  to="/#aktuelles"
                >
                  Aktuelles
                </Link>
              )}
              <Link
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
                to="/#konzept"
              >
                Konzept
              </Link>
              <button
                class="flex py-2 px-5 text-20p sm:text-25p font-medium items-center justify-between"
                onClick={() => setVisibleSection("leistungen")}
                onKeyDown={() => setVisibleSection("leistungen")}
              >
                Leistungen
                <Back class="ml-8 h-4 transform rotate-180" />
              </button>
              <Link
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
                to="/praxis"
              >
                Praxis
              </Link>
              <Link
                class="pt-2 pb-5 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
                to="/#kontakt"
              >
                Kontakt
              </Link>
            </div>
          </div>
          <div class={`${visibleSection === "leistungen" ? "flex" : "hidden"}`}>
            <Back
              onClick={() => setVisibleSection("start")}
              onKeyDown={() => setVisibleSection("start")}
              class="mt-3 sm:mt-4 h-7 sm:h-10"
            />
            <div class="flex flex-col">
              <div class="mb-25p px-5 pt-3 text-primary font-semibold text-25p sm:text-40p">
                Leistungen
              </div>
              <button
                class="flex py-2 px-5 text-20p sm:text-25p font-medium items-center justify-between"
                onClick={() => setVisibleSection("ästhetik")}
                onKeyDown={() => setVisibleSection("ästhetik")}
              >
                Ästhetik
                <Back class="ml-8 h-4 transform rotate-180" />
              </button>
              <button
                class="flex py-2 px-5 text-20p sm:text-25p font-medium items-center justify-between"
                onClick={() => setVisibleSection("parodontologie")}
                onKeyDown={() => setVisibleSection("parodontologie")}
              >
                Parodontologie
                <Back class="ml-8 h-4 transform rotate-180" />
              </button>
              <button
                class="flex py-2 px-5 text-20p sm:text-25p font-medium items-center justify-between"
                onClick={() => setVisibleSection("prophylaxe")}
                onKeyDown={() => setVisibleSection("prophylaxe")}
              >
                Prophylaxe
                <Back class="ml-8 h-4 transform rotate-180" />
              </button>
              <button
                class="flex py-2 px-5 text-20p sm:text-25p font-medium items-center justify-between"
                onClick={() => setVisibleSection("oralchirurgie")}
                onKeyDown={() => setVisibleSection("oralchirurgie")}
              >
                Oralchirurgie
                <Back class="ml-8 h-4 transform rotate-180" />
              </button>
              <button
                class="flex py-2 px-5 text-20p sm:text-25p font-medium items-center justify-between"
                onClick={() => setVisibleSection("implantologie")}
                onKeyDown={() => setVisibleSection("implantologie")}
              >
                Implantologie
                <Back class="ml-8 h-4 transform rotate-180" />
              </button>
              <button
                class="flex py-2 px-5 text-20p sm:text-25p font-medium items-center justify-between"
                onClick={() => setVisibleSection("zahnschienen")}
                onKeyDown={() => setVisibleSection("zahnschienen")}
              >
                Zahnschienen
                <Back class="ml-8 h-4 transform rotate-180" />
              </button>
            </div>
          </div>
          <div class={`${visibleSection === "ästhetik" ? "flex" : "hidden"}`}>
            <Back
              onClick={() => setVisibleSection("leistungen")}
              onKeyDown={() => setVisibleSection("leistungen")}
              class="mt-3 sm:mt-4 h-7 sm:h-10"
            />
            <div class="flex flex-col">
              <div class="mb-25p px-5 pt-3 text-primary font-semibold text-25p sm:text-40p">
                Ästhetik
              </div>
              <Link
                to="/leistungen/amalgamsanierung"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Amalgamsanierung
              </Link>
              <Link
                to="/leistungen/kunststofffuellungen"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Kunststofffüllungen
              </Link>
              <Link
                to="/leistungen/keramikinlays-onlays"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Keramikinlays/onlays
              </Link>
              <Link
                to="/leistungen/keramischer-zahnersatz"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Keramischer<br class="mini:hidden"/> Zahnersatz
              </Link>
              <Link
                to="/leistungen/veneers"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Veneers
              </Link>
            </div>
          </div>
          <div
            class={`${visibleSection === "parodontologie" ? "flex" : "hidden"}`}
          >
            <Back
              onClick={() => setVisibleSection("leistungen")}
              onKeyDown={() => setVisibleSection("leistungen")}
              class="mt-3 sm:mt-4 h-7 sm:h-10"
            />
            <div class="flex flex-col">
              <div class="mb-25p px-5 pt-3 text-primary font-semibold text-25p sm:text-40p">
                Parodontologie
              </div>
              <Link
                to="/leistungen/parodontitistherapie"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Parodontitistherapie
              </Link>
            </div>
          </div>
          <div class={`${visibleSection === "prophylaxe" ? "flex" : "hidden"}`}>
            <Back
              onClick={() => setVisibleSection("leistungen")}
              onKeyDown={() => setVisibleSection("leistungen")}
              class="mt-3 sm:mt-4 h-7 sm:h-10"
            />
            <div class="flex flex-col">
              <div class="mb-25p px-5 pt-3 text-primary font-semibold text-25p sm:text-40p">
                Prophylaxe
              </div>
              <Link
                to="/leistungen/mundhygiene"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Mundhygiene
              </Link>
            </div>
          </div>
          <div
            class={`${visibleSection === "oralchirurgie" ? "flex" : "hidden"}`}
          >
            <Back
              onClick={() => setVisibleSection("leistungen")}
              onKeyDown={() => setVisibleSection("leistungen")}
              class="mt-3 sm:mt-4 h-7 sm:h-10"
            />
            <div class="flex flex-col">
              <div class="mb-25p px-5 pt-3 text-primary font-semibold text-25p sm:text-40p">
                Oralchirurgie
              </div>
              <Link
                to="/leistungen/prf-methode"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                PRF Methode
              </Link>
              <Link
                to="/leistungen/knochenaufbau"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Knochenaufbau
              </Link>
              <Link
                to="/leistungen/weisheitszahnentfernung"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Weisheitszahn
                <span class="mini:hidden">
                  -<br />
                </span>
                entfernung
              </Link>
              <Link
                to="/leistungen/zahnentfernung"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Zahnentfernung
              </Link>
            </div>
          </div>
          <div
            class={`${visibleSection === "implantologie" ? "flex" : "hidden"}`}
          >
            <Back
              onClick={() => setVisibleSection("leistungen")}
              onKeyDown={() => setVisibleSection("leistungen")}
              class="mt-3 sm:mt-4 h-7 sm:h-10"
            />
            <div class="flex flex-col">
              <div class="mb-25p px-5 pt-3 text-primary font-semibold text-25p sm:text-40p">
                Implantologie
              </div>
              <Link
                to="/leistungen/keramikimplantate"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Keramikimplantate
              </Link>
            </div>
          </div>
          <div
            class={`${visibleSection === "zahnschienen" ? "flex" : "hidden"}`}
          >
            <Back
              onClick={() => setVisibleSection("leistungen")}
              onKeyDown={() => setVisibleSection("leistungen")}
              class="mt-3 sm:mt-4 h-7 sm:h-10"
            />
            <div class="flex flex-col">
              <div class="mb-25p px-5 pt-3 text-primary font-semibold text-25p sm:text-40p">
                Zahnschienen
              </div>
              <Link
                to="/leistungen/schienentherapie"
                class="py-2 px-5 text-20p sm:text-25p font-medium"
                onClick={toggleVisible}
                onKeyDown={toggleVisible}
              >
                Schienentherapie
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
