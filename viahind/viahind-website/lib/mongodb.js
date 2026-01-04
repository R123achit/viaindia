import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

// Only throw error if MongoDB is actually being used (not during build)
if (!uri) {
  if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
    // During Vercel build, create a dummy promise that will fail at runtime if used
    clientPromise = Promise.reject(new Error('MongoDB URI not configured'));
  } else {
    throw new Error('Please add your MongoDB URI to .env.local');
  }
} else {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export default clientPromise;
