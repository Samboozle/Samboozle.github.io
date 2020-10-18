import React from 'react';
import Image from 'react-bootstrap/Image';

import '../styles/footer.css';

export default () => {
  return (
    <div className="footer">
      <Image src='/icons/beanie.png' height='60' width='60' />
      @samboozle => 2020
    </div>
  );
}
