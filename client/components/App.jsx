import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

// COMPONENTS
import Contact from './Contact'

function App () {
  const a = 10
  const b = 20

  const c = a + b

  const database = [
    {
      name: 'alex',
      age: '246',
      sex: 'loads',
      location: 'wellinton'
    },
    {
      name: 'Christo',
      age: '23',
      sex: 'loads',
      location: 'AK'
    },
    // {
    //   name: 'Konty',
    //   age: '24',
    //   sex: 'none',
    //   location: 'CHCH'
    // },
    // {
    //   name: 'Jennifer',
    //   age: '30',
    //   sex: 'not enough',
    //   location: 'wellinton'
    // },
    // {
    //   name: 'Sam',
    //   age: '17',
    //   sex: 'GOD',
    //   location: 'Pauanui'
    // }
  ]

  return (

    <div className="bg-blue-200 w-full h-96">
      <h1>Welcome to the App! my favourite number is {c}</h1>
      {/* <Contact name="Alex" age={24} sex="too much" location="wellington"/>
      <Contact name="Christo" age={24} sex="gay" location="Auckland"/> */}

      {
        database.map(result => <Contact key={result.age} person={result}/>)
      }

    </div>

  )
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(App)
