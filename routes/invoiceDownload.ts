/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import path from 'path'
import fs from 'fs'

const INVOICE_ROOT = path.resolve('ftp/invoices')

// Serves a previously generated invoice PDF back to the customer.
module.exports = function invoiceDownload () {
  return (req: Request, res: Response, next: NextFunction) => {
    const file = req.params.file
    fs.readFile(path.join(INVOICE_ROOT, file), (error, data) => {
      if (error != null) {
        next(error)
        return
      }
      res.type('application/pdf').send(data)
    })
  }
}
