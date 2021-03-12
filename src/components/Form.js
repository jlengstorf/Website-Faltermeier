import React from "react";

import Modal from "react-modal";

import { ReactComponent as Times } from "../img/times-solid.svg";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Form = ({ appointment }) => {
  const [state, setState] = React.useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "0px",
      padding: "0rem",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => openModal() /* navigate(form.getAttribute("action")) */)
      .catch((error) => alert(error));
  };

  return (
    <form
      name="Kontakt Formular"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <h4 class="mb-25p text-primary font-semibold text-18p sm:text-25p text-left">
        {appointment.title}
      </h4>
      <div class="flex flex-col sm:flex-row text-left">
        <input type="hidden" name="form-name" value="Kontakt Formular" />
        <span hidden>
          <label>
            <span hidden>Bitte nicht ausfüllen (Botfeld): </span>
            <input name="bot-field" onChange={handleChange} />
          </label>
        </span>
        <div class="flex flex-col sm:mr-50p w-full">
          <label class="border-b-2 border-primary w-full mb-35p sm:mb-50p">
            <span hidden>
              Ihr Name:
              <br />
            </span>
            <input
              required
              class="w-full"
              type="text"
              name="Name"
              placeholder="Name"
              onChange={handleChange}
            />
          </label>

          <label class="border-b-2 border-primary w-full mb-35p sm:mb-50p">
            <span hidden>
              Ihre E-Mail Adresse:
              <br />
            </span>
            <input
              required
              class="w-full"
              type="email"
              name="E-Mail"
              placeholder="E-Mail"
              onChange={handleChange}
            />
          </label>

          <label class="border-b-2 border-primary w-full mb-35p sm:mb-0">
            <span hidden>
              Ihre Telefonnummer:
              <br />
            </span>
            <input
              required
              class="w-full"
              type="tel"
              name="Telefon"
              placeholder="Telefon"
              onChange={handleChange}
            />
          </label>
        </div>
        <div class="flex flex-col w-full">
          <label class="border-b-2 border-primary w-full mb-35p sm:mb-50p">
            <span hidden>
              Ihre Nachricht:
              <br />
            </span>
            <input
              class="w-full"
              type="text"
              name="Nachricht"
              placeholder="Nachricht"
              onChange={handleChange}
            />
          </label>
          <div class="text-secondary border-t-2 border-white mb-35p sm:mb-50p">
            {appointment.appointmentWishText}
          </div>
          <div class="flex flex-col sm:flex-row">
            <label class="border-b-2 border-primary w-full mb-35p sm:mb-0">
              <span hidden>
                Ihr Wunschdatum:
                <br />
              </span>
              <input
                class="w-full"
                type="text"
                name="Datum"
                placeholder="Datum"
                onChange={handleChange}
              />
            </label>
            <div class="sm:w-50p" />
            <label class="border-b-2 border-primary w-full mb-0">
              <span hidden>
                Ihre Wunschuhrzeit:
                <br />
              </span>
              <input
                class="w-full"
                type="text"
                name="Uhrzeit"
                placeholder="Uhrzeit"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </div>
      <button
        class="mt-50p mb-50p sm:mb-100p p-20p text-20p md:text-25p text-white bg-cta sm:px-25p sm:py-3 mx-auto"
        type="submit"
      >
        {appointment.cta}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={300}
        style={customStyles}
        contentLabel="Example Modal"
        transparent={true}
      >
        <div class="flex p-2 relative w-90screen mini2:w-auto">
          <div class="text-center w-96 py-6 px-10">
            <div class="mb-15p sm:mb-30p text-primary font-bold text-25p sm:text-40p">
              Vielen Dank!
            </div>
            <div class="text-15p mini:text-16p sm:text-18p mb-15p sm:mb-30p">
              Wir werden uns baldmöglichst mit Ihnen in Verbindung setzen
            </div>
            <button
              class="text-20p md:text-25p text-white bg-cta px-25p py-3"
              onClick={closeModal}
            >
              Zurück
            </button>
          </div>
          <button class="w-3 h-3 absolute top-2 right-2" onClick={closeModal}>
            <Times />
          </button>
        </div>
      </Modal>
    </form>
  );
};

export default Form;
