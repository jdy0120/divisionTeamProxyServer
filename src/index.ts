import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as functions from "firebase-functions";
import { fetchUserAccountId,fetchUserInfo } from './UserInfo/userinfo';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

const app = express();

app.use(cors({
  // origin: "https://jdy0120.github.io/",
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/fetchUserAccountId',fetchUserAccountId);
app.get('/fetchUserInfo',fetchUserInfo);

export const getUserInfo = functions.https.onRequest(app)