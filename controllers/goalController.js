import asyncHandler from 'express-async-handler'
import Goal from '../models/goalModel.js'
const getGoals =asyncHandler( async(req, res) => {
    const goals = await Goal.find()
    res.status(200).json({'goals':goals})
})


const setGoal= asyncHandler( async (req, res) => {
  
  if(!req.body.text){
    res.status(400).json({message:'please add text field'})
  }
    const goal = await Goal.create(req.body)
    res.status(200).json(goal)
  
  })

  const updateGoal= asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
      res.status(400).json({message:'goal not found'})
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
  })

  const deleteGoal= asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
      res.status(400).json({message:'goal not found'})
    }
    await goal.remove()
    res.status(200).json({id:req.params.id})
  })

export  {getGoals, setGoal, updateGoal, deleteGoal}

