import { Request, Response } from 'express';
import appDataSource from '../DB/dbconfig';
import { Git } from '../models/Git.model';
export class GitController {
  async fetchGitCommands(__: Request, res: Response) {
    console.log('FETCH COMMAND');
    const results = await appDataSource.getRepository(Git).find();
    res.json(results);
  }

  async createGitCommand(req: Request, res: Response) {
    try {
      const command = await appDataSource.getRepository(Git).create(req.body);
      const results = await appDataSource.getRepository(Git).save(command);
      res.send(results);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
}
