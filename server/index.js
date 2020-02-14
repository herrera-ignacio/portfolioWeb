const express = require('express');
const next = require('next');
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

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

		server.get('/api/v1/secret', (req, res) => {
			return res.json(secretData);
		});

		server.get('*', (req, res) => {
			return handle(req, res)
		});

		server.use(handle).listen(80, (err) => {
			if (err) throw err;
			console.log('> Ready on http://localhost:80');
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
	});