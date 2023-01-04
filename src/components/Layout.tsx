import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation, { NavLink } from './Navigation';
import styles from './Layout.module.scss';

export default function Layout() {
  const { t } = useTranslation();

  const links: NavLink[] = [
    { title: t('navigationItems.classrooms'), path: '/' },
    { title: t('navigationItems.about'), path: '/about' },
  ];

  return (
    <div className={styles['layout']}>
      <Header />
      <div className={styles['layout-content']}>
        <Navigation links={links} />
        <main role='main' className={styles['main']}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
