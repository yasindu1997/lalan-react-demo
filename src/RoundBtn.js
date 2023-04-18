import React from 'react'

export default function RoundBtn(props) {
  return (
    <div>
        <button style={{backgroundColor:props.color,borderRadius:100,padding:20,color:'white'}}>{props.name}</button>
    </div>
  )
}
