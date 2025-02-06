import React from 'react';
import { TapContainer, FooterContainer, Tab, FooterText } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <TapContainer>
        <Tab href='#'>Tab</Tab>
        <Tab href='#'>Tab</Tab>
        <Tab href='#'>Tab</Tab>
        <Tab href='#'>Tab</Tab>
        <Tab href='#'>Tab</Tab>
        <Tab href='#'>Tab</Tab>
      </TapContainer>
      <FooterText>
        콘텐츠웨이브 주식회사 | 대표이사 이태현 | 고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및
        공휴일 휴무)
        <br />
        사업자등록번호 220-88-38020 | 호스팅서비스제공자: 마이크로소프트 유한회사, 구글클라우드코리아 유한회사,
        아마존웹서비스코리아 유한회사
        <br />
        통신판매업 신고번호: 제 2021-서울영등포-0585호 | 통신판매업 정보 공개 :{' '}
        <a
          href='http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020'
          target='_blank'
          rel='noopener noreferrer'
        >
          http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020
        </a>
        <br />
        서울특별시 영등포구 여의나루로 60 포스트타워 19층전자우편주소 :{' '}
        <a href='mailto:helpdesk@wavve.com'>helpdesk@wavve.com</a>
        <br />
        Copyright© 콘텐츠웨이브(주) All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
