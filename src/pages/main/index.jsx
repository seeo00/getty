import React from 'react';

export const Main = () => {
  // 포스터 데이터를 배열로 관리 (필요에 따라 확장 가능)
  const posters = [
    { title: '포스터 1', background: '#00ffff' },
    { title: '포스터 2', background: '#ff0000' },
    { title: '포스터 3', background: '#ffa600' },
    { title: '포스터 4', background: '#ff009d' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>포스터 4개</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px', // 포스터 간 간격
        }}
      >
        {posters.map((poster, index) => (
          <div
            key={index}
            style={{
              background: poster.background,
              width: '23%', // 4개가 한 줄에 들어가도록 비율 조정
              height: '300px', // 포스터 높이 (필요에 따라 조정)
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            {poster.title}
          </div>
        ))}
      </div>
    </div>
  );
};
