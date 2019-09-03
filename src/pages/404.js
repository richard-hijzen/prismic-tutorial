import React from "react"
import TopMenu from "../components/topMenu"
import Footer from "../components/footer"

import "../styles/app.scss"

class Non extends React.Component {
    render() {
        return(
            <div>
            <TopMenu />
            <Footer />
            </div>
        )
    }
}

export default Non