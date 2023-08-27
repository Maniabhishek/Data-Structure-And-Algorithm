/*

  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.


  Given an array of pairs representing the teams that have competed against each
  other and an array containing the results of each competition, write a
  function that returns the winner of the tournament. The input arrays are named
  competitions and results respectively
  the competition array is in the form of [hometeam , awayteam] , where each team is a string of at most 30
  characters representing the name of the team. Results array
  contains information about the winner of each corresponding competition in the competition array , result[i]
  denotes the winner the winner of team in competition[i] , where a 1 in reault array means home team won in the corresponding 
  competition and 0 means away team won 
  sample input [[A,B],[C,A],[E,A]] results [1, 0, 0]
  
*/

function tournamentWinner(competitions: string[][], results: number[]) {
  // Write your code here.
  let currentBestTeam = ""
  const record:Record<string, number> = {[currentBestTeam]:0}
  for(let i = 0; i < competitions.length; i++){
    let matchResult = results[i]
    const [hometeam, awayteam] = competitions[i]
    const currentMatchWinner = matchResult === 1 ? hometeam : awayteam
    if(!(currentMatchWinner in record)){
      record[currentMatchWinner] = 0
    }
    record[currentMatchWinner] += 3
    if(record[currentMatchWinner] > record[currentBestTeam]){
      currentBestTeam = currentMatchWinner
    }
  }
  return currentBestTeam;
}
