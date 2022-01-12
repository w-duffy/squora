import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import ProfileButton from "../Navigation/ProfileButton";
import QuestionModal from "../Questions/QuestionModal";
import { Modal } from "../../context/Modal";
import { addQuestionForm } from "../../store/questions";


const Navbar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [ownerId, setOwnerId] = useState(sessionUser.id);
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const setDescriptionWrapper = (e) => {
    setDescription(e.target.value);
  };

  const postQuestion = async (e) => {
    e.preventDefault();
    const payload = {
      ownerId,
      description,
    };
    let idx = description.indexOf("?")
    let length = description.length - 1
    if ( idx !== length){
      return setErrors(["Your question must end with a question mark."]);
    }
    if (description === "") {
      return setErrors(["You cannot submit a blank question."]);
    }

    let createdQuestion = await dispatch(addQuestionForm(payload));
    if (createdQuestion) {
      setDescription("");
      setShowModal(false);
      setErrors([])
    }
  };
  // let user = users.filter(a =>{
  //   return a.id === sessionUser.id
  // })
  // console.log(user)

  return (
    <div className="nav-container">
      <div>
        <NavLink to="/" className="nav-title">Squora</NavLink>
      </div>
      <div>
        <p>Welcome {sessionUser.username}</p>
      </div>

      <div>Search Squora</div>
      <div>
        <button onClick={() => setShowModal(true)} className="nav-button">Add question</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id="question-container">
          <div className="edit-modal">

          <h1 className="edit-h1">What is your question?</h1>

            <form onSubmit={postQuestion}>
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                  ))}
              </ul>
              <textarea
                id="description_textarea"
                className="text-box"
                placeholder={"What is your question or link?"}
                value={description}
                onChange={setDescriptionWrapper}
                ></textarea>
              <div className="question-modal-button">
              <button className="nav-button" type="submit">Add Question</button>
              </div>
            </form>
          </div>
                </div>
        </Modal>
      )}
      </div>
      <div>
        <ProfileButton user={sessionUser} />
      </div>
    </div>
  );
};

export default Navbar;
