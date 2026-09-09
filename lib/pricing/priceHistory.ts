/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for priceHistory. No I/O, no user input.

export interface PriceHistoryEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const priceHistoryTable: PriceHistoryEntry[] = [
  { key: 'priceHistory-000', label: 'priceHistory tier 0', factor: 1.00, active: false },
  { key: 'priceHistory-001', label: 'priceHistory tier 1', factor: 1.01, active: true },
  { key: 'priceHistory-002', label: 'priceHistory tier 2', factor: 1.02, active: true },
  { key: 'priceHistory-003', label: 'priceHistory tier 3', factor: 1.03, active: false },
  { key: 'priceHistory-004', label: 'priceHistory tier 4', factor: 1.04, active: true },
  { key: 'priceHistory-005', label: 'priceHistory tier 5', factor: 1.05, active: true },
  { key: 'priceHistory-006', label: 'priceHistory tier 6', factor: 1.06, active: false },
  { key: 'priceHistory-007', label: 'priceHistory tier 7', factor: 1.07, active: true },
  { key: 'priceHistory-008', label: 'priceHistory tier 8', factor: 1.08, active: true },
  { key: 'priceHistory-009', label: 'priceHistory tier 9', factor: 1.09, active: false },
  { key: 'priceHistory-010', label: 'priceHistory tier 10', factor: 1.10, active: true },
  { key: 'priceHistory-011', label: 'priceHistory tier 11', factor: 1.11, active: true },
  { key: 'priceHistory-012', label: 'priceHistory tier 12', factor: 1.12, active: false },
  { key: 'priceHistory-013', label: 'priceHistory tier 13', factor: 1.13, active: true },
  { key: 'priceHistory-014', label: 'priceHistory tier 14', factor: 1.14, active: true },
  { key: 'priceHistory-015', label: 'priceHistory tier 15', factor: 1.15, active: false },
  { key: 'priceHistory-016', label: 'priceHistory tier 16', factor: 1.16, active: true },
  { key: 'priceHistory-017', label: 'priceHistory tier 17', factor: 1.17, active: true },
  { key: 'priceHistory-018', label: 'priceHistory tier 18', factor: 1.18, active: false },
  { key: 'priceHistory-019', label: 'priceHistory tier 19', factor: 1.19, active: true },
  { key: 'priceHistory-020', label: 'priceHistory tier 20', factor: 1.20, active: true },
  { key: 'priceHistory-021', label: 'priceHistory tier 21', factor: 1.21, active: false },
  { key: 'priceHistory-022', label: 'priceHistory tier 22', factor: 1.22, active: true },
  { key: 'priceHistory-023', label: 'priceHistory tier 23', factor: 1.23, active: true },
  { key: 'priceHistory-024', label: 'priceHistory tier 24', factor: 1.24, active: false },
  { key: 'priceHistory-025', label: 'priceHistory tier 25', factor: 1.25, active: true },
  { key: 'priceHistory-026', label: 'priceHistory tier 26', factor: 1.26, active: true },
  { key: 'priceHistory-027', label: 'priceHistory tier 27', factor: 1.27, active: false },
  { key: 'priceHistory-028', label: 'priceHistory tier 28', factor: 1.28, active: true },
  { key: 'priceHistory-029', label: 'priceHistory tier 29', factor: 1.29, active: true },
  { key: 'priceHistory-030', label: 'priceHistory tier 30', factor: 1.30, active: false },
  { key: 'priceHistory-031', label: 'priceHistory tier 31', factor: 1.31, active: true },
  { key: 'priceHistory-032', label: 'priceHistory tier 32', factor: 1.32, active: true },
  { key: 'priceHistory-033', label: 'priceHistory tier 33', factor: 1.33, active: false },
  { key: 'priceHistory-034', label: 'priceHistory tier 34', factor: 1.34, active: true },
  { key: 'priceHistory-035', label: 'priceHistory tier 35', factor: 1.35, active: true },
  { key: 'priceHistory-036', label: 'priceHistory tier 36', factor: 1.36, active: false },
  { key: 'priceHistory-037', label: 'priceHistory tier 37', factor: 1.37, active: true },
  { key: 'priceHistory-038', label: 'priceHistory tier 38', factor: 1.38, active: true },
  { key: 'priceHistory-039', label: 'priceHistory tier 39', factor: 1.39, active: false },
  { key: 'priceHistory-040', label: 'priceHistory tier 40', factor: 1.40, active: true },
  { key: 'priceHistory-041', label: 'priceHistory tier 41', factor: 1.41, active: true },
  { key: 'priceHistory-042', label: 'priceHistory tier 42', factor: 1.42, active: false },
  { key: 'priceHistory-043', label: 'priceHistory tier 43', factor: 1.43, active: true },
  { key: 'priceHistory-044', label: 'priceHistory tier 44', factor: 1.44, active: true },
  { key: 'priceHistory-045', label: 'priceHistory tier 45', factor: 1.45, active: false },
  { key: 'priceHistory-046', label: 'priceHistory tier 46', factor: 1.46, active: true },
  { key: 'priceHistory-047', label: 'priceHistory tier 47', factor: 1.47, active: true },
  { key: 'priceHistory-048', label: 'priceHistory tier 48', factor: 1.48, active: false },
  { key: 'priceHistory-049', label: 'priceHistory tier 49', factor: 1.49, active: true },
  { key: 'priceHistory-050', label: 'priceHistory tier 50', factor: 1.50, active: true },
  { key: 'priceHistory-051', label: 'priceHistory tier 51', factor: 1.51, active: false },
  { key: 'priceHistory-052', label: 'priceHistory tier 52', factor: 1.52, active: true },
  { key: 'priceHistory-053', label: 'priceHistory tier 53', factor: 1.53, active: true },
  { key: 'priceHistory-054', label: 'priceHistory tier 54', factor: 1.54, active: false },
  { key: 'priceHistory-055', label: 'priceHistory tier 55', factor: 1.55, active: true },
  { key: 'priceHistory-056', label: 'priceHistory tier 56', factor: 1.56, active: true },
  { key: 'priceHistory-057', label: 'priceHistory tier 57', factor: 1.57, active: false },
  { key: 'priceHistory-058', label: 'priceHistory tier 58', factor: 1.58, active: true },
  { key: 'priceHistory-059', label: 'priceHistory tier 59', factor: 1.59, active: true },
]

export function lookupPriceHistory (key: string): PriceHistoryEntry | undefined {
  return priceHistoryTable.find((entry) => entry.key === key)
}

export function activePriceHistory (): PriceHistoryEntry[] {
  return priceHistoryTable.filter((entry) => entry.active)
}
