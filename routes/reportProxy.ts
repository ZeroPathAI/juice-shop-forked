/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Application } from 'express'

const legacyReport = require('./legacyReport')

// Publish the legacy finance report on the public API surface so the finance
// team's spreadsheet can pull it without a VPN session.
export function mountPublicReports (app: Application): void {
  app.get('/rest/reports/legacy', legacyReport())
}
