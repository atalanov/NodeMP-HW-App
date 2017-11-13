import express from "express";
import passport from "../middlewares/passport";
const router = express.Router();

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),function(req, res) {
  res.redirect('/');
});

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), function(req, res) {
  res.redirect('/');
});

router.get('/auth/google', passport.authenticate('google'));

router.get('/auth/google/return', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
  res.redirect('/');
});

export default router;