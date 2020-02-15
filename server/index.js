const express = require('express');
const next = require('next');
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

/* Middleware */
const {
	checkJWT,
	checkAdmin,
	handleAuthError
} = require('./services/auth');

const secretData = [
	{
		title: 'SecretData 1',
		description: 'Plans how to build spaceship'
	},
	{
		title: 'SecretData 2',
		description: 'Secret passwords'
	}
];

app.prepare()
	.then(() => {
		const server = express();

		server.get('/api/v1/test', checkJWT, (req, res) => {
			return res.status(200).send({ title: 'success' });
		});

		server.get('/api/v1/secret', checkJWT, (req, res) => {
			return res.json(secretData);
		});

		server.get('/api/v1/onlyAdmin', checkJWT, checkAdmin, (req, res) => {
			return res.json(secretData);
		});

		server.get('*', (req, res) => {
			return handle(req, res)
		});

		server.use(handleAuthError);

		server.use(handle).listen(80, (err) => {
			if (err) throw err;
			console.log('> Ready on http://localhost:80');
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
	});
