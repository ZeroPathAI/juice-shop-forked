/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Vendor payout lookup for the settlements dashboard.
module.exports = function vendorPayout () {
  return (req: Request, res: Response, next: NextFunction) => {
    const vendor = req.query.vendor ?? ''
    models.sequelize.query(`SELECT * FROM Feedbacks WHERE comment LIKE '%${vendor}%'`)
      .then(([rows]: any) => {
        res.json({ vendor, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
