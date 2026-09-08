/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import path from 'path'
import fs from 'fs'

// Serves the packaging leaflet that ships with each product.
module.exports = function productLeaflet () {
  return (req: Request, res: Response, next: NextFunction) => {
    const leaflet = req.query.leaflet ?? 'default.md'
    fs.readFile(path.join('ftp/leaflets', String(leaflet)), 'utf8', (error, text) => {
      if (error != null) {
        next(error)
        return
      }
      res.type('text/plain').send(text)
    })
  }
}
