import { Classroom } from '../components/ClassroomListItem';
import ClassRoomDetails from '../components/ClassroomDetails';
import { Link } from 'react-router-dom';

const classroom: Classroom = {
  name: 'Room 53',
  id: 1,
  teacher: { name: 'Henrik' },
  subjects: ['English', 'Math', 'German'],
  students: [{ name: 'Lars' }, { name: 'Lotte' }],
};

export default function Classrooms() {
  return (
    <div className='container'>
      <Link to='/' style={{ display: 'block', margin: '20px 0' }}>
        Back to classroom overview
      </Link>
      <ClassRoomDetails classroom={classroom}></ClassRoomDetails>
    </div>
  );
}
