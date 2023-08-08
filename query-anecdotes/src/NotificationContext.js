import { createContext, useReducer, useContext } from "react";

// const notificationReducer = (state, action) => {
//   switch (action.type) {
//     case "vote":
//       return "you voted for ... anecdote";
//     case "create":
//       return "new anecdote added!";
//     default:
//       return state;
//   }
// };

const NotificationContext = createContext();

// const [notification, notificationDispatch] = useReducer(
//   notificationReducer,
//   ""
// );

export default NotificationContext;
