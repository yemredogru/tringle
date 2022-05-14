const express = require('express');
const router = express.Router();
const accountController = require('../controller/accountController');

router.route('/account').post(accountController.createAccount);
router.route('/account/:id').get(accountController.accountInfo);
router.route('/payment').post(accountController.payment);
router.route('/deposit').post(accountController.deposit);
router.route('/withdraw').post(accountController.withdraw);
router.route('/accounting/:id').get(accountController.transactionHistory);
module.exports = router;