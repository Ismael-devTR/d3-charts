import './App.css'
import Canvasjsx from './components/Canvasjsx/Canvasjsx'
import HelloD3 from './components/HelloD3/HelloD3'
import HelloJsxData from './components/HelloJSXData/HelloJSXData'
import HelloSvg from './components/HelloSVG/HelloSVG'
import SimpleChar from './components/SimpleChart/SimpleChart'
import { SimpleChertFunction } from './components/SimpleChartFunction/SimpleChartFunction'

function App() {
  return (
    <div>
      {/* <HelloD3 /> */}
      {/* <Canvasjsx /> */}
      {/* <HelloSvg /> */}
      {/* <HelloJsxData data={["one", "two", "three"]}/> */}
      {/* <SimpleChar />  */}
      <SimpleChertFunction />
    </div>
  )
}

export default App 
