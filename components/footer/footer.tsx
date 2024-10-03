import React from 'react'

const Footer = () => {
  return (
    <div className="bg-reddish">
    <footer
      className="py-3 text-white px-28 xl:px-14 lg:px-7 sm:px-4 flex items-center justify-between lg:!grid lg:!grid-cols-4"
    >
      <p className="lg:col-span-3 md:col-span-4">
        &copy; <span id="year"></span> Araujo’s Mexican Grill. All rights
        reserved.
      </p>
      <div className="flex lg:col-span-1 md:col-span-4 lg:grid lg:grid-cols-3 md:flex md:mt-4">
        <a className="mx-4 md:!mr-8 md:ml-0 md:flex md:justify-start" href="https://www.facebook.com/ElPaisaTaqueriaAraujo/">
          <img loading="lazy" src="./assets/facebook.svg" alt="" />
        </a>
        <a className="mx-4 md:!mr-8 md:ml-0 md:flex md:justify-start" href="mailto:amg.elpaisa@gmail.com">
          <img loading="lazy" src="./assets/mail.svg" alt="" />
        </a>
        
        <a className="mx-4 md:!mr-8 md:ml-0 md:flex md:justify-start" href="https://www.yelp.com/biz/araujos-mexican-grill-san-jose-2">
          <img loading="lazy" src="./assets/yelp.svg" className="text-white" alt="" />
        </a>
      </div>
    </footer>
  </div>
  )
}

export default Footer