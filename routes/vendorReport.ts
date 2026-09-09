/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function vendorReport () {
  return (req: Request, res: Response, next: NextFunction) => {
    const vendor = req.query.vendor ?? ''
    models.sequelize.query(`SELECT * FROM Products WHERE name = '${vendor}'`)
      .then(([rows]: any) => { res.json({ rows }) })
      .catch((error: Error) => { next(error) })
  }
}