import Slider from "react-slick";
import React, { Component  } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Landing from '../Landing'
import Populars from '../Populars'
import logic from '../../logic'
import './index.sass'

import Navbar from '../Navbar'
import Login from '../login'
import Search from '../search'
import Details from '../Detail'
import CocktailResults from '../CocktailResults'




class Home extends Component {

    state = { populars: [], toggleLogin: false , islogedIn:false, defaultquery:null}

    handlePpopular = () =>{

        return logic.popularCocktails()
        .then(response =>{
        
          this.setState({populars:response})
          
        })
    }

   /*  handleSearch = (query) => {
        this.setState({ defaultquery : query })      
    }  */

    goToSearch = () =>{
      this.props.history.push("/Home/CocktailResults")
    }

    

    LoginVisibleHandler = () =>{
          this.setState({toggleLogin:!this.state.toggleLogin})
     
    }
      componentDidMount = () => {
        this.handlePpopular()
      }

    handleLogin = (username, password) => {
    
    try {
      logic.loginUser(username, password)
        .then(() =>
          logic.retrieveUser()
        )
        .then(({ name }) => {
          this.setState({ name, error: null })
        })
        .catch(error =>
          this.setState({ error: error.message })
        )
        this.setState({toggleLogin:!this.state.toggleLogin})
        this.setState({islogedIn:true})
    } catch ({ message }) {
      this.setState({ error: message })
    }
  }

   
  render() {
      const {
        state: {populars,toggleLogin,islogedIn, defaultquery },
        handleLogin,
        LoginVisibleHandler,
        handleSearch,

        } = this
    
        return <>
                {defaultquery && <Route path="/Home/CocktailResults" render={() => <CocktailResults default={defaultquery}/>} />}
                {/* <Route exact path="/" render={() => <Search  onSearch={handleSearch} />} /> */}
                {toggleLogin && <Login togglelogin={LoginVisibleHandler} onLogin={handleLogin}/>}
                <Navbar/>
                <Landing/>
                <nav class="level is-mobile bar">
                <p class="level-item has-text-centered">
                <a /*onClick={() => onRegister()}*/ class="link is-info  regist-login">Register</a>
                </p>
                <p class="level-item has-text-centered">
                    <a onClick={() =>{if(!islogedIn) this.LoginVisibleHandler()}} class="link is-info  regist-login">
                      Login
                    </a>
                </p>
                <p class="level-item has-text-centered">
                <a onClick={() => this.goToSearch()} class="link is-info  regist-login">
                      Search
                    </a>
                </p>
                </nav>
        
            
            <Populars pops={populars}/>
      
        </>
    }   
}


export default withRouter(Home)