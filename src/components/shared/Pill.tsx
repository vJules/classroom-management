import styles from './Pill.module.scss';

interface PillProps {
  text: string;
  onRemoveClick?: () => void;
}

export default function Input({ text, onRemoveClick }: PillProps) {
  return (
    <div className={styles['pill']}>
      {text}{' '}
      {onRemoveClick && (
        <div className={styles['pill__remove']} onClick={onRemoveClick}>
          X
        </div>
      )}
    </div>
  );
}
