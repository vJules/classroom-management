import { useEffect, useState } from 'react';
import ClassroomList from '../components/classroom-list/ClassroomList';
import { getClassrooms } from '../services/classrooms';
import AddClassroom from '../components/classroom-list/AddClassroom';
import Loader from '../components/shared/Loader';
import { IClassroom } from '../models/IClassroom';
import { t } from 'i18next';

export default function Classrooms() {
  const [classrooms, setClassrooms] = useState([] as IClassroom[]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getClassrooms()
      .then((results) => results.json())
      .then((data) => {
        setClassrooms(data);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader></Loader>;

  if (hasError) return <div>Something went wrong</div>;

  return (
    <div data-testid='classrooms-page' className='container'>
      <h2>{t('classroomsPage.headline')}</h2>
      <ClassroomList classrooms={classrooms}></ClassroomList>
      <AddClassroom setClassrooms={(classrooms) => setClassrooms(classrooms)}></AddClassroom>
    </div>
  );
}
