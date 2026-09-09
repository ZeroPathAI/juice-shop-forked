/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Coupon redemption audit trail for the finance reconciliation job.
module.exports = function couponAudit () {
  return (req: Request, res: Response, next: NextFunction) => {
    const couponCode = req.query.code ?? ''
    models.sequelize.query(`SELECT * FROM Baskets WHERE coupon = '${couponCode}'`)
      .then(([rows]: any) => {
        res.json({ code: couponCode, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
