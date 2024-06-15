import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import AllRooms from "./components/AllRooms/Rooms";
import SignUp from "./components/LogReg/SignUp";
import Login from "./components/LogReg/Login";
import Contacts from "./components/Contacts/Contacts";
import AboutUs from "./components/AboutUs/AboutUs";
import BookRoom from "./components/BookRooms/BookRoom";
import Demo from "./components/Demo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Header currentPage= "All ROOMS" />
            <AllRooms />
            <Footer/>
          </Route>

          <Route exact path="/contacts">
            <div>
              <Header currentPage = "CONTACTS" />
              <Contacts />
              <Footer/>

            </div>
          </Route>
          <Route exact path="/aboutus">
            <div>
              <Header currentPage = "ABOUT US"/>
              <AboutUs />
              <Footer/>

            </div>
          </Route>
          <Route exact path="/bookroom">
            <div>
              <Header currentPage = "BOOK ROOMS" />
              <BookRoom />
              <Footer/>

            </div>
          </Route>
          <Route exact path="/demo-controller">
            <div>
              <Demo />
            </div>
          </Route>
          <Route exact path="/login">
            <div>
              <Login />
            </div>
          </Route>
          <Route exact path="/register">
            <div>
              <SignUp />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
