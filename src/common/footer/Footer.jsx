import * as S from './style';
import { InnerContainer } from '../layout/InnerContainer';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '../../ui/icon/ArrowLeftIcon';
import ArrowRightIcon from '../../ui/icon/ArrowRightIcon';

const footerLinks = [
  { id: 1, text: '회사소개', link: '#' },
  { id: 2, text: '서비스소개', link: '#' },
  { id: 3, text: '이용약관', link: '#' },
  { id: 4, text: '개인정보처리방침', link: '#', isStrong: true },
  { id: 5, text: '고객센터', link: '#' },
];

const Footer = () => {
  return (
    <S.FooterContainer>
      <InnerContainer maxWidth="100%">
        <S.FooterNotice>
          <InnerContainer className="inner">
            <div className="notice">
              <strong>공지사항</strong>
              <p>[업데이트] 2월 업데이트 프로그램 리스트</p>
            </div>
            <div className="button">
              <button>
                <ArrowLeftIcon />
              </button>
              <button>
                <ArrowRightIcon />
              </button>
            </div>
          </InnerContainer>
        </S.FooterNotice>
        <S.FooterInner>
          <InnerContainer className="inner">
            <ul>
              {footerLinks.map(({ id, text, link, isStrong }) => (
                <li key={id}>
                  <Link to={link}>{isStrong ? <strong>{text}</strong> : text}</Link>
                </li>
              ))}
            </ul>
            <div className="footer-content">
              <p>
                주식회사 게티 | 대표이사 박채은 | 고객센터 1588-0000 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및
                공휴일 휴무)
              </p>
              <p>
                사업자등록번호 123-45-67890 | 호스팅서비스제공자: 클라우드 제공업체 A, 클라우드 제공업체 B, 클라우드
                제공업체 C
              </p>
              <p>
                통신판매업 신고번호: 제 202X-서울○○-0000호 | 통신판매업 정보 공개:
                <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=123-45-67890" target="_blank">
                  http://www.ftc.go.kr/bizCommPop.do?wrkr_no=123-45-67890
                </a>
              </p>
              <p>
                서울특별시 ○○구 ○○로 123 ○○빌딩 10층 전자우편주소:{' '}
                <a href="mailto:support@example.com">support@example.com</a>
              </p>
              <p>Copyright© ○○○○(주) All rights reserved.</p>
            </div>
          </InnerContainer>
        </S.FooterInner>
      </InnerContainer>
    </S.FooterContainer>
  );
};

export default Footer;
