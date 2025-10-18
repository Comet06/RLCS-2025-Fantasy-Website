let MajorTeams = [
  {team: 'Gen.G Mobil1 Racing', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Virtus.pro', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'FUT Esports', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'TSM', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'ROC Esports', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Ninjas in Pyjamas', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Shopify Rebellion', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'MIBR', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'NRG', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Karmine Corp', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Twisted Minds', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Team Falcons', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Dignitas', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Team Secret', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Spacestation Gaming', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'Wildcard', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
]
// Seeding Average of 2nd major starting seed and ending seed then region rank
let ChampTeams = ['Karmine Corp', 'Team Falcons', 'NRG', 'Dignitas', 'Furia Esports', 'Twisted Minds', 'Team Vitality', 'Geekay Esports', 'The Ultimates', 'Spacestation Gaming', 'Team Secret', 'Wildcard', 'Seed 1', 'Seed 2', 'Seed 3', 'Seed 4']
let ChampPlayoffs = ['', '', '', '', '', '', '', '']
let PlayinTeams = [
  {team: 'Gen.G Mobil1 Racing', wins: 0, losses: 0, playinSeed: 1},
  {team: 'Virtus.pro', wins: 0, losses: 0, playinSeed: 2},
  {team: 'TSM', wins: 0, losses: 0, playinSeed: 3},
  {team: 'FUT Esports', wins: 0, losses: 0, playinSeed: 4},
  {team: 'ROC Esports', wins: 0, losses: 0, playinSeed: 5},//LCQ Seed 1
  {team: 'Ninjas in Pyjamas', wins: 0, losses: 0, playinSeed: 6},//LCQ Seed 2
  {team: 'Shopify Rebellion', wins: 0, losses: 0, playinSeed: 7},//LCQ Seed 3
  {team: 'MIBR', wins: 0, losses: 0, playinSeed: 8},//LCQ Seed 4
]

let R1seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] //16
let R2seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let R3seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let R4seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let R5seeds = ['', '', '', '', '', '', '', '', '', '', '', ''] //12
let R6seeds = ['', '', '', '', '', ''] //6

let playinQ = ['', '', '', '']//4
let playinUS = ['', '', '', '']
let playinLS = ['', '', '', '']
let playinF = ['', '', '', '']

let groupAQ = ['', '', '', '']
let groupAUS = ['', '', '', '']
let groupALS = ['', '', '', '']
let groupAF = ['', '', '', '']

let groupBQ = ['', '', '', '']
let groupBUS = ['', '', '', '']
let groupBLS = ['', '', '', '']
let groupBF = ['', '', '', '']

let playoffsQ = ['', '', '', '']
let playoffsS = ['', '', '', '']
let playoffsG = ['', '']

injectGroups()

injectTeams()
function injectTeams(){
  for(let i = 0; i < 16; i++){
    R1seeds[i] = MajorTeams[i].team
    document.getElementById(`R1S${i+1}`).innerHTML = MajorTeams[i].team
  }
}


