import { ADD, EDITTODO } from "./action";
import { DELETE } from "./action";
import { TOGGLETODO } from "./action";
const inistialState=[];
export const todoReducer=(state=inistialState,action)=>{
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((item)=>item.id !== action.payload);
    case TOGGLETODO:
      return state.map((item)=>item.id === action.payload ? {...item,complete:!item.complete}:item);
    case EDITTODO:
      return state.map((item)=>item.id === action.payload.id ? {...item,text:action.payload.text}:item);
      default:
        return state;
      }
}