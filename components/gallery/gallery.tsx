import React from 'react'

const Gallery = () => {
  return (
    <div className="px-4 my-16">
    <h3 className="text-4xl text-dark text-center font-semibold">
        <span className="text-reddish font-lobster">ARAUJO's</span> Gallery
    </h3>
    <div className="my-6">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
            <div>
              <img loading="lazy" className="object-cover object-center w-full h-80 lg:h-60 xs:h-80 max-w-full rounded-lg"
                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                alt="gallery-photo" />
            </div>
            <div>
              <img loading="lazy" className="object-cover object-center w-full h-80 lg:h-60 xs:h-80 max-w-full rounded-lg"
                src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                alt="gallery-photo" />
            </div>
            <div>
              <img loading="lazy" className="object-cover object-center w-full h-80 lg:h-60 xs:h-80 max-w-full rounded-lg"
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80"
                alt="gallery-photo" />
            </div>
            <div>
              <img loading="lazy" className="object-cover object-center w-full h-80 lg:h-60 xs:h-80 max-w-full rounded-lg"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                alt="gallery-photo" />
            </div>
            <div>
              <img loading="lazy" className="object-cover object-center w-full h-80 lg:h-60 xs:h-80 max-w-full rounded-lg"
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                alt="gallery-photo" />
            </div>
            <div>
              <img loading="lazy" className="object-cover object-center w-full h-80 lg:h-60 xs:h-80 max-w-full rounded-lg"
                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                alt="gallery-photo" />
            </div>
            <div>
              <img loading="lazy" className="object-cover object-center w-full h-80 lg:h-60 xs:h-80 max-w-full rounded-lg"
                src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="gallery-photo" />
            </div>
            <div>
              <img loading="lazy" className="object-cover object-center w-full h-80 lg:h-60 xs:h-80 max-w-full rounded-lg"
                src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="gallery-photo" />
            </div>
            <div>
              <img loading="lazy" className="object-cover object-center w-full h-80 lg:h-60 xs:h-80 max-w-full rounded-lg"
                src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
                alt="gallery-photo" />
            </div>
          </div>
    </div>
</div>
  )
}

export default Gallery