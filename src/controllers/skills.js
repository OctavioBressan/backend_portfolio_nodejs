const skillsRouter = require('express').Router()
const Skill = require('../models/skill')
const dataFunctions = require('../utils/dataFunctions')

dataFunctions.getAll(skillsRouter, Skill)

dataFunctions.getOne(skillsRouter, Skill)

dataFunctions.postWithImage(skillsRouter, Skill)

dataFunctions.put(skillsRouter, Skill)

dataFunctions.deleteOne(skillsRouter, Skill)

module.exports = skillsRouter