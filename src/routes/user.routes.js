import { Router } from 'express';
const router = Router();
import * as userController from '../controllers/userController';
import {authjwt, verifySignup} from '../middlewares';

router.post('/', [
    authjwt.verifyToken,
    authjwt.isAdmin,
    verifySignup.checkRolesExisted,
    verifySignup.checkDuplicateUser
], userController.createUser);

export default router;