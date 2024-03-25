import { useState } from 'react'
import Tabs from './Tabs'

function App() {
  const [count, setCount] = useState(0)
  const tabs = [{
    label: 'Tab 1',
    content: <div>Tab 1 content</div>
  }, 
  {
    label: 'Tab 2',
    content: <div>Tab 2 content</div>
  }, 
  {
    label: 'Tab 3',
    content: <div>Tab 3 content</div>
  }]

  function handleChange(currentTab){
    console.log(currentTab)
  }
  return (
    <Tabs tabsContent={tabs} onChange={handleChange} />
  )
}

export default App
