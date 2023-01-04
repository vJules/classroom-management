import styles from './ClassroomListItem.module.scss';
import classroomPlaceholder from '../assets/svg/classroom.svg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface Classroom {
  id: number;
  name: string;
  subjects: string[];
  teacher: Person;
  students: Person[];
}

interface Person {
  name: string;
}

interface ClassroomListItemProps {
  classroom: Classroom;
}

export default function ClassroomListItem({ classroom }: ClassroomListItemProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      key={classroom.id}
      className={styles['classroom-list-item']}
      data-testid='classroom-list-item'
    >
      <img
        className={styles['classroom-list-item-image']}
        src={classroomPlaceholder}
        alt='classroom image'
      />

      <h3 className={styles['classroom-list-item-name']}>{classroom.name}</h3>
      <p className={styles['classroom-list-item-students']}>
        {t('classroomListItem.numberOfStudents', { count: classroom.students.length })}
      </p>
      <button
        className={styles['classroom-list-item-button']}
        onClick={() => navigate(`/classrooms/${classroom.id}`)}
      >
        Details
      </button>
    </div>
  );
}
