const jwt = require('express-jwt');
const jwksClient = require('jwks-rsa');

const UNAUTHORIZED_MESSAGE = { title: 'Unauthorized', detail: 'Please check you have permission for this' };

// This will populate req.user if token is valid
const checkJWT = jwt({
	secret: jwksClient.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 15,
		jwksUri: process.env.NEXT_STATIC_JWKS_URI
	}),
	audience: process.env.NEXT_STATIC_AUTH0_CLIENT_ID,
	issuser: `https://${process.env.NEXT_STATIC_AUTH0_DOMAIN}/`,
	algorithms: ['RS256']
});

checkAdmin = (req, res, next) => {
	const user = req.user;
	const admins = ['ignacioromanherrera@gmail.com'];

	if (user && admins.includes(user.email)) {
		next();
	} else {
		return res.status(401).send(UNAUTHORIZED_MESSAGE);
	}
};

const handleAuthError = (err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).send(UNAUTHORIZED_MESSAGE);
	}
	next();
};

module.exports = {
	checkJWT,
	checkAdmin,
	handleAuthError,
};
