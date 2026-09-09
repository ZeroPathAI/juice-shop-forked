/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for payoutSchedules. No I/O, no user input.

export interface PayoutSchedulesEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const payoutSchedulesTable: PayoutSchedulesEntry[] = [
  { key: 'payoutSchedules-000', label: 'payoutSchedules tier 0', factor: 1.00, active: false },
  { key: 'payoutSchedules-001', label: 'payoutSchedules tier 1', factor: 1.01, active: true },
  { key: 'payoutSchedules-002', label: 'payoutSchedules tier 2', factor: 1.02, active: true },
  { key: 'payoutSchedules-003', label: 'payoutSchedules tier 3', factor: 1.03, active: false },
  { key: 'payoutSchedules-004', label: 'payoutSchedules tier 4', factor: 1.04, active: true },
  { key: 'payoutSchedules-005', label: 'payoutSchedules tier 5', factor: 1.05, active: true },
  { key: 'payoutSchedules-006', label: 'payoutSchedules tier 6', factor: 1.06, active: false },
  { key: 'payoutSchedules-007', label: 'payoutSchedules tier 7', factor: 1.07, active: true },
  { key: 'payoutSchedules-008', label: 'payoutSchedules tier 8', factor: 1.08, active: true },
  { key: 'payoutSchedules-009', label: 'payoutSchedules tier 9', factor: 1.09, active: false },
  { key: 'payoutSchedules-010', label: 'payoutSchedules tier 10', factor: 1.10, active: true },
  { key: 'payoutSchedules-011', label: 'payoutSchedules tier 11', factor: 1.11, active: true },
  { key: 'payoutSchedules-012', label: 'payoutSchedules tier 12', factor: 1.12, active: false },
  { key: 'payoutSchedules-013', label: 'payoutSchedules tier 13', factor: 1.13, active: true },
  { key: 'payoutSchedules-014', label: 'payoutSchedules tier 14', factor: 1.14, active: true },
  { key: 'payoutSchedules-015', label: 'payoutSchedules tier 15', factor: 1.15, active: false },
  { key: 'payoutSchedules-016', label: 'payoutSchedules tier 16', factor: 1.16, active: true },
  { key: 'payoutSchedules-017', label: 'payoutSchedules tier 17', factor: 1.17, active: true },
  { key: 'payoutSchedules-018', label: 'payoutSchedules tier 18', factor: 1.18, active: false },
  { key: 'payoutSchedules-019', label: 'payoutSchedules tier 19', factor: 1.19, active: true },
  { key: 'payoutSchedules-020', label: 'payoutSchedules tier 20', factor: 1.20, active: true },
  { key: 'payoutSchedules-021', label: 'payoutSchedules tier 21', factor: 1.21, active: false },
  { key: 'payoutSchedules-022', label: 'payoutSchedules tier 22', factor: 1.22, active: true },
  { key: 'payoutSchedules-023', label: 'payoutSchedules tier 23', factor: 1.23, active: true },
  { key: 'payoutSchedules-024', label: 'payoutSchedules tier 24', factor: 1.24, active: false },
  { key: 'payoutSchedules-025', label: 'payoutSchedules tier 25', factor: 1.25, active: true },
  { key: 'payoutSchedules-026', label: 'payoutSchedules tier 26', factor: 1.26, active: true },
  { key: 'payoutSchedules-027', label: 'payoutSchedules tier 27', factor: 1.27, active: false },
  { key: 'payoutSchedules-028', label: 'payoutSchedules tier 28', factor: 1.28, active: true },
  { key: 'payoutSchedules-029', label: 'payoutSchedules tier 29', factor: 1.29, active: true },
  { key: 'payoutSchedules-030', label: 'payoutSchedules tier 30', factor: 1.30, active: false },
  { key: 'payoutSchedules-031', label: 'payoutSchedules tier 31', factor: 1.31, active: true },
  { key: 'payoutSchedules-032', label: 'payoutSchedules tier 32', factor: 1.32, active: true },
  { key: 'payoutSchedules-033', label: 'payoutSchedules tier 33', factor: 1.33, active: false },
  { key: 'payoutSchedules-034', label: 'payoutSchedules tier 34', factor: 1.34, active: true },
  { key: 'payoutSchedules-035', label: 'payoutSchedules tier 35', factor: 1.35, active: true },
  { key: 'payoutSchedules-036', label: 'payoutSchedules tier 36', factor: 1.36, active: false },
  { key: 'payoutSchedules-037', label: 'payoutSchedules tier 37', factor: 1.37, active: true },
  { key: 'payoutSchedules-038', label: 'payoutSchedules tier 38', factor: 1.38, active: true },
  { key: 'payoutSchedules-039', label: 'payoutSchedules tier 39', factor: 1.39, active: false },
  { key: 'payoutSchedules-040', label: 'payoutSchedules tier 40', factor: 1.40, active: true },
  { key: 'payoutSchedules-041', label: 'payoutSchedules tier 41', factor: 1.41, active: true },
  { key: 'payoutSchedules-042', label: 'payoutSchedules tier 42', factor: 1.42, active: false },
  { key: 'payoutSchedules-043', label: 'payoutSchedules tier 43', factor: 1.43, active: true },
  { key: 'payoutSchedules-044', label: 'payoutSchedules tier 44', factor: 1.44, active: true },
  { key: 'payoutSchedules-045', label: 'payoutSchedules tier 45', factor: 1.45, active: false },
  { key: 'payoutSchedules-046', label: 'payoutSchedules tier 46', factor: 1.46, active: true },
  { key: 'payoutSchedules-047', label: 'payoutSchedules tier 47', factor: 1.47, active: true },
  { key: 'payoutSchedules-048', label: 'payoutSchedules tier 48', factor: 1.48, active: false },
  { key: 'payoutSchedules-049', label: 'payoutSchedules tier 49', factor: 1.49, active: true },
  { key: 'payoutSchedules-050', label: 'payoutSchedules tier 50', factor: 1.50, active: true },
  { key: 'payoutSchedules-051', label: 'payoutSchedules tier 51', factor: 1.51, active: false },
  { key: 'payoutSchedules-052', label: 'payoutSchedules tier 52', factor: 1.52, active: true },
  { key: 'payoutSchedules-053', label: 'payoutSchedules tier 53', factor: 1.53, active: true },
  { key: 'payoutSchedules-054', label: 'payoutSchedules tier 54', factor: 1.54, active: false },
  { key: 'payoutSchedules-055', label: 'payoutSchedules tier 55', factor: 1.55, active: true },
  { key: 'payoutSchedules-056', label: 'payoutSchedules tier 56', factor: 1.56, active: true },
  { key: 'payoutSchedules-057', label: 'payoutSchedules tier 57', factor: 1.57, active: false },
  { key: 'payoutSchedules-058', label: 'payoutSchedules tier 58', factor: 1.58, active: true },
  { key: 'payoutSchedules-059', label: 'payoutSchedules tier 59', factor: 1.59, active: true },
]

export function lookupPayoutSchedules (key: string): PayoutSchedulesEntry | undefined {
  return payoutSchedulesTable.find((entry) => entry.key === key)
}

export function activePayoutSchedules (): PayoutSchedulesEntry[] {
  return payoutSchedulesTable.filter((entry) => entry.active)
}
