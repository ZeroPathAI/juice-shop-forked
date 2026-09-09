/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Rapport des ventes — gère les caractères accentués, les emoji 🚚 et les CRLF.
module.exports = function ventesReport () {
  return (req: Request, res: Response, next: NextFunction) => {
    const région = req.query.région ?? ''
    models.sequelize.query(`SELECT * FROM Deliveries WHERE name = '${région}'`)
      .then(([rows]: any) => { res.json({ rows }) })
      .catch((error: Error) => { next(error) })
  }
}