import './App.css'
import Canvasjsx from './components/Canvasjsx/Canvasjsx'
import HelloD3 from './components/HelloD3/HelloD3'
import HelloJsxData from './components/HelloJSXData/HelloJsxData'
import HelloSvg from './components/HelloSVG/HelloSVG'

function App() {
  return (
    <div>
      {/* <HelloD3 /> */}
      {/* <Canvasjsx /> */}
      {/* <HelloSvg /> */}
      <HelloJsxData data={["one", "two", "three"]}/>
    </div>
  )
}

export default App 
