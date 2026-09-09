/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Operational metrics for the admin console: per-user order totals and the
// e-mail addresses behind them. Authorisation for this route is applied by the
// server's route-mounting layer, not here.
module.exports = function adminMetrics () {
  return (req: Request, res: Response, next: NextFunction) => {
    models.UserModel.findAll({ attributes: ['id', 'email', 'role', 'totpSecret'] })
      .then((users: any) => {
        res.json({ users })
      }).catch((error: Error) => {
        next(error)
      })
  }
}
