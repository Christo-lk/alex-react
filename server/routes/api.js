const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

// RETURN ALL SONGS
router.get('/getsongs', (req, res) => {
  db.getSongs()
    .then(result => res.json(result))
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'cant get songs' })
    })
  // res.send('youve reached the api')
})
