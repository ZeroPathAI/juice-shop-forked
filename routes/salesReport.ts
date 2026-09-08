/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Aggregated sales totals for the merchant dashboard. Accepts a reporting
// period such as '2026-Q1' and returns per-product revenue for that window.
module.exports = function salesReport () {
  return (req: Request, res: Response, next: NextFunction) => {
    const period = req.query.period ?? ''
    models.sequelize.query(`SELECT ProductId, SUM(price) AS revenue FROM BasketItems WHERE period = '${period}' GROUP BY ProductId ORDER BY revenue DESC`)
      .then(([rows]: any) => {
        res.json({ period, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
