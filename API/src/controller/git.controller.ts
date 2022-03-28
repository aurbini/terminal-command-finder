import { Request, Response } from 'express';
import appDataSource from '../DB/dbconfig';
import { Git } from '../models/Git.model';
export class GitController {
  // private photoRepository = appDataSource.getRepository(Photo);

  async createGitCommand(req: Request, res: Response) {
    try {
      // const gitRepository = appDataSource.getRepository(Git);
      // const { command, description, category, views } = req.body;

      const git = await appDataSource.getRepository(Git).create(req.body);
      const results = await appDataSource.getRepository(Git).save(git);
      res.json(results);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'No photos found' });
    }
  }
}
