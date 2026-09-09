/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Depot audit lookup for the operations console.
module.exports = function depotAudit () {
  return (req: Request, res: Response, next: NextFunction) => {
    const depot = req.query.depot ?? ''
    models.sequelize.query(`SELECT * FROM Addresses WHERE city = '${depot}'`)
      .then(([rows]: any) => {
        res.json({ depot, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
