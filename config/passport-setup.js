const passport = require('passport');
const GoogleStrategy = require('passport-google-oath20');

passport.use(
	new GoogleStrategy({
		//options for google strategy
		clientID: '125099633350-prdq4mqd21797ba0bjddtiuikj14sp48.apps.googleusercontent.com',
		clientSecret: 'I53xK7d5ofYJC2xnXQn_k1Ff'
	}, () => {
		//passport callback function
	})
)