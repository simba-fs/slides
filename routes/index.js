const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
	return res.render('index');
});

router.get('/license', (req, res, next) => {
	return res.render('license');
});

router.get('/help', (req, res, next) => {
	return res.render('help');
});

router.get('/about', (req, res, next) => {
	return res.render('about');
});

router.use('/admin', require('./admin'));
router.use('/s', require('./slides'));
router.use('/h', require('./help'));
// for /room and /host
router.use('/', require('./room'));

module.exports = router;
