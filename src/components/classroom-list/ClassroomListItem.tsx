import styles from './ClassroomListItem.module.scss';
import classroomPlaceholder from '../../assets/svg/classroom.svg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../shared/Button';

interface ClassroomListItemProps {
  id: string;
  name: string;
  students: string[];
}

export default function ClassroomListItem({ id, name, students }: ClassroomListItemProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div key={id} className={styles['classroom-list-item']} data-testid='classroom-list-item'>
      <img
        className={styles['classroom-list-item__image']}
        src={classroomPlaceholder}
        alt='classroom image'
      />

      <h3 className={styles['classroom-list-item__name']}>{name}</h3>
      <p className={styles['classroom-list-item__students']}>
        {t('classroomListItem.numberOfStudents', { count: students.length })}
      </p>
      <Button
        style='default'
        type='button'
        onClick={() => navigate(`/classrooms/${id}`)}
        text='Details'
      />
    </div>
  );
}
