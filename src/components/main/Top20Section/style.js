// components/main/Top20Section/style.js
import {styled} from 'styled-components';

export const Top20Box = styled.section`
    padding: 40px 80px;
    background: #191919;

    .section-title {
        margin-bottom: 24px;
        
        h2 {
            font-size: 24px;
            color: #fff;
            font-weight: 500;
        }
    }

    .rank-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;

        @media (max-width: 1440px) {
            grid-template-columns: repeat(4, 1fr);
        }

        @media (max-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    }
`;

export const RankItem = styled.div`
    position: relative;
    cursor: pointer;

    .rank-number {
        position: absolute;
        top: 12px;
        left: 12px;
        width: 28px;
        height: 28px;
        background: #3498db;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        z-index: 1;
    }

    .img-box {
        position: relative;
        aspect-ratio: 16/9;
        border-radius: 4px;
        overflow: hidden;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
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

        .rank-change {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(0,0,0,0.6);
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            color: #fff;

            &.up {
                color: #2ecc71;
            }
            &.down {
                color: #e74c3c;
            }
        }
    }

    &:hover {
        .img-box {
            img {
                transform: scale(1.1);
            }
            .play-btn {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
`;