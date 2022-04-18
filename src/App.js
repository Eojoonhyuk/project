import React, {Components} from 'react';
import './App.css';
import {BrowserRouter, Router, Route, Routes, Link} from 'react-router-dom'
import {useState} from 'react';
import Drink from "./components/Drink";

function Header(props){
  return(
    <div className="header">
      <div className="header_logo">
        <h1><a href="/">{props.title}</a></h1>
      </div>
      <div className="search">
        <form>
              <input type="text" className="search_input" placeholder="검색어를 입력해주세요."></input>
              <button type="submit" className="search_sumit">
                <span className="blind">검색</span>
              </button>
        </form>         
    </div>
    <div className="user">
      <ul>
        <il><a href="/">로그인</a></il>
      </ul>
    </div>

    </div>
  );
}

function Container(){
  return(
  <div className="main_container">
    <div className="aside">
      <div className="test">
          <ul><li><Link to="/Drink">테스트</Link></li></ul>
      </div>
      <div className="catagory">
        <ul>
          <li><a href="/">menu1</a></li>
          <li><a href="/">menu2</a></li>
          <li><a href="/">menu3</a></li>
          <li><a href="/">menu4</a></li>
          <li><a href="/">menu5</a></li>
      </ul>
      </div>
    </div>
    <div className="section">
      <h2>display</h2>
    </div>
  </div>
  );
}

function Footer(){
  return(
  <div className="footer">
    <h2>footer</h2>
  </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="(로고)"></Header>
        <Container></Container>
        <Footer></Footer>
      <Routes>   
        <Route path='/' element={<Drink/>}>
          <Drink/>
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;