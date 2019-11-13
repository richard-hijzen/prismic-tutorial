import React from 'react';
import { Link } from "gatsby"
import TopMenu from './topmenu';
import Logo from '../images/lovecode.png';
import ErrorBoundary from './ErrorBoundary'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import './headernav.scss';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: 'hide',
    }

    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
      (!this.state.condition == 'hide') ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
  }
 
  handleClick = () => {
    this.setState({
      condition: !this.state.condition,
    });
    this.state.condition ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
  }

  render() {
    return (
      <ErrorBoundary>
      <nav id="mainNav">
        <div className="navbar-brand">
          <Link to="/"><img src={Logo} alt="lovecode logo" style={{maxHeight: 40}}/></Link>
        </div>
        <div className={this.state.condition ? 'hide wide' : 'show'}>
          <TopMenu />
          
          <div className="snipcart-summary signin-up">
            <a href="#" className="snipcart-user-profile">
              <FaUserAlt />
            </a>
            <a href="#" className="snipcart-checkout">
              <FaShoppingCart />
            </a>
              
          </div>
        </div>
        <button
          id="responsive-menu"
          className="headerMenu"
          aria-label="menu"
          onClick={this.handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
          </svg>
        </button>
      </nav>
      </ErrorBoundary>
    );
  }
}

export default HeaderNav;
