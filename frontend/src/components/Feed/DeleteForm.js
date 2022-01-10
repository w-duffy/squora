import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import {deleteQuestion} from "../../store/questions"
import { toast } from "react-toastify";
import {useHistory} from 'react-router-dom'

function DeleteForm({question}) {
  const dispatch = useDispatch();
  const history = useHistory();


  const handleDelete = async (e) => {
    e.preventDefault()
          let deleted = await dispatch(deleteQuestion(question))
         alert("DELETED")

            // history.push("/questions")
    }
  console.log(question)
  return (
      <div>

      <h1>Delete question</h1>
      <form onSubmit={handleDelete}>

      <button type="submit">Confirm</button>
      </form>
      </div>
  );
}

export default DeleteForm;
