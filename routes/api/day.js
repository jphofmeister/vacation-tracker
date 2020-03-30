const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Day = require('../../models/Day');

router.get('/', (req, res) => {
  Day.find()
    .then(days => res.json(days))
    .catch(err => res.status(404).json({ nodays: 'no days found' }));
});

router.post('/', (req, res) => {
  const dayData = {};
  if (req.body.date) dayData.date = req.body.date;

  new Day(dayData).save().then(day => res.json(day));
});

router.delete('/:id', (req, res) => {
  Day.findById(req.params.id)
    .then(day => {
      day.remove().then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json({ noday: 'no day found' }));
});

module.exports = router;