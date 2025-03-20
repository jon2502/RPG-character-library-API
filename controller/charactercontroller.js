const APIcharacter = require("../models/apicharacters.js");
const APIgallery = require("../models/gallery.js")
const APIsystems = require("../models/systems.js")
const APIdownloads = require("../models/downloads.js")

module.exports = {
    getCharacters: async function (req, res, next) {
        try {
            //find all characters from characters collection i db
            let characters = await APIcharacter.find();
            // save the read in middleware variable
            res.locals.characters = characters;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    getAllSystem: async function(req,res,next){
        try {
            //find all systems from database
            let systems = await APIsystems.find()
            // save the read in middleware variable
            res.locals.systems = systems;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    getSystem: async function (req, res, next){
        try {
            //sætter wanted til at være parametern :character fra '/characters/:character'
            let wanted = req.params.system;
            // finds spesific characher from collection in db
            let characters = await APIcharacter.find( { system: wanted } );
            res.locals.characters = characters;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    getCharacter: async function (req, res, next) {
        try {
            //sætter wanted til at være parametern :character fra '/characters/:character'
            let wanted = req.params.character;
            // finds spesific characher from collection in db
            let character = await APIcharacter.find( {name: wanted} );
            res.locals.character = character;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    getAllImages: async function (req, res, next){
        try {
            //find all characters from characters collection i db
            let characters = await APIgallery.find();
            // save the read in middleware variable
            res.locals.characters = characters;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    getCharacterImages: async function (req, res, next) {
        try {
            //sætter wanted til at være parametern :character fra '/characters/:character'
            let wanted = req.params.character;
            // finds spesific characher from collection in db
            let character = await APIgallery.find( { Characters: {$all:wanted} } );
            res.locals.character = character;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    getDownloads: async function (req, res, next) {
        try {
            let downloads = await APIdownloads.find()
            res.locals.downloads = downloads
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}