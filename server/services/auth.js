const jwt = require('express-jwt');
const jwksClient = require('jwks-rsa');

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

const handleAuthError = (err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).send({ title: 'Unauthorized', detail: 'Please check you have permission for this' });
	}
	next();
};

module.exports = {
	checkJWT,
	handleAuthError,
};
