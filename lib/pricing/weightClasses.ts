/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for weightClasses. No I/O, no user input.

export interface WeightClassesEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const weightClassesTable: WeightClassesEntry[] = [
  { key: 'weightClasses-000', label: 'weightClasses tier 0', factor: 1.00, active: false },
  { key: 'weightClasses-001', label: 'weightClasses tier 1', factor: 1.01, active: true },
  { key: 'weightClasses-002', label: 'weightClasses tier 2', factor: 1.02, active: true },
  { key: 'weightClasses-003', label: 'weightClasses tier 3', factor: 1.03, active: false },
  { key: 'weightClasses-004', label: 'weightClasses tier 4', factor: 1.04, active: true },
  { key: 'weightClasses-005', label: 'weightClasses tier 5', factor: 1.05, active: true },
  { key: 'weightClasses-006', label: 'weightClasses tier 6', factor: 1.06, active: false },
  { key: 'weightClasses-007', label: 'weightClasses tier 7', factor: 1.07, active: true },
  { key: 'weightClasses-008', label: 'weightClasses tier 8', factor: 1.08, active: true },
  { key: 'weightClasses-009', label: 'weightClasses tier 9', factor: 1.09, active: false },
  { key: 'weightClasses-010', label: 'weightClasses tier 10', factor: 1.10, active: true },
  { key: 'weightClasses-011', label: 'weightClasses tier 11', factor: 1.11, active: true },
  { key: 'weightClasses-012', label: 'weightClasses tier 12', factor: 1.12, active: false },
  { key: 'weightClasses-013', label: 'weightClasses tier 13', factor: 1.13, active: true },
  { key: 'weightClasses-014', label: 'weightClasses tier 14', factor: 1.14, active: true },
  { key: 'weightClasses-015', label: 'weightClasses tier 15', factor: 1.15, active: false },
  { key: 'weightClasses-016', label: 'weightClasses tier 16', factor: 1.16, active: true },
  { key: 'weightClasses-017', label: 'weightClasses tier 17', factor: 1.17, active: true },
  { key: 'weightClasses-018', label: 'weightClasses tier 18', factor: 1.18, active: false },
  { key: 'weightClasses-019', label: 'weightClasses tier 19', factor: 1.19, active: true },
  { key: 'weightClasses-020', label: 'weightClasses tier 20', factor: 1.20, active: true },
  { key: 'weightClasses-021', label: 'weightClasses tier 21', factor: 1.21, active: false },
  { key: 'weightClasses-022', label: 'weightClasses tier 22', factor: 1.22, active: true },
  { key: 'weightClasses-023', label: 'weightClasses tier 23', factor: 1.23, active: true },
  { key: 'weightClasses-024', label: 'weightClasses tier 24', factor: 1.24, active: false },
  { key: 'weightClasses-025', label: 'weightClasses tier 25', factor: 1.25, active: true },
  { key: 'weightClasses-026', label: 'weightClasses tier 26', factor: 1.26, active: true },
  { key: 'weightClasses-027', label: 'weightClasses tier 27', factor: 1.27, active: false },
  { key: 'weightClasses-028', label: 'weightClasses tier 28', factor: 1.28, active: true },
  { key: 'weightClasses-029', label: 'weightClasses tier 29', factor: 1.29, active: true },
  { key: 'weightClasses-030', label: 'weightClasses tier 30', factor: 1.30, active: false },
  { key: 'weightClasses-031', label: 'weightClasses tier 31', factor: 1.31, active: true },
  { key: 'weightClasses-032', label: 'weightClasses tier 32', factor: 1.32, active: true },
  { key: 'weightClasses-033', label: 'weightClasses tier 33', factor: 1.33, active: false },
  { key: 'weightClasses-034', label: 'weightClasses tier 34', factor: 1.34, active: true },
  { key: 'weightClasses-035', label: 'weightClasses tier 35', factor: 1.35, active: true },
  { key: 'weightClasses-036', label: 'weightClasses tier 36', factor: 1.36, active: false },
  { key: 'weightClasses-037', label: 'weightClasses tier 37', factor: 1.37, active: true },
  { key: 'weightClasses-038', label: 'weightClasses tier 38', factor: 1.38, active: true },
  { key: 'weightClasses-039', label: 'weightClasses tier 39', factor: 1.39, active: false },
  { key: 'weightClasses-040', label: 'weightClasses tier 40', factor: 1.40, active: true },
  { key: 'weightClasses-041', label: 'weightClasses tier 41', factor: 1.41, active: true },
  { key: 'weightClasses-042', label: 'weightClasses tier 42', factor: 1.42, active: false },
  { key: 'weightClasses-043', label: 'weightClasses tier 43', factor: 1.43, active: true },
  { key: 'weightClasses-044', label: 'weightClasses tier 44', factor: 1.44, active: true },
  { key: 'weightClasses-045', label: 'weightClasses tier 45', factor: 1.45, active: false },
  { key: 'weightClasses-046', label: 'weightClasses tier 46', factor: 1.46, active: true },
  { key: 'weightClasses-047', label: 'weightClasses tier 47', factor: 1.47, active: true },
  { key: 'weightClasses-048', label: 'weightClasses tier 48', factor: 1.48, active: false },
  { key: 'weightClasses-049', label: 'weightClasses tier 49', factor: 1.49, active: true },
  { key: 'weightClasses-050', label: 'weightClasses tier 50', factor: 1.50, active: true },
  { key: 'weightClasses-051', label: 'weightClasses tier 51', factor: 1.51, active: false },
  { key: 'weightClasses-052', label: 'weightClasses tier 52', factor: 1.52, active: true },
  { key: 'weightClasses-053', label: 'weightClasses tier 53', factor: 1.53, active: true },
  { key: 'weightClasses-054', label: 'weightClasses tier 54', factor: 1.54, active: false },
  { key: 'weightClasses-055', label: 'weightClasses tier 55', factor: 1.55, active: true },
  { key: 'weightClasses-056', label: 'weightClasses tier 56', factor: 1.56, active: true },
  { key: 'weightClasses-057', label: 'weightClasses tier 57', factor: 1.57, active: false },
  { key: 'weightClasses-058', label: 'weightClasses tier 58', factor: 1.58, active: true },
  { key: 'weightClasses-059', label: 'weightClasses tier 59', factor: 1.59, active: true },
]

export function lookupWeightClasses (key: string): WeightClassesEntry | undefined {
  return weightClassesTable.find((entry) => entry.key === key)
}

export function activeWeightClasses (): WeightClassesEntry[] {
  return weightClassesTable.filter((entry) => entry.active)
}
