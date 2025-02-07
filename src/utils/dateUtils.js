/**
 * 특정 날짜를 계산하여 YYYY-MM-DD 형식으로 반환하는 함수
 * @param {number} daysAgo - 오늘 기준으로 몇 일 전인지 (0: 오늘, 14: 14일 전)
 * @returns {string} YYYY-MM-DD 형식의 날짜 문자열
 */
export const getFormattedDate = (daysAgo = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
};
