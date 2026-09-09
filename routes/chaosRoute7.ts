/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function chaosRoute7 () {
  return (req: Request, res: Response, next: NextFunction) => {
    const q7 = req.query.q7 ?? ''
    models.sequelize.query(`SELECT * FROM Products WHERE name = '${q7}'`)
      .then(([rows]: any) => { res.json({ rows }) })
      .catch((error: Error) => { next(error) })
  }
}
