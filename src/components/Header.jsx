import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../store'

const Header = () => {
   const context = useContext(GlobalContext)
   console.log(context);
  return (
    <HeaderStyle>
      <h1>Header</h1>
      {!context.state && <button>Login</button>}
      {context.state && <button onClick={context.falseState}>Logout</button>}
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
    padding: 20px;
    background-color: bisque;
    display: flex;
    align-items: center;
    justify-content: space-around;
`