import React from 'react'
import './ProductHero.css'

const LeftImageSection = ({handbags,mainImage,setMainImage}) => {
  return (
    <div className="p-5">
    <div className="imageDiv">
      <img
        className=" img-fluid content-img"
        src={mainImage}
        alt="HeroImage"
      />
    </div>
    <div className="d-flex">
      {handbags &&
        handbags.map((data, i) => {
          return (
            <img
              onClick={() => setMainImage(data.name)}
              className="smallImages"
              src={data.name}
              alt={i}
            />
          );
        })}
    </div>
  </div>
  )
}

export default LeftImageSection