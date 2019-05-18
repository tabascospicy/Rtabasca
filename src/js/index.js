import React, { Component } from 'react';
import {render} from 'react-dom';
import { Router, Route,IndexRoute,HashRouter } from "react-router-dom";
import App from './Components/app';

render(
     <App tittle="blog"/>
   , document.getElementById('App')
    )

