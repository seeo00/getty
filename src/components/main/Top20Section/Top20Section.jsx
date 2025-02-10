// components/main/Top20Section/Top20Section.jsx
import { Top20Box, RankItem } from './style';

const Top20Section = () => {
    const topContents = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        title: `인기 컨텐츠 ${i + 1}`,
        imgUrl: `/images/top${i + 1}.jpg`,
        rankChange: Math.floor(Math.random() * 3) - 1 // -1(하락), 0(유지), 1(상승)
    }));

    const getRankChangeText = (change) => {
        if (change > 0) return `▲ ${change}`;
        if (change < 0) return `▼ ${Math.abs(change)}`;
        return '-';
    };

    const getRankChangeClass = (change) => {
        if (change > 0) return 'up';
        if (change < 0) return 'down';
        return '';
    };

    return (
        <Top20Box>
            <div className="section-title">
                <h2>실시간 TOP 20</h2>
            </div>
            <div className="rank-grid">
                {topContents.map((item) => (
                    <RankItem key={item.id}>
                        <div className="rank-number">{item.id}</div>
                        <div className="img-box">
                            <img src={item.imgUrl} alt={item.title} />
                            <div className="play-btn" />
                            <div className={`rank-change ${getRankChangeClass(item.rankChange)}`}>
                                {getRankChangeText(item.rankChange)}
                            </div>
                        </div>
                    </RankItem>
                ))}
            </div>
        </Top20Box>
    );
};

export default Top20Section;