import React from 'react'
import { ThemecontextConsumer } from './ThemeContext'

function Navbar() {
  return (
    <ThemecontextConsumer>
    {
        (context)=>(
            <div className='row'>
            <div>React Navbar</div>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            </div>
        )
    }
    </ThemecontextConsumer>
  )
}

export default Navbar
