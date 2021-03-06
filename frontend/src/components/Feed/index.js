import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/questions";
import { getUsers } from "../../store/user";
import DeleteFormModal from "./DeleteFormModal";
import EditFormModal from "./EditFormModal";
import { useHistory } from "react-router-dom";
import QuestionModal from "../Questions/QuestionModal";
import Answers from "../Answers/index";
import "./Feed.css";
import EditDeleteButtons from "./EditDeleteButtons";

function Feed() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [deleteClick, setDeleteClick] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openClose, setOpenClose] = useState("Open");

  useEffect(() => {
    setShowMenu(false);
  }, []);

  const history = useHistory();

  const questions = useSelector((state) => state.questions.questions);
  const users = useSelector((state) => state.users.users);

  useEffect(async () => {
    await dispatch(getUsers());
    await dispatch(getQuestions());
    await setLoaded(true);
  }, []);

  if (!questions) {
    return null;
  }
  const sortedQuestions = questions.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (loaded) {
    return (
      <div>
        <div className="ask-question">
          <QuestionModal />
        </div>
        {sortedQuestions.map((question) => (
          <div className="ask-question" key={question.id}>
            <div className="feed-content">
              {users.map((user) =>
                user.id === question.ownerId ? (
                  <div className="feed-content" key={Math.random()}>
                    <div className="profile-info">
                      {user.profilePicture ? (
                        <img
                          className="feed-profile-pic"
                          src={user.profilePicture}
                          alt="User profile pic"
                        />
                      ) : (
                        <img
                          className="feed-profile-pic"
                          src={
                            "http://cdn.onlinewebfonts.com/svg/img_76927.png"
                          }
                          alt="User Picture"
                        />
                      )}
                      <p className="username">{user.username} asked: </p>
                    </div>
                  </div>
                ) : (
                  <div key={Math.random()}></div>
                )
              )}
              <div>
                <div>
                  <div className="feed-content">
                    <p className="p-description">{question.description}</p>
                  </div>
                </div>
                <div className="rel">

                  <div className="answer-button">
                    <Answers question={question} />
                  </div>
                <div className="answer-ed">

                  <div className="edit-delete">

                      <EditDeleteButtons question={question} />

                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else return <></>;
}

export default Feed;
