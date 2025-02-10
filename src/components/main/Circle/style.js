// components/main/CircleMenu/style.js
import {styled} from 'styled-components';

export const CircleMenuBox = styled.div`
    padding: 40px 80px;  // 피그마 여백
    background: #191919;

    .circle-item {
        text-align: center;
        cursor: pointer;
        padding: 10px;
        
        .img-wrap {
            width: 100px;  // 피그마 크기
            height: 100px;
            margin: 0 auto;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        span {
            display: block;
            color: #fff;
            font-size: 14px;  // 피그마 폰트 사이즈
            margin-top: 12px;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        &:hover {
            .img-wrap {
                border-color: #3498db;
                transform: scale(1.05);
            }
            
            span {
                color: #3498db;
            }
        }
    }

    .swiper-button-prev,
    .swiper-button-next {
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        
        &:after {
            font-size: 18px;
            color: #fff;
        }
        
        &:hover {
            background: rgba(0, 0, 0, 0.8);
        }
    }

    .swiper-button-prev {
        left: 20px;
    }

    .swiper-button-next {
        right: 20px;
    }
`;