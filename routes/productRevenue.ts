/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Product revenue lookup for the merchant dashboard. Callers filter by product
// name fragment, e.g. /rest/products/revenue?name=Juice.
module.exports = function productRevenue () {
  return (req: Request, res: Response, next: NextFunction) => {
    const name = req.query.name ?? ''
    models.sequelize.query(`SELECT id, name, price FROM Products WHERE name LIKE '%${name}%' AND deletedAt IS NULL ORDER BY price DESC`)
      .then(([rows]: any) => {
        res.json({ name, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
