'use client'
import CreateTodo from './create-todo'

// async function setupPocketbase() {
//   return pb
// }

// list and filter "example" collection records
// const result = await pb.collection('example').getList(1, 20, {
//     filter: 'status = true && created > "2022-08-01 10:00:00"'
// });

// // authenticate as auth collection record
// const userData = await pb.collection('users').authWithPassword('test@example.com', '123456');

// // or as super-admin
// const adminData = await pb.admins.authWithPassword('test@example.com', '123456');

// const todos = useState('todos')


export default function Pocket() {
  return (
    <>
      <h1>Pocket Page</h1>
      <p>Some content</p>
      <CreateTodo />
    </>
  );
}