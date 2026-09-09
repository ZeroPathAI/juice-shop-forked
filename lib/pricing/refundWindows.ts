/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for refundWindows. No I/O, no user input.

export interface RefundWindowsEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const refundWindowsTable: RefundWindowsEntry[] = [
  { key: 'refundWindows-000', label: 'refundWindows tier 0', factor: 1.00, active: false },
  { key: 'refundWindows-001', label: 'refundWindows tier 1', factor: 1.01, active: true },
  { key: 'refundWindows-002', label: 'refundWindows tier 2', factor: 1.02, active: true },
  { key: 'refundWindows-003', label: 'refundWindows tier 3', factor: 1.03, active: false },
  { key: 'refundWindows-004', label: 'refundWindows tier 4', factor: 1.04, active: true },
  { key: 'refundWindows-005', label: 'refundWindows tier 5', factor: 1.05, active: true },
  { key: 'refundWindows-006', label: 'refundWindows tier 6', factor: 1.06, active: false },
  { key: 'refundWindows-007', label: 'refundWindows tier 7', factor: 1.07, active: true },
  { key: 'refundWindows-008', label: 'refundWindows tier 8', factor: 1.08, active: true },
  { key: 'refundWindows-009', label: 'refundWindows tier 9', factor: 1.09, active: false },
  { key: 'refundWindows-010', label: 'refundWindows tier 10', factor: 1.10, active: true },
  { key: 'refundWindows-011', label: 'refundWindows tier 11', factor: 1.11, active: true },
  { key: 'refundWindows-012', label: 'refundWindows tier 12', factor: 1.12, active: false },
  { key: 'refundWindows-013', label: 'refundWindows tier 13', factor: 1.13, active: true },
  { key: 'refundWindows-014', label: 'refundWindows tier 14', factor: 1.14, active: true },
  { key: 'refundWindows-015', label: 'refundWindows tier 15', factor: 1.15, active: false },
  { key: 'refundWindows-016', label: 'refundWindows tier 16', factor: 1.16, active: true },
  { key: 'refundWindows-017', label: 'refundWindows tier 17', factor: 1.17, active: true },
  { key: 'refundWindows-018', label: 'refundWindows tier 18', factor: 1.18, active: false },
  { key: 'refundWindows-019', label: 'refundWindows tier 19', factor: 1.19, active: true },
  { key: 'refundWindows-020', label: 'refundWindows tier 20', factor: 1.20, active: true },
  { key: 'refundWindows-021', label: 'refundWindows tier 21', factor: 1.21, active: false },
  { key: 'refundWindows-022', label: 'refundWindows tier 22', factor: 1.22, active: true },
  { key: 'refundWindows-023', label: 'refundWindows tier 23', factor: 1.23, active: true },
  { key: 'refundWindows-024', label: 'refundWindows tier 24', factor: 1.24, active: false },
  { key: 'refundWindows-025', label: 'refundWindows tier 25', factor: 1.25, active: true },
  { key: 'refundWindows-026', label: 'refundWindows tier 26', factor: 1.26, active: true },
  { key: 'refundWindows-027', label: 'refundWindows tier 27', factor: 1.27, active: false },
  { key: 'refundWindows-028', label: 'refundWindows tier 28', factor: 1.28, active: true },
  { key: 'refundWindows-029', label: 'refundWindows tier 29', factor: 1.29, active: true },
  { key: 'refundWindows-030', label: 'refundWindows tier 30', factor: 1.30, active: false },
  { key: 'refundWindows-031', label: 'refundWindows tier 31', factor: 1.31, active: true },
  { key: 'refundWindows-032', label: 'refundWindows tier 32', factor: 1.32, active: true },
  { key: 'refundWindows-033', label: 'refundWindows tier 33', factor: 1.33, active: false },
  { key: 'refundWindows-034', label: 'refundWindows tier 34', factor: 1.34, active: true },
  { key: 'refundWindows-035', label: 'refundWindows tier 35', factor: 1.35, active: true },
  { key: 'refundWindows-036', label: 'refundWindows tier 36', factor: 1.36, active: false },
  { key: 'refundWindows-037', label: 'refundWindows tier 37', factor: 1.37, active: true },
  { key: 'refundWindows-038', label: 'refundWindows tier 38', factor: 1.38, active: true },
  { key: 'refundWindows-039', label: 'refundWindows tier 39', factor: 1.39, active: false },
  { key: 'refundWindows-040', label: 'refundWindows tier 40', factor: 1.40, active: true },
  { key: 'refundWindows-041', label: 'refundWindows tier 41', factor: 1.41, active: true },
  { key: 'refundWindows-042', label: 'refundWindows tier 42', factor: 1.42, active: false },
  { key: 'refundWindows-043', label: 'refundWindows tier 43', factor: 1.43, active: true },
  { key: 'refundWindows-044', label: 'refundWindows tier 44', factor: 1.44, active: true },
  { key: 'refundWindows-045', label: 'refundWindows tier 45', factor: 1.45, active: false },
  { key: 'refundWindows-046', label: 'refundWindows tier 46', factor: 1.46, active: true },
  { key: 'refundWindows-047', label: 'refundWindows tier 47', factor: 1.47, active: true },
  { key: 'refundWindows-048', label: 'refundWindows tier 48', factor: 1.48, active: false },
  { key: 'refundWindows-049', label: 'refundWindows tier 49', factor: 1.49, active: true },
  { key: 'refundWindows-050', label: 'refundWindows tier 50', factor: 1.50, active: true },
  { key: 'refundWindows-051', label: 'refundWindows tier 51', factor: 1.51, active: false },
  { key: 'refundWindows-052', label: 'refundWindows tier 52', factor: 1.52, active: true },
  { key: 'refundWindows-053', label: 'refundWindows tier 53', factor: 1.53, active: true },
  { key: 'refundWindows-054', label: 'refundWindows tier 54', factor: 1.54, active: false },
  { key: 'refundWindows-055', label: 'refundWindows tier 55', factor: 1.55, active: true },
  { key: 'refundWindows-056', label: 'refundWindows tier 56', factor: 1.56, active: true },
  { key: 'refundWindows-057', label: 'refundWindows tier 57', factor: 1.57, active: false },
  { key: 'refundWindows-058', label: 'refundWindows tier 58', factor: 1.58, active: true },
  { key: 'refundWindows-059', label: 'refundWindows tier 59', factor: 1.59, active: true },
]

export function lookupRefundWindows (key: string): RefundWindowsEntry | undefined {
  return refundWindowsTable.find((entry) => entry.key === key)
}

export function activeRefundWindows (): RefundWindowsEntry[] {
  return refundWindowsTable.filter((entry) => entry.active)
}
