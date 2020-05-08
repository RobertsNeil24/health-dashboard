import React, { useState, useEffect } from 'react';

const SystemLogo = ({name}) => {


  const [src, setSrc] = useState('default');

  useEffect(() => {
    try {
      setSrc(require(`../../assets/${name.toLowerCase()}.svg`));
    }
    catch (err) {
      setSrc(require(`../../assets/default.svg`));
    }
  },[src, name]);

  return <img src={src} alt="System Logo" className="logo" height="60px" />;
}


export default SystemLogo;