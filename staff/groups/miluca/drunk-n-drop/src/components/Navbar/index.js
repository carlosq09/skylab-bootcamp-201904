import React, { Component } from 'react'    
import Mixer from '../Mixer'

import '../Navbar/index.sass'
import logo from '../Navbar/logomin.png'


class Navbar extends Component {
    state = { toggled: false}

    handleClick = () =>{
        this.setState( state => ({
            toggled: !state.toggled
          }));
    }

    render(){
        return <nav class="navbar is-black is-fixed-top">
        <div class="navbar-brand">
        <a class="navbar-item Navbar_logo" href="">
        <img src={logo} alt="Drunk n Drop" width="100" height="28" />
        </a>
        <div class="navbar-burger burger" onClick={this.handleClick} data-target="navbar">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
        <div id="navbar" className={this.state.toggled ?"navbar-menu is-back is-active ":"navbar-menu" }>
        <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" >
            Categories
            </a>
            <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                Cocktail
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Milk / Float / Shake
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Cocoa
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Shot
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Coffe/Tea
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Homemade Liqueour
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Punch / Party Drink
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Beer
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Soft Drink / Soda
                </a>

            </div>
        </div>
        <a class="navbar-item" href="">
            Ingredients
        </a>
            
        </div>
        </div>
    </nav>

    }  

}

export default Navbar