import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from "./Main";
import Aboute from "./About";
// import Addition from "./controlledcomponents/AdditionClass";
import Swap from "./controlledcomponents/SwapClass";
import Addition from "./uncontrolledcomponents/Addition";
import Propexample from "./PropsExample";
import MountingExample from "./reactlifecycle/MountingExample";
import UpdatingExample from "./reactlifecycle/UpdatingExample";
import UnmmountingExample from "./reactlifecycle/UnmmountingExample";
import FunctionalCycle from "./reactlifecycle/FunctionalCycle";
import MountInFunc from "./reactlifecycle/MountInFunc";
import MountingExampleFunction from "./reactlifecycle/MountingExample";
import FetchGetExample from "./apiexample/FetchGetExample";
import FetchPostExample from "./apiexample/FetchPostExample";
import FetchMain from "./apiexample/FetchMain";
import FetchDeleteExample from "./apiexample/FetchDeleteExample";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main /> */}
    {/* <App /> */}
    {/* <Addition /> */}
    {/* <Swap /> */}
    {/* <Addition /> */}
    {/* <Propexample name="Ajay" /> */}
    {/* <MountingExample /> */}
    {/* <UpdatingExample /> */}
    {/* <UnmmountingExample /> */}
    {/* <FunctionalCycle /> */}
    {/* <MountInFunc /> */}
    {/* <MountingExampleFunction /> */}
    {/* <FetchGetExample /> */}
    <FetchPostExample />
    {/* <FetchDeleteExample /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
