// import { csrfFetch } from "./csrf";
// const LOAD_UPVOTES = "upvotes/LOAD_UPVOTES";
// const ADD_UPVOTES = "upvotes/ADD_UPVOTES";
// const REMOVE_UPVOTES = "upvotes/REMOVE_UPVOTES";
// const REMOVE_ALL_UPVOTES = "upvotes/REMOVE_ALL_UPVOTES";


// const loadUpvotes = (upvotes) => ({
//     type: LOAD_UPVOTES,
//     upvotes,
//   });

//   const addUpvote = (upvotes) => ({
//     type: ADD_UPVOTES,
//     upvotes,
//   });

//   const removeUpvote = (upvoteId) => ({
//     type: REMOVE_UPVOTES,
//     upvoteId,
//   });

//   const removeAllUpvote = (currUpvotes) => ({
//     type: REMOVE_ALL_UPVOTES,
//     currUpvotes,
//   });

//   export const getUpvotes = () => async (dispatch) => {
//     const response = await fetch(`/api/upvotes`);

//     if (response.ok) {
//       const upvotes = await response.json();
//       dispatch(loadUpvotes(upvotes));
//     }
//   };

//   export const addUpvotes = (payload) => async (dispatch) => {

//     const response = await csrfFetch(`/api/upvotes`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     if (response.ok) {
//       const upvote = await response.json();
//       dispatch(addUpvote(upvote));
//       return upvote;
//     }
//   };

//   export const deleteUpvote = (upvote) => async (dispatch) => {
//     const response = await csrfFetch(`/api/upvotes/${upvote.id}`, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(upvote),
//     });
//     const deleted = await response.json()
//     if (response.ok) {
//       dispatch(removeUpvote(upvote.id));
//     }
//   };

// const initialState = {}
// const upvotesReducer = (state = initialState, action) => {
//     let newState;
//     let newerState;
//     let arrState;
//     let upvoteState ={};
//     switch (action.type) {
//       case LOAD_UPVOTES:
//         newState = { ...state };
//         newState.upvotes = action.upvotes;
//         return newState;
//       case ADD_UPVOTES:
//         newState = { ...state };
//         newState.upvotes = [action.upvotes, ...state.upvotes];
//         return newState;
//         case REMOVE_UPVOTES:
//           newState = JSON.parse(JSON.stringify(state));
//           for (let i = 0; i < newState.upvotes.length; i++) {
//             if (newState.upvotes[i].id === action.upvoteId) {
//               delete newState.upvotes[i];
//             }
//           }
//           newerState = { ...newState }
//           arrState = newerState.upvotes.filter(upvote =>{
//               return upvote = !null
//           })
//           upvoteState.upvotes = arrState
//           return upvoteState;
//       default:
//         return state;
//     }
//   };

//   export default upvotesReducer;
