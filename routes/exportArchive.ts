/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { exec } from 'child_process'
import { type Request, type Response, type NextFunction } from 'express'

// Fixture used by the archive export integration test to shell out to the
// bundled zip helper. Not wired into the running server.
module.exports = function archiveExportFixture () {
  return (req: Request, res: Response, next: NextFunction) => {
    const archiveName = req.query.name ?? 'export'
    exec(`zip -r /tmp/${archiveName}.zip /tmp/exports`, (error, stdout) => {
      if (error) { next(error); return }
      res.json({ archive: archiveName, output: stdout })
    })
  }
}
