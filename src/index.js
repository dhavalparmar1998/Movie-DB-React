import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css'

import { RouterProvider } from 'react-router-dom';
import projectRoute from './projectRoute';
// import './App.css'

import './App.css'

ReactDOM
.createRoot(document.getElementById("root"))
.render(<RouterProvider router={projectRoute} />);