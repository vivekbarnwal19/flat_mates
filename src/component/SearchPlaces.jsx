import React from 'react'
import LocationIcon from '../assets/images.jpeg'
import RoommateIcon from '../assets/hand-drawn-coliving-illustration_52683-112446.avif'

function SearchPlaces() {
  return (
    <div className="">

      <div className='searchsection'>
        <img src={LocationIcon} width={"30"} height={"30"} alt="" />
        <input
          type="text"
          // onChange={handleChange}
          name="search"
          placeholder="Search Places..."

        />
      </div>

      <p>Top Cities: <span>Banglore,</span> <span>Hydrabad,</span> <span>Pune,</span> </p>

      <img src={RoommateIcon}  alt="" />
    </div>
  )
}

export default SearchPlaces