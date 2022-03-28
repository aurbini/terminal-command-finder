import { Router } from 'express';
import GitRoutes from './git.route';

const router = Router();

router.use('/git', GitRoutes);

export default router;
