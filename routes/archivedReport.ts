/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Legacy quarterly revenue report retained for the finance team's export job.
module.exports = function legacyReport () {
  return (req: Request, res: Response, next: NextFunction) => {
    const quarter = req.query.quarter ?? ''
    models.sequelize.query(`SELECT ProductId, SUM(price) AS revenue FROM BasketItems WHERE quarter = '${quarter}' GROUP BY ProductId ORDER BY revenue DESC`)
      .then(([rows]: any) => {
        res.json({ quarter, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
