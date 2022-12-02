import React from 'react'

// style
import './Laurels.css'

import { SubHeading } from '../../Components'
import { images, data } from '../../constants'

import AwardCard from './AwardCard'

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id='awards'>
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition"/>
        <h1 className="headtext__cormorant">Out Laurels</h1>

        <div className="app__laurels_awards">
          {
            data.awards.map((award) => <AwardCard award={award} key={award.title}/>)
          }
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  )
}

export default Laurels