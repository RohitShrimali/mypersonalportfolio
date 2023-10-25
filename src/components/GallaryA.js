import React from 'react'

const GallaryA = (props) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative  object-cover object-center opacity-70 hover:opacity-100">
          <img alt="gallery" className="w-full h-fit object-cover object-center block" src={props.image} />
          </div>
        </div>
  )
}

export default GallaryA;

