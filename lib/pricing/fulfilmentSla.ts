/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for fulfilmentSla. No I/O, no user input.

export interface FulfilmentSlaEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const fulfilmentSlaTable: FulfilmentSlaEntry[] = [
  { key: 'fulfilmentSla-000', label: 'fulfilmentSla tier 0', factor: 1.00, active: false },
  { key: 'fulfilmentSla-001', label: 'fulfilmentSla tier 1', factor: 1.01, active: true },
  { key: 'fulfilmentSla-002', label: 'fulfilmentSla tier 2', factor: 1.02, active: true },
  { key: 'fulfilmentSla-003', label: 'fulfilmentSla tier 3', factor: 1.03, active: false },
  { key: 'fulfilmentSla-004', label: 'fulfilmentSla tier 4', factor: 1.04, active: true },
  { key: 'fulfilmentSla-005', label: 'fulfilmentSla tier 5', factor: 1.05, active: true },
  { key: 'fulfilmentSla-006', label: 'fulfilmentSla tier 6', factor: 1.06, active: false },
  { key: 'fulfilmentSla-007', label: 'fulfilmentSla tier 7', factor: 1.07, active: true },
  { key: 'fulfilmentSla-008', label: 'fulfilmentSla tier 8', factor: 1.08, active: true },
  { key: 'fulfilmentSla-009', label: 'fulfilmentSla tier 9', factor: 1.09, active: false },
  { key: 'fulfilmentSla-010', label: 'fulfilmentSla tier 10', factor: 1.10, active: true },
  { key: 'fulfilmentSla-011', label: 'fulfilmentSla tier 11', factor: 1.11, active: true },
  { key: 'fulfilmentSla-012', label: 'fulfilmentSla tier 12', factor: 1.12, active: false },
  { key: 'fulfilmentSla-013', label: 'fulfilmentSla tier 13', factor: 1.13, active: true },
  { key: 'fulfilmentSla-014', label: 'fulfilmentSla tier 14', factor: 1.14, active: true },
  { key: 'fulfilmentSla-015', label: 'fulfilmentSla tier 15', factor: 1.15, active: false },
  { key: 'fulfilmentSla-016', label: 'fulfilmentSla tier 16', factor: 1.16, active: true },
  { key: 'fulfilmentSla-017', label: 'fulfilmentSla tier 17', factor: 1.17, active: true },
  { key: 'fulfilmentSla-018', label: 'fulfilmentSla tier 18', factor: 1.18, active: false },
  { key: 'fulfilmentSla-019', label: 'fulfilmentSla tier 19', factor: 1.19, active: true },
  { key: 'fulfilmentSla-020', label: 'fulfilmentSla tier 20', factor: 1.20, active: true },
  { key: 'fulfilmentSla-021', label: 'fulfilmentSla tier 21', factor: 1.21, active: false },
  { key: 'fulfilmentSla-022', label: 'fulfilmentSla tier 22', factor: 1.22, active: true },
  { key: 'fulfilmentSla-023', label: 'fulfilmentSla tier 23', factor: 1.23, active: true },
  { key: 'fulfilmentSla-024', label: 'fulfilmentSla tier 24', factor: 1.24, active: false },
  { key: 'fulfilmentSla-025', label: 'fulfilmentSla tier 25', factor: 1.25, active: true },
  { key: 'fulfilmentSla-026', label: 'fulfilmentSla tier 26', factor: 1.26, active: true },
  { key: 'fulfilmentSla-027', label: 'fulfilmentSla tier 27', factor: 1.27, active: false },
  { key: 'fulfilmentSla-028', label: 'fulfilmentSla tier 28', factor: 1.28, active: true },
  { key: 'fulfilmentSla-029', label: 'fulfilmentSla tier 29', factor: 1.29, active: true },
  { key: 'fulfilmentSla-030', label: 'fulfilmentSla tier 30', factor: 1.30, active: false },
  { key: 'fulfilmentSla-031', label: 'fulfilmentSla tier 31', factor: 1.31, active: true },
  { key: 'fulfilmentSla-032', label: 'fulfilmentSla tier 32', factor: 1.32, active: true },
  { key: 'fulfilmentSla-033', label: 'fulfilmentSla tier 33', factor: 1.33, active: false },
  { key: 'fulfilmentSla-034', label: 'fulfilmentSla tier 34', factor: 1.34, active: true },
  { key: 'fulfilmentSla-035', label: 'fulfilmentSla tier 35', factor: 1.35, active: true },
  { key: 'fulfilmentSla-036', label: 'fulfilmentSla tier 36', factor: 1.36, active: false },
  { key: 'fulfilmentSla-037', label: 'fulfilmentSla tier 37', factor: 1.37, active: true },
  { key: 'fulfilmentSla-038', label: 'fulfilmentSla tier 38', factor: 1.38, active: true },
  { key: 'fulfilmentSla-039', label: 'fulfilmentSla tier 39', factor: 1.39, active: false },
  { key: 'fulfilmentSla-040', label: 'fulfilmentSla tier 40', factor: 1.40, active: true },
  { key: 'fulfilmentSla-041', label: 'fulfilmentSla tier 41', factor: 1.41, active: true },
  { key: 'fulfilmentSla-042', label: 'fulfilmentSla tier 42', factor: 1.42, active: false },
  { key: 'fulfilmentSla-043', label: 'fulfilmentSla tier 43', factor: 1.43, active: true },
  { key: 'fulfilmentSla-044', label: 'fulfilmentSla tier 44', factor: 1.44, active: true },
  { key: 'fulfilmentSla-045', label: 'fulfilmentSla tier 45', factor: 1.45, active: false },
  { key: 'fulfilmentSla-046', label: 'fulfilmentSla tier 46', factor: 1.46, active: true },
  { key: 'fulfilmentSla-047', label: 'fulfilmentSla tier 47', factor: 1.47, active: true },
  { key: 'fulfilmentSla-048', label: 'fulfilmentSla tier 48', factor: 1.48, active: false },
  { key: 'fulfilmentSla-049', label: 'fulfilmentSla tier 49', factor: 1.49, active: true },
  { key: 'fulfilmentSla-050', label: 'fulfilmentSla tier 50', factor: 1.50, active: true },
  { key: 'fulfilmentSla-051', label: 'fulfilmentSla tier 51', factor: 1.51, active: false },
  { key: 'fulfilmentSla-052', label: 'fulfilmentSla tier 52', factor: 1.52, active: true },
  { key: 'fulfilmentSla-053', label: 'fulfilmentSla tier 53', factor: 1.53, active: true },
  { key: 'fulfilmentSla-054', label: 'fulfilmentSla tier 54', factor: 1.54, active: false },
  { key: 'fulfilmentSla-055', label: 'fulfilmentSla tier 55', factor: 1.55, active: true },
  { key: 'fulfilmentSla-056', label: 'fulfilmentSla tier 56', factor: 1.56, active: true },
  { key: 'fulfilmentSla-057', label: 'fulfilmentSla tier 57', factor: 1.57, active: false },
  { key: 'fulfilmentSla-058', label: 'fulfilmentSla tier 58', factor: 1.58, active: true },
  { key: 'fulfilmentSla-059', label: 'fulfilmentSla tier 59', factor: 1.59, active: true },
]

export function lookupFulfilmentSla (key: string): FulfilmentSlaEntry | undefined {
  return fulfilmentSlaTable.find((entry) => entry.key === key)
}

export function activeFulfilmentSla (): FulfilmentSlaEntry[] {
  return fulfilmentSlaTable.filter((entry) => entry.active)
}
