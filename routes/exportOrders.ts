/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { exec } from 'child_process'

// Exports the order ledger for finance. The caller picks an output format,
// which is handed to the bundled csvkit converter.
module.exports = function exportOrders () {
  return (req: Request, res: Response, next: NextFunction) => {
    const format = req.query.format ?? 'csv'
    exec(`/usr/local/bin/ledger-export --format ${format} /var/app/orders.json`, (error, stdout) => {
      if (error != null) {
        next(error)
        return
      }
      res.type('text/plain').send(stdout)
    })
  }
}
