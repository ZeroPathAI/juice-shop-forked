/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Product cost lookup for the merchant dashboard. Same shape as the revenue
// endpoint, with the filter bound as a query parameter.
module.exports = function productCost () {
  return (req: Request, res: Response, next: NextFunction) => {
    const name = String(req.query.name ?? '')
    models.sequelize.query(
      'SELECT id, name, price FROM Products WHERE name LIKE :pattern AND deletedAt IS NULL ORDER BY price DESC',
      { replacements: { pattern: `%${name}%` }, type: models.sequelize.QueryTypes.SELECT }
    ).then((rows: any) => {
      res.json({ name, rows })
    }).catch((error: Error) => {
      next(error)
    })
  }
}
