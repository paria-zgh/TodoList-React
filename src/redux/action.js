export const ADD="add";
export const DELETE="delete";
export const TOGGLETODO="toggle";
export const EDITTODO="edit";
export const addTodo=(text)=>({
  type: ADD,
  payload:{id:Date.now(),text,complete:false,edit:false}
})
export const deleteTodo=(id)=>({
   type:DELETE,
   payload:id,
 })
 export const toggleTodo=(id)=>({
  type:TOGGLETODO,
  payload:id,
 })
 export const editTodo=(id,text)=>({
  type:EDITTODO,
  payload:{id,text}
 });