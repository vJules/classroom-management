import React, { useState } from 'react';
import Button from '../shared/Button';
import TextInput from '../shared/TextInput';
import MultiTextInput from '../shared/MultiTextInput';
import { searchPeople } from '../../services/star-wars';
import { useTranslation } from 'react-i18next';
import { IPeopleResponseModel } from '../../models/star-wars/response/IPeopleResponseModel';

interface ClassroomFormProps {
  roomName?: string;
  teacher?: string;
  subjects?: string[];
  students?: string[];
  onSubmit: (roomName: string, teacher: string, subjects: string[], students: string[]) => void;
}

export default function ClassroomForm({
  onSubmit,
  roomName: initialRoomName = '',
  teacher: initialTeacher = '',
  subjects: initialSubjects = [],
  students: initialStudents = [],
}: ClassroomFormProps) {
  const [roomName, setRoomName] = useState(initialRoomName);
  const [teacher, setTeacher] = useState(initialTeacher);
  const [subjects, setSubjects] = useState(initialSubjects);
  const [students, setStudents] = useState(initialStudents);
  const [searchResults, setSearchResults] = useState([] as string[]);
  const { t } = useTranslation();

  function handleRoomValueChange(newValue: string) {
    setRoomName(newValue);
  }

  function handleTeacherValueChange(newValue: string) {
    setTeacher(newValue);
  }

  function handleSubjectValueChange(newValue: string[]) {
    setSubjects(newValue);
  }

  function handleStudentValueChange(newValue: string[]) {
    setStudents(newValue);
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleStudentQueryChange(query: string) {
    if (!query) {
      setSearchResults([]);
      return;
    }

    searchPeople(query)
      .then((response) => response.json())
      .then((data: IPeopleResponseModel) => {
        setSearchResults(data.results.map((result) => result.name));
      });
  }

  return (
    <form onSubmit={submitHandler}>
      <TextInput
        id='RoomName'
        label={t('classroomForm.roomName')}
        value={roomName}
        onChange={(newValue) => handleRoomValueChange(newValue)}
      />
      <TextInput
        id='Teacher'
        label={t('classroomForm.teacher')}
        value={teacher}
        onChange={(newValue) => handleTeacherValueChange(newValue)}
      />
      <MultiTextInput
        id='Subjects'
        label={t('classroomForm.subjects')}
        values={subjects}
        onChange={(newValue) => handleSubjectValueChange(newValue)}
      />
      <MultiTextInput
        id='Students'
        label={t('classroomForm.students')}
        values={students}
        suggestions={searchResults}
        onQueryChange={(query) => handleStudentQueryChange(query)}
        onChange={(newValue) => handleStudentValueChange(newValue)}
      ></MultiTextInput>
      <div className='d-flex justify-content-end'>
        <Button
          style='primary'
          type='button'
          text='Submit'
          onClick={() => onSubmit(roomName, teacher, subjects, students)}
        />
      </div>
    </form>
  );
}
