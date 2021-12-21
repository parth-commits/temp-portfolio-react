import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        if (!this.state.clicked) {
            disableBodyScroll(document.querySelector('#nav-bar-scroll-id'));
        } else {
            enableBodyScroll(document.querySelector('#nav-bar-scroll-id'));
        }
        this.setState({ clicked: !this.state.clicked })
    }

    componentWillUnmount() {
        // clears all scroll locks if any
        clearAllBodyScrollLocks();
    }
    render() {
        return(
            <nav className="NavbarItems" id="nav-bar-scroll-id">
                <h1 className="navbar-logo"><a href="#">Parth Patel</a></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={this.handleClick}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}


export default Navbar;