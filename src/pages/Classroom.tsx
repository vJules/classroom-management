import ClassRoomDetails from '../components/classroom-details/ClassroomDetails';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getClassroomById } from '../services/classrooms';
import { useTranslation } from 'react-i18next';
import Loader from '../components/shared/Loader';
import { IClassroom } from '../models/IClassroom';

export default function Classroom() {
  const [classroom, setClassroom] = useState<IClassroom | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getClassroomById(id)
        .then((results) => results.json())
        .then((data: IClassroom) => {
          setClassroom(data);
        })
        .catch(() => {
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (hasError || !classroom) {
    return <div>Something went wrong</div>;
  }

  return (
    <div data-testid='classroom-page' className='container'>
      <Link to='/' className='back-link'>
        {t('classroomPage.back')}
      </Link>
      <ClassRoomDetails
        setClassroom={(newClassroom) => setClassroom(newClassroom)}
        classroom={classroom}
      ></ClassRoomDetails>
    </div>
  );
}
