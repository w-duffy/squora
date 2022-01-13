import React from "react";
import { NavLink } from "react-router-dom";
import './Topics.css'

const Topics = () => {
    return(
        <>
        <div className="topics-container">
        <div className="trending-title">
        <h1 className="trending-title-head">Trending Stocks</h1>
        </div>

            <a target="_blank" href="https://finance.yahoo.com/quote/TSLA?p=TSLA&.tsrc=fin-srch" className="trending-img">
        <img className="popular-img" alt="Tesla" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_btYGx7bFPJ7DriWrN0FPPNVqwV6NqMGWQA&usqp=CAU"} />
            </a>

            <a target="_blank" href="https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch" className="trending-img">
        <img className="popular-img" alt="Apple" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGUlbM36ApKctEWE5rlVEBREjE33irSwrrjQQ1xOdJMqh-9WbNt8ZTBgqZXfp2H4MyUM&usqp=CAU"} />
            </a>
            <a target="_blank" href="https://finance.yahoo.com/quote/MSFT?p=MSFT&.tsrc=fin-srch" className="trending-img">
        <img className="popular-img" alt="Microsoft" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApKkoekkGsVGEXFzM0Es3LxFe3tRYMjq92A&usqp=CAU"} />
            </a>
            <a target="_blank" href="https://finance.yahoo.com/quote/CVX?p=CVX&.tsrc=fin-srch" className="trending-img">
        <img className="popular-img" alt="Chevron" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5E8ozvFYHlWYfZmDLQbW1YaOgXlYw97QVZScbSFOmx889W-Q9GuIjqNBjMPwVuloiQ&usqp=CAU"} />
            </a>

            <a target="_blank" href="https://finance.yahoo.com/quote/F?p=F&.tsrc=fin-srch" className="trending-img">
        <img className="popular-img" alt="Ford" src={"https://logodownload.org/wp-content/uploads/2014/02/ford-logo-1-1.png"} />
            </a>
            <a target="_blank" href="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" className="trending-img">
        <img className="popular-img" alt="Amazon" src={"https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2019/11/Amazon-logo.png"} />
            </a>
            <a target="_blank" href="https://finance.yahoo.com/quote/GOOG?p=GOOG&.tsrc=fin-srch" className="trending-img">
        <img className="popular-img" alt="google" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png"} />
            </a>

        </div>

        </>

    )
}

export default Topics;
