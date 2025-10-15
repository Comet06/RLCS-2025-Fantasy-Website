export let Championship = {
  //(max): PISemi(6), PIQuals(4), GASemi(6), GAQuals(4), GBSemi(6), GBQuals(4), POSemi(8), POFinals(3)
  'come' : [5, 3, 5, 3, 5, 3, 4, 3],
  'squi' : [4, 2, 5, 2, 5, 2, 4, 1],
  'vinn' : [5, 2, 5, 2, 4, 2, 4, 1],
  'jimm' : [4, 2, 4, 2, 4, 2, 2, 0],
  'ecof' : [5, 3, 4, 1, 4, 2, 3, 1],
  'gale' : [6, 3, 5, 3, 4, 3, 3, 1],
}
export let ChampionshipPlacements = {
    'Champ' : ['1st', 'NRG', '2nd', 'Team Falcons', '3rd-4th', 'Karmine Corp', '3rd-4th', 'Geekay Esports', '5th-6th', 'The Ultimates', '5th-6th', 'Wildcard', '7th-8th', 'Ninjas in Pyjamas', '7th-8th', 'Spacestation Gaming', '9th-12th', 'Dignitas', '9th-12th', 'Furia Esports', '9th-12th', 'Team Secret', '9th-12th', 'Team Vitality', '13th-16th', 'Virtus.pro', '13th-16th', 'ROC Esports', '13th-16th', 'Gen.G Mobil1 Racing', '13th-16th', 'Twisted Minds', '17th-18th', 'MIBR', '17th-18th', 'Shopify Rebellion', '19th-20th', 'FUT Esports', '19th-20th', 'TSM'],
}
export let ChampionshipTops = {
    'score' :   ['Archie', 11655, 'Nass', 11147, 'Oski', 10751, 'Oaly', 10647, 'Radosin', 10189, 'Dralii', 10058, 'Vatira', 9875, 'Atow', 9548, 'Kiileerrz', 9362, 'Atomic', 9337],
    'goals' :   ['Nass', 25, 'Atow', 22, 'Dralii', 22, 'Archie', 21, 'Oaly', 21, 'Atomic', 20, 'Kiileerrz', 20, 'Oski', 19, 'Beastmode', 18, 'Trk511', 18],
    'assists' : ['Rw9', 22, 'Daniel', 21, 'Vatira', 19, 'Joyo', 18, 'Atow', 17, 'Oski', 17, 'Radosin', 16, 'Sphinx', 16, 'Reveal', 16, 'Atomic', 15],
    'saves' :   ['Archie', 59, 'Oski', 51, 'Radosin', 48, 'Oaly', 48, 'Vatira', 46, 'Dralii', 46, 'Kiileerrz', 46, 'Nass', 45, 'Trk511', 44, 'Firstkiller', 41],
    'shots' :   ['Daniel', 93, 'Atow', 89, 'Archie', 87, 'Nass', 84, 'Radosin', 79, 'Oski', 78, 'Dralii', 78, 'Atomic', 77, 'Beastmode', 71, 'Vatira', 70],
}

