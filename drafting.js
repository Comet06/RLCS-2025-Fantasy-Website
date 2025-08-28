let availablePlayers = ['test']
let flip_lord = ['Kiileerrz','Daniel','Atow']; //player 1, 2, 3
let doofenschmirtz_inc = ['Rw9','TRK511','Atomic'];
let goofy_goobers = ['Atomik','Firstkiller','Exotiik'];
let karat_gold = ['M0nkey M00n','ApparentlyJack','Nwpo'];
let skibideeznuts = ['Beastmode','Yanxnz','Vatira'];
let team_canada = ['Zen','Dralii','LJ'];

function sendRosterChange(){
  const inputElement = document.getElementById('team'); // save the value of the input element to the variable
  const teamname = inputElement.value; //get the "value" of the variable and save that to a different variable
  if (teamname === 'Flip Lord'){
    draftDrop(flip_lord)
  } else if (teamname === 'Doofenschmirtz Inc.'){
    draftDrop(doofenschmirtz_inc)
  } else if (teamname === '24 Karat Gold'){
    draftDrop(karat_gold)
  } else if (teamname === 'Goofy Goobers'){
    draftDrop(goofy_goobers)
  } else if (teamname === 'Skibideeznuts'){
    draftDrop(skibideeznuts)
  } else if (teamname === 'Team Canada'){
    draftDrop(team_canada)
  } else {
    alert('Invalid Team name, try again.')
  }
}

function draftDrop(team){
  const pickup1 = document.getElementById('player1pickup');
  const Pplayer1 = pickup1.value;
  const pickup2 = document.getElementById('player2pickup');
  const Pplayer2 = pickup2.value;
  const pickup3 = document.getElementById('player3pickup');
  const Pplayer3 = pickup3.value;
  

  if (Pplayer1 === ''){
    console.log('recognized as blank')
  } else if (availablePlayers.includes(Pplayer1)){
    team[0]=Pplayer1;
  } else {
    console.log('recognized as error')
    // Do nothing
  }
  if (Pplayer2 === ''){
    console.log('recognized as blank')
    // Do nothing
  } else if (availablePlayers.includes(Pplayer2)){
    team[1]=Pplayer2;
  } else {
    console.log('recognized as error')
    // Do nothing
  }
  if (Pplayer3 === ''){
    console.log('recognized as blank')
    // Do nothing
  } else if (availablePlayers.includes(Pplayer3)){
    team[2]=Pplayer3;
  } else {
    console.log('recognized as error')
    // Do nothing
  }
}



function importPlayers(){
  alert('test')
}

function importTeams(){
  alert('test')
}