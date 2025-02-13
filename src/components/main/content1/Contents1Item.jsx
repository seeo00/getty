// src/components/main/content1/Contents1Item.jsx
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 264px;
  height: 396px;
  object-fit: fill;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Contents1Item = ({ imgurl, desc }) => {
  return (
    <div className="contents1-item">
      <Img src={imgurl} alt="" /* {desc || ''} */ />
      {/* <p>{desc}</p> 설명용 */}
    </div>
  );
};

export default Contents1Item;
