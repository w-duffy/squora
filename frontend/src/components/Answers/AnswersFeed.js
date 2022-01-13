import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAnswers } from "../../store/answers";
import { getUsers } from "../../store/user";
import AnswersDeleteFormModal from "./AnswersDeleteModal";
import EditAnswerModal from "./AnswersEditModal";

function AnswersFeed({ question }) {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const answers = useSelector((state) => state.answers.answers);
  const users = useSelector((state) => state.users.users);


  useEffect(async () => {
    await dispatch(getAnswers());
    await dispatch(getUsers());
    await setLoaded(true);
  }, []);

  if (!answers) {
    return null;
  }

  let answerArr = answers.filter((a) => {
    return a.questionId === question.id;
  });

  const sortedAnswers = answerArr.sort(function (a, b) {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  if(loaded){

    if (answerArr.length !== 0){

      return (
        <div>
      {sortedAnswers.map((answer) => (
        <div key={answer.id}>
          {users.map((user) =>
            user.id === answer.ownerId ? (
              <div className="feed-content-answer" key={Math.random()}>
                <div className="profile-info-answer">
                    <div className="pic-answer-username">

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
                  <p className="username">{user.username} answered: </p>
                        </div>


                        <div className="answer-content">
                  {answer.answer}
                  </div>
                        <div>
                          <AnswersDeleteFormModal answer={answer} />
                          <EditAnswerModal answer={answer} />
                        </div>

                </div>
              </div>
            ) : (
                <div key={Math.random()}></div>
                )
            )}
        </div>
      ))}
    </div>
  );
} else return (
    <>
    <div className="feed-content-answer-missing">
        <p>
            There are currently no answers to this question.  Be the first to answer by clicking the button below.
            </p>
            <div className="first-answer">
            <button className="answers-button">Answer this Question</button>
            </div>
    </div>
    </>
)
} else return <></>;
}

export default AnswersFeed;
