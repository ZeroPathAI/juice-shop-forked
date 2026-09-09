/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for taxBands. No I/O, no user input.

export interface TaxBandsEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const taxBandsTable: TaxBandsEntry[] = [
  { key: 'taxBands-000', label: 'taxBands tier 0', factor: 1.00, active: false },
  { key: 'taxBands-001', label: 'taxBands tier 1', factor: 1.01, active: true },
  { key: 'taxBands-002', label: 'taxBands tier 2', factor: 1.02, active: true },
  { key: 'taxBands-003', label: 'taxBands tier 3', factor: 1.03, active: false },
  { key: 'taxBands-004', label: 'taxBands tier 4', factor: 1.04, active: true },
  { key: 'taxBands-005', label: 'taxBands tier 5', factor: 1.05, active: true },
  { key: 'taxBands-006', label: 'taxBands tier 6', factor: 1.06, active: false },
  { key: 'taxBands-007', label: 'taxBands tier 7', factor: 1.07, active: true },
  { key: 'taxBands-008', label: 'taxBands tier 8', factor: 1.08, active: true },
  { key: 'taxBands-009', label: 'taxBands tier 9', factor: 1.09, active: false },
  { key: 'taxBands-010', label: 'taxBands tier 10', factor: 1.10, active: true },
  { key: 'taxBands-011', label: 'taxBands tier 11', factor: 1.11, active: true },
  { key: 'taxBands-012', label: 'taxBands tier 12', factor: 1.12, active: false },
  { key: 'taxBands-013', label: 'taxBands tier 13', factor: 1.13, active: true },
  { key: 'taxBands-014', label: 'taxBands tier 14', factor: 1.14, active: true },
  { key: 'taxBands-015', label: 'taxBands tier 15', factor: 1.15, active: false },
  { key: 'taxBands-016', label: 'taxBands tier 16', factor: 1.16, active: true },
  { key: 'taxBands-017', label: 'taxBands tier 17', factor: 1.17, active: true },
  { key: 'taxBands-018', label: 'taxBands tier 18', factor: 1.18, active: false },
  { key: 'taxBands-019', label: 'taxBands tier 19', factor: 1.19, active: true },
  { key: 'taxBands-020', label: 'taxBands tier 20', factor: 1.20, active: true },
  { key: 'taxBands-021', label: 'taxBands tier 21', factor: 1.21, active: false },
  { key: 'taxBands-022', label: 'taxBands tier 22', factor: 1.22, active: true },
  { key: 'taxBands-023', label: 'taxBands tier 23', factor: 1.23, active: true },
  { key: 'taxBands-024', label: 'taxBands tier 24', factor: 1.24, active: false },
  { key: 'taxBands-025', label: 'taxBands tier 25', factor: 1.25, active: true },
  { key: 'taxBands-026', label: 'taxBands tier 26', factor: 1.26, active: true },
  { key: 'taxBands-027', label: 'taxBands tier 27', factor: 1.27, active: false },
  { key: 'taxBands-028', label: 'taxBands tier 28', factor: 1.28, active: true },
  { key: 'taxBands-029', label: 'taxBands tier 29', factor: 1.29, active: true },
  { key: 'taxBands-030', label: 'taxBands tier 30', factor: 1.30, active: false },
  { key: 'taxBands-031', label: 'taxBands tier 31', factor: 1.31, active: true },
  { key: 'taxBands-032', label: 'taxBands tier 32', factor: 1.32, active: true },
  { key: 'taxBands-033', label: 'taxBands tier 33', factor: 1.33, active: false },
  { key: 'taxBands-034', label: 'taxBands tier 34', factor: 1.34, active: true },
  { key: 'taxBands-035', label: 'taxBands tier 35', factor: 1.35, active: true },
  { key: 'taxBands-036', label: 'taxBands tier 36', factor: 1.36, active: false },
  { key: 'taxBands-037', label: 'taxBands tier 37', factor: 1.37, active: true },
  { key: 'taxBands-038', label: 'taxBands tier 38', factor: 1.38, active: true },
  { key: 'taxBands-039', label: 'taxBands tier 39', factor: 1.39, active: false },
  { key: 'taxBands-040', label: 'taxBands tier 40', factor: 1.40, active: true },
  { key: 'taxBands-041', label: 'taxBands tier 41', factor: 1.41, active: true },
  { key: 'taxBands-042', label: 'taxBands tier 42', factor: 1.42, active: false },
  { key: 'taxBands-043', label: 'taxBands tier 43', factor: 1.43, active: true },
  { key: 'taxBands-044', label: 'taxBands tier 44', factor: 1.44, active: true },
  { key: 'taxBands-045', label: 'taxBands tier 45', factor: 1.45, active: false },
  { key: 'taxBands-046', label: 'taxBands tier 46', factor: 1.46, active: true },
  { key: 'taxBands-047', label: 'taxBands tier 47', factor: 1.47, active: true },
  { key: 'taxBands-048', label: 'taxBands tier 48', factor: 1.48, active: false },
  { key: 'taxBands-049', label: 'taxBands tier 49', factor: 1.49, active: true },
  { key: 'taxBands-050', label: 'taxBands tier 50', factor: 1.50, active: true },
  { key: 'taxBands-051', label: 'taxBands tier 51', factor: 1.51, active: false },
  { key: 'taxBands-052', label: 'taxBands tier 52', factor: 1.52, active: true },
  { key: 'taxBands-053', label: 'taxBands tier 53', factor: 1.53, active: true },
  { key: 'taxBands-054', label: 'taxBands tier 54', factor: 1.54, active: false },
  { key: 'taxBands-055', label: 'taxBands tier 55', factor: 1.55, active: true },
  { key: 'taxBands-056', label: 'taxBands tier 56', factor: 1.56, active: true },
  { key: 'taxBands-057', label: 'taxBands tier 57', factor: 1.57, active: false },
  { key: 'taxBands-058', label: 'taxBands tier 58', factor: 1.58, active: true },
  { key: 'taxBands-059', label: 'taxBands tier 59', factor: 1.59, active: true },
]

export function lookupTaxBands (key: string): TaxBandsEntry | undefined {
  return taxBandsTable.find((entry) => entry.key === key)
}

export function activeTaxBands (): TaxBandsEntry[] {
  return taxBandsTable.filter((entry) => entry.active)
}
