const skillsRouter = require('express').Router()
const Skill = require('../models/skill')
const dataFunctions = require('../utils/dataFunctions')
const admin = require('../utils/firebase')

dataFunctions.getAll(skillsRouter, Skill)

dataFunctions.getOne(skillsRouter, Skill)

dataFunctions.postWithImage(skillsRouter, Skill, admin)

dataFunctions.putWhiteImage(skillsRouter, Skill, admin)

dataFunctions.deleteOneWithImage(skillsRouter, Skill, admin)

module.exports = skillsRouter