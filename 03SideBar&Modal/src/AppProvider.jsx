/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext,createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)

    function toggleModal() {
        setShowModal(!showModal)
    }
    function toggleSidebar() {
        setShowSidebar(!showSidebar)
    }

   return (
        <AppContext.Provider value={{ showModal, toggleModal, showSidebar, toggleSidebar }}>
            {children}
        </AppContext.Provider>
   ) 
}
export {AppContext,AppProvider}