// certificationData.js

export const certificationMapping = {
  US: {
    'TV-Y': '전체이용가',
    'TV-Y7': '전체이용가',
    'TV-G': '전체이용가',
    'TV-PG': '15세이용가',
    'TV-14': '15세이용가',
    'TV-MA': '19세이용가',
    G: '전체이용가',
    PG: '12세이용가',
    'PG-13': '15세이용가',
    R: '19세이용가',
    'NC-17': '19세이용가',
    NR: '전체이용가',
  },
  KR: {
    Exempt: '전체이용가',
    ALL: '전체이용가',
    7: '전체이용가',
    '7세이용가': '전체이용가',
    12: '12세이용가',
    '12세이용가': '12세이용가',
    15: '15세이용가',
    '15세이용가': '15세이용가',
    '18A': '19세이용가',
    19: '19세이용가',
    '19세이용가': '19세이용가',
  },
  // 나머지 국가 매핑...
  AR: {
    ATP: '전체이용가',   
    '+13': '15세이용가',   
    '+16': '19세이용가',     
    '+18': '19세이용가',  
    '18': '19세이용가',  
  },
  JP: {
    G: '전체이용가',
    'PG-12': '12세이용가',
    'R15+': '15세이용가',
    'R18+': '19세이용가',
  },
  FR: {
    NR: '전체이용가',
    TP: '전체이용가',
    10: '전체이용가',
    12: '12세이용가',
    16: '15세이용가',
    18: '19세이용가',
  },
  CN: {
    G: '전체이용가',
    PG: '전체이용가',
    12: '12세이용가',
    15: '15세이용가',
    18: '19세이용가',
    NR: '전체이용가',
  },
  CA: {
    Exempt: '전체이용가',
    C: '전체이용가',
    C8: '전체이용가',
    G: '전체이용가',
    PG: '15세이용가',
    '14+': '15세이용가',
    '18+': '19세이용가',
    '18A': '19세이용가',
  },
  IN: {
    U: '전체이용가',
    'U/A 7+': '전체이용가',
    'U/A 13+': '15세이용가',
    'U/A 16+': '19세이용가',
    A: '19세이용가',
  },
  NO: {
    A: '전체이용가',
    6: '전체이용가',
    9: '전체이용가',
    12: '12세이용가',
    15: '15세이용가',
    18: '19세이용가',
  },
  ES: {
    NR: '전체이용가',
    ERI: '전체이용가',
    TP: '전체이용가',
    7: '전체이용가',
    10: '전체이용가',
    12: '12세이용가',
    13: '15세이용가',
    16: '15세이용가',
    18: '19세이용가',
  },
  DE: {
    0: '전체이용가',
    6: '전체이용가',
    12: '12세이용가',
    16: '15세이용가',
    18: '19세이용가',
  },
  MX: {
    AA: '전체이용가',
    A: '전체이용가',
    B: '12세이용가',
    'B-15': '15세이용가',
    C: '19세이용가',
    D: '19세이용가',
  },
  GB: {
    U: '전체이용가',
    PG: '전체이용가',
    '12A': '12세이용가',
    12: '12세이용가',
    15: '15세이용가',
    18: '19세이용가',
    R18: '19세이용가',
  },
  AU: {
    G: '전체이용가', 
    PG: '전체이용가', 
    M: '15세이용가', 
    'MA15+': '19세이용가',
    'R18+': '19세이용가',
  },
};

export const countryMap = {
  US: '미국',
  KR: '한국',
  AR: '아르헨티나',
  JP: '일본',
  FR: '프랑스',
  CN: '중국',
  CA: '캐나다',
  IN: '인도',
  NO: '노르웨이',
  ES: '스페인',
  DE: '독일',
  MX: '멕시코',
  GB: '영국',
  AU: '호주',
};

export const getKoreanRating = (countryCode, certificationCode) => {
  // 공백 제거 후 대문자로 변환
  const normalizedCountry = countryCode ? countryCode.trim().toUpperCase() : '';
  let normalizedCode = certificationCode ? certificationCode.replace(/\s+/g, '').toUpperCase() : '';

  const mapping = certificationMapping[normalizedCountry];

  // 매핑된 값이 있으면 바로 반환
  if (mapping && mapping[normalizedCode]) {
    return mapping[normalizedCode];
  }
  // 숫자만 추출하여 매핑 확인 (예: "12세이용가" → "12")
  const digitsMatch = normalizedCode.match(/\d+/);
  if (digitsMatch && mapping && mapping[digitsMatch[0]]) {
    return mapping[digitsMatch[0]];
  }
  return '전체이용가';
};
