const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to repo.
const config = {
	development :{
		clientID : 'tpyzcD7NRGqUD5vWCIhtVg',
		clientSecret : 'BezjwwPpIwj2s1fstbO2eoXsr3mwZnVD',
		redirectUrl : 'http://a62bd0f5.ngrok.io'
	},
	production:{	
		clientID : '',
		clientSecret : '',
		redirectUrl: ''
	}
};

module.exports = config[env]
