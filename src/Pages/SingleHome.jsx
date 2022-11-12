import React from 'react'
import bed from "../Assets/bed.png"
const SingleHome = (props) => {
    let {name,price,number_of_beds,image,popular,location,date,property_Type} = props.el
    console.log(name)
  return (
    <div>
        <img src={image} height="100px" />
        <h3>{price} /Month</h3>
        <h3>{name}</h3>
        <h5><img src={bed} />
            {number_of_beds} beds</h5>
        <h5>2 Bathroooms</h5>
    </div>
  )
}

export default SingleHome