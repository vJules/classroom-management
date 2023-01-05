import { useState } from 'react';
import { addClassroom } from '../../services/classrooms';
import ClassroomForm from '../classroom-shared/ClassroomForm';
import Modal from '../shared/Modal';
import Button from '../shared/Button';
import { IClassroom } from '../../models/IClassroom';

interface AddClassroomProps {
  setClassrooms: (classroom: IClassroom[]) => void;
}

export default function AddClassroom({ setClassrooms }: AddClassroomProps) {
  function handleSubmit(roomName: string, teacher: string, subjects: string[], students: string[]) {
    addClassroom(roomName, teacher, subjects, students)
      .then((results) => results.json())
      .then((data) => {
        setClassrooms(data);
      });
    setIsShowingAddModal(false);
  }

  const [isShowingAddModal, setIsShowingAddModal] = useState(false);
  return (
    <div className='d-flex justify-content-center'>
      <Button
        style='primary'
        type='button'
        onClick={() => setIsShowingAddModal(true)}
        text='Add new classroom'
      />
      <Modal
        headline='Add a classroom'
        isVisible={isShowingAddModal}
        onClose={() => setIsShowingAddModal(false)}
      >
        <ClassroomForm onSubmit={handleSubmit}></ClassroomForm>
      </Modal>
    </div>
  );
}
