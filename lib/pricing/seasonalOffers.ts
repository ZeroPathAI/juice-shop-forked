/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for seasonalOffers. No I/O, no user input.

export interface SeasonalOffersEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const seasonalOffersTable: SeasonalOffersEntry[] = [
  { key: 'seasonalOffers-000', label: 'seasonalOffers tier 0', factor: 1.00, active: false },
  { key: 'seasonalOffers-001', label: 'seasonalOffers tier 1', factor: 1.01, active: true },
  { key: 'seasonalOffers-002', label: 'seasonalOffers tier 2', factor: 1.02, active: true },
  { key: 'seasonalOffers-003', label: 'seasonalOffers tier 3', factor: 1.03, active: false },
  { key: 'seasonalOffers-004', label: 'seasonalOffers tier 4', factor: 1.04, active: true },
  { key: 'seasonalOffers-005', label: 'seasonalOffers tier 5', factor: 1.05, active: true },
  { key: 'seasonalOffers-006', label: 'seasonalOffers tier 6', factor: 1.06, active: false },
  { key: 'seasonalOffers-007', label: 'seasonalOffers tier 7', factor: 1.07, active: true },
  { key: 'seasonalOffers-008', label: 'seasonalOffers tier 8', factor: 1.08, active: true },
  { key: 'seasonalOffers-009', label: 'seasonalOffers tier 9', factor: 1.09, active: false },
  { key: 'seasonalOffers-010', label: 'seasonalOffers tier 10', factor: 1.10, active: true },
  { key: 'seasonalOffers-011', label: 'seasonalOffers tier 11', factor: 1.11, active: true },
  { key: 'seasonalOffers-012', label: 'seasonalOffers tier 12', factor: 1.12, active: false },
  { key: 'seasonalOffers-013', label: 'seasonalOffers tier 13', factor: 1.13, active: true },
  { key: 'seasonalOffers-014', label: 'seasonalOffers tier 14', factor: 1.14, active: true },
  { key: 'seasonalOffers-015', label: 'seasonalOffers tier 15', factor: 1.15, active: false },
  { key: 'seasonalOffers-016', label: 'seasonalOffers tier 16', factor: 1.16, active: true },
  { key: 'seasonalOffers-017', label: 'seasonalOffers tier 17', factor: 1.17, active: true },
  { key: 'seasonalOffers-018', label: 'seasonalOffers tier 18', factor: 1.18, active: false },
  { key: 'seasonalOffers-019', label: 'seasonalOffers tier 19', factor: 1.19, active: true },
  { key: 'seasonalOffers-020', label: 'seasonalOffers tier 20', factor: 1.20, active: true },
  { key: 'seasonalOffers-021', label: 'seasonalOffers tier 21', factor: 1.21, active: false },
  { key: 'seasonalOffers-022', label: 'seasonalOffers tier 22', factor: 1.22, active: true },
  { key: 'seasonalOffers-023', label: 'seasonalOffers tier 23', factor: 1.23, active: true },
  { key: 'seasonalOffers-024', label: 'seasonalOffers tier 24', factor: 1.24, active: false },
  { key: 'seasonalOffers-025', label: 'seasonalOffers tier 25', factor: 1.25, active: true },
  { key: 'seasonalOffers-026', label: 'seasonalOffers tier 26', factor: 1.26, active: true },
  { key: 'seasonalOffers-027', label: 'seasonalOffers tier 27', factor: 1.27, active: false },
  { key: 'seasonalOffers-028', label: 'seasonalOffers tier 28', factor: 1.28, active: true },
  { key: 'seasonalOffers-029', label: 'seasonalOffers tier 29', factor: 1.29, active: true },
  { key: 'seasonalOffers-030', label: 'seasonalOffers tier 30', factor: 1.30, active: false },
  { key: 'seasonalOffers-031', label: 'seasonalOffers tier 31', factor: 1.31, active: true },
  { key: 'seasonalOffers-032', label: 'seasonalOffers tier 32', factor: 1.32, active: true },
  { key: 'seasonalOffers-033', label: 'seasonalOffers tier 33', factor: 1.33, active: false },
  { key: 'seasonalOffers-034', label: 'seasonalOffers tier 34', factor: 1.34, active: true },
  { key: 'seasonalOffers-035', label: 'seasonalOffers tier 35', factor: 1.35, active: true },
  { key: 'seasonalOffers-036', label: 'seasonalOffers tier 36', factor: 1.36, active: false },
  { key: 'seasonalOffers-037', label: 'seasonalOffers tier 37', factor: 1.37, active: true },
  { key: 'seasonalOffers-038', label: 'seasonalOffers tier 38', factor: 1.38, active: true },
  { key: 'seasonalOffers-039', label: 'seasonalOffers tier 39', factor: 1.39, active: false },
  { key: 'seasonalOffers-040', label: 'seasonalOffers tier 40', factor: 1.40, active: true },
  { key: 'seasonalOffers-041', label: 'seasonalOffers tier 41', factor: 1.41, active: true },
  { key: 'seasonalOffers-042', label: 'seasonalOffers tier 42', factor: 1.42, active: false },
  { key: 'seasonalOffers-043', label: 'seasonalOffers tier 43', factor: 1.43, active: true },
  { key: 'seasonalOffers-044', label: 'seasonalOffers tier 44', factor: 1.44, active: true },
  { key: 'seasonalOffers-045', label: 'seasonalOffers tier 45', factor: 1.45, active: false },
  { key: 'seasonalOffers-046', label: 'seasonalOffers tier 46', factor: 1.46, active: true },
  { key: 'seasonalOffers-047', label: 'seasonalOffers tier 47', factor: 1.47, active: true },
  { key: 'seasonalOffers-048', label: 'seasonalOffers tier 48', factor: 1.48, active: false },
  { key: 'seasonalOffers-049', label: 'seasonalOffers tier 49', factor: 1.49, active: true },
  { key: 'seasonalOffers-050', label: 'seasonalOffers tier 50', factor: 1.50, active: true },
  { key: 'seasonalOffers-051', label: 'seasonalOffers tier 51', factor: 1.51, active: false },
  { key: 'seasonalOffers-052', label: 'seasonalOffers tier 52', factor: 1.52, active: true },
  { key: 'seasonalOffers-053', label: 'seasonalOffers tier 53', factor: 1.53, active: true },
  { key: 'seasonalOffers-054', label: 'seasonalOffers tier 54', factor: 1.54, active: false },
  { key: 'seasonalOffers-055', label: 'seasonalOffers tier 55', factor: 1.55, active: true },
  { key: 'seasonalOffers-056', label: 'seasonalOffers tier 56', factor: 1.56, active: true },
  { key: 'seasonalOffers-057', label: 'seasonalOffers tier 57', factor: 1.57, active: false },
  { key: 'seasonalOffers-058', label: 'seasonalOffers tier 58', factor: 1.58, active: true },
  { key: 'seasonalOffers-059', label: 'seasonalOffers tier 59', factor: 1.59, active: true },
]

export function lookupSeasonalOffers (key: string): SeasonalOffersEntry | undefined {
  return seasonalOffersTable.find((entry) => entry.key === key)
}

export function activeSeasonalOffers (): SeasonalOffersEntry[] {
  return seasonalOffersTable.filter((entry) => entry.active)
}
