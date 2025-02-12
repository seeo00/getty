export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const koreanRegex = /[\u3131-\u314E\u314F-\u3163\uAC00-\uD7A3]/g;

export const hasKorean = (text) => {
  if (!text) return false;
  return koreanRegex.test(text);
};
