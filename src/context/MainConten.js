import React from 'react'
import { ThemecontextConsumer } from './ThemeContext'

function MainConten() {
  return (
    <ThemecontextConsumer>
    {

        (context)=>(
            <div className={`content ${context.theme}`}>
            <h1>Welcome to My App</h1>
            <p>Use Context Api to share data bw components</p>
            </div>
        )
    }
    </ThemecontextConsumer>
  )
}

export default MainConten