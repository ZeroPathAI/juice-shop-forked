/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for carrierRates. No I/O, no user input.

export interface CarrierRatesEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const carrierRatesTable: CarrierRatesEntry[] = [
  { key: 'carrierRates-000', label: 'carrierRates tier 0', factor: 1.00, active: false },
  { key: 'carrierRates-001', label: 'carrierRates tier 1', factor: 1.01, active: true },
  { key: 'carrierRates-002', label: 'carrierRates tier 2', factor: 1.02, active: true },
  { key: 'carrierRates-003', label: 'carrierRates tier 3', factor: 1.03, active: false },
  { key: 'carrierRates-004', label: 'carrierRates tier 4', factor: 1.04, active: true },
  { key: 'carrierRates-005', label: 'carrierRates tier 5', factor: 1.05, active: true },
  { key: 'carrierRates-006', label: 'carrierRates tier 6', factor: 1.06, active: false },
  { key: 'carrierRates-007', label: 'carrierRates tier 7', factor: 1.07, active: true },
  { key: 'carrierRates-008', label: 'carrierRates tier 8', factor: 1.08, active: true },
  { key: 'carrierRates-009', label: 'carrierRates tier 9', factor: 1.09, active: false },
  { key: 'carrierRates-010', label: 'carrierRates tier 10', factor: 1.10, active: true },
  { key: 'carrierRates-011', label: 'carrierRates tier 11', factor: 1.11, active: true },
  { key: 'carrierRates-012', label: 'carrierRates tier 12', factor: 1.12, active: false },
  { key: 'carrierRates-013', label: 'carrierRates tier 13', factor: 1.13, active: true },
  { key: 'carrierRates-014', label: 'carrierRates tier 14', factor: 1.14, active: true },
  { key: 'carrierRates-015', label: 'carrierRates tier 15', factor: 1.15, active: false },
  { key: 'carrierRates-016', label: 'carrierRates tier 16', factor: 1.16, active: true },
  { key: 'carrierRates-017', label: 'carrierRates tier 17', factor: 1.17, active: true },
  { key: 'carrierRates-018', label: 'carrierRates tier 18', factor: 1.18, active: false },
  { key: 'carrierRates-019', label: 'carrierRates tier 19', factor: 1.19, active: true },
  { key: 'carrierRates-020', label: 'carrierRates tier 20', factor: 1.20, active: true },
  { key: 'carrierRates-021', label: 'carrierRates tier 21', factor: 1.21, active: false },
  { key: 'carrierRates-022', label: 'carrierRates tier 22', factor: 1.22, active: true },
  { key: 'carrierRates-023', label: 'carrierRates tier 23', factor: 1.23, active: true },
  { key: 'carrierRates-024', label: 'carrierRates tier 24', factor: 1.24, active: false },
  { key: 'carrierRates-025', label: 'carrierRates tier 25', factor: 1.25, active: true },
  { key: 'carrierRates-026', label: 'carrierRates tier 26', factor: 1.26, active: true },
  { key: 'carrierRates-027', label: 'carrierRates tier 27', factor: 1.27, active: false },
  { key: 'carrierRates-028', label: 'carrierRates tier 28', factor: 1.28, active: true },
  { key: 'carrierRates-029', label: 'carrierRates tier 29', factor: 1.29, active: true },
  { key: 'carrierRates-030', label: 'carrierRates tier 30', factor: 1.30, active: false },
  { key: 'carrierRates-031', label: 'carrierRates tier 31', factor: 1.31, active: true },
  { key: 'carrierRates-032', label: 'carrierRates tier 32', factor: 1.32, active: true },
  { key: 'carrierRates-033', label: 'carrierRates tier 33', factor: 1.33, active: false },
  { key: 'carrierRates-034', label: 'carrierRates tier 34', factor: 1.34, active: true },
  { key: 'carrierRates-035', label: 'carrierRates tier 35', factor: 1.35, active: true },
  { key: 'carrierRates-036', label: 'carrierRates tier 36', factor: 1.36, active: false },
  { key: 'carrierRates-037', label: 'carrierRates tier 37', factor: 1.37, active: true },
  { key: 'carrierRates-038', label: 'carrierRates tier 38', factor: 1.38, active: true },
  { key: 'carrierRates-039', label: 'carrierRates tier 39', factor: 1.39, active: false },
  { key: 'carrierRates-040', label: 'carrierRates tier 40', factor: 1.40, active: true },
  { key: 'carrierRates-041', label: 'carrierRates tier 41', factor: 1.41, active: true },
  { key: 'carrierRates-042', label: 'carrierRates tier 42', factor: 1.42, active: false },
  { key: 'carrierRates-043', label: 'carrierRates tier 43', factor: 1.43, active: true },
  { key: 'carrierRates-044', label: 'carrierRates tier 44', factor: 1.44, active: true },
  { key: 'carrierRates-045', label: 'carrierRates tier 45', factor: 1.45, active: false },
  { key: 'carrierRates-046', label: 'carrierRates tier 46', factor: 1.46, active: true },
  { key: 'carrierRates-047', label: 'carrierRates tier 47', factor: 1.47, active: true },
  { key: 'carrierRates-048', label: 'carrierRates tier 48', factor: 1.48, active: false },
  { key: 'carrierRates-049', label: 'carrierRates tier 49', factor: 1.49, active: true },
  { key: 'carrierRates-050', label: 'carrierRates tier 50', factor: 1.50, active: true },
  { key: 'carrierRates-051', label: 'carrierRates tier 51', factor: 1.51, active: false },
  { key: 'carrierRates-052', label: 'carrierRates tier 52', factor: 1.52, active: true },
  { key: 'carrierRates-053', label: 'carrierRates tier 53', factor: 1.53, active: true },
  { key: 'carrierRates-054', label: 'carrierRates tier 54', factor: 1.54, active: false },
  { key: 'carrierRates-055', label: 'carrierRates tier 55', factor: 1.55, active: true },
  { key: 'carrierRates-056', label: 'carrierRates tier 56', factor: 1.56, active: true },
  { key: 'carrierRates-057', label: 'carrierRates tier 57', factor: 1.57, active: false },
  { key: 'carrierRates-058', label: 'carrierRates tier 58', factor: 1.58, active: true },
  { key: 'carrierRates-059', label: 'carrierRates tier 59', factor: 1.59, active: true },
]

export function lookupCarrierRates (key: string): CarrierRatesEntry | undefined {
  return carrierRatesTable.find((entry) => entry.key === key)
}

export function activeCarrierRates (): CarrierRatesEntry[] {
  return carrierRatesTable.filter((entry) => entry.active)
}
