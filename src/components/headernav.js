import React from "react"
import TopMenu from "./topmenu"
import TitleMenu from "./titleMenu"
import "./headernav.scss"
const netlifyIdentity = require("netlify-identity-widget");

class HeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: "hide",
        }
    this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){    
        netlifyIdentity.init();
    }

    handleClick = () => {
        this.setState({
          condition: !this.state.condition,
        })
      }

      render() {
          return(
            <nav id="mainNav">
                <div className="navbar-brand"><TitleMenu /></div>
                <div className={this.state.condition ? "hide wide" : "show" } >
                    <TopMenu />
                    <div className="signin-up" data-netlify-identity-menu></div>
                </div>
                <button id="responsive-menu" className="headerMenu" onClick={this.handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
                    </svg>
                </button>
            </nav>
          );
      }

}

export default HeaderNav