function loginFunction(){
    document.getElementById("test").innerHTML = "This text can change!!";
  }

function sendRosterChange(){
  alert('Form has been sent to administrator.');
  document.getElementById("player1drop").innerHTML = "Player dropped";
}


// Bracket Functions
// upper winner
let winnerPuqfm1 = ''
let winnerPuqfm2 = ''
let winnerPuqfm3 = ''
let winnerPuqfm4 = ''
let winnerPusfm1 = ''
let winnerPusfm2 = ''
// lower winner
let winnerPlqfm1 = ''
let winnerPlqfm2 = ''
let winnerPlsfm1 = ''
let winnerPlsfm2 = ''
//upper loser
let loserPuqfm1 = ''
let loserPuqfm2 = ''
let loserPuqfm3 = ''
let loserPuqfm4 = ''
let loserPusfm1 = ''
let loserPusfm2 = ''

function puqfm1(winner, loser){
  document.getElementById("winner_puqfm1").innerHTML=winner;
  document.getElementById("loser_puqfm1").innerHTML=loser;
  winnerPuqfm1 = winner
  loserPuqfm1 = loser}
function puqfm2(winner, loser){
  document.getElementById("winner_puqfm2").innerHTML=winner;
  document.getElementById("loser_puqfm2").innerHTML=loser;
  winnerPuqfm2 = winner
  loserPuqfm2 = loser}
function puqfm3(winner, loser){
  document.getElementById("winner_puqfm3").innerHTML=winner;
  document.getElementById("loser_puqfm3").innerHTML=loser;
  winnerPuqfm3 = winner
  loserPuqfm3 = loser}
function puqfm4(winner, loser){
  document.getElementById("winner_puqfm4").innerHTML=winner;
  document.getElementById("loser_puqfm4").innerHTML=loser;
  winnerPuqfm4 = winner
  loserPuqfm4 = loser}
// pusf
function pusfm1(winner, loser){
  document.getElementById("winner_pusfm1").innerHTML=winner;
  document.getElementById("loser_pusfm1").innerHTML=loser;
  winnerPusfm1 = winner
  loserPusfm1 = loser}
function pusfm2(winner, loser){
  document.getElementById("winner_pusfm2").innerHTML=winner;
  document.getElementById("loser_pusfm2").innerHTML=loser;
  winnerPusfm2 = winner
  loserPusfm2 = loser}
// plqf
function plqfm1(winner, loser){
  document.getElementById("winner_plqfm1").innerHTML=winner;
  winnerPlqfm1 = winner}
function plqfm2(winner, loser){
  document.getElementById("winner_plqfm2").innerHTML=winner;
  winnerPlqfm2 = winner}
// plsf
function plsfm1(winner, loser){
  document.getElementById("winner_plsfm1").innerHTML=winner;
  winnerPlsfm1 = winner}
function plsfm2(winner, loser){
  document.getElementById("winner_plsfm2").innerHTML=winner;
  winnerPlsfm2 = winner}

// id="" onclick="(,)"