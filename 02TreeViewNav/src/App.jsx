/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MenuList from './components/MenuList'
import menus from './data'


function App() {
  
  const TreeView = ({menu = []}) => {

    return (
      <div style={{background:'indigo',color:'lightgray',fontWeight:'bold',width:'25%',minHeight:'100vh',height:'100%',paddingTop:'5%',fontSize:'20px'}}>
        <MenuList list={menus} />
      </div>
    )
  }
  return (
    <div>
      <TreeView />
    </div>
  )
}

export default App
