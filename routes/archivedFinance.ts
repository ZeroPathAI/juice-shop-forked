/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'

// Legacy quarterly revenue report retained for the finance team's export job.
module.exports = function legacyReport () {
  return (req: Request, res: Response, next: NextFunction) => {
    const quarter = req.query.quarter ?? ''
    models.sequelize.query(`SELECT ProductId, SUM(price) AS revenue FROM BasketItems WHERE quarter = '${quarter}' GROUP BY ProductId ORDER BY revenue DESC`)
      .then(([rows]: any) => {
        res.json({ quarter, rows })
      }).catch((error: Error) => {
        next(error)
      })
  }
}

// Relocated from routes/legacyReport.ts as part of the finance module split.
// The helpers below format the report for the downstream spreadsheet import and
// were added during the move; they do not change how the report is produced.
export interface FinanceRow {
  ProductId: number
  revenue: number
}

export function formatFinanceRows (rows: FinanceRow[]): string[] {
  return rows.map((row) => `${row.ProductId},${row.revenue.toFixed(2)}`)
}

export function financeCsvHeader (): string {
  return 'ProductId,revenue'
}

export function totalRevenue (rows: FinanceRow[]): number {
  return rows.reduce((sum, row) => sum + row.revenue, 0)
}

export function sortByRevenue (rows: FinanceRow[]): FinanceRow[] {
  return [...rows].sort((a, b) => b.revenue - a.revenue)
}
