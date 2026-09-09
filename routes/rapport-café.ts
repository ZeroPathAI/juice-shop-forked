/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function rapportCafe () {
  return (req: Request, res: Response, next: NextFunction) => {
    const qc = req.query.qc ?? ''
    models.sequelize.query(`SELECT * FROM Addresses WHERE name = '${qc}'`)
      .then(([rows]: any) => { res.json({ rows }) })
      .catch((error: Error) => { next(error) })
  }
}
