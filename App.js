
import * as React from 'react';
import AppNavigation from './src/Navigation/AppNavigation';
import authContext from './src/context/Contexts';
export default function App() {
  const {auth,setAuth} = React.useState(false);
  return (
    <authContext.Provider value={{auth,setAuth}}>
      <AppNavigation />
    </authContext.Provider>
  )
}