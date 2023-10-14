import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Details from "./details/Details"
import GetStarted from "../../../ui/GetStarted/GetStarted"
import Footer from "../../../ui/Footer/Footer"
import TopBarWhite from "../../../ui/TopBar/TopBarWhite"
import { useActions } from "../../../../hooks/useActions"
import { useSelector } from "react-redux"

const NewsDetail = () => {

    return (
        <>
            <TopBarWhite />
            <Details />
            <GetStarted />
            <Footer />
        </>
    );
}

export default NewsDetail;