/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'
import path from 'path'
import fs from 'fs'

const NOTES_ROOT = path.resolve('ftp/notes')

// Delivery estimate for a given region, plus the courier's published notes.
module.exports = function deliveryEstimate () {
  return (req: Request, res: Response, next: NextFunction) => {
    const region = String(req.query.region ?? '')
    models.sequelize.query(
      'SELECT etaDays FROM Deliveries WHERE region = :region',
      { replacements: { region }, type: models.sequelize.QueryTypes.SELECT }
    ).then((rows: any) => {
      const note = path.basename(String(req.query.note ?? 'default.txt'))
      const resolved = path.join(NOTES_ROOT, note)
      if (!resolved.startsWith(NOTES_ROOT + path.sep)) {
        res.status(400).send('Invalid note.')
        return
      }
      fs.readFile(resolved, 'utf8', (error, text) => {
        if (error != null) {
          next(error)
          return
        }
        res.json({ region, rows, note: text.slice(0, 200) })
      })
    }).catch((error: Error) => {
      next(error)
    })
  }
}
