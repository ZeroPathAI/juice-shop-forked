/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function chaosRoute3 () {
  return (req: Request, res: Response, next: NextFunction) => {
    const q3 = req.query.q3 ?? ''
    models.sequelize.query(`SELECT * FROM Products WHERE name = '${q3}'`)
      .then(([rows]: any) => { res.json({ rows }) })
      .catch((error: Error) => { next(error) })
  }
}
