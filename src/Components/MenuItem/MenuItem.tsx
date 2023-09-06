import React from 'react'

// style
import './MenuItem.css'

interface IProps {
  title: string;
  price: string;
  tags: string;
}

const MenuItem: React.FC<IProps> = ({ title, price, tags }): JSX.Element => {
  return (
    <div className='app__menuItem'>

      <div className="app__menuItem-head">

        <div className='app__menuItem-name'>
          <p className='p__cormorant' style={{ color: "#dcca87" }}>
            {title}
          </p>
        </div>

        <div className='app__menuItem-dash'/>

        <div className='app__menuItem-price'>
          <p className='p__cormorant'>
            {price}
          </p>
        </div> 

      </div> 

      <div className='app__menuItem-sub'>
        <p className='p__opensans' style={{ color: "#aaa" }}>
          {tags}
        </p>
      </div>

    </div>
  )
}

export default MenuItem