const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('./teams', (request, response) => {
	response.send(teams)
})

app.get('/teams/:x', (request, response) => {
	const x = request.params.x

	const matchingTeams = teams.filter(() => {
		return teams.id === number(x)
	})
	if (matchingTeams.length) {
		response.send(matchingTeams)
	} else {
		response.sendStatus(404)
	}
})

app.all('*', (request, response) => {
	response.sendStatus(404)
})


const server = app.listen(9090, () => { console.log('Listening on port 9090') })

module.exports = server