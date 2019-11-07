import React from 'react';
import TopMenu from './topmenu';
import TitleMenu from './titleMenu';
import ErrorBoundary from './ErrorBoundary'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import './headernav.scss';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: 'hide',
      items: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  };

  updateItemTotal = (qty) => {
    this.setState({ items: qty })
}

  componentDidMount() {
    if (window.Snipcart) {
      //this allows it to work when switching pages
      var count = window.Snipcart.api.items.count();
      this.updateItemTotal(count)

      //this allows it to work when you add or change items
      window.Snipcart.subscribe('cart.closed', () => {
          var count = window.Snipcart.api.items.count();
          this.updateItemTotal(count)
      });

      //this allows it to work on refreshing the page
      window.Snipcart.subscribe('cart.ready', (data) => {
          var count = window.Snipcart.api.items.count();
          this.updateItemTotal(count)
      });
  };
      (!this.state.condition == 'hide') ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
  }

  componentWillUnmount () {
    window.Snipcart.unsubscribe('cart.closed');
    window.Snipcart.unsubscribe('cart.ready');
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
          <TitleMenu />
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
              <span className="snipcart-total-items">{this.state.items}</span>
              
          </div>
        </div>
        <button
          id="responsive-menu"
          className="headerMenu"
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