let playinQuarter = [
  {team: 'MIBR', verdict: 'lose', score: 0},
  {team: 'Gen.G Mobil1 Racing', verdict: 'win', score: 0},
  {team: 'ROC Esports', verdict: 'win', score: 0},
  {team: 'FUT Esports', verdict: 'lose', score: 0},
  {team: 'Shopify Rebellion', verdict: 'lose', score: 0},
  {team: 'Virtus.pro', verdict: 'win', score: 0},
  {team: 'Ninjas in Pyjamas', verdict: 'win', score: 0},
  {team: 'TSM', verdict: 'lose', score: 0},
  
  {team: 'MIBR', verdict: 'lose', score: 0},
  {team: 'FUT Esports', verdict: 'win', score: 0},
  {team: 'Shopify Rebellion', verdict: 'win', score: 0},
  {team: 'TSM', verdict: 'lose', score: 0},
]
let playinSemi = [
  {team: 'Gen.G Mobil1 Racing', verdict: 'lose', score: 0},
  {team: 'ROC Esports', verdict: 'win', score: 0},
  {team: 'Virtus.pro', verdict: 'win', score: 0},
  {team: 'Ninjas in Pyjamas', verdict: 'lose', score: 0},
  
  {team: 'Virtus.pro', verdict: 'lose', score: 0},
  {team: 'MIBR', verdict: 'win', score: 0},
  {team: 'Gen.G Mobil1 Racing', verdict: 'win', score: 0},
  {team: 'Shopify Rebellion', verdict: 'lose', score: 0},
]
let playinQualify = [
  {team: 'ROC Esports', verdict: 'lose', score: 0},
  {team: 'Ninjas in Pyjamas', verdict: 'win', score: 0},

  {team: 'Virtus.pro', verdict: 'win', score: 0},
  {team: 'Gen.G Mobil1 Racing', verdict: 'lose', score: 0},
]
let GroupAQuarter = [
  {team: 'Karmine Corp', verdict: 'win', score: 0},
  {team: 'Virtus.pro', verdict: 'lose', score: 0},
  {team: 'The Ultimates', verdict: 'win', score: 0},
  {team: 'Geekay Esports', verdict: 'lose', score: 0},
  {team: 'Dignitas', verdict: 'win', score: 0},
  {team: 'ROC Esports', verdict: 'lose', score: 0},
  {team: 'Wildcard', verdict: 'win', score: 0},
  {team: 'Furia Esports', verdict: 'lose', score: 0},
  
  {team: 'Virtus.pro', verdict: 'lose', score: 0},
  {team: 'Geekay Esports', verdict: 'win', score: 0},
  {team: 'ROC Esports', verdict: 'lose', score: 0},
  {team: 'Furia Esports', verdict: 'win', score: 0},
]
let GroupASemi = [
  {team: 'Karmine Corp', verdict: 'lose', score: 0},
  {team: 'The Ultimates', verdict: 'win', score: 0},
  {team: 'Dignitas', verdict: 'lose', score: 0},
  {team: 'Wildcard', verdict: 'win', score: 0},
  
  {team: 'Dignitas', verdict: 'lose', score: 0},
  {team: 'Geekay Esports', verdict: 'win', score: 0},
  {team: 'Karmine Corp', verdict: 'win', score: 0},
  {team: 'Furia Esports', verdict: 'lose', score: 0},
]
let GroupAQualify = [
  {team: 'The Ultimates', verdict: 'win', score: 0},
  {team: 'Wildcard', verdict: 'win', score: 0},

  {team: 'Geekay Esports', verdict: 'win', score: 0},
  {team: 'Karmine Corp', verdict: 'win', score: 0},
]
let GroupBQuarter = [
  {team: 'Team Falcons', verdict: 'win', score: 0},
  {team: 'Gen.G Mobil1 Racing', verdict: 'lose', score: 0},
  {team: 'Spacestation Gaming', verdict: 'lose', score: 0},
  {team: 'Team Vitality', verdict: 'win', score: 0},
  {team: 'NRG', verdict: 'win', score: 0},
  {team: 'Ninjas in Pyjamas', verdict: 'lose', score: 0},
  {team: 'Team Secret', verdict: 'win', score: 0},
  {team: 'Twisted Minds', verdict: 'lose', score: 0},
  
  {team: 'Gen.G Mobil1 Racing', verdict: 'lose', score: 0},
  {team: 'Spacestation Gaming', verdict: 'win', score: 0},
  {team: 'Ninjas in Pyjamas', verdict: 'win', score: 0},
  {team: 'Twisted Minds', verdict: 'lose', score: 0},
]
let GroupBSemi = [
  {team: 'Team Falcons', verdict: 'win', score: 0},
  {team: 'Team Vitality', verdict: 'lose', score: 0},
  {team: 'NRG', verdict: 'win', score: 0},
  {team: 'Team Secret', verdict: 'lose', score: 0},
  
  {team: 'Team Secret', verdict: 'lose', score: 0},
  {team: 'Spacestation gaming', verdict: 'win', score: 0},
  {team: 'Team Vitality', verdict: 'lose', score: 0},
  {team: 'Ninjas in Pyjamas', verdict: 'win', score: 0},
]
let GroupBQualify = [
  {team: 'Team Falcons', verdict: 'win', score: 0},
  {team: 'NRG', verdict: 'win', score: 0},

  {team: 'Spacestation Gaming', verdict: 'win', score: 0},
  {team: 'Ninjas in Pyjamas', verdict: 'win', score: 0},
]
let playoffsQuarter = [
  {team: 'The Ultimates', verdict: 'lose', score: 0},//upper
  {team: 'NRG', verdict: 'win', score: 0},
  {team: 'Team Falcons', verdict: 'win', score: 0},
  {team: 'Wildcard', verdict: 'lose', score: 0},
  
  {team: 'Karmine Corp', verdict: 'win', score: 0},//lower round 1
  {team: 'Ninjas in Pyjamas', verdict: 'lose', score: 0},
  {team: 'Spacestation Gaming', verdict: 'lose', score: 0},
  {team: 'Geekay Esports', verdict: 'win', score: 0},
]
let playoffsSemi = [
  {team: 'The Ultimates', verdict: 'lose', score: 0},//quarter and semi
  {team: 'Karmine Corp', verdict: 'win', score: 0},
  {team: 'Wildcard', verdict: 'lose', score: 0},
  {team: 'Geekay Esports', verdict: 'win', score: 0},
  
  {team: 'Team Falcons', verdict: 'win', score: 0},
  {team: 'Karmine Corp', verdict: 'lose', score: 0},
  {team: 'NRG', verdict: 'win', score: 0},
  {team: 'Geekay Esports', verdict: 'lose', score: 0},
]
let playoffsQualify = [
  {team: 'Team Falcons', verdict: 'lose', score: 0},//grand final and winner
  {team: 'NRG', verdict: 'win', score: 0},

  {team: 'NRG', verdict: 'win', score: 0},
]

