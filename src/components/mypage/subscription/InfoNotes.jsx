import { NotesContainer, NoteText } from '../style';

const InfoNotes = () => {
  return (
    <NotesContainer>
      <NoteText>
        풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는 인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다.
        모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은 이용 약관을 확인하세요.
      </NoteText>
      <NoteText>
        함께 거주하는 사람들만 계정을 함께 이용할 수 있습니다. 스탠다드 멤버십은 추가 회원을 1명, 프리미엄은 최대
        2명까지 등록할 수 있습니다. 자세히 알아보기. 프리미엄 멤버십은 동시접속 4명, 스탠다드 또는 광고형 스탠다드는
        2명까지 가능합니다.
      </NoteText>
      <NoteText>라이브 이벤트는 모든 멤버십의 멤버십으로 이용 가능하며 참고가 포함됩니다.</NoteText>
    </NotesContainer>
  );
};

export default InfoNotes;
