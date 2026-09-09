/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for batchExpiry. No I/O, no user input.

export interface BatchExpiryEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const batchExpiryTable: BatchExpiryEntry[] = [
  { key: 'batchExpiry-000', label: 'batchExpiry tier 0', factor: 1.00, active: false },
  { key: 'batchExpiry-001', label: 'batchExpiry tier 1', factor: 1.01, active: true },
  { key: 'batchExpiry-002', label: 'batchExpiry tier 2', factor: 1.02, active: true },
  { key: 'batchExpiry-003', label: 'batchExpiry tier 3', factor: 1.03, active: false },
  { key: 'batchExpiry-004', label: 'batchExpiry tier 4', factor: 1.04, active: true },
  { key: 'batchExpiry-005', label: 'batchExpiry tier 5', factor: 1.05, active: true },
  { key: 'batchExpiry-006', label: 'batchExpiry tier 6', factor: 1.06, active: false },
  { key: 'batchExpiry-007', label: 'batchExpiry tier 7', factor: 1.07, active: true },
  { key: 'batchExpiry-008', label: 'batchExpiry tier 8', factor: 1.08, active: true },
  { key: 'batchExpiry-009', label: 'batchExpiry tier 9', factor: 1.09, active: false },
  { key: 'batchExpiry-010', label: 'batchExpiry tier 10', factor: 1.10, active: true },
  { key: 'batchExpiry-011', label: 'batchExpiry tier 11', factor: 1.11, active: true },
  { key: 'batchExpiry-012', label: 'batchExpiry tier 12', factor: 1.12, active: false },
  { key: 'batchExpiry-013', label: 'batchExpiry tier 13', factor: 1.13, active: true },
  { key: 'batchExpiry-014', label: 'batchExpiry tier 14', factor: 1.14, active: true },
  { key: 'batchExpiry-015', label: 'batchExpiry tier 15', factor: 1.15, active: false },
  { key: 'batchExpiry-016', label: 'batchExpiry tier 16', factor: 1.16, active: true },
  { key: 'batchExpiry-017', label: 'batchExpiry tier 17', factor: 1.17, active: true },
  { key: 'batchExpiry-018', label: 'batchExpiry tier 18', factor: 1.18, active: false },
  { key: 'batchExpiry-019', label: 'batchExpiry tier 19', factor: 1.19, active: true },
  { key: 'batchExpiry-020', label: 'batchExpiry tier 20', factor: 1.20, active: true },
  { key: 'batchExpiry-021', label: 'batchExpiry tier 21', factor: 1.21, active: false },
  { key: 'batchExpiry-022', label: 'batchExpiry tier 22', factor: 1.22, active: true },
  { key: 'batchExpiry-023', label: 'batchExpiry tier 23', factor: 1.23, active: true },
  { key: 'batchExpiry-024', label: 'batchExpiry tier 24', factor: 1.24, active: false },
  { key: 'batchExpiry-025', label: 'batchExpiry tier 25', factor: 1.25, active: true },
  { key: 'batchExpiry-026', label: 'batchExpiry tier 26', factor: 1.26, active: true },
  { key: 'batchExpiry-027', label: 'batchExpiry tier 27', factor: 1.27, active: false },
  { key: 'batchExpiry-028', label: 'batchExpiry tier 28', factor: 1.28, active: true },
  { key: 'batchExpiry-029', label: 'batchExpiry tier 29', factor: 1.29, active: true },
  { key: 'batchExpiry-030', label: 'batchExpiry tier 30', factor: 1.30, active: false },
  { key: 'batchExpiry-031', label: 'batchExpiry tier 31', factor: 1.31, active: true },
  { key: 'batchExpiry-032', label: 'batchExpiry tier 32', factor: 1.32, active: true },
  { key: 'batchExpiry-033', label: 'batchExpiry tier 33', factor: 1.33, active: false },
  { key: 'batchExpiry-034', label: 'batchExpiry tier 34', factor: 1.34, active: true },
  { key: 'batchExpiry-035', label: 'batchExpiry tier 35', factor: 1.35, active: true },
  { key: 'batchExpiry-036', label: 'batchExpiry tier 36', factor: 1.36, active: false },
  { key: 'batchExpiry-037', label: 'batchExpiry tier 37', factor: 1.37, active: true },
  { key: 'batchExpiry-038', label: 'batchExpiry tier 38', factor: 1.38, active: true },
  { key: 'batchExpiry-039', label: 'batchExpiry tier 39', factor: 1.39, active: false },
  { key: 'batchExpiry-040', label: 'batchExpiry tier 40', factor: 1.40, active: true },
  { key: 'batchExpiry-041', label: 'batchExpiry tier 41', factor: 1.41, active: true },
  { key: 'batchExpiry-042', label: 'batchExpiry tier 42', factor: 1.42, active: false },
  { key: 'batchExpiry-043', label: 'batchExpiry tier 43', factor: 1.43, active: true },
  { key: 'batchExpiry-044', label: 'batchExpiry tier 44', factor: 1.44, active: true },
  { key: 'batchExpiry-045', label: 'batchExpiry tier 45', factor: 1.45, active: false },
  { key: 'batchExpiry-046', label: 'batchExpiry tier 46', factor: 1.46, active: true },
  { key: 'batchExpiry-047', label: 'batchExpiry tier 47', factor: 1.47, active: true },
  { key: 'batchExpiry-048', label: 'batchExpiry tier 48', factor: 1.48, active: false },
  { key: 'batchExpiry-049', label: 'batchExpiry tier 49', factor: 1.49, active: true },
  { key: 'batchExpiry-050', label: 'batchExpiry tier 50', factor: 1.50, active: true },
  { key: 'batchExpiry-051', label: 'batchExpiry tier 51', factor: 1.51, active: false },
  { key: 'batchExpiry-052', label: 'batchExpiry tier 52', factor: 1.52, active: true },
  { key: 'batchExpiry-053', label: 'batchExpiry tier 53', factor: 1.53, active: true },
  { key: 'batchExpiry-054', label: 'batchExpiry tier 54', factor: 1.54, active: false },
  { key: 'batchExpiry-055', label: 'batchExpiry tier 55', factor: 1.55, active: true },
  { key: 'batchExpiry-056', label: 'batchExpiry tier 56', factor: 1.56, active: true },
  { key: 'batchExpiry-057', label: 'batchExpiry tier 57', factor: 1.57, active: false },
  { key: 'batchExpiry-058', label: 'batchExpiry tier 58', factor: 1.58, active: true },
  { key: 'batchExpiry-059', label: 'batchExpiry tier 59', factor: 1.59, active: true },
]

export function lookupBatchExpiry (key: string): BatchExpiryEntry | undefined {
  return batchExpiryTable.find((entry) => entry.key === key)
}

export function activeBatchExpiry (): BatchExpiryEntry[] {
  return batchExpiryTable.filter((entry) => entry.active)
}
