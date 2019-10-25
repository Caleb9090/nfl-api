const express = require('express')
const bodyParser = require('body-Parser')
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => {
	response.send(teams)
})

app.get('/teams/:identifier', (request, response) => {
	const identifier = request.params.identifier

	const matchingTeams = teams.filter(() => {
		return teams.id === number(identifier) || teams.abreviation === identifier.toUpperCase()
	})

	if (matchingTeams.length) {
		response.send(matchingTeams)
	} else {
		response.sendStatus(404)
	}
})
app.use(bodyParser.json())
app.post('/teams', (request, response) => {
	const { id, location, mascot, abbreviation, conference, division } = request.body

	if (!id || !location || !mascot || !abbreviation || !conference || !division) {
		response.status(400).send('The following attributes are required:id, location, mascot,abbreviation,conference,division ')
	}

	teams.push({ id, location, mascot, abbreviation, conference, division })

	const newTeam = { id, location, mascot, abbreviation, conference, division }

	response.status(201).send(newTeam)
})
app.all('*', (request, response) => {
	response.sendStatus(404)
})



const server = app.listen(9090, () => { console.log('Listening on port 9090') })

module.exports = server