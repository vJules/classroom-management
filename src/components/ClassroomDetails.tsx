import { useTranslation } from 'react-i18next';
import { Classroom } from './ClassroomListItem';
import classroomPlaceholder from '../assets/svg/classroom.svg';
import styles from './ClassroomDetails.module.scss';

interface ClassroomDetailsProps {
  classroom: Classroom;
}

export default function ClassroomList({ classroom }: ClassroomDetailsProps) {
  const { t } = useTranslation();
  if (!classroom) {
    return <div data-testid='classroom-not-found'>This classroom was not found</div>;
  }
  return (
    <div className={styles['classroom-details']} data-testid='classroom-list'>
      <div className='row'>
        <div className='col-2'>
          <img src={classroomPlaceholder} alt='classroom image' />
        </div>
        <div className='col-10'>
          <h2>Classroom</h2>

          <h3>{classroom.name}</h3>
          <p>This classroom has {classroom.students.length} students</p>
          <p>
            Students:{' '}
            {classroom.students.map((student) => (
              <span key={student.name}>{student.name} </span>
            ))}
          </p>
          <p>Subjects: {classroom.subjects}</p>
          <p>Teacher: {classroom.teacher.name}</p>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}