// If Swiss stage
populateSwissTable()
function populateSwissTable() {
  const tableBody = document.getElementById('swissStats');
  tableBody.innerHTML = '';
  MajorTeams.forEach((id) => {
    const newRow = document.createElement('tr');
    const team = document.createElement('td');
    const Swins = document.createElement('td');
    const Sloss = document.createElement('td');
    const Gwins = document.createElement('td');
    const Gloss = document.createElement('td');

    const teamLink = document.createElement('a');
    
    const teamId = (id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","");

    teamLink.href = `/profile.html?name=${encodeURIComponent(id.team)}`;
    
    team.id = teamId;
    
    teamLink.textContent = id.team;
    Swins.textContent = id.seriesWin;
    Sloss.textContent = id.seriesLoss;
    Gwins.textContent = id.gameWin;
    Gloss.textContent = id.gameLoss;
    
    team.appendChild(teamLink);

    newRow.appendChild(team);
    newRow.appendChild(Swins);
    newRow.appendChild(Sloss);
    newRow.appendChild(Gwins);
    newRow.appendChild(Gloss);

    tableBody.appendChild(newRow);
  });
}
function updateGamesScores(seeds, roundID, winner, loser, finished){
  const teamWinner = MajorTeams.find(t => t.team === winner);
  const teamLoser = MajorTeams.find(t => t.team === loser);
  let start = 0
  let end = 16
  if(roundID === 5){
    start = 2
    end = 12
  } else if(roundID === 6){
    start = 5
    end = 12
  }
  teamWinner.seriesWin++
  teamLoser.seriesLoss++
  sortMajorTeams()
  w = getIndexOfTeam(teamWinner)
  l = getIndexOfTeam(teamLoser)
  addTeamToSeeds(seeds, teamWinner.team, w-start)
  addTeamToSeeds(seeds, teamLoser.team, l-start)
  injectTeam(seeds, roundID, end)
  populateSwissTable()
  if (finished === 1){
    injectPlayoffsMajor()
  }
}
function injectTeam(seeds, roundID, end){
  seeds.forEach((id)=>{
    for(i = 0; i < end; i++){
      if (i === seeds.indexOf(id)){
        document.getElementById(`R${roundID}S${i+1}`).innerHTML = id
      }
    }
  })
}
function addTeamToSeeds(seeds, team, place){
  seeds[place] = team
}
function sortMajorTeams(){
  MajorTeams.sort((a, b) => b.gameWin - a.gameWin)
  MajorTeams.sort((a, b) => a.gameLoss - b.gameLoss)
  MajorTeams.sort((a, b) => b.seriesWin - a.seriesWin)
  MajorTeams.sort((a, b) => a.seriesLoss - b.seriesLoss)
}
function getIndexOfTeam(team){
  ind = MajorTeams.indexOf(team)
  return ind
}

// If Playin
injectPlayins()
function injectPlayins(){
  for(let i = 0; i < 8; i++){
    document.getElementById(`PIseed${i+1}`).innerHTML = PlayinTeams[i].team
  }
}
function playinUpperQ(match, winner, loser){
  const teamWinner = PlayinTeams.find(t => t.team === winner);
  const teamLoser = PlayinTeams.find(t => t.team === loser);
  teamLoser.losses++
  teamWinner.wins++
  playinUS[match-1] = winner
  playinQ[match-1] = loser
  injectPlayinVerdicts()
}
function playinLowerQ(match, winner){
  const teamWinner = PlayinTeams.find(t => t.team === winner);
  // const teamLoser = PlayinTeams.find(t => t.team === loser);
  // teamLoser.losses++
  teamWinner.wins++
  if(match === 1){
    playinLS[1] = winner
  } else if(match === 2){
    playinLS[3] = winner
  }
  injectPlayinVerdicts()
}
function playinUpperS(match, winner, loser){
  const teamWinner = PlayinTeams.find(t => t.team === winner);
  const teamLoser = PlayinTeams.find(t => t.team === loser);
  teamLoser.losses++
  teamWinner.wins++
  if(match === 1){
    playinF[0] = winner
    playinLS[2] = loser

  } else if(match === 2){
    playinF[1] = winner
    playinLS[0] = loser
  }
  sortPlayins()
  injectPlayinVerdicts()
}
function playinLowerS(match, winner, finished){
  const teamWinner = PlayinTeams.find(t => t.team === winner);
  // const teamLoser = PlayinTeams.find(t => t.team === loser);
  // teamLoser.losses++
  teamWinner.wins++
  if(match === 1){
    playinF[2] = winner
  } else if(match === 2){
    playinF[3] = winner
  }
  sortPlayins()
  injectPlayinVerdicts()
  if(finished === 1){
    injectGroups()
  }
}
function sortPlayins(){
  PlayinTeams.sort((a, b) => a.playinSeed - b.playinSeed)
  PlayinTeams.sort((a, b) => b.wins - a.wins)
  PlayinTeams.sort((a, b) => a.losses - b.losses)
}
function injectPlayinVerdicts(){
  for(let i = 0; i < 4; i++){
      playinQ.forEach((id)=>{
      if (i === playinQ.indexOf(id)){
        document.getElementById(`piq${i+1}`).innerHTML = id
      }
    })
    playinUS.forEach((id)=>{
      if (i === playinUS.indexOf(id)){
        document.getElementById(`pius${i+1}`).innerHTML = id
      }
    })
    playinLS.forEach((id)=>{
      if (i === playinLS.indexOf(id)){
        document.getElementById(`pils${i+1}`).innerHTML = id
      }
    })
    playinF.forEach((id)=>{
      if (i === playinF.indexOf(id)){
        document.getElementById(`pf${i+1}`).innerHTML = id
      }
    })
  }
  // console.log(playinQ)
  // console.log(playinUS)
  // console.log(playinLS)
  // console.log(playinF)
  console.log(PlayinTeams)
}
// Group Stage
function injectGroups(){
  // let ChampTeams = ['Karmine Corp', 'Team Falcons', 'NRG', 'Dignitas', 'Furia Esports', 'Twisted Minds', 'Team Vitality', 'Geekay Esports', 
  //                   'The Ultimates', 'Spacestation Gaming', 'Team Secret', 'Wildcard', PlayinTeams[0].team, PlayinTeams[1].team, PlayinTeams[2].team, PlayinTeams[3].team]
  ChampTeams = ['Karmine Corp', 'Team Falcons', 'NRG', 'Dignitas', 'Furia Esports', 'Twisted Minds', 'Team Vitality', 'Geekay Esports', 
                    'The Ultimates', 'Spacestation Gaming', 'Team Secret', 'Wildcard', 'Ninjas in Pyjamas', 'ROC Esports', 'Gen.G Mobil1 Racing', 'Virtus.pro']
  for(let i = 0; i < 16; i++){
    document.getElementById(`Gseed${i+1}`).innerHTML = ChampTeams[i]
  }
}
function groupAUpperQ(match, winner, loser){
  groupAUS[match-1] = winner
  groupAQ[match-1] = loser
  injectGroupAVerdicts()
}
function groupALowerQ(match, winner){
  if(match === 1){
    groupALS[1] = winner
  } else if(match === 2){
    groupALS[3] = winner
  }
  injectGroupAVerdicts()
}
function groupAUpperS(match, winner, loser){
  if(match === 1){
    groupAF[0] = winner
    groupALS[2] = loser
    ChampPlayoffs[0] = winner
  } else if(match === 2){
    groupAF[1] = winner
    groupALS[0] = loser
    ChampPlayoffs[3] = winner
  }
  injectGroupAVerdicts()
}
function groupALowerS(match, winner){
  if(match === 1){
    groupAF[2] = winner
    ChampPlayoffs[7] = winner
  } else if(match === 2){
    groupAF[3] = winner
    ChampPlayoffs[4] = winner
  }
  injectGroupAVerdicts()
}
function injectGroupAVerdicts(){
  for(let i = 0; i < 4; i++){
      groupAQ.forEach((id)=>{
      if (i === groupAQ.indexOf(id)){
        document.getElementById(`gaq${i+1}`).innerHTML = id
      }
    })
    groupAUS.forEach((id)=>{
      if (i === groupAUS.indexOf(id)){
        document.getElementById(`gaus${i+1}`).innerHTML = id
      }
    })
    groupALS.forEach((id)=>{
      if (i === groupALS.indexOf(id)){
        document.getElementById(`gals${i+1}`).innerHTML = id
      }
    })
    groupAF.forEach((id)=>{
      if (i === groupAF.indexOf(id)){
        document.getElementById(`gaf${i+1}`).innerHTML = id
      }
    })
  }
  // console.log(groupAQ)
  // console.log(groupAUS)
  // console.log(groupALS)
  // console.log(groupAF)
  // console.log(ChampTeams)
}
function groupBUpperQ(match, winner, loser){
  groupBUS[match-1] = winner
  groupBQ[match-1] = loser
  injectGroupBVerdicts()
}
function groupBLowerQ(match, winner){
  if(match === 1){
    groupBLS[1] = winner
  } else if(match === 2){
    groupBLS[3] = winner
  }
  injectGroupBVerdicts()
}
function groupBUpperS(match, winner, loser){
  if(match === 1){
    groupBF[0] = winner
    groupBLS[2] = loser
    ChampPlayoffs[2] = winner
  } else if(match === 2){
    groupBF[1] = winner
    groupBLS[0] = loser
    ChampPlayoffs[1] = winner
  }
  injectGroupBVerdicts()
}
function groupBLowerS(match, winner, finished){
  if(match === 1){
    groupBF[2] = winner
    ChampPlayoffs[6] = winner
  } else if(match === 2){
    groupBF[3] = winner
    ChampPlayoffs[5] = winner
  }
  injectGroupBVerdicts()
  if(finished === 1){
    injectPlayoffsChampionship()
  }
}
function injectGroupBVerdicts(){
  for(let i = 0; i < 4; i++){
      groupBQ.forEach((id)=>{
      if (i === groupBQ.indexOf(id)){
        document.getElementById(`gbq${i+1}`).innerHTML = id
      }
    })
    groupBUS.forEach((id)=>{
      if (i === groupBUS.indexOf(id)){
        document.getElementById(`gbus${i+1}`).innerHTML = id
      }
    })
    groupBLS.forEach((id)=>{
      if (i === groupBLS.indexOf(id)){
        document.getElementById(`gbls${i+1}`).innerHTML = id
      }
    })
    groupBF.forEach((id)=>{
      if (i === groupBF.indexOf(id)){
        document.getElementById(`gbf${i+1}`).innerHTML = id
      }
    })
  }
  // console.log(groupAQ)
  // console.log(groupAUS)
  // console.log(groupALS)
  // console.log(groupAF)
  // console.log(ChampTeams)
}
// Playoffs
function injectPlayoffsMajor(){
  for(let i = 0; i < 8; i++){
    document.getElementById(`POseed${i+1}`).innerHTML = MajorTeams[i].team
  }
}
function injectPlayoffsChampionship(){
  // If Playin
  for(let i = 0; i < 8; i++){
    document.getElementById(`POseed${i+1}`).innerHTML = ChampPlayoffs[i]
  }
}
function upper(match, winner, loser){
  if(match === 1){
    playoffsS[2] = winner
    playoffsQ[0] = loser
  } else if(match === 2){
    playoffsS[0] = winner
    playoffsQ[2] = loser
  }
  injectPlayoffVerdicts()
}
function lowerR(match, winner){
  if(match === 1){
    playoffsQ[1] = winner
  } else if(match === 2){
    playoffsQ[3] = winner
  }
  injectPlayoffVerdicts()
}
function lowerQ(match, winner){
  if(match === 1){
    playoffsS[1] = winner
  } else if(match === 2){
    playoffsS[3] = winner
  }
  injectPlayoffVerdicts()
}
function lowerS(match, winner){
  if(match === 1){
    playoffsG[0] = winner
  } else if(match === 2){
    playoffsG[1] = winner
  }
  injectPlayoffVerdicts()
}
function grand(winner){
  document.getElementById("winner").innerHTML=winner;
}
function injectPlayoffVerdicts(){
  playoffsQ.forEach((id)=>{
    for(let i = 0; i < id.length; i++){
      if (i === playoffsQ.indexOf(id)){
        document.getElementById(`q${i+1}`).innerHTML = id
      }
    }
  })
  playoffsS.forEach((id)=>{
    for(let i = 0; i < id.length; i++){
      if (i === playoffsS.indexOf(id)){
        document.getElementById(`s${i+1}`).innerHTML = id
      }
    }
  })
  playoffsG.forEach((id)=>{
    for(let i = 0; i < id.length; i++){
      if (i === playoffsG.indexOf(id)){
        document.getElementById(`g${i+1}`).innerHTML = id
      }
    }
  })
}