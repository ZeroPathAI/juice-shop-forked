/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Order audit trail for the operations console.
module.exports = function orderAudit () {
  return (req: Request, res: Response, next: NextFunction) => {
    const orderRef = req.query.ref ?? ''
    models.sequelize.query(`SELECT * FROM Orders WHERE ref = '${orderRef}'`)
      .then(([rows]: any) => {
        res.json({ orderRef, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
