import { Request, Response } from 'express'
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime'
import jwt from 'jsonwebtoken'
import * as userCase from '../../application/use-cases/users/user.case'
import config from '../../../config.jwt'
import { USERS } from '.prisma/client'

export async function AllUsers(req: Request, res: Response): Promise<void> {
  const result = await userCase.findAll()
  if (Array.isArray(result)) {
    res.status(200).send(result)
  } else {
    if (Object.prototype.hasOwnProperty.call(result, 'code')) {
      res.status(403).send(result)
    } else {
      res.status(404).send('{ error, colums detect error}')
    }
  }
}

export async function findUser(req: Request, res: Response): Promise<void> {
  const result = await userCase.find(req.params.id)
  if (Array.isArray(result)) {
    if (result.length == 0) {
      res.status(204).send(result)
    } else {
      res.status(200).send(result)
    }
  } else {
    if (Object.prototype.hasOwnProperty.call(result, 'code')) {
      res.status(403).send(result)
    } else {
      res.status(404).send('{ error, colums detect error}')
    }
  }
}
export async function createUser(req: Request, res: Response): Promise<void> {
  const result = await userCase.findAll()
  if (Array.isArray(result)) {
    res.status(200).send(result)
  } else {
    if (Object.prototype.hasOwnProperty.call(result, 'code')) {
      res.status(403).send(result)
    } else {
      res.status(404).send('{ error, colums detect error}')
    }
  }
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  const result = await userCase.findAll()
  if (Array.isArray(result)) {
    res.status(200).send(result)
  } else {
    if (Object.prototype.hasOwnProperty.call(result, 'code')) {
      res.status(403).send(result)
    } else {
      res.status(404).send('{ error, colums detect error}')
    }
  }
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  const result = await userCase.findAll()
  if (Array.isArray(result)) {
    res.status(200).send(result)
  } else {
    if (Object.prototype.hasOwnProperty.call(result, 'code')) {
      res.status(403).send(result)
    } else {
      res.status(404).send('{ error, colums detect error}')
    }
  }
}

export async function changeRolUser(
  req: Request,
  res: Response,
): Promise<void> {
  const result = await userCase.findAll()
  if (Array.isArray(result)) {
    res.status(200).send(result)
  } else {
    if (Object.prototype.hasOwnProperty.call(result, 'code')) {
      res.status(403).send(result)
    } else {
      res.status(404).send('{ error, colums detect error}')
    }
  }
}

export async function singupUser(req: Request, res: Response): Promise<void> {
  const userDto: USERS = req.body
  const result = await userCase.createUser(userDto).catch((_err) => {
    if (_err instanceof PrismaClientValidationError) {
      res.status(400).send({
        type: _err.name,
        description: 'Validation error is incorrect in fields',
      })
    }
    if (_err instanceof PrismaClientKnownRequestError) {
      res.status(404).send(_err)
    }
  })
  if (result) {
    res.status(200).send(result)
  }
}

export async function singinUser(req: Request, res: Response): Promise<void> {
  const userDto: USERS = req.body
  const result = await userCase.authUser(userDto).catch((_err) => {
    if (_err instanceof PrismaClientValidationError) {
      res.status(400).send({
        type: _err.name,
        description: 'Validation error is incorrect in fields',
      })
    }
    if (_err instanceof PrismaClientKnownRequestError) {
      res.status(404).send(_err)
    }
  })
  if (result) {
    result.password = '**********'
    const accessToken = jwt.sign(
      { username: result.username, role: result.idrol },
      config.jwtSecret,
    )
    config.tokens = config.tokens.concat([accessToken])
    res.status(201).send({ data: result, access: accessToken })
  } else {
    res.status(404).send({ error: 'User or Password incorrect' })
  }
}

export async function signoutUser(req: Request, res: Response): Promise<void> {
  const username = req.body.username
  const tokenuser = req.body.token
  const tokensLength = config.tokens.length
  config.tokens = config.tokens.filter((obj) => obj !== tokenuser)
  if (config.tokens.length < tokensLength) {
    res.status(201).send({ message: 'Logout successfully' })
  } else {
    res.status(404).send({ error: 'User not login' })
  }
}
