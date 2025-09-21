/*Conditional rendering to display text*/

import Login from './Login'

function App() {
  return(
    <Login isLoggedIn={false}/>
  );
}

export default App
