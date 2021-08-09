// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = vertex.router()

const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

const players = [
  {firstName: "John", lastName:"Carrol", position: "Point-guard", age: 20, team: "Lakers"},
  {firstName: "David", lastName:"Bucks", position: "Center", age: 27, team: "Nets"},
  {firstName: "John", lastName:"Carrol", position: "Point-guard", age: 20, team: "Hornets"}
  
]

const teams = [
{name: "Rockets", city: "Houston", conference: "Western"},
{name: "Lakers", city: "Los Angeles", conference: "Western"},
{name: "Cavaliers", city:"Cleveland", conference: "Eastern"}

]

const db = {
  team: teams,
  player: players
}

router.get('/:resource', (req, res) =>{
  // sets resource to desired requested data example noted below: player/team
  const resource = req.params.resource
const data = db[resource]
if (data == null){
  res.json({
    confirmation: 'fail',
    message: 'request failed'
  })
}
res.json({
  confirmation: 'success',
  data: data
})

 /* if (resource == 'team'){
    res.json({
      confirmation: 'success',
      data: teams
    })

    return
  }
  
  if (resource == 'player'){
    res.json({
      confirmation: 'success',
      data: players
    })

    return
  }
  res.json({
    confirmation: 'fail',
    message: "request failed"
  })
}) 

router.get('/player', (req, res) => {
  res.json({
    confirmation: 'success',
    data: players
  })

})

router.get('/team', (req, res) => {
  res.json({
    confirmation: 'success',
    data: teams
  })
})
module.exports = router

*/