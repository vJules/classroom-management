import { rest } from 'msw';
import { v4 as uuidv4 } from 'uuid';

const CLASSROOM_API_URL = 'https://api.classroom-management.com';

let classrooms = [
  {
    name: 'Room 53',
    id: uuidv4(),
    teacher: 'Henrik',
    subjects: ['English', 'Math', 'German'],
    students: ['Lars', 'Lotte'],
  },
  {
    name: 'Room 12',
    id: uuidv4(),
    teacher: 'Louise',
    subjects: ['English'],
    students: ['Peter', 'Anna'],
  },
  {
    name: 'Room 64',
    id: uuidv4(),
    teacher: '',
    subjects: [],
    students: [],
  },
  {
    name: 'Room 1642',
    id: uuidv4(),
    teacher: 'Louise',
    subjects: ['English'],
    students: ['Poul'],
  },
  {
    name: 'Room 12',
    id: uuidv4(),
    teacher: 'Louise',
    subjects: ['English'],
    students: ['Peter', 'Anna'],
  },
  {
    name: 'Room 12',
    id: uuidv4(),
    teacher: 'Louise',
    subjects: ['English'],
    students: ['Peter', 'Anna'],
  },
];

export const handlers = [
  rest.get(`${CLASSROOM_API_URL}/classrooms`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(classrooms));
  }),

  rest.get(`${CLASSROOM_API_URL}/classroom/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const foundClassroom = classrooms.find((classroom) => classroom.id === id);
    if (!foundClassroom) return res(ctx.status(404));
    return res(ctx.status(200), ctx.json(foundClassroom));
  }),

  rest.patch(`${CLASSROOM_API_URL}/classroom/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    const receivedClassroom = await req.json();

    const foundClassroom = classrooms.find((classroom) => classroom.id === id);

    if (foundClassroom) {
      classrooms = classrooms.map((room) => {
        if (room.id === id) return { ...foundClassroom, ...receivedClassroom };
        return room;
      });
    }
    return res(ctx.status(200), ctx.json(receivedClassroom));
  }),

  rest.post(`${CLASSROOM_API_URL}/classrooms`, async (req, res, ctx) => {
    const receivedClassroom = await req.json();
    const newClassroom = { ...receivedClassroom, id: uuidv4() };
    classrooms = [...classrooms, newClassroom];
    return res(ctx.status(200), ctx.json(classrooms));
  }),

  rest.delete(`${CLASSROOM_API_URL}/classroom/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    classrooms = classrooms.filter((classroom) => classroom.id !== id);
    return res(ctx.status(200), ctx.json(classrooms));
  }),
];
