import { Router } from 'express';
import { GitController } from '../../controller/git.controller';
const router = Router();

const gitController = new GitController();

router.route('/').post(gitController.createGitCommand);

export default router;
