import { useState } from 'react';
import { FaqBox, FaqItem } from './style';

const FaqSection = () => {
    const [activeId, setActiveId] = useState(null);

    const faqData = [
        {
            id: 1,
            question: '첫 번째 자주 묻는 질문',
            answer: '첫 번째 질문에 대한 답변입니다.'
        },
        {
            id: 2,
            question: '두 번째 자주 묻는 질문',
            answer: '두 번째 질문에 대한 답변입니다.'
        },
        {
            id: 3,
            question: '세 번째 자주 묻는 질문',
            answer: '세 번째 질문에 대한 답변입니다.'
        },
        {
            id: 4,
            question: '네 번째 자주 묻는 질문',
            answer: '네 번째 질문에 대한 답변입니다.'
        }
    ];

    const handleClick = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <FaqBox>
            <h2>아직 고민 중이신가요?</h2>
            <div className="faq-list">
                {faqData.map((item) => (
                    <FaqItem
                        key={item.id}
                        className={activeId === item.id ? 'active' : ''}
                        onClick={() => handleClick(item.id)}
                    >
                        <div className="question">
                            {item.question}
                            <span className="arrow">▼</span>
                        </div>
                        <div className="answer">
                            {item.answer}
                        </div>
                    </FaqItem>
                ))}
            </div>
        </FaqBox>
    );
};

export default FaqSection;