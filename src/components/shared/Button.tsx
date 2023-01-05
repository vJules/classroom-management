import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  style: 'default' | 'primary' | 'warning';
  onClick?: () => void;
}

export default function Button({ style = 'default', text, type = 'button', onClick }: ButtonProps) {
  return (
    <button
      type={type}
      role='button'
      className={`${styles['button']} ${styles['button--' + style]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
