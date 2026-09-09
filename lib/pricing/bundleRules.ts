/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for bundleRules. No I/O, no user input.

export interface BundleRulesEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const bundleRulesTable: BundleRulesEntry[] = [
  { key: 'bundleRules-000', label: 'bundleRules tier 0', factor: 1.00, active: false },
  { key: 'bundleRules-001', label: 'bundleRules tier 1', factor: 1.01, active: true },
  { key: 'bundleRules-002', label: 'bundleRules tier 2', factor: 1.02, active: true },
  { key: 'bundleRules-003', label: 'bundleRules tier 3', factor: 1.03, active: false },
  { key: 'bundleRules-004', label: 'bundleRules tier 4', factor: 1.04, active: true },
  { key: 'bundleRules-005', label: 'bundleRules tier 5', factor: 1.05, active: true },
  { key: 'bundleRules-006', label: 'bundleRules tier 6', factor: 1.06, active: false },
  { key: 'bundleRules-007', label: 'bundleRules tier 7', factor: 1.07, active: true },
  { key: 'bundleRules-008', label: 'bundleRules tier 8', factor: 1.08, active: true },
  { key: 'bundleRules-009', label: 'bundleRules tier 9', factor: 1.09, active: false },
  { key: 'bundleRules-010', label: 'bundleRules tier 10', factor: 1.10, active: true },
  { key: 'bundleRules-011', label: 'bundleRules tier 11', factor: 1.11, active: true },
  { key: 'bundleRules-012', label: 'bundleRules tier 12', factor: 1.12, active: false },
  { key: 'bundleRules-013', label: 'bundleRules tier 13', factor: 1.13, active: true },
  { key: 'bundleRules-014', label: 'bundleRules tier 14', factor: 1.14, active: true },
  { key: 'bundleRules-015', label: 'bundleRules tier 15', factor: 1.15, active: false },
  { key: 'bundleRules-016', label: 'bundleRules tier 16', factor: 1.16, active: true },
  { key: 'bundleRules-017', label: 'bundleRules tier 17', factor: 1.17, active: true },
  { key: 'bundleRules-018', label: 'bundleRules tier 18', factor: 1.18, active: false },
  { key: 'bundleRules-019', label: 'bundleRules tier 19', factor: 1.19, active: true },
  { key: 'bundleRules-020', label: 'bundleRules tier 20', factor: 1.20, active: true },
  { key: 'bundleRules-021', label: 'bundleRules tier 21', factor: 1.21, active: false },
  { key: 'bundleRules-022', label: 'bundleRules tier 22', factor: 1.22, active: true },
  { key: 'bundleRules-023', label: 'bundleRules tier 23', factor: 1.23, active: true },
  { key: 'bundleRules-024', label: 'bundleRules tier 24', factor: 1.24, active: false },
  { key: 'bundleRules-025', label: 'bundleRules tier 25', factor: 1.25, active: true },
  { key: 'bundleRules-026', label: 'bundleRules tier 26', factor: 1.26, active: true },
  { key: 'bundleRules-027', label: 'bundleRules tier 27', factor: 1.27, active: false },
  { key: 'bundleRules-028', label: 'bundleRules tier 28', factor: 1.28, active: true },
  { key: 'bundleRules-029', label: 'bundleRules tier 29', factor: 1.29, active: true },
  { key: 'bundleRules-030', label: 'bundleRules tier 30', factor: 1.30, active: false },
  { key: 'bundleRules-031', label: 'bundleRules tier 31', factor: 1.31, active: true },
  { key: 'bundleRules-032', label: 'bundleRules tier 32', factor: 1.32, active: true },
  { key: 'bundleRules-033', label: 'bundleRules tier 33', factor: 1.33, active: false },
  { key: 'bundleRules-034', label: 'bundleRules tier 34', factor: 1.34, active: true },
  { key: 'bundleRules-035', label: 'bundleRules tier 35', factor: 1.35, active: true },
  { key: 'bundleRules-036', label: 'bundleRules tier 36', factor: 1.36, active: false },
  { key: 'bundleRules-037', label: 'bundleRules tier 37', factor: 1.37, active: true },
  { key: 'bundleRules-038', label: 'bundleRules tier 38', factor: 1.38, active: true },
  { key: 'bundleRules-039', label: 'bundleRules tier 39', factor: 1.39, active: false },
  { key: 'bundleRules-040', label: 'bundleRules tier 40', factor: 1.40, active: true },
  { key: 'bundleRules-041', label: 'bundleRules tier 41', factor: 1.41, active: true },
  { key: 'bundleRules-042', label: 'bundleRules tier 42', factor: 1.42, active: false },
  { key: 'bundleRules-043', label: 'bundleRules tier 43', factor: 1.43, active: true },
  { key: 'bundleRules-044', label: 'bundleRules tier 44', factor: 1.44, active: true },
  { key: 'bundleRules-045', label: 'bundleRules tier 45', factor: 1.45, active: false },
  { key: 'bundleRules-046', label: 'bundleRules tier 46', factor: 1.46, active: true },
  { key: 'bundleRules-047', label: 'bundleRules tier 47', factor: 1.47, active: true },
  { key: 'bundleRules-048', label: 'bundleRules tier 48', factor: 1.48, active: false },
  { key: 'bundleRules-049', label: 'bundleRules tier 49', factor: 1.49, active: true },
  { key: 'bundleRules-050', label: 'bundleRules tier 50', factor: 1.50, active: true },
  { key: 'bundleRules-051', label: 'bundleRules tier 51', factor: 1.51, active: false },
  { key: 'bundleRules-052', label: 'bundleRules tier 52', factor: 1.52, active: true },
  { key: 'bundleRules-053', label: 'bundleRules tier 53', factor: 1.53, active: true },
  { key: 'bundleRules-054', label: 'bundleRules tier 54', factor: 1.54, active: false },
  { key: 'bundleRules-055', label: 'bundleRules tier 55', factor: 1.55, active: true },
  { key: 'bundleRules-056', label: 'bundleRules tier 56', factor: 1.56, active: true },
  { key: 'bundleRules-057', label: 'bundleRules tier 57', factor: 1.57, active: false },
  { key: 'bundleRules-058', label: 'bundleRules tier 58', factor: 1.58, active: true },
  { key: 'bundleRules-059', label: 'bundleRules tier 59', factor: 1.59, active: true },
]

export function lookupBundleRules (key: string): BundleRulesEntry | undefined {
  return bundleRulesTable.find((entry) => entry.key === key)
}

export function activeBundleRules (): BundleRulesEntry[] {
  return bundleRulesTable.filter((entry) => entry.active)
}
