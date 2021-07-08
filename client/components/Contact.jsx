import React, { useState } from 'react'

export default function Contact (props) {
  const { name, age, sex, location } = props.person

  console.log('props:', props)

  const [amount, setAmount] = useState(0)

  const colors = ['blue', 'red', 'green', 'yellow']

  return (
    <div className="p-10">

      <div className= {`h-32 w-52 bg-${colors[amount]}-200 flex flex-col p-3 m-3`}>
        <div>name: {name}</div>
        <div>age: {age}</div>
        <div>sex: {sex}</div>
        <div>location: {location}</div>
        <div>times banged: {amount}</div>
        <div>
          <button onClick={() => setAmount(amount + 1)}>+ 1</button>
        </div>
      </div>

    </div>
  )
}
