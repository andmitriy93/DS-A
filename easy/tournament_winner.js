/*
There's an algorithms tournament taking place in which teams of programmers compete against
each other to solve algorithmic problmes as fast as possible. Teams compete in a round robin,
where each team faces off against all other teams. Only two teams compete against each other at a 
time, and for each competition, one team is designated the home team, while the other team is the
away team, in each competititon there's always one winner and one loser; there are no ties. A team
receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that 
receives the most amount of points.

Given an array of pairs representing the teams that hvae competed against each other and an array
containing the results of each competition, write a function that return the winner of the 
tournament. The input arrays are named competitions and result, respectively. The 
competitions array has elements in the form of [homeTeam, awayTeam], where each team
is a string of at most 30 charaters representing the name of the team. The results array 
contains information about the winner of each corresponding competition in the competitiions
array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the 
results array meant that the home team in the corresponding competition won and a 0 
means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will compete 
against all other team exactly once. It's also guaranteed that the tournament will always have at 
least two teams

Input:
competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
]
results = [0, 0, 1]

Output:
'Python' // C# beats HTML, Python Beats C#, and Python beats HTML.
 Html - 0 points
 C# - 3 points
 Puthon - 6 points

*/

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
	let currentBestTeam = '';
	const scores = {[currentBestTeam]: 0};
	
	for (let i = 0; i < competitions.length; i++) {
		const result = results[i];
		const [homeTeam, awayTeam] = competitions[i];
		
		const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
		
		updateScores(winningTeam, 3, scores);
		
		if (scores[winningTeam] > scores[currentBestTeam]) {
			currentBestTeam = winningTeam;
		}
	}
	return currentBestTeam;
}

function updateScores(team, points, scores) {
	if (!(team in scores)) scores[team] = 0;
	
	scores[team] += points;
}
