import React from 'react'
import Navbar from './Navbar'
import { ThemecontextConsumer } from './ThemeContext'

function Layout(props) {
  return (
    <ThemecontextConsumer>
    {
        (context)=>(

            <div>

            <div className={`header ${context.theme}`}>
            <Navbar />
            </div>
            {props.children}
            
            
            </div>
           
        )
    }
    </ThemecontextConsumer>
  )
}

export default Layout