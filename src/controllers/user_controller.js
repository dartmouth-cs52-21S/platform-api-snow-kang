import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

// encodes a new token for a user object
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}

export const signin = (user) => {
  return tokenForUser(user);
};

// Passing in an object with these 3 keys
export const signup = async ({ email, password, username }) => {
  if (!email || !password || !username) {
    throw new Error('You must provide an email, username, and password');
  }

  // See if a user with the given email exists
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    // If a user with email already exists, return an error
    throw new Error('Email is in use');
  }

  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    // If a user with username already exists, return an error
    throw new Error('Username is in use');
  }

  const user = new User();
  user.email = email;
  user.password = password;
  user.username = username;

  try {
    await user.save();
    return tokenForUser(user);
  } catch (error) {
    throw new Error(`create user error: ${error}`);
  }
};
