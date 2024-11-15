import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Chai from './chai.jsx'

function MyApp() {
  return (
    <div>
        <h3>this is MyApp Custom Function</h3>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.civilgeo.com',
//       target: '_blank'
//   },
//   children: 'Click to visit CivilGEO Website'
// }

const newElement =  (
    <a href='https://www.civilgeo.com' target='_blank'>Visit CivilGEO</a>
)


const reactElement = React.createElement(
  'a',
  {
    href: 'https://civilgeo.com',
    target: '_blank'
  },
  'Click to Visit CivilGEO Website'
  
)

createRoot(document.getElementById('root')).render(

<App />
)
