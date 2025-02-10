import {styled} from 'styled-components';
export const FaqBox = styled.section`
    padding: 40px 20px;
    background: #191919;

    h2 {
        font-size: 24px;
        color: #fff;
        margin-bottom: 30px;
        text-align: center;
        transition: color 0.3s ease;
    }

    .faq-list {
        max-width: 800px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 20px;
        }
    }
`;

export const FaqItem = styled.div`
    background: #252525;
    border-radius: 8px;
    margin-bottom: 10px;
    overflow: hidden;
    transition: background 0.3s ease;

    .question {
        padding: 20px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: background 0.3s ease;
        
        .arrow {
            transition: transform 0.3s;
        }
    }

    .answer {
        padding: 0 20px;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease;
        background: #333;
        color: #ccc;
    }

    &.active {
        .arrow {
            transform: rotate(180deg);
        }
        
        .answer {
            padding: 20px;
            max-height: 500px;
        }
    }

    &:hover {
        background: #2c2c2c;
        
        .question {
            background: rgba(255,255,255,0.05);
        }
    }

    @media (max-width: 768px) {
        .question {
            padding: 15px;
            
            .arrow {
                font-size: 14px;
            }
        }

        .answer {
            padding: 0 15px;
        }

        &.active .answer {
            padding: 15px;
        }
    }
`;