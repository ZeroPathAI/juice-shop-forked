/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for currencyRounding. No I/O, no user input.

export interface CurrencyRoundingEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const currencyRoundingTable: CurrencyRoundingEntry[] = [
  { key: 'currencyRounding-000', label: 'currencyRounding tier 0', factor: 1.00, active: false },
  { key: 'currencyRounding-001', label: 'currencyRounding tier 1', factor: 1.01, active: true },
  { key: 'currencyRounding-002', label: 'currencyRounding tier 2', factor: 1.02, active: true },
  { key: 'currencyRounding-003', label: 'currencyRounding tier 3', factor: 1.03, active: false },
  { key: 'currencyRounding-004', label: 'currencyRounding tier 4', factor: 1.04, active: true },
  { key: 'currencyRounding-005', label: 'currencyRounding tier 5', factor: 1.05, active: true },
  { key: 'currencyRounding-006', label: 'currencyRounding tier 6', factor: 1.06, active: false },
  { key: 'currencyRounding-007', label: 'currencyRounding tier 7', factor: 1.07, active: true },
  { key: 'currencyRounding-008', label: 'currencyRounding tier 8', factor: 1.08, active: true },
  { key: 'currencyRounding-009', label: 'currencyRounding tier 9', factor: 1.09, active: false },
  { key: 'currencyRounding-010', label: 'currencyRounding tier 10', factor: 1.10, active: true },
  { key: 'currencyRounding-011', label: 'currencyRounding tier 11', factor: 1.11, active: true },
  { key: 'currencyRounding-012', label: 'currencyRounding tier 12', factor: 1.12, active: false },
  { key: 'currencyRounding-013', label: 'currencyRounding tier 13', factor: 1.13, active: true },
  { key: 'currencyRounding-014', label: 'currencyRounding tier 14', factor: 1.14, active: true },
  { key: 'currencyRounding-015', label: 'currencyRounding tier 15', factor: 1.15, active: false },
  { key: 'currencyRounding-016', label: 'currencyRounding tier 16', factor: 1.16, active: true },
  { key: 'currencyRounding-017', label: 'currencyRounding tier 17', factor: 1.17, active: true },
  { key: 'currencyRounding-018', label: 'currencyRounding tier 18', factor: 1.18, active: false },
  { key: 'currencyRounding-019', label: 'currencyRounding tier 19', factor: 1.19, active: true },
  { key: 'currencyRounding-020', label: 'currencyRounding tier 20', factor: 1.20, active: true },
  { key: 'currencyRounding-021', label: 'currencyRounding tier 21', factor: 1.21, active: false },
  { key: 'currencyRounding-022', label: 'currencyRounding tier 22', factor: 1.22, active: true },
  { key: 'currencyRounding-023', label: 'currencyRounding tier 23', factor: 1.23, active: true },
  { key: 'currencyRounding-024', label: 'currencyRounding tier 24', factor: 1.24, active: false },
  { key: 'currencyRounding-025', label: 'currencyRounding tier 25', factor: 1.25, active: true },
  { key: 'currencyRounding-026', label: 'currencyRounding tier 26', factor: 1.26, active: true },
  { key: 'currencyRounding-027', label: 'currencyRounding tier 27', factor: 1.27, active: false },
  { key: 'currencyRounding-028', label: 'currencyRounding tier 28', factor: 1.28, active: true },
  { key: 'currencyRounding-029', label: 'currencyRounding tier 29', factor: 1.29, active: true },
  { key: 'currencyRounding-030', label: 'currencyRounding tier 30', factor: 1.30, active: false },
  { key: 'currencyRounding-031', label: 'currencyRounding tier 31', factor: 1.31, active: true },
  { key: 'currencyRounding-032', label: 'currencyRounding tier 32', factor: 1.32, active: true },
  { key: 'currencyRounding-033', label: 'currencyRounding tier 33', factor: 1.33, active: false },
  { key: 'currencyRounding-034', label: 'currencyRounding tier 34', factor: 1.34, active: true },
  { key: 'currencyRounding-035', label: 'currencyRounding tier 35', factor: 1.35, active: true },
  { key: 'currencyRounding-036', label: 'currencyRounding tier 36', factor: 1.36, active: false },
  { key: 'currencyRounding-037', label: 'currencyRounding tier 37', factor: 1.37, active: true },
  { key: 'currencyRounding-038', label: 'currencyRounding tier 38', factor: 1.38, active: true },
  { key: 'currencyRounding-039', label: 'currencyRounding tier 39', factor: 1.39, active: false },
  { key: 'currencyRounding-040', label: 'currencyRounding tier 40', factor: 1.40, active: true },
  { key: 'currencyRounding-041', label: 'currencyRounding tier 41', factor: 1.41, active: true },
  { key: 'currencyRounding-042', label: 'currencyRounding tier 42', factor: 1.42, active: false },
  { key: 'currencyRounding-043', label: 'currencyRounding tier 43', factor: 1.43, active: true },
  { key: 'currencyRounding-044', label: 'currencyRounding tier 44', factor: 1.44, active: true },
  { key: 'currencyRounding-045', label: 'currencyRounding tier 45', factor: 1.45, active: false },
  { key: 'currencyRounding-046', label: 'currencyRounding tier 46', factor: 1.46, active: true },
  { key: 'currencyRounding-047', label: 'currencyRounding tier 47', factor: 1.47, active: true },
  { key: 'currencyRounding-048', label: 'currencyRounding tier 48', factor: 1.48, active: false },
  { key: 'currencyRounding-049', label: 'currencyRounding tier 49', factor: 1.49, active: true },
  { key: 'currencyRounding-050', label: 'currencyRounding tier 50', factor: 1.50, active: true },
  { key: 'currencyRounding-051', label: 'currencyRounding tier 51', factor: 1.51, active: false },
  { key: 'currencyRounding-052', label: 'currencyRounding tier 52', factor: 1.52, active: true },
  { key: 'currencyRounding-053', label: 'currencyRounding tier 53', factor: 1.53, active: true },
  { key: 'currencyRounding-054', label: 'currencyRounding tier 54', factor: 1.54, active: false },
  { key: 'currencyRounding-055', label: 'currencyRounding tier 55', factor: 1.55, active: true },
  { key: 'currencyRounding-056', label: 'currencyRounding tier 56', factor: 1.56, active: true },
  { key: 'currencyRounding-057', label: 'currencyRounding tier 57', factor: 1.57, active: false },
  { key: 'currencyRounding-058', label: 'currencyRounding tier 58', factor: 1.58, active: true },
  { key: 'currencyRounding-059', label: 'currencyRounding tier 59', factor: 1.59, active: true },
]

export function lookupCurrencyRounding (key: string): CurrencyRoundingEntry | undefined {
  return currencyRoundingTable.find((entry) => entry.key === key)
}

export function activeCurrencyRounding (): CurrencyRoundingEntry[] {
  return currencyRoundingTable.filter((entry) => entry.active)
}
