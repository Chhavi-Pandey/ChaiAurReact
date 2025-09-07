import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom APP</h1>
    </div>
  )
} 
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
  //you can inject variable in last;  means here
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
  
    reactElement
  
)
