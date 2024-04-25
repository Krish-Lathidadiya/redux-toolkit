import React from 'react'
import CakeVew from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'

function App() {
  return (
    <div>
      <CakeVew/>
      <IcecreamView/>
      <UserView/>
    </div>
  )
}

export default App