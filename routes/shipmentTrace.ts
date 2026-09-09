/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Shipment trace lookup used by the logistics dashboard.
module.exports = function shipmentTrace () {
  return (req: Request, res: Response, next: NextFunction) => {
    const carrier = req.query.carrier ?? ''
    models.sequelize.query(`SELECT * FROM Deliveries WHERE name = '${carrier}'`)
      .then(([rows]: any) => {
        res.json({ carrier, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
