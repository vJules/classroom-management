import { useState } from 'react';
import ClassroomList from '../components/ClassroomList';
import { Classroom } from '../components/ClassroomListItem';

const mockClassrooms: Classroom[] = [
  {
    name: 'Room 53',
    id: 1,
    teacher: { name: 'Henrik' },
    subjects: ['English', 'Math', 'German'],
    students: [{ name: 'Lars' }, { name: 'Lotte' }],
  },
  {
    name: 'Room 12',
    id: 2,
    teacher: { name: 'Louise' },
    subjects: ['English'],
    students: [{ name: 'Peter' }, { name: 'Anna' }],
  },
  {
    name: 'Room 64',
    id: 3,
    teacher: { name: '' },
    subjects: [],
    students: [],
  },
  {
    name: 'Room 1642',
    id: 4,
    teacher: { name: 'Louise' },
    subjects: ['English'],
    students: [{ name: 'Poul' }],
  },
  {
    name: 'Room 12',
    id: 5,
    teacher: { name: 'Louise' },
    subjects: ['English'],
    students: [{ name: 'Peter' }, { name: 'Anna' }],
  },
  {
    name: 'Room 12',
    id: 6,
    teacher: { name: 'Louise' },
    subjects: ['English'],
    students: [{ name: 'Peter' }, { name: 'Anna' }],
  },
];

export default function Classrooms() {
  const [classrooms, setClassrooms] = useState(mockClassrooms);

  return (
    <div className='container'>
      <h2>Classrooms page</h2>
      <ClassroomList classrooms={classrooms}></ClassroomList>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button>Add new classroom</button>
      </div>
    </div>
  );
}
