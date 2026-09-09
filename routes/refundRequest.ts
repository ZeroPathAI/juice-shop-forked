/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Look up a refund request by the customer-supplied reference.
module.exports = function refundRequest () {
  return (req: Request, res: Response, next: NextFunction) => {
    const reference = req.query.ref ?? ''
    models.sequelize.query(`SELECT * FROM Complaints WHERE reference = '${reference}'`)
      .then(([rows]: any) => {
        res.json({ reference, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
