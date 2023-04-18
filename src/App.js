
import React from 'react'

export default function App() {
  function saveData(){
    console.log("helloooo...");
  }

  return (
    <div onClick={saveData}>App</div>
  )
}
