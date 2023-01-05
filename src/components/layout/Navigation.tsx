import styles from './Navigation.module.scss';
import { Link, useLocation } from 'react-router-dom';

export interface NavLink {
  title: string;
  path: string;
}

interface NavigationProps {
  links: NavLink[];
}

export default function Navigation({ links }: NavigationProps) {
  const { pathname } = useLocation();

  function isClassroomPage(path: string) {
    return path === '/' && pathname.indexOf('classroom') > 0;
  }

  return (
    <nav role='navigation' className={styles['navigation']}>
      <ul className={styles['navigation__list']} data-testid='nav-list'>
        {links.map((link) => {
          const isActive = pathname === link.path || isClassroomPage(link.path);
          return (
            <li key={link.path}>
              <Link
                className={`${styles['navigation__link']} ${
                  isActive ? styles['navigation__link--active'] : ''
                }`}
                to={link.path}
                data-testid='nav-item-link'
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
