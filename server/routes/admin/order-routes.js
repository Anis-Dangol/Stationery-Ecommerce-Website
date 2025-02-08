import express from 'express';


import { getAllOrderOfAllUsers, getOrderDetailsForAdmin } from '../../controllers/admin/order-controller.js';


const router = express.Router();

router.get('/get', getAllOrderOfAllUsers);
router.get('/details/:id', getOrderDetailsForAdmin);


export default router;