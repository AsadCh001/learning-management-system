// export const isTeacher = (userId?: string | null) => {
//   return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
// }

export const isTeacher = (userId?: string | null) => {
  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_ID?.split(',') || [];
  const user = teacherIds.includes(userId as string);
  return user
}