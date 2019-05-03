import { BrowserRouter as Router, Route, Link, Prompt, Switch, withRouter } from "react-router-dom";
import React, { Component } from 'react'
import logic from '../../logic'
import Search from '../search'
import Results from '../Results'
import Detail from '../Detail'
//components

import Navbar from "../Navbar";
import SearchTitle from '../SearchTitle'

class CocktailResults extends Component {

  state = {errorSearch: null , results: [] , query:'',details:[] }

  componentDidMount(){
    this.handleSearch(this.state.query)
  }
  
  handleSearch = (query) => {
    
     return logic.cocktailbyName(query)
     .then(response => {
       this.setState({query:`Search: ${query}`})
       this.setState({results : response})
     })
     .catch(response =>{
        this.setState({errorSearch :response.message})
        this.setState({query:`${response.message}`})
     })

  }
  
  handleDetail = (id) =>{
  
    return logic.cocktailDetail(id)
    .then(response =>{
      this.setState({details : response, visible :true})
      this.props.history.push("/Home/CocktailResults/Detail")
    })
  }



  handleCategorySearch = (query) => {

/*     logic.searchByCategory(query).then(res => {
      console.log(res)
    }) */
    return logic.searchByCategory(query)
    .then(response => {
      this.setState({query:`Category: ${query}`})
      console.log(response)
      this.setState({results : response})
    })
    .catch(response =>{
       this.setState({errorSearch :response.message})
       this.setState({query:`${response.message}`})
    })
 }

  
  render() {
    const {
      state: { errorSearch, results ,details},
      handleSearch,
      handleFavorites,
      handleDetail,
      handleCategorySearch
    } = this


    return <>
        <Route exact path="/Home/CocktailResults/Detail" render={()=> <Detail detail={details}/>}/>
        <Navbar categorySearch={handleCategorySearch}/> 
        <Route path="/Home/CocktailResults/Search" render={() =><Search onSearch={handleSearch} error={errorSearch}/>} />
        <SearchTitle query={this.state.query} error={this.state.error}/>
        <Results items={results} onFavorites={handleFavorites} onDetail={handleDetail} />
{/*         <Favorites favs={favoriteList} giveFav={returnFavorites}/>
        <button>Login</button>
        <button>register</button>
        <Populars pops={populars} givePop={handlePpopular}  onFavorites={handleFavorites} onDetail={handleDetail}/>
        <Favorites favs={favoriteList} giveFav={returnFavorites} onDetail={handleDetail}/>
        <Register onRegister={handleRegister} error={error} />
        <Login onLogin={handleLogin} error={error} /> */}
    </>

  }
}




export default withRouter(CocktailResults)
