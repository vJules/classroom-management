import { useTranslation } from 'react-i18next';
import classroomPlaceholder from '../../assets/svg/classroom.svg';
import styles from './ClassroomDetails.module.scss';
import { deleteClassroom } from '../../services/classrooms';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import EditClassroom from './EditClassroom';
import Pill from '../shared/Pill';
import { IClassroom } from '../../models/IClassroom';

interface ClassroomDetailsProps {
  classroom: IClassroom;
  setClassroom: (classroom: IClassroom) => void;
}

export default function ClassroomList({ classroom, setClassroom }: ClassroomDetailsProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function handleDeleteClassroom() {
    deleteClassroom(classroom.id).then(() => {
      navigate('/');
    });
  }

  return (
    <div className={styles['classroom-details']} data-testid='classroom-list'>
      <div className='row'>
        <div className='col-md-2 d-flex justify-content-center align-items-start'>
          <img
            className={styles['classroom-details__image']}
            src={classroomPlaceholder}
            alt='classroom image'
          />
        </div>
        <div className='col-md-10'>
          <h2>{classroom.name}</h2>
          <div className={styles['classroom-details__detail']}>
            <span className={styles['classroom-details__label']}>
              {t('classroomDetails.teacherLabel')}
            </span>
            <div>{classroom.teacher}</div>
          </div>
          <div className={styles['classroom-details__detail']}>
            <span className={styles['classroom-details__label']}>
              {t('classroomDetails.studentsLabel')}
            </span>
            <div>
              {classroom.students.map((student, index) => (
                <Pill key={student + index} text={student}></Pill>
              ))}
            </div>
          </div>
          <div className={styles['classroom-details__detail']}>
            <span className={styles['classroom-details__label']}>
              {t('classroomDetails.subjectsLabel')}
            </span>
            <div>
              {classroom.subjects.map((subject, index) => (
                <Pill key={subject + index} text={subject}></Pill>
              ))}
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div className={styles['classroom-details__action']}>
              <Button style='warning' type='button' onClick={handleDeleteClassroom} text='Delete' />
            </div>
            <div className={styles['classroom-details__action']}>
              <EditClassroom setClassroom={setClassroom} classroom={classroom} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
