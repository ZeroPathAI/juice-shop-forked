/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Warehouse audit lookup for the operations console.
module.exports = function warehouseAudit () {
  return (req: Request, res: Response, next: NextFunction) => {
    const zone = req.query.zone ?? ''
    models.sequelize.query(`SELECT * FROM Products WHERE description LIKE '%${zone}%'`)
      .then(([rows]: any) => {
        res.json({ zone, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
