// import CardBasic from '../../ui/card/CardBasic';
// import { CardBasicSkeleton } from '../../ui/LoadingSkeleton';
// import LoadingSpinner from '../../ui/LoadingSpinner';
// import * as S from './style';

// const CardContentList = ({ data = [], loading, lastElementRef }) => {
//   return (
//     <>
//       <S.CardContentContainer>
//         {loading && data.length === 0
//           ? Array.from({ length: 10 }).map((_, index) => (
//               <div key={index}>
//                 <CardBasicSkeleton />
//               </div>
//             ))
//           : data.map((item, index) => (
//               <div key={item.id} ref={index === data.length - 1 ? lastElementRef : null}>
//                 <CardBasic item={item} />
//               </div>
//             ))}

//         {loading && data.length > 0 && <LoadingSpinner />}
//       </S.CardContentContainer>
//     </>
//   );
// };

// export default CardContentList;
