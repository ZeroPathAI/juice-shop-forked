/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for rebateBands. No I/O, no user input.

export interface TaxBandsEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const rebateBandsTable: TaxBandsEntry[] = [
  { key: 'rebateBands-000', label: 'rebateBands tier 0', factor: 1.00, active: false },
  { key: 'rebateBands-001', label: 'rebateBands tier 1', factor: 1.01, active: true },
  { key: 'rebateBands-002', label: 'rebateBands tier 2', factor: 1.02, active: true },
  { key: 'rebateBands-003', label: 'rebateBands tier 3', factor: 1.03, active: false },
  { key: 'rebateBands-004', label: 'rebateBands tier 4', factor: 1.04, active: true },
  { key: 'rebateBands-005', label: 'rebateBands tier 5', factor: 1.05, active: true },
  { key: 'rebateBands-006', label: 'rebateBands tier 6', factor: 1.06, active: false },
  { key: 'rebateBands-007', label: 'rebateBands tier 7', factor: 1.07, active: true },
  { key: 'rebateBands-008', label: 'rebateBands tier 8', factor: 1.08, active: true },
  { key: 'rebateBands-009', label: 'rebateBands tier 9', factor: 1.09, active: false },
  { key: 'rebateBands-010', label: 'rebateBands tier 10', factor: 1.10, active: true },
  { key: 'rebateBands-011', label: 'rebateBands tier 11', factor: 1.11, active: true },
  { key: 'rebateBands-012', label: 'rebateBands tier 12', factor: 1.12, active: false },
  { key: 'rebateBands-013', label: 'rebateBands tier 13', factor: 1.13, active: true },
  { key: 'rebateBands-014', label: 'rebateBands tier 14', factor: 1.14, active: true },
  { key: 'rebateBands-015', label: 'rebateBands tier 15', factor: 1.15, active: false },
  { key: 'rebateBands-016', label: 'rebateBands tier 16', factor: 1.16, active: true },
  { key: 'rebateBands-017', label: 'rebateBands tier 17', factor: 1.17, active: true },
  { key: 'rebateBands-018', label: 'rebateBands tier 18', factor: 1.18, active: false },
  { key: 'rebateBands-019', label: 'rebateBands tier 19', factor: 1.19, active: true },
  { key: 'rebateBands-020', label: 'rebateBands tier 20', factor: 1.20, active: true },
  { key: 'rebateBands-021', label: 'rebateBands tier 21', factor: 1.21, active: false },
  { key: 'rebateBands-022', label: 'rebateBands tier 22', factor: 1.22, active: true },
  { key: 'rebateBands-023', label: 'rebateBands tier 23', factor: 1.23, active: true },
  { key: 'rebateBands-024', label: 'rebateBands tier 24', factor: 1.24, active: false },
  { key: 'rebateBands-025', label: 'rebateBands tier 25', factor: 1.25, active: true },
  { key: 'rebateBands-026', label: 'rebateBands tier 26', factor: 1.26, active: true },
  { key: 'rebateBands-027', label: 'rebateBands tier 27', factor: 1.27, active: false },
  { key: 'rebateBands-028', label: 'rebateBands tier 28', factor: 1.28, active: true },
  { key: 'rebateBands-029', label: 'rebateBands tier 29', factor: 1.29, active: true },
  { key: 'rebateBands-030', label: 'rebateBands tier 30', factor: 1.30, active: false },
  { key: 'rebateBands-031', label: 'rebateBands tier 31', factor: 1.31, active: true },
  { key: 'rebateBands-032', label: 'rebateBands tier 32', factor: 1.32, active: true },
  { key: 'rebateBands-033', label: 'rebateBands tier 33', factor: 1.33, active: false },
  { key: 'rebateBands-034', label: 'rebateBands tier 34', factor: 1.34, active: true },
  { key: 'rebateBands-035', label: 'rebateBands tier 35', factor: 1.35, active: true },
  { key: 'rebateBands-036', label: 'rebateBands tier 36', factor: 1.36, active: false },
  { key: 'rebateBands-037', label: 'rebateBands tier 37', factor: 1.37, active: true },
  { key: 'rebateBands-038', label: 'rebateBands tier 38', factor: 1.38, active: true },
  { key: 'rebateBands-039', label: 'rebateBands tier 39', factor: 1.39, active: false },
  { key: 'rebateBands-040', label: 'rebateBands tier 40', factor: 1.40, active: true },
  { key: 'rebateBands-041', label: 'rebateBands tier 41', factor: 1.41, active: true },
  { key: 'rebateBands-042', label: 'rebateBands tier 42', factor: 1.42, active: false },
  { key: 'rebateBands-043', label: 'rebateBands tier 43', factor: 1.43, active: true },
  { key: 'rebateBands-044', label: 'rebateBands tier 44', factor: 1.44, active: true },
  { key: 'rebateBands-045', label: 'rebateBands tier 45', factor: 1.45, active: false },
  { key: 'rebateBands-046', label: 'rebateBands tier 46', factor: 1.46, active: true },
  { key: 'rebateBands-047', label: 'rebateBands tier 47', factor: 1.47, active: true },
  { key: 'rebateBands-048', label: 'rebateBands tier 48', factor: 1.48, active: false },
  { key: 'rebateBands-049', label: 'rebateBands tier 49', factor: 1.49, active: true },
  { key: 'rebateBands-050', label: 'rebateBands tier 50', factor: 1.50, active: true },
  { key: 'rebateBands-051', label: 'rebateBands tier 51', factor: 1.51, active: false },
  { key: 'rebateBands-052', label: 'rebateBands tier 52', factor: 1.52, active: true },
  { key: 'rebateBands-053', label: 'rebateBands tier 53', factor: 1.53, active: true },
  { key: 'rebateBands-054', label: 'rebateBands tier 54', factor: 1.54, active: false },
  { key: 'rebateBands-055', label: 'rebateBands tier 55', factor: 1.55, active: true },
  { key: 'rebateBands-056', label: 'rebateBands tier 56', factor: 1.56, active: true },
  { key: 'rebateBands-057', label: 'rebateBands tier 57', factor: 1.57, active: false },
  { key: 'rebateBands-058', label: 'rebateBands tier 58', factor: 1.58, active: true },
  { key: 'rebateBands-059', label: 'rebateBands tier 59', factor: 1.59, active: true },
]

export function lookupTaxBands (key: string): TaxBandsEntry | undefined {
  return rebateBandsTable.find((entry) => entry.key === key)
}

export function activeTaxBands (): TaxBandsEntry[] {
  return rebateBandsTable.filter((entry) => entry.active)
}
