let MajorTeams = [
  {team: 'Gen.G Mobil1 Racing', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Virtus.pro', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'FUT Esports', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'TSM', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'ROC Esports', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Ninjas in Pyjamas', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Shopify Rebellion', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'MIBR', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'NRG', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Karmine Corp', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Twisted Minds', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Team Falcons', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Dignitas', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Team Secret', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Spacestation Gaming', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
  {team: 'Wildcard', seriesWin: 0, seriesLoss: 0, gamesWon: 0, gamesLoss: 0, gameDiff: function(){return this.gamesWon-this.gamesLoss}},
]
for (let i = 0; i < 16; i++){
  document.getElementById(`R1seed${i+1}`).innerHTML = `<span class="${MajorTeams[i].team}">${MajorTeams[i].team}</span>`
}

// document.getElementById(`R1seed${i+1}`).innerHTML = MajorSeeds[i].team


// function round1(){
//     R1seed1.addEventListener('click', handleTeamClick)
//     R1seed2.addEventListener('click', handleTeamClick)
//     R1seed3.addEventListener('click', handleTeamClick)
//     R1seed4.addEventListener('click', handleTeamClick)
//     R1seed5.addEventListener('click', handleTeamClick)
//     R1seed6.addEventListener('click', handleTeamClick)
//     R1seed7.addEventListener('click', handleTeamClick)
//     R1seed8.addEventListener('click', handleTeamClick)
//     R1seed9.addEventListener('click', handleTeamClick)
//     R1seed10.addEventListener('click', handleTeamClick)
//     R1seed11.addEventListener('click', handleTeamClick)
//     R1seed12.addEventListener('click', handleTeamClick)
//     R1seed13.addEventListener('click', handleTeamClick)
//     R1seed14.addEventListener('click', handleTeamClick)
//     R1seed15.addEventListener('click', handleTeamClick)
//     R1seed16.addEventListener('click', handleTeamClick)
// }

// function handleTeamClick(){
//   console.log(team)
// }

// round1()

// Function to update a score based on a team's ID.
// function updateScore(teamId) {
//   // Find the team's score element. The HTML structure provided
//   // suggests the score element is a sibling of the team name.
//   const teamElement = document.getElementById(teamId);
//   if (!teamElement) return;
//   // Assuming the score element is the next sibling after the team name span.
//   const scoreElement = teamElement.nextElementSibling;
//   if (!scoreElement || !scoreElement.classList.contains('seriesWin')) return;
//   let seriesWins = parseInt(scoreElement.innerHTML, 10);
//   if (isNaN(seriesWins)) {seriesWins = 0;}
//   seriesWins++;
//   scoreElement.innerHTML = seriesWins;
// }
// window.addEventListener("DOMContentLoaded", e => {
//   document.querySelectorAll(".swiss_bracket_team").forEach((element) => {
//     element.addEventListener("click", function(event){
//       console.log(element)
//       MajorSeeds.forEach((id)=>{
//         if (event.target.classList.contains(id.team)) {
//           console.log(id.team)
          
//           const teamId = event.target.id;
//           updateScore(teamId);
//           console.log(event.target.seriesWin)
//         }
//       })
//     })
//   });
// })

let Round2Seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
let Round3Seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
let Round4Seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
let Round5Seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
let Round6Seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
let Round1Matches = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let Round2Matches = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let Round3Matches = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let Round4Matches = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let Round5Matches = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let Round6Matches = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
for (let i = 0; i < 16; i++){
  document.getElementById(`R2seed${i+1}`).innerHTML = `<span class="${Round2Seeds[i]}">${Round2Seeds[i]}</span>`
}
for (let i = 0; i < 16; i++){
  document.getElementById(`R3seed${i+1}`).innerHTML = `<span class="${Round3Seeds[i]}">${Round3Seeds[i]}</span>`
}
for (let i = 0; i < 16; i++){
  document.getElementById(`R4seed${i+1}`).innerHTML = `<span class="${Round3Seeds[i]}">${Round4Seeds[i]}</span>`
}

function updateGamesScores(advancementForWinner, advancementForLoser, roundID, winner, loser){
  MajorTeams.forEach((id) =>{
    if(winner === id.team){
      id.seriesWin++
    }
    if(loser === id.team){
      id.seriesLoss--
    }
  })
  document.getElementById(advancementForWinner).innerHTML = winner //Injecting winner to position of advancement
  document.getElementById(advancementForLoser).innerHTML = loser
  roundID.winner = winner //used for the next round
  roundID.loser = loser //used for the next round
}
function updateGamesScores2(roundID, index, winner, loser){
  MajorTeams.forEach((id) =>{
    if(winner === id.team){
      id.seriesWin++
    }
    if(loser === id.team){
      id.seriesLoss--
    }
  })
  if(roundID.includes('Round3')){
    document.getElementById(`R3seed${index}`).innerHTML = winner //Injecting winner to position of advancement
    document.getElementById(`R3seed${17-index}`).innerHTML = loser
    roundID[index] = winner //used for the next round
    roundID[index] = loser //used for the next round
  }
}
updateGamesScores2(Round3Seeds, 0, "Geng", "NRG")
console.log(Round3Seeds[0])

function playin(){
let winnerPuqfm1 = '';
let winnerPuqfm2 = '';
let winnerPuqfm3 = '';
let winnerPuqfm4 = '';
let winnerPusfm1 = '';
let winnerPusfm2 = '';
let winnerPlqfm1 = '';
let winnerPlqfm2 = '';
let winnerPlsfm1 = '';
let winnerPlsfm2 = '';
let loserPuqfm1 = '';
let loserPuqfm2 = '';
let loserPuqfm3 = '';
let loserPuqfm4 = '';
let loserPusfm1 = '';
let loserPusfm2 = '';
function puqfm1(winner, loser){
  document.getElementById("winner_puqfm1").innerHTML=winner;
  document.getElementById("loser_puqfm1").innerHTML=loser;
  winnerPuqfm1 = winner;
  loserPuqfm1 = loser;
}
function puqfm2(winner, loser){
  document.getElementById("winner_puqfm2").innerHTML=winner;
  document.getElementById("loser_puqfm2").innerHTML=loser;
  winnerPuqfm2 = winner;
  loserPuqfm2 = loser;
}
function puqfm3(winner, loser){
  document.getElementById("winner_puqfm3").innerHTML=winner;
  document.getElementById("loser_puqfm3").innerHTML=loser;
  winnerPuqfm3 = winner;
  loserPuqfm3 = loser;
}
function puqfm4(winner, loser){
  document.getElementById("winner_puqfm4").innerHTML=winner;
  document.getElementById("loser_puqfm4").innerHTML=loser;
  winnerPuqfm4 = winner;
  loserPuqfm4 = loser;
}
function pusfm1(winner, loser){
  document.getElementById("winner_pusfm1").innerHTML=winner;
  document.getElementById("loser_pusfm1").innerHTML=loser;
  winnerPusfm1 = winner;
  loserPusfm1 = loser;
}
function pusfm2(winner, loser){
  document.getElementById("winner_pusfm2").innerHTML=winner;
  document.getElementById("loser_pusfm2").innerHTML=loser;
  winnerPusfm2 = winner;
  loserPusfm2 = loser;
}
function plqfm1(winner){
  document.getElementById("winner_plqfm1").innerHTML=winner;
  winnerPlqfm1 = winner;
}
function plqfm2(winner){
  document.getElementById("winner_plqfm2").innerHTML=winner;
  winnerPlqfm2 = winner;
}
function plsfm1(winner){
  document.getElementById("winner_plsfm1").innerHTML=winner;
  document.getElementById("ps3").innerHTML=winner;
  winnerPlsfm1 = winner;
}
function plsfm2(winner){
  document.getElementById("winner_plsfm2").innerHTML=winner;
  document.getElementById("ps4").innerHTML=winner;
  winnerPlsfm2 = winner;
}
}
function groupA(){
    // GROUP A
let winnerGAuqfm1 = ''
let winnerGAuqfm2 = ''
let winnerGAuqfm3 = ''
let winnerGAuqfm4 = ''
let winnerGAusfm1 = ''
let winnerGAusfm2 = ''
let winnerGAlqfm1 = ''
let winnerGAlqfm2 = ''
let winnerGAlsfm1 = ''
let winnerGAlsfm2 = ''
let loserGAuqfm1 = ''
let loserGAuqfm2 = ''
let loserGAuqfm3 = ''
let loserGAuqfm4 = ''
let loserGAusfm1 = ''
let loserGAusfm2 = ''
let GAUH = ''
let GAUL = ''
let GALH = ''
let GALL = ''
function gauqfm1(winner, loser){
  document.getElementById("winner_gauqfm1").innerHTML=winner;
  document.getElementById("loser_gauqfm1").innerHTML=loser;
  winnerGAuqfm1 = winner
  loserGAuqfm1 = loser
}
function gauqfm2(winner, loser){
  document.getElementById("winner_gauqfm2").innerHTML=winner;
  document.getElementById("loser_gauqfm2").innerHTML=loser;
  winnerGAuqfm2 = winner
  loserGAuqfm2 = loser
}
function gauqfm3(winner, loser){
  document.getElementById("winner_gauqfm3").innerHTML=winner;
  document.getElementById("loser_gauqfm3").innerHTML=loser;
  winnerGAuqfm3 = winner
  loserGAuqfm3 = loser
}
function gauqfm4(winner, loser){
  document.getElementById("winner_gauqfm4").innerHTML=winner;
  document.getElementById("loser_gauqfm4").innerHTML=loser;
  winnerGAuqfm4 = winner
  loserGAuqfm4 = loser
}
function gausfm1(winner, loser){
  document.getElementById("winner_gausfm1").innerHTML=winner;
  document.getElementById("gauhs").innerHTML=winner;
  document.getElementById("loser_gausfm1").innerHTML=loser;
  winnerGAusfm1 = winner
  loserGAusfm1 = loser
  GAUH = winner
}
function gausfm2(winner, loser){
  document.getElementById("winner_gausfm2").innerHTML=winner;
  document.getElementById("gauls").innerHTML=winner;
  document.getElementById("loser_gausfm2").innerHTML=loser;
  winnerGAusfm2 = winner
  loserGAusfm2 = loser
  GAUL = winner
}
function galqfm1(winner){
  document.getElementById("winner_galqfm1").innerHTML=winner;
  winnerGAlqfm1 = winner
}
function galqfm2(winner){
  document.getElementById("winner_galqfm2").innerHTML=winner;
  winnerGAlqfm2 = winner
}
function galsfm1(winner){
  document.getElementById("winner_galsfm1").innerHTML=winner;
  document.getElementById("galhs").innerHTML=winner;
  winnerGAlsfm1 = winner
  GALH = winner
}
function galsfm2(winner){
  document.getElementById("winner_galsfm2").innerHTML=winner;
  document.getElementById("galls").innerHTML=winner;
  winnerGAlsfm2 = winner
  GALL = winner
}
}
function groupB(){
    // GROUP B
let winnerGBuqfm1 = ''
let winnerGBuqfm2 = ''
let winnerGBuqfm3 = ''
let winnerGBuqfm4 = ''
let winnerGBusfm1 = ''
let winnerGBusfm2 = ''
let winnerGBlqfm1 = ''
let winnerGBlqfm2 = ''
let winnerGBlsfm1 = ''
let winnerGBlsfm2 = ''
let loserGBuqfm1 = ''
let loserGBuqfm2 = ''
let loserGBuqfm3 = ''
let loserGBuqfm4 = ''
let loserGBusfm1 = ''
let loserGBusfm2 = ''
let GBUH = ''
let GBUL = ''
let GBLH = ''
let GBLL = ''
function gbuqfm1(winner, loser){
  document.getElementById("winner_gbuqfm1").innerHTML=winner;
  document.getElementById("loser_gbuqfm1").innerHTML=loser;
  winnerGBuqfm1 = winner
  loserGBuqfm1 = loser
}
function gbuqfm2(winner, loser){
  document.getElementById("winner_gbuqfm2").innerHTML=winner;
  document.getElementById("loser_gbuqfm2").innerHTML=loser;
  winnerGBuqfm2 = winner
  loserGBuqfm2 = loser
}
function gbuqfm3(winner, loser){
  document.getElementById("winner_gbuqfm3").innerHTML=winner;
  document.getElementById("loser_gbuqfm3").innerHTML=loser;
  winnerGBuqfm3 = winner
  loserGBuqfm3 = loser
}
function gbuqfm4(winner, loser){
  document.getElementById("winner_gbuqfm4").innerHTML=winner;
  document.getElementById("loser_gbuqfm4").innerHTML=loser;
  winnerGBuqfm4 = winner
  loserGBuqfm4 = loser
}
function gbusfm1(winner, loser){
  document.getElementById("winner_gbusfm1").innerHTML=winner;
  document.getElementById("gbuhs").innerHTML=winner;
  document.getElementById("loser_gbusfm1").innerHTML=loser;
  winnerGBusfm1 = winner
  loserGBusfm1 = loser
  GBUH = winner
}
function gbusfm2(winner, loser){
  document.getElementById("winner_gbusfm2").innerHTML=winner;
  document.getElementById("gbuls").innerHTML=winner;
  document.getElementById("loser_gbusfm2").innerHTML=loser;
  winnerGBusfm2 = winner
  loserGBusfm2 = loser
  GBUL = winner
}
function gblqfm1(winner){
  document.getElementById("winner_gblqfm1").innerHTML=winner;
  winnerGBlqfm1 = winner
}
function gblqfm2(winner){
  document.getElementById("winner_gblqfm2").innerHTML=winner;
  winnerGBlqfm2 = winner
}
function gblsfm1(winner){
  document.getElementById("winner_gblsfm1").innerHTML=winner;
  document.getElementById("gblhs").innerHTML=winner;
  winnerGBlsfm1 = winner
  GBLH = winner
}
function gblsfm2(winner){
  document.getElementById("winner_gblsfm2").innerHTML=winner;
  document.getElementById("gblls").innerHTML=winner;
  winnerGBlsfm2 = winner
  GBLL = winner
}
}
function playoff(){
    // Playoffs
let winnerPOuqfm1 = '';
let winnerPOuqfm2 = '';
let loserPOuqfm1 = '';
let loserPOuqfm2 = '';
let winnerPOlrm1 = '';
let winnerPOlrm2 = '';
let winnerPOlqfm1 = '';
let winnerPOlqfm2 = '';
let winnerPOlsfm1 = '';
let winnerPOlsfm2 = '';
function pouqfm1(winner, loser){
  document.getElementById("winner_pouqfm1").innerHTML=winner;
  document.getElementById("loser_pouqfm1").innerHTML=loser;
  winnerPOuqfm1 = winner;
  loserPOuqfm1 = loser;
}
function pouqfm2(winner, loser){
  document.getElementById("winner_pouqfm2").innerHTML=winner;
  document.getElementById("loser_pouqfm2").innerHTML=loser;
  winnerPOuqfm2 = winner
  loserPOuqfm2 = loser
}
function polrm1(winner){
  document.getElementById("winner_polrm1").innerHTML=winner;
  winnerPOlrm1 = winner;
}
function polrm2(winner){
  document.getElementById("winner_polrm2").innerHTML=winner;
  winnerPOlrm2 = winner;
}
function polqfm1(winner){
  document.getElementById("winner_polqfm1").innerHTML=winner;
  winnerPOlqfm1 = winner;
}
function polqfm2(winner){
  document.getElementById("winner_polqfm2").innerHTML=winner;
  winnerPOlqfm2 = winner;
}
function polsfm1(winner){
  document.getElementById("winner_polsfm1").innerHTML=winner;
  winnerPOlsfm1 = winner
}
function polsfm2(winner){
  document.getElementById("winner_polsfm2").innerHTML=winner;
  winnerPOlsfm2 = winner
}
function finalWinner(winner){
  document.getElementById("tourneyWinner").innerHTML=winner;
}
}