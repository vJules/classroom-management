import { useState } from 'react';
import { editClassroom } from '../../services/classrooms';
import ClassroomForm from '../classroom-shared/ClassroomForm';
import Modal from '../shared/Modal';
import Button from '../shared/Button';
import { IClassroom } from '../../models/IClassroom';

interface EditClassroomProps {
  classroom: IClassroom;
  setClassroom: (classroom: IClassroom) => void;
}

export default function EditClassroom({ classroom, setClassroom }: EditClassroomProps) {
  const [isShowingEditModal, setIsShowingEditModal] = useState(false);

  function handleSubmit(roomName: string, teacher: string, subjects: string[], students: string[]) {
    editClassroom(roomName, teacher, subjects, students, classroom.id)
      .then((results) => results.json())
      .then((data) => {
        setClassroom(data);
      });
    setIsShowingEditModal(false);
  }

  return (
    <>
      <Button
        style='default'
        type='button'
        onClick={() => setIsShowingEditModal(true)}
        text='Edit'
      />
      <Modal
        headline='Edit classroom'
        isVisible={isShowingEditModal}
        onClose={() => setIsShowingEditModal(false)}
      >
        <ClassroomForm
          roomName={classroom.name}
          teacher={classroom.teacher}
          students={classroom.students}
          subjects={classroom.subjects}
          onSubmit={handleSubmit}
        ></ClassroomForm>
      </Modal>
    </>
  );
}
