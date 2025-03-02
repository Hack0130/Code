import React from 'react'

const Banner = ({ text1, text2, bannerImg }) => {
  return (
    <div id="banner-component" className="relative">
      <img
        src={bannerImg}
        alt="galaxy picture background"
        className="h-48 md:h-60  lg:h-[370px] w-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 ">
        <div className=" h-full flex flex-col justify-center items-center text-center gap-3 w-5/6 md:w-3/4 lg:w-5/6 mx-auto">
          {text1 && (
            <p className="font-family-roboto text-white lg:text-2xl md:text-xl text-base font-bold capitalize tracking-wider leading-7">
              {text1}
            </p>
          )}
          {text2 && (
            <p className="font-family-roboto text-white lg:text-2xl md:text-xl text-base font-bold capitalize tracking-wider leading-7">
              {text2}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner
