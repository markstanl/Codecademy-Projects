const team = {
  _players: [
    { firstName: 'Mark', lastName: 'Stanley', age: 18},
    { firstName: 'John', lastName: 'Johnson', age: 21},
    { firstName: 'Hazel', lastName: 'Smith', age: 24}
    ],
  _games: [ //named after home state high school teams
    {opponent: "CRM", teamPoints: 7, opponentPoints: 20},
    {opponent: "OSO", teamPoints: 9, opponentPoints: 19},
    {opponent: "WZA", teamPoints: 8, opponentPoints: 18},
  ],

  get players(){
    return this._players;
  },

  get games(){
    return this._games;
  },

  addPlayer(newFirstName,newLastName,newAge){
    let newPlayer = { firstName: newFirstName, lastName: newLastName, age: newAge};
    this._players.push(newPlayer);
  },

  addGame(newOpponent,newTeamPoints,newOpponentPoints){
    let newGame = {
      opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints
    }
    this._games.push(newGame);
  },

};

team.addPlayer('Keith','Loomis',23);
console.log(team._players);

team.addGame('Titans',100,98);
console.log(team._games);
