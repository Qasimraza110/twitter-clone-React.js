import React from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar'

function App() {
  return (
    <div className="bg-black text-white">
      <div className="flex md:container mx-auto my-4">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  )
}

export default App 