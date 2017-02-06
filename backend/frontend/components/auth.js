// import React from 'react';
// import { withRouter } from 'react-router';
module.exports = {

    login: function() {
      localStorage.setItem("logged_in", "true");
    },

    logout: function() {
      return localStorage.logged_in;
    },

    loggedIn: function() {
      return localStorage.logged_in;
    },


};
