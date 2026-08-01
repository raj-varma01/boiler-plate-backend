import express from 'express';
import validate from '../middlewares/validation';
import usercontroller from '../controllers/usercontroller';

const router = express.Router();

router.get('/', validate(userValidation.getUserData), usercontroller.getUserData)


export default router;