import styles from './Modal.module.scss';
import closeIcon from '../../assets/svg/close.svg';

export interface ModalProps {
  headline: string;
  children: JSX.Element | JSX.Element[];
  isVisible: boolean;
  onClose: () => void;
}

export default function Modal({ headline, children, isVisible, onClose }: ModalProps) {
  if (!isVisible) {
    return null;
  }
  return (
    <div className={styles['modal__backdrop']}>
      <div data-testid={'modal'} className={styles['modal']}>
        <div className={styles['modal__header']}>
          <h4>{headline}</h4>
          <div className={styles['modal__close']} data-testid='modal-close' onClick={onClose}>
            <img className={styles['modal__close-svg']} src={closeIcon} alt='close modal' />
          </div>
        </div>
        <div className={styles['modal__body']} data-testid='modal-body'>
          {children}
        </div>
      </div>
    </div>
  );
}
