import React from 'react';

// style
import './FooterOverlay.css';

const FooterOverlay: React.FC = (): JSX.Element => (
  <div className="app__footerOverlay">
    <div className="app__footerOverlay-black" />
    <div className="app__footerOverlay-img app__bg" />
  </div>
);

export default FooterOverlay;