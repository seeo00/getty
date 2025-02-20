import Button from '../../../ui/Button';
import { ModalOverlay, ModalContainer, ModalTitle, ModalDescription, ModalButtonWrapper } from './style';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>선택한 프로필을 삭제할까요?</ModalTitle>
        <ModalDescription>
          최근 본 콘텐츠 및 관심 콘텐츠, 활동 내역이 삭제 되며, 실행 후 취소할 수 없습니다.
        </ModalDescription>
        <ModalButtonWrapper>
          <Button variant="secondary" onClick={onClose}>
            취소
          </Button>
          <Button onClick={onConfirm}>삭제</Button>
        </ModalButtonWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DeleteConfirmationModal;
