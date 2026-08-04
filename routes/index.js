var express = require('express');
var router = express.Router();

const characterModel = require("../models/characters.js");
const gallerymodel = require("../models/gallery.js")
const systemsModel = require("../models/systems.js")
const downloadsModel = require("../models/downloads.js")

/* get all charachters */
router.get('/characters', async function(req, res) {
  try {
    //find all characters from characters collection i db
    let characters = await characterModel.find();
    res.json(characters);
  } catch (error) {
    res.status(400).json(error.message);
  }

});

router.get('/systems', async function(req, res) {
  try {
      //find all systems from database
      let systems = await systemsModel.find()
      res.json(systems)
  } catch (error) {
      res.status(400).json(error.message);
  }
});

/* get all charachters from specific system*/
router.get('/systems/:system', async function(req, res) {
  try {
      let characters = await characterModel.find( { system: req.params.system } );
      res.json(characters)
  } catch (error) {
      res.status(400).json(error.message);
  }
});

/* get specific character*/
router.get('/characters/:character', async function(req, res) {
  try {
      let character = await characterModel.findOne( {name: req.params.character} )
      res.json(character)
  } catch (error) {
      res.status(400).json(error.message);
  }
});

/*get all images*/
router.get('/gallery', async function(req, res) {
    try {
    //find all characters from characters collection i db
    let characters = await gallerymodel.find();
    res.json(characters)
  } catch (error) {
    res.status(400).json(error.message);
  }
});

/*get images for specifick character */
router.get('/gallery/:character', async function(req, res) {
  try {
    let character = await gallerymodel.find( { Characters:req.params.character } );
    res.json(character)
  } catch (error) {
    res.status(400).json(error.message);
  }
  
});

router.get('/downloads', async function(req, res) {
  try {
    let downloads = await downloadsModel.find()
    res.json(downloads)
  } catch (error) {
    res.status(400).json(error.message);
  }
})


module.exports = router;
