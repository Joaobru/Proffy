import db from "../database/connection";
import {Request,Response, response} from 'express';

export default class UsersController{
  async create(req:Request, res:Response){
    try {
    const {email, name, password} = req.body;

    const user = await db('users').insert({
      email,
      name,
      password
    });

    return await db.from('users').select('*').where('id': user);
  } catch (err) {
    return res.status(400).send({error:'Registration Failed'})
  }
  }
}