import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getTrendingDay, getTrendingWeek } from '../../store/modules/thunks/getTrending';
import { InnerContainer } from '../../common/layout/InnerContainer';
import styled from 'styled-components';
import { ContentArea } from '../../components/category/style';
import CardBasic from '../../ui/card/CardBasic';

const More = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const section = params.get('section');
  const title = params.get('title');

  const dispatch = useDispatch();

  const { trendingDayData, trendingWeekData } = useSelector((state) => state.trendingR);
  const sectionData = useMemo(() => {
    return (
      {
        trendingWeekData,
        trendingDayData,
      }[section] || []
    );
  }, [section, trendingWeekData, trendingDayData]);

  useEffect(() => {
    if (!sectionData.length) {
      switch (section) {
        case 'trendingWeekData':
          dispatch(getTrendingWeek());
          break;
        case 'trendingDayData':
          dispatch(getTrendingDay());
          break;
        default:
          break;
      }
    }
  }, [section, dispatch, sectionData]);

  return (
    <InnerContainer>
      <h2>{title}</h2>
      <ContentArea>
        {sectionData.map((item) => (
          <div key={item.id}>
            <CardBasic item={item} />
          </div>
        ))}
      </ContentArea>
    </InnerContainer>
  );
};

export default More;

const MoreList = styled.div``;
