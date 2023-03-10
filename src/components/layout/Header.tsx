import logo from '../../assets/svg/logo.svg';
import avatar from '../../assets/svg/avatar.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className={styles['header']} data-testid='header'>
      <Link to='/' className={styles['header__logo']}>
        <img className={styles['header__logo-svg']} src={logo} data-testid='logo-svg' alt='logo' />
        <span className={styles['header__logo-title']}>{t('header.logoTitle')}</span>
      </Link>
      <div className={styles['header__avatar']}>
        <img
          className={styles['header__avatar-svg']}
          src={avatar}
          data-testid='avatar-svg'
          alt='user-avatar'
        />
        <span className={styles['header__avatar-name']}>{t('header.userNamePlaceholder')}</span>
      </div>
    </header>
  );
}
