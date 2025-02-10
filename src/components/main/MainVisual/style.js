// components/main/MainVisual/style.js
import {styled} from 'styled-components';

export const MainVisualBox = styled.div`
    width: 100%;
    height: 600px;  // 피그마 높이에 맞춤
    position: relative;
    background: #000;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .visual-item {
        position: relative;
        width: 100%;
        height: 100%;
        
        &::after {  // 그라데이션 오버레이
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 50%;
            background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .text-content {
            position: absolute;
            left: 80px;  // 피그마 여백
            bottom: 80px;
            color: #fff;
            z-index: 1;

            .category {
                display: inline-block;
                background: rgba(255,255,255,0.2);
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                margin-bottom: 20px;
            }

            h3 {
                font-size: 42px;  // 피그마 폰트 사이즈
                font-weight: 700;
                margin-bottom: 16px;
                line-height: 1.2;
            }

            p {
                font-size: 18px;
                opacity: 0.8;
                margin-bottom: 32px;
                max-width: 600px;
                line-height: 1.5;
            }

            .btn-group {
                display: flex;
                gap: 16px;

                button {
                    height: 48px;
                    padding: 0 32px;
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;

                    &.play-btn {
                        background: #fff;
                        color: #000;
                        border: none;
                        display: flex;
                        align-items: center;
                        gap: 8px;

                        &:hover {
                            background: #e6e6e6;
                        }
                    }

                    &.detail-btn {
                        background: rgba(255,255,255,0.2);
                        color: #fff;
                        border: 1px solid #fff;

                        &:hover {
                            background: rgba(255,255,255,0.3);
                        }
                    }
                }
            }
        }
    }

    .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: #fff;
        opacity: 0.5;
        transition: all 0.3s ease;
        
        &-active {
            opacity: 1;
            transform: scale(1.2);
        }
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: #fff;
        width: 44px;
        height: 44px;
        
        &:hover {
            transform: scale(1.1);
        }

        &:after {
            font-size: 24px;
        }
    }
`;