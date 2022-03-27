const uuid = require('./utils').uuid;

let biography = {
    firstName: "Christoph",
    lastName:"Waltz",
    url:"../assets/imgs/christoph_waltz.jpg",
    about:"Lorem ipsum dolor"
  }

exports.biography= biography;

let projects= [
    {name: "Django Unchained",description:"Christophs second blockbuster",id:uuid()},
    {name: "Inglorious Bastards",description:"Bradd Pitt is main character",id:uuid()}
  ]

exports.projects=projects;