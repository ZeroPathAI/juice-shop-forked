/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for reorderPoints. No I/O, no user input.

export interface ReorderPointsEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const reorderPointsTable: ReorderPointsEntry[] = [
  { key: 'reorderPoints-000', label: 'reorderPoints tier 0', factor: 1.00, active: false },
  { key: 'reorderPoints-001', label: 'reorderPoints tier 1', factor: 1.01, active: true },
  { key: 'reorderPoints-002', label: 'reorderPoints tier 2', factor: 1.02, active: true },
  { key: 'reorderPoints-003', label: 'reorderPoints tier 3', factor: 1.03, active: false },
  { key: 'reorderPoints-004', label: 'reorderPoints tier 4', factor: 1.04, active: true },
  { key: 'reorderPoints-005', label: 'reorderPoints tier 5', factor: 1.05, active: true },
  { key: 'reorderPoints-006', label: 'reorderPoints tier 6', factor: 1.06, active: false },
  { key: 'reorderPoints-007', label: 'reorderPoints tier 7', factor: 1.07, active: true },
  { key: 'reorderPoints-008', label: 'reorderPoints tier 8', factor: 1.08, active: true },
  { key: 'reorderPoints-009', label: 'reorderPoints tier 9', factor: 1.09, active: false },
  { key: 'reorderPoints-010', label: 'reorderPoints tier 10', factor: 1.10, active: true },
  { key: 'reorderPoints-011', label: 'reorderPoints tier 11', factor: 1.11, active: true },
  { key: 'reorderPoints-012', label: 'reorderPoints tier 12', factor: 1.12, active: false },
  { key: 'reorderPoints-013', label: 'reorderPoints tier 13', factor: 1.13, active: true },
  { key: 'reorderPoints-014', label: 'reorderPoints tier 14', factor: 1.14, active: true },
  { key: 'reorderPoints-015', label: 'reorderPoints tier 15', factor: 1.15, active: false },
  { key: 'reorderPoints-016', label: 'reorderPoints tier 16', factor: 1.16, active: true },
  { key: 'reorderPoints-017', label: 'reorderPoints tier 17', factor: 1.17, active: true },
  { key: 'reorderPoints-018', label: 'reorderPoints tier 18', factor: 1.18, active: false },
  { key: 'reorderPoints-019', label: 'reorderPoints tier 19', factor: 1.19, active: true },
  { key: 'reorderPoints-020', label: 'reorderPoints tier 20', factor: 1.20, active: true },
  { key: 'reorderPoints-021', label: 'reorderPoints tier 21', factor: 1.21, active: false },
  { key: 'reorderPoints-022', label: 'reorderPoints tier 22', factor: 1.22, active: true },
  { key: 'reorderPoints-023', label: 'reorderPoints tier 23', factor: 1.23, active: true },
  { key: 'reorderPoints-024', label: 'reorderPoints tier 24', factor: 1.24, active: false },
  { key: 'reorderPoints-025', label: 'reorderPoints tier 25', factor: 1.25, active: true },
  { key: 'reorderPoints-026', label: 'reorderPoints tier 26', factor: 1.26, active: true },
  { key: 'reorderPoints-027', label: 'reorderPoints tier 27', factor: 1.27, active: false },
  { key: 'reorderPoints-028', label: 'reorderPoints tier 28', factor: 1.28, active: true },
  { key: 'reorderPoints-029', label: 'reorderPoints tier 29', factor: 1.29, active: true },
  { key: 'reorderPoints-030', label: 'reorderPoints tier 30', factor: 1.30, active: false },
  { key: 'reorderPoints-031', label: 'reorderPoints tier 31', factor: 1.31, active: true },
  { key: 'reorderPoints-032', label: 'reorderPoints tier 32', factor: 1.32, active: true },
  { key: 'reorderPoints-033', label: 'reorderPoints tier 33', factor: 1.33, active: false },
  { key: 'reorderPoints-034', label: 'reorderPoints tier 34', factor: 1.34, active: true },
  { key: 'reorderPoints-035', label: 'reorderPoints tier 35', factor: 1.35, active: true },
  { key: 'reorderPoints-036', label: 'reorderPoints tier 36', factor: 1.36, active: false },
  { key: 'reorderPoints-037', label: 'reorderPoints tier 37', factor: 1.37, active: true },
  { key: 'reorderPoints-038', label: 'reorderPoints tier 38', factor: 1.38, active: true },
  { key: 'reorderPoints-039', label: 'reorderPoints tier 39', factor: 1.39, active: false },
  { key: 'reorderPoints-040', label: 'reorderPoints tier 40', factor: 1.40, active: true },
  { key: 'reorderPoints-041', label: 'reorderPoints tier 41', factor: 1.41, active: true },
  { key: 'reorderPoints-042', label: 'reorderPoints tier 42', factor: 1.42, active: false },
  { key: 'reorderPoints-043', label: 'reorderPoints tier 43', factor: 1.43, active: true },
  { key: 'reorderPoints-044', label: 'reorderPoints tier 44', factor: 1.44, active: true },
  { key: 'reorderPoints-045', label: 'reorderPoints tier 45', factor: 1.45, active: false },
  { key: 'reorderPoints-046', label: 'reorderPoints tier 46', factor: 1.46, active: true },
  { key: 'reorderPoints-047', label: 'reorderPoints tier 47', factor: 1.47, active: true },
  { key: 'reorderPoints-048', label: 'reorderPoints tier 48', factor: 1.48, active: false },
  { key: 'reorderPoints-049', label: 'reorderPoints tier 49', factor: 1.49, active: true },
  { key: 'reorderPoints-050', label: 'reorderPoints tier 50', factor: 1.50, active: true },
  { key: 'reorderPoints-051', label: 'reorderPoints tier 51', factor: 1.51, active: false },
  { key: 'reorderPoints-052', label: 'reorderPoints tier 52', factor: 1.52, active: true },
  { key: 'reorderPoints-053', label: 'reorderPoints tier 53', factor: 1.53, active: true },
  { key: 'reorderPoints-054', label: 'reorderPoints tier 54', factor: 1.54, active: false },
  { key: 'reorderPoints-055', label: 'reorderPoints tier 55', factor: 1.55, active: true },
  { key: 'reorderPoints-056', label: 'reorderPoints tier 56', factor: 1.56, active: true },
  { key: 'reorderPoints-057', label: 'reorderPoints tier 57', factor: 1.57, active: false },
  { key: 'reorderPoints-058', label: 'reorderPoints tier 58', factor: 1.58, active: true },
  { key: 'reorderPoints-059', label: 'reorderPoints tier 59', factor: 1.59, active: true },
]

export function lookupReorderPoints (key: string): ReorderPointsEntry | undefined {
  return reorderPointsTable.find((entry) => entry.key === key)
}

export function activeReorderPoints (): ReorderPointsEntry[] {
  return reorderPointsTable.filter((entry) => entry.active)
}
