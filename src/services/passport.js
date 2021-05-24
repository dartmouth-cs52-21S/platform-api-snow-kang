import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

import User from '../models/user_model';

// loads in .env file if needed
dotenv.config({ silent: true });

// options for local strategy, we'll use email AS the username
// not have separate ones
const localOptions = { usernameField: 'email' };

// options for jwt strategy
// we'll pass in the jwt in an `authorization` header
// so passport can find it there
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.AUTH_SECRET,
};
// NOTE: we are not calling this a bearer token (although it technically is), if you see people use Bearer in front of token on the internet you could either ignore it, use it but then you have to parse it out here as well as prepend it on the frontend.

// username/email + password authentication strategy
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  let user;
  let isMatch;
  try {
    user = await User.findOne({ email });
    // If there is no existing user with the given email, indicate an authentication failure
    if (!user) {
      return done(null, false);
    }
    isMatch = await user.comparePassword(password);
    // If there is an existing user with the given email, but the given password is incorrect,
    // indicate an authentication failure
    if (!isMatch) {
      return done(null, false);

    // If there is an existing user with the given email and the given password, indicate an authentication success
    // by supplying Passport with the authenticated user
    } else {
      return done(null, user);
    }

  // If there is an error, supply Passport with that error
  } catch (error) {
    return done(error);
  }
});

// is called with confirmed jwt we just need to confirm that user exits
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  let user;
  try {
    user = await User.findById(payload.sub);

  // If there is an error, supply Passport with that error
  } catch (error) {
    done(error, false);
  }
  // If the user exists, indicate an authentication success by supplying Passport with the authenticated user
  if (user) {
    done(null, user);

  // If the user does not exist, indicate an authentication failure
  } else {
    done(null, false);
  }
});

// Tell passport to use this strategy
passport.use(jwtLogin); // for 'jwt'
passport.use(localLogin); // for 'local'

// middleware functions to use in routes
export const requireAuth = passport.authenticate('jwt', { session: false });
export const requireSignin = passport.authenticate('local', { session: false });
