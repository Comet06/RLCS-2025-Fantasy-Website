import { split1, split2 } from "./home_page.js"


let split1QualifiedTeams = [
    {region: 'EU', team: 'Karmine Corp', points: 70},
    {region: 'EU', team: 'Team Vitality', points: 34},
    {region: 'EU', team: 'Dignitas', points: 27},
    {region: 'EU', team: 'Geekay Esports', points: 27},
    {region: 'NA', team: 'NRG', points: 51},
    {region: 'NA', team: 'The Ultimates', points: 45},
    {region: 'NA', team: 'Gen.G Mobil1 Racing', points: 24},
    {region: 'NA', team: 'Complexity Gaming', points: 22},
    {region: 'OCE', team: 'Wildcard', points: 40},
    {region: 'OCE', team: 'Helfie Chiefs', points: 30},
    {region: 'SAM', team: 'Furia Esports', points: 59},
    {region: 'SAM', team: 'Team Secret', points: 30},
    {region: 'MENA', team: 'Team Falcons', points: 50},
    {region: 'MENA', team: 'Twisted Minds', points: 41},
    {region: 'APAC', team: 'Virtus.pro', points: 48},
    {region: 'SSA', team: 'FUT Esports', points: 48},
]
let split2QualifiedTeams = [
    {region: 'EU', team: 'Karmine Corp', points: 126},
    {region: 'EU', team: 'Dignitas', points: 89},
    {region: 'EU', team: 'Team Vitality', points: 78},
    {region: 'EU', team: 'Geekay Esports', points: 47},
    {region: 'NA', team: 'NRG', points: 111},
    {region: 'NA', team: 'The Ultimates', points: 73},
    {region: 'NA', team: 'Spacestation Gaming', points: 58},
    {region: 'NA', team: 'Gen.G Mobil1 Racing', points: 56},
    {region: 'OCE', team: 'Wildcard', points: 88},
    {region: 'OCE', team: 'TSM', points: 63},
    {region: 'SAM', team: 'Furia Esports', points: 113},
    {region: 'SAM', team: 'Team Secret', points: 84},
    {region: 'MENA', team: 'Team Falcons', points: 140},
    {region: 'MENA', team: 'Twisted Minds', points: 85},
    {region: 'APAC', team: 'Virtus.pro', points: 107},
    {region: 'SSA', team: 'FUT Esports', points: 106},
]
let championshipQualifiedTeams = [
    {region: 'EU', team: 'Karmine Corp', points: 0},
    {region: 'EU', team: 'Dignitas', points: 0},
    {region: 'EU', team: 'Team Vitality', points: 0},
    {region: 'EU', team: 'Geekay Esports', points: 0},
    {region: 'NA', team: 'NRG', points: 0},
    {region: 'NA', team: 'The Ultimates', points: 0},
    {region: 'NA', team: 'Spacestation Gaming', points: 0},
    {region: 'NA', team: 'Gen.G Mobil1 Racing', points: 0},
    {region: 'OCE', team: 'Wildcard', points: 0},
    {region: 'OCE', team: 'TSM', points: 0},
    {region: 'SAM', team: 'Furia Esports', points: 0},
    {region: 'SAM', team: 'Team Secret', points: 0},
    {region: 'MENA', team: 'Team Falcons', points: 0},
    {region: 'MENA', team: 'Twisted Minds', points: 0},
    {region: 'APAC', team: 'Virtus.pro', points: 0},
    {region: 'SSA', team: 'FUT Esports', points: 0},
    {region: 'MENA', team: 'ROC Esports', points: 0},
    {region: 'EU', team: 'Ninjas in Pyjamas', points: 0},
    {region: 'NA', team: 'Shopify Rebellion', points: 0},
    {region: 'SAM', team: 'MIBR', points: 0},
]

const myElement = document.querySelector('.rankings');
if (myElement) {
    console.log('rankings page is working')
    deploySplitPoints(split1, 1)
    deploySplitPoints(split2, 2)
    deploySplitQuals(split1QualifiedTeams, 1)
    deploySplitQuals(split2QualifiedTeams, 2)
    deploySplitQuals(championshipQualifiedTeams, 3)
}

function deploySplitPoints(event, index){
  for(let i = 0; i < 16; i++){
    const tableBody = document.getElementById(`split${index}`);
    const newRow = document.createElement('tr');
    const regionalPts = document.createElement('td');
    const majorPts = document.createElement('td');

    regionalPts.textContent = event['Regional'][i]
    majorPts.textContent = event['Major'][i]
    
    newRow.appendChild(regionalPts);
    newRow.appendChild(majorPts);
    
    tableBody.appendChild(newRow);
  }
}
function deploySplitQuals(event, index){
    event.forEach((id) =>{
    const tableBody = document.getElementById(`split${index}quals`);
    const newRow = document.createElement('tr');
    const region = document.createElement('td');
    const team = document.createElement('td');
    const pts = document.createElement('td');

    region.textContent = id.region
    team.textContent = id.team
    pts.textContent = id.points

    newRow.appendChild(region);
    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
    })
}