import React from 'react'
import BarChart from './Components/BarChar'
import BarChart02 from './Svg/Bar_chart/BarChart'
import Cvs from './Svg/CvsFetch/Cvs'
import Emoji from './Svg/Emoji'
import MouseCircle from './Svg/MouseEvent/MouseCircle'
const App = () => {
  return (
    <div>
      <BarChart/>
      <BarChart02/>
      <Cvs/>
      <MouseCircle/>
      <Emoji/>
    </div>
  )
}

export default App