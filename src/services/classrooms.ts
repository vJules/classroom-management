const CLASSROOM_API_URL = 'https://api.classroom-management.com';

export const getClassrooms = () => {
  const URL = `${CLASSROOM_API_URL}/classrooms`;
  return fetch(URL);
};

export const getClassroomById = (id: string) => {
  const URL = `${CLASSROOM_API_URL}/classroom/${id}`;
  return fetch(URL);
};

export const editClassroom = (
  roomName: string,
  teacher: string,
  subjects: string[],
  students: string[],
  id: string,
) => {
  const URL = `${CLASSROOM_API_URL}/classroom/${id}`;
  return fetch(URL, {
    method: 'PATCH',
    body: JSON.stringify({
      name: roomName,
      teacher,
      subjects,
      students,
    }),
  });
};

export const addClassroom = (
  roomName: string,
  teacher: string,
  subjects: string[],
  students: string[],
) => {
  const URL = `${CLASSROOM_API_URL}/classrooms`;
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      name: roomName,
      teacher,
      subjects,
      students,
    }),
  });
};

export const deleteClassroom = (id: string) => {
  const URL = `${CLASSROOM_API_URL}/classroom/${id}`;
  return fetch(URL, {
    method: 'DELETE',
  });
};
