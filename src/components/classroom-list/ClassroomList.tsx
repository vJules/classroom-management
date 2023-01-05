import { useTranslation } from 'react-i18next';
import ClassroomListItem from './ClassroomListItem';
import styles from './ClassroomList.module.scss';
import { IClassroom } from '../../models/IClassroom';

interface ClassroomListProps {
  classrooms: IClassroom[];
}

export default function ClassroomList({ classrooms }: ClassroomListProps) {
  const { t } = useTranslation();
  if (!classrooms.length) {
    return <div data-testid='empty-classroom-list'>{t('classroomList.emptyList')}</div>;
  }
  return (
    <div className='classroom-list row' data-testid='classroom-list'>
      {classrooms.map((classroom: IClassroom) => {
        return (
          <div
            className={`col-12 col-sm-6 col-md-4 col-xl-3 ${styles['classroom-list-column']}`}
            key={classroom.id}
          >
            <ClassroomListItem classroom={classroom}></ClassroomListItem>
          </div>
        );
      })}
    </div>
  );
}
