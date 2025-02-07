import { useState } from 'react';
import { GridContentBlock, GridContentHeader, GridContainer, GridItem, NumberLabel } from './style';

const GridSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const gridSections = [
    { title: '액션 인기 콘텐츠', hasNumbering: false },
    { title: '드라마 TOP', hasNumbering: true },
    { title: '애니메이션 추천', hasNumbering: false },
    { title: '예능 인기 콘텐츠', hasNumbering: false },
  ];

  const handleMoreClick = (index) => {
    setActiveSection(index);
    setShowAll(!showAll);
  };

  const handleContentClick = (sectionIndex, contentIndex) => {
    console.log(`섹션 ${sectionIndex + 1}, 콘텐츠 ${contentIndex + 1} 클릭됨`);
  };

  return (
    <>
      {gridSections.map((section, idx) => (
        <GridContentBlock key={idx}>
          <GridContentHeader>
            <span>{section.title}</span>
            <span onClick={() => handleMoreClick(idx)}>{activeSection === idx && showAll ? '접기' : '더보기'}</span>
          </GridContentHeader>
          <GridContainer>
            {Array(showAll && activeSection === idx ? 20 : 5)
              .fill(null)
              .map((_, i) => (
                <GridItem key={i} onClick={() => handleContentClick(idx, i)}>
                  {section.hasNumbering && <NumberLabel>{i + 1}</NumberLabel>}
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: '#222',
                      borderRadius: '16px',
                    }}
                  />
                </GridItem>
              ))}
          </GridContainer>
        </GridContentBlock>
      ))}
    </>
  );
};

export default GridSection;
