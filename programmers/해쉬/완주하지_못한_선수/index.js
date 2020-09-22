let participant =  ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];

let players = {};

participant.forEach(name => {
  players[name] = !players.hasOwnProperty(name) ? 1 : players[name] + 1; 
});
completion.forEach(name => {
  players[name] = players[name] - 1;
});

for(let player_name of Object.keys(players)) {
  if(players[player_name] > 0) {
    return player_name;
  }
}