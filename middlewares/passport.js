import passport from "passport";
import {Strategy as LocalStrategy} from "passport-local";
import {Strategy as FacebookStrategy} from "passport-facebook";
import {Strategy as TwitterStrategy} from "passport-twitter";
import {Strategy as GoogleStrategy} from "passport-google";
import user from "../models/user";

/*configuration*/
const FACEBOOK_APP_ID="144384849521405",
      FACEBOOK_APP_SECRET="33dc793187b30762f60affdef3e814e4",
      TWITTER_CONSUMER_KEY="fakestring",
      TWITTER_CONSUMER_SECRET="fakestring"

/*end configuration*/

passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    session:false
}, function(username, password, done){
    let user = user.get(request.body.username);
    if(username!=user.name || password!=user.password){
        done(null, false, "I can't explain your unavailability to enter admin/admin");
    } else{
        done(null,user);
    }
    
}));
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "http://localhost:8080/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, cb) {
    User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:8080/auth/google/return',
    realm: 'http://localhost:8080/'
  },
  function(identifier, done) {
    User.findByOpenID({ openId: identifier }, function (err, user) {
      return done(err, user);
    });
  }
));

export default passport;