import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {
  return (
      <BrowserRouter>
          <Route path="/" component={Login}/>
      </BrowserRouter>
  );
}


export default App;
