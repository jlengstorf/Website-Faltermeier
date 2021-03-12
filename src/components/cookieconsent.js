import React from "react"
import { Link } from "gatsby"

const CookieConsent = () => {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    if (!getCookieValue()) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    document.cookie = "cookie_consent=yes; max-age=31536000; path=/"
    window.dataLayer.push({ event: "page_change" })
    setVisible(false)
  }

  /* const decline = () => {
    document.cookie = "cookie_consent=no; max-age=31536000; path=/"
    setVisible(false)
  } */

  const getCookieValue = () => {
    let nameEQ = "cookie_consent="
    let ca = document.cookie.split(";")
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  if (!visible) {
    return null
  }

  return (
    <div class="bg-gray-100 shadow-2xl z-30 fixed bottom-0 w-full flex md:flex-col justify-between items-center px-2 md:px-5 py-5 md:bottom-5 md:right-5 md:max-w-xs md:rounded-md">
      <div class="text-base text-gray-500 sm:text-lg md:text-xl">
        Wir verwenden Cookies zur Bereitstellung der Website.{" "}
        <Link to="/datenschutz/" class="underline">
          Datenschutz
        </Link>
      </div>
      <div class="space-x-5 flex md:justify-between md:mt-5 md:w-full">
        {/* <button
          class="pl-3 text-base text-gray-500 sm:text-lg md:text-xl"
          onClick={decline}
        >
          Ablehnen
        </button> */}
        <button
          class="rounded-md md:w-full ml-3 md:ml-0 p-3 bg-primary text-base text-white sm:text-lg md:text-xl"
          onClick={accept}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
