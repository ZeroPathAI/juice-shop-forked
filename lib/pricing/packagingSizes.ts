/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for packagingSizes. No I/O, no user input.

export interface PackagingSizesEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const packagingSizesTable: PackagingSizesEntry[] = [
  { key: 'packagingSizes-000', label: 'packagingSizes tier 0', factor: 1.00, active: false },
  { key: 'packagingSizes-001', label: 'packagingSizes tier 1', factor: 1.01, active: true },
  { key: 'packagingSizes-002', label: 'packagingSizes tier 2', factor: 1.02, active: true },
  { key: 'packagingSizes-003', label: 'packagingSizes tier 3', factor: 1.03, active: false },
  { key: 'packagingSizes-004', label: 'packagingSizes tier 4', factor: 1.04, active: true },
  { key: 'packagingSizes-005', label: 'packagingSizes tier 5', factor: 1.05, active: true },
  { key: 'packagingSizes-006', label: 'packagingSizes tier 6', factor: 1.06, active: false },
  { key: 'packagingSizes-007', label: 'packagingSizes tier 7', factor: 1.07, active: true },
  { key: 'packagingSizes-008', label: 'packagingSizes tier 8', factor: 1.08, active: true },
  { key: 'packagingSizes-009', label: 'packagingSizes tier 9', factor: 1.09, active: false },
  { key: 'packagingSizes-010', label: 'packagingSizes tier 10', factor: 1.10, active: true },
  { key: 'packagingSizes-011', label: 'packagingSizes tier 11', factor: 1.11, active: true },
  { key: 'packagingSizes-012', label: 'packagingSizes tier 12', factor: 1.12, active: false },
  { key: 'packagingSizes-013', label: 'packagingSizes tier 13', factor: 1.13, active: true },
  { key: 'packagingSizes-014', label: 'packagingSizes tier 14', factor: 1.14, active: true },
  { key: 'packagingSizes-015', label: 'packagingSizes tier 15', factor: 1.15, active: false },
  { key: 'packagingSizes-016', label: 'packagingSizes tier 16', factor: 1.16, active: true },
  { key: 'packagingSizes-017', label: 'packagingSizes tier 17', factor: 1.17, active: true },
  { key: 'packagingSizes-018', label: 'packagingSizes tier 18', factor: 1.18, active: false },
  { key: 'packagingSizes-019', label: 'packagingSizes tier 19', factor: 1.19, active: true },
  { key: 'packagingSizes-020', label: 'packagingSizes tier 20', factor: 1.20, active: true },
  { key: 'packagingSizes-021', label: 'packagingSizes tier 21', factor: 1.21, active: false },
  { key: 'packagingSizes-022', label: 'packagingSizes tier 22', factor: 1.22, active: true },
  { key: 'packagingSizes-023', label: 'packagingSizes tier 23', factor: 1.23, active: true },
  { key: 'packagingSizes-024', label: 'packagingSizes tier 24', factor: 1.24, active: false },
  { key: 'packagingSizes-025', label: 'packagingSizes tier 25', factor: 1.25, active: true },
  { key: 'packagingSizes-026', label: 'packagingSizes tier 26', factor: 1.26, active: true },
  { key: 'packagingSizes-027', label: 'packagingSizes tier 27', factor: 1.27, active: false },
  { key: 'packagingSizes-028', label: 'packagingSizes tier 28', factor: 1.28, active: true },
  { key: 'packagingSizes-029', label: 'packagingSizes tier 29', factor: 1.29, active: true },
  { key: 'packagingSizes-030', label: 'packagingSizes tier 30', factor: 1.30, active: false },
  { key: 'packagingSizes-031', label: 'packagingSizes tier 31', factor: 1.31, active: true },
  { key: 'packagingSizes-032', label: 'packagingSizes tier 32', factor: 1.32, active: true },
  { key: 'packagingSizes-033', label: 'packagingSizes tier 33', factor: 1.33, active: false },
  { key: 'packagingSizes-034', label: 'packagingSizes tier 34', factor: 1.34, active: true },
  { key: 'packagingSizes-035', label: 'packagingSizes tier 35', factor: 1.35, active: true },
  { key: 'packagingSizes-036', label: 'packagingSizes tier 36', factor: 1.36, active: false },
  { key: 'packagingSizes-037', label: 'packagingSizes tier 37', factor: 1.37, active: true },
  { key: 'packagingSizes-038', label: 'packagingSizes tier 38', factor: 1.38, active: true },
  { key: 'packagingSizes-039', label: 'packagingSizes tier 39', factor: 1.39, active: false },
  { key: 'packagingSizes-040', label: 'packagingSizes tier 40', factor: 1.40, active: true },
  { key: 'packagingSizes-041', label: 'packagingSizes tier 41', factor: 1.41, active: true },
  { key: 'packagingSizes-042', label: 'packagingSizes tier 42', factor: 1.42, active: false },
  { key: 'packagingSizes-043', label: 'packagingSizes tier 43', factor: 1.43, active: true },
  { key: 'packagingSizes-044', label: 'packagingSizes tier 44', factor: 1.44, active: true },
  { key: 'packagingSizes-045', label: 'packagingSizes tier 45', factor: 1.45, active: false },
  { key: 'packagingSizes-046', label: 'packagingSizes tier 46', factor: 1.46, active: true },
  { key: 'packagingSizes-047', label: 'packagingSizes tier 47', factor: 1.47, active: true },
  { key: 'packagingSizes-048', label: 'packagingSizes tier 48', factor: 1.48, active: false },
  { key: 'packagingSizes-049', label: 'packagingSizes tier 49', factor: 1.49, active: true },
  { key: 'packagingSizes-050', label: 'packagingSizes tier 50', factor: 1.50, active: true },
  { key: 'packagingSizes-051', label: 'packagingSizes tier 51', factor: 1.51, active: false },
  { key: 'packagingSizes-052', label: 'packagingSizes tier 52', factor: 1.52, active: true },
  { key: 'packagingSizes-053', label: 'packagingSizes tier 53', factor: 1.53, active: true },
  { key: 'packagingSizes-054', label: 'packagingSizes tier 54', factor: 1.54, active: false },
  { key: 'packagingSizes-055', label: 'packagingSizes tier 55', factor: 1.55, active: true },
  { key: 'packagingSizes-056', label: 'packagingSizes tier 56', factor: 1.56, active: true },
  { key: 'packagingSizes-057', label: 'packagingSizes tier 57', factor: 1.57, active: false },
  { key: 'packagingSizes-058', label: 'packagingSizes tier 58', factor: 1.58, active: true },
  { key: 'packagingSizes-059', label: 'packagingSizes tier 59', factor: 1.59, active: true },
]

export function lookupPackagingSizes (key: string): PackagingSizesEntry | undefined {
  return packagingSizesTable.find((entry) => entry.key === key)
}

export function activePackagingSizes (): PackagingSizesEntry[] {
  return packagingSizesTable.filter((entry) => entry.active)
}
