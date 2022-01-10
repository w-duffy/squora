import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { editQuestion } from "../../store/questions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function EditForm({ visible, question }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [description, setDescription] = useState(question.description);
  const [id, setId] = useState(question.id)
  const setDescriptionWrapper = (e) => {
    setDescription(e.target.value);
  };

  const handleEdit = async (e) => {
      e.preventDefault()
      const editedQuestion = {
          id: question.id,
          description,
          topicId: question.topicId,
      }
     await dispatch(editQuestion(editedQuestion));

};


  return (
    <div>
      <h1>Edit Question</h1>
      <form onSubmit={handleEdit}>
      <textarea
      id="description_textarea"
      value={description}
      onChange={setDescriptionWrapper}>
      </textarea>
        <button type="submit">Save</button>
        <button onClick={() => visible(false)}>Cancel</button>
      </form>
    </div>
  );
}

export default EditForm;
