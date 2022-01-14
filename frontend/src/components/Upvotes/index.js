// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import * as sessionActions from "../../store/session";
// import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getAnswers } from "../../store/answers";
// import { getUsers } from "../../store/user";
// import { getUpvotes } from "../../store/upvotes";
// import { addUpvotes } from "../../store/upvotes";
// import { deleteUpvote } from "../../store/upvotes";

// function UpvoteButton({ answer }) {
//   const dispatch = useDispatch();
//   const [loaded, setLoaded] = useState(false);
//   const answers = useSelector((state) => state.answers.answers);
//   const upvotes = useSelector((state) => state.upvotes.upvotes);
//   const sessionUser = useSelector((state) => {
//     return state.session.user;
//   });

//   const [ownerId, setOwnerId] = useState(sessionUser.id);

//   useEffect(async () => {
//     // await dispatch(getAnswers());
//     // await dispatch(getUsers());
//     await dispatch(getUpvotes());
//     await setLoaded(true);
//   }, []);

//   const postUpvote = async (e) => {
//     e.preventDefault();
//     const payload = {
//       ownerId,
//       answerId: answer.id,
//     };

//     let alreadyUpvoted = upvotes.filter(u =>{
//         return (u.ownerId === ownerId && u.answerId === answer.id)
//     })
//     console.log("UPVOTEDDD", alreadyUpvoted)

//     if(!alreadyUpvoted.length){
//         let createdUpvote = await dispatch(addUpvotes(payload));
//     } else {
//         let deleteVote = await dispatch(deleteUpvote(alreadyUpvoted[0]))
//     }

//   };

//   if (!upvotes) {
//     return null;
//   }

//   let upvoteArr = upvotes.filter((a) => {
//     return a.answerId === answer.id;
//   });

//   if (loaded) {
//     return(
//         <button onClick={postUpvote}>{upvoteArr.length}</button>

//     )
//   } else return <></>;
// }

// export default UpvoteButton;
