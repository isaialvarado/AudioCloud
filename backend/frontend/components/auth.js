// import React from 'react';
// import { withRouter } from 'react-router';
module.exports = {

    login: function() {
      // console.log(localStorage.logged_in);
      // console.log("before update");
      localStorage.setItem("logged_in", "true");
      // console.log(localStorage.logged_in);
      // console.log('login');
      // return localStorage.logged_in;
    },

    logout: function() {
      // localStorage.setItem("logged_in", "false");
      // console.log(localStorage.logged_in);
      return localStorage.logged_in;
    },

    loggedIn: function() {
      // localStorage.setItem("logged_in", "true");
      // console.log(localStorage.logged_in);
      // console.log("in auth");
      return localStorage.logged_in;
    },


};
