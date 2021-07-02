import { Request, Response } from 'express';
import { getUserAccountId, getUserInfo } from './userInfoUtils'

export const fetchUserAccountId = async(req:Request,res:Response) => {
    try {
        const { userId } = req.query;
        const userAccountId = await getUserAccountId(userId);
        res.send({ userAccountId });
      } catch (err) {
        console.log('오류 : getUserAccountId', err.message);
        throw err;
      }
}

export const fetchUserInfo = async(req:Request,res:Response) => {
    try {
        const { id } = req.query;
        const userInfo = await getUserInfo(id);
        res.send({ userInfo })
    } catch (err) {
        console.log(`오류 : getUserInfo`,err.message)
        throw err;
    }
}