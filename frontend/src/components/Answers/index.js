import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { addQuestionForm } from "../../store/questions";
import "./Answers.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAnswers } from "../../store/answers";
import AnswersFeed from './AnswersFeed'
toast.configure()




function Answers({question}) {
    const dispatch = useDispatch();
    const [showAnswers, setShowAnswers] = useState(false);
    const [openCloseAnswers, setOpenCloseAnswers] = useState("Open");


    useEffect(async () => {
        await dispatch(getAnswers());
    }, []);

    const openAnswers = () => {
        if (!showAnswers) {
          setShowAnswers(true);
          setOpenCloseAnswers("Close");
          return;
        }
        if (showAnswers) {
          setShowAnswers(false);
          setOpenCloseAnswers("Open");
          return;
        }
      };
      useEffect(() => {
        setShowAnswers(false);
      }, [question]);



    return (
        <>
        {showAnswers && (
            <div>

            <button className="answers-button" onClick={openAnswers}>Close</button>
            <AnswersFeed question={question} />
            </div>
            )}
            {!showAnswers &&  (
                <>
              <button className="answers-button" onClick={openAnswers}>Answers</button>

              </>
            )}
            </>
    )
}

export default Answers;
