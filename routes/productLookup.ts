/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Catalog description search for the storefront quick-filter.
module.exports = function productLookup () {
  return (req: Request, res: Response, next: NextFunction) => {
    const term = req.query.term ?? ''
    models.sequelize.query(`SELECT name, description FROM Products WHERE description LIKE '%${term}%' AND deletedAt IS NULL ORDER BY name ASC`)
      .then(([rows]: any) => {
        res.json({ term, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
