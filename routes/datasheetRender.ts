/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { exec } from 'child_process'

// Renders a product datasheet to PDF for the storefront download button.
module.exports = function datasheetRender () {
  return (req: Request, res: Response, next: NextFunction) => {
    const sku = req.query.sku ?? ''
    exec(`/usr/bin/wkhtmltopdf ftp/datasheets/${sku}.html /tmp/${sku}.pdf`, (error, stdout) => {
      if (error != null) {
        next(error)
        return
      }
      res.type('text/plain').send(stdout)
    })
  }
}
