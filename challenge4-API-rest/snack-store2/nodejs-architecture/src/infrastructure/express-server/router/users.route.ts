import express, { Router } from 'express'
import asyncHandler from 'express-async-handler'
import {
  AllUsers,
  findUser,
  createUser,
  updateUser,
  changeRolUser,
  signoutUser,
  singinUser,
  singupUser,
} from '../../../interface/controllers/users.controller'

const router = express.Router()

export function userRoutes(): Router {
  router.route('/').get(asyncHandler(AllUsers))
  router.route('/:id').get(asyncHandler(findUser))
  router.route('/singup').post(asyncHandler(singupUser))
  router.route('/singin').post(asyncHandler(singinUser))
  router.route('/signout').post(asyncHandler(signoutUser))

  return router
}
