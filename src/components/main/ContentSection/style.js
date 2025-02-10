// components/main/ContentSection/style.js
import {styled} from 'styled-components';

export const ContentSectionBox = styled.section`
    padding: 40px 80px;  // 피그마 여백
    background: #191919;

    .section-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;

        h2 {
            font-size: 24px;
            color: #fff;
            font-weight: 500;
        }

        .more-btn {
            color: #999;
            font-size: 14px;
            background: none;
            border: none;
            cursor: pointer;
            transition: color 0.3s ease;
            
            &:hover {
                color: #fff;
            }
        }
    }

    .content-slide {
        position: relative;
        
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
            left: 0;
        }

        .swiper-button-next {
            right: 0;
        }
    }
`;

export const ContentCard = styled.div`
    cursor: pointer;
    padding: 10px;

    .img-box {
        position: relative;
        aspect-ratio: 16/9;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 12px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .hover-info {
            position: absolute;
            bottom: -100%;
            left: 0;
            right: 0;
            padding: 16px;
            background: rgba(0,0,0,0.8);
            transition: bottom 0.3s ease;
        }

        .play-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            width: 50px;
            height: 50px;
            background: rgba(255,255,255,0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease;

            &:after {
                content: '▶';
                color: #000;
            }
        }
    }

    .info {
        h3 {
            color: #fff;
            font-size: 16px;
            margin-bottom: 8px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        p {
            color: #999;
            font-size: 14px;
            line-height: 1.4;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    &:hover {
        .img-box {
            img {
                transform: scale(1.1);
            }
            .hover-info {
                bottom: 0;
            }
            .play-btn {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
`;