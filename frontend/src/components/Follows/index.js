import React from "react";
import { NavLink } from "react-router-dom";
import './Follows.css'

const Follows = () => {
    return(
        <>
        <div className="trending-title-news">

        <h1 className="trending-title-head-news">
            Latest Stories
        </h1>
        </div>
        <div className="container-feed">
           
        <a className="news" href="https://www.marketwatch.com/story/nasdaq-near-a-10-correction-isnt-the-sell-signal-you-probably-think-it-is-11642112374?siteid=yhoof2">
            Nasdaq near a 10% correction isn’t the sell signal you probably think it is
            </a>
        </div>
        <div className="container-feed">
        <a className="news" href="https://finance.yahoo.com/news/an-important-investing-reminder-that-could-make-or-break-your-portfolio-in-2022-195109746.html">
        An important investing reminder that could make or break your portfolio in 2022            </a>
        </div>
        <div className="container-feed">
        <a className="news" href="https://moneywise.com/investing/investing-basics/four-ways-invest-outside-the-stock-market?utm_source=syn_oath_mon&utm_medium=B&utm_campaign=20571&utm_content=oath_mon_20571_4+Ways+to+Earn+Big+Returns+in+2022+Without+the+Sha">
        4 Ways to Earn Big Returns in 2022 Without the Shaky Stock Market
        </a>
        </div>
        <div className="container-feed">
        <a className="news" href="https://www.barrons.com/articles/stock-market-today-51642069887?siteid=yhoof2">
        Stocks End on a Sour Note After Another Hot Inflation Reading
        </a>
        </div>
        <div className="container-feed">
        <a className="news" href="https://finance.yahoo.com/news/morgan-stanley-shalett-says-many-160525412.html">
        Morgan Stanley’s Shalett Says Many Stocks Have Already Corrected
        </a>
        </div>
        <div className="container-feed">
        <a className="news" href="https://www.morningstar.com/articles/1074752/target-date-fund-flows-bounce-back-in-2021">
        Target-Date Fund Flows Bounce Back in 2021
        </a>
        </div>
        <div className="container-feed">
        <a className="news" href="https://www.morningstar.com/articles/1074752/target-date-fund-flows-bounce-back-in-2021">
        How Well Did the Retirement Saver Portfolios Perform in 2021?
        </a>
        </div>
        <div className="container-feed">
        <a className="news" href="https://seekingalpha.com/news/3788129-china-to-launch-blockchain-infrastructure-to-support-nft-deployment-report-says">
        China to launch blockchain infrastructure to support NFT deployment, report says
        </a>
        </div>
                </>
    )
}

export default Follows;
