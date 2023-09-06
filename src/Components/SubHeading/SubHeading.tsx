import React from 'react';

// img
import { images } from '../../constants'

interface IProps {
  title: string;
}

const SubHeading: React.FC<IProps> = ({ title }): JSX.Element => (
  <div style={{ marginBottom: "1rem" }}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='sppoon__img'/>
  </div>
);

export default SubHeading;