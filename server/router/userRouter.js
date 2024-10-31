const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}));

router.get('/auth/discord', passport.authenticate('discord', { scope: ['identify', 'email'] }));
router.get('/auth/discord/callback', passport.authenticate('discord', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}));

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}));

router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}));

module.exports = router;