export function ChampionshipBracket(){
  for (let i = 0; i < 8; i ++){//Playins
    document.getElementById(`puqt${i+1}`).innerHTML= `<span id="${playinQuarter[i].verdict}">${playinQuarter[i].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){
    document.getElementById(`plqt${i+1}`).innerHTML= `<span id="${playinQuarter[i+8].verdict}">${playinQuarter[i+8].team}</span>`;
    document.getElementById(`pust${i+1}`).innerHTML= `<span id="${playinSemi[i].verdict}">${playinSemi[i].team}</span>`;
    document.getElementById(`plst${i+1}`).innerHTML= `<span id="${playinSemi[i+4].verdict}">${playinSemi[i+4].team}</span>`;
    document.getElementById(`pqt${i+1}`).innerHTML= `<span id="${playinQualify[i].verdict}">${playinQualify[i].team}</span>`;
  }
  for (let i = 0; i < 8; i ++){//GroupA
    document.getElementById(`gauqt${i+1}`).innerHTML= `<span id="${GroupAQuarter[i].verdict}">${GroupAQuarter[i].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){
    document.getElementById(`galqt${i+1}`).innerHTML= `<span id="${GroupAQuarter[i+8].verdict}">${GroupAQuarter[i+8].team}</span>`;
    document.getElementById(`gaust${i+1}`).innerHTML= `<span id="${GroupASemi[i].verdict}">${GroupASemi[i].team}</span>`;
    document.getElementById(`galst${i+1}`).innerHTML= `<span id="${GroupASemi[i+4].verdict}">${GroupASemi[i+4].team}</span>`;
    document.getElementById(`gaqt${i+1}`).innerHTML= `<span id="${GroupAQualify[i].verdict}">${GroupAQualify[i].team}</span>`;
  }
  for (let i = 0; i < 8; i ++){//GroupB
    document.getElementById(`gbuqt${i+1}`).innerHTML= `<span id="${GroupBQuarter[i].verdict}">${GroupBQuarter[i].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){
    document.getElementById(`gblqt${i+1}`).innerHTML=`<span id="${GroupBQuarter[i+8].verdict}">${GroupBQuarter[i+8].team}</span>`;
    document.getElementById(`gbust${i+1}`).innerHTML=`<span id="${GroupBSemi[i].verdict}">${GroupBSemi[i].team}</span>`;
    document.getElementById(`gblst${i+1}`).innerHTML=`<span id="${GroupBSemi[i+4].verdict}">${GroupBSemi[i+4].team}</span>`;
    document.getElementById(`gbqt${i+1}`).innerHTML=`<span id="${GroupBQualify[i].verdict}">${GroupBQualify[i].team}</span>`;
  }
  for (let i = 0; i < 4; i ++){//Playoffs
    document.getElementById(`pouqt${i+1}`).innerHTML= `<span id="${playoffsQuarter[i].verdict}">${playoffsQuarter[i].team}</span>`;
    document.getElementById(`porot${i+1}`).innerHTML= `<span id="${playoffsQuarter[i+4].verdict}">${playoffsQuarter[i+4].team}</span>`;
    document.getElementById(`polqt${i+1}`).innerHTML= `<span id="${playoffsSemi[i].verdict}">${playoffsSemi[i].team}</span>`;
    document.getElementById(`polst${i+1}`).innerHTML= `<span id="${playoffsSemi[i+4].verdict}">${playoffsSemi[i+4].team}</span>`;
  }
  for (let i = 0; i < 2; i ++){
    document.getElementById(`pogft${i+1}`).innerHTML=`<span id="${playoffsQualify[i].verdict}">${playoffsQualify[i].team}</span>`;
  }
  document.getElementById(`winner`).innerHTML= `<span id="${playoffsQualify[2].verdict}">${playoffsQualify[2].team}</span>`;
}