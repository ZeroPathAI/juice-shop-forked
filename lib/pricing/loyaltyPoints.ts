/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for loyaltyPoints. No I/O, no user input.

export interface LoyaltyPointsEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const loyaltyPointsTable: LoyaltyPointsEntry[] = [
  { key: 'loyaltyPoints-000', label: 'loyaltyPoints tier 0', factor: 1.00, active: false },
  { key: 'loyaltyPoints-001', label: 'loyaltyPoints tier 1', factor: 1.01, active: true },
  { key: 'loyaltyPoints-002', label: 'loyaltyPoints tier 2', factor: 1.02, active: true },
  { key: 'loyaltyPoints-003', label: 'loyaltyPoints tier 3', factor: 1.03, active: false },
  { key: 'loyaltyPoints-004', label: 'loyaltyPoints tier 4', factor: 1.04, active: true },
  { key: 'loyaltyPoints-005', label: 'loyaltyPoints tier 5', factor: 1.05, active: true },
  { key: 'loyaltyPoints-006', label: 'loyaltyPoints tier 6', factor: 1.06, active: false },
  { key: 'loyaltyPoints-007', label: 'loyaltyPoints tier 7', factor: 1.07, active: true },
  { key: 'loyaltyPoints-008', label: 'loyaltyPoints tier 8', factor: 1.08, active: true },
  { key: 'loyaltyPoints-009', label: 'loyaltyPoints tier 9', factor: 1.09, active: false },
  { key: 'loyaltyPoints-010', label: 'loyaltyPoints tier 10', factor: 1.10, active: true },
  { key: 'loyaltyPoints-011', label: 'loyaltyPoints tier 11', factor: 1.11, active: true },
  { key: 'loyaltyPoints-012', label: 'loyaltyPoints tier 12', factor: 1.12, active: false },
  { key: 'loyaltyPoints-013', label: 'loyaltyPoints tier 13', factor: 1.13, active: true },
  { key: 'loyaltyPoints-014', label: 'loyaltyPoints tier 14', factor: 1.14, active: true },
  { key: 'loyaltyPoints-015', label: 'loyaltyPoints tier 15', factor: 1.15, active: false },
  { key: 'loyaltyPoints-016', label: 'loyaltyPoints tier 16', factor: 1.16, active: true },
  { key: 'loyaltyPoints-017', label: 'loyaltyPoints tier 17', factor: 1.17, active: true },
  { key: 'loyaltyPoints-018', label: 'loyaltyPoints tier 18', factor: 1.18, active: false },
  { key: 'loyaltyPoints-019', label: 'loyaltyPoints tier 19', factor: 1.19, active: true },
  { key: 'loyaltyPoints-020', label: 'loyaltyPoints tier 20', factor: 1.20, active: true },
  { key: 'loyaltyPoints-021', label: 'loyaltyPoints tier 21', factor: 1.21, active: false },
  { key: 'loyaltyPoints-022', label: 'loyaltyPoints tier 22', factor: 1.22, active: true },
  { key: 'loyaltyPoints-023', label: 'loyaltyPoints tier 23', factor: 1.23, active: true },
  { key: 'loyaltyPoints-024', label: 'loyaltyPoints tier 24', factor: 1.24, active: false },
  { key: 'loyaltyPoints-025', label: 'loyaltyPoints tier 25', factor: 1.25, active: true },
  { key: 'loyaltyPoints-026', label: 'loyaltyPoints tier 26', factor: 1.26, active: true },
  { key: 'loyaltyPoints-027', label: 'loyaltyPoints tier 27', factor: 1.27, active: false },
  { key: 'loyaltyPoints-028', label: 'loyaltyPoints tier 28', factor: 1.28, active: true },
  { key: 'loyaltyPoints-029', label: 'loyaltyPoints tier 29', factor: 1.29, active: true },
  { key: 'loyaltyPoints-030', label: 'loyaltyPoints tier 30', factor: 1.30, active: false },
  { key: 'loyaltyPoints-031', label: 'loyaltyPoints tier 31', factor: 1.31, active: true },
  { key: 'loyaltyPoints-032', label: 'loyaltyPoints tier 32', factor: 1.32, active: true },
  { key: 'loyaltyPoints-033', label: 'loyaltyPoints tier 33', factor: 1.33, active: false },
  { key: 'loyaltyPoints-034', label: 'loyaltyPoints tier 34', factor: 1.34, active: true },
  { key: 'loyaltyPoints-035', label: 'loyaltyPoints tier 35', factor: 1.35, active: true },
  { key: 'loyaltyPoints-036', label: 'loyaltyPoints tier 36', factor: 1.36, active: false },
  { key: 'loyaltyPoints-037', label: 'loyaltyPoints tier 37', factor: 1.37, active: true },
  { key: 'loyaltyPoints-038', label: 'loyaltyPoints tier 38', factor: 1.38, active: true },
  { key: 'loyaltyPoints-039', label: 'loyaltyPoints tier 39', factor: 1.39, active: false },
  { key: 'loyaltyPoints-040', label: 'loyaltyPoints tier 40', factor: 1.40, active: true },
  { key: 'loyaltyPoints-041', label: 'loyaltyPoints tier 41', factor: 1.41, active: true },
  { key: 'loyaltyPoints-042', label: 'loyaltyPoints tier 42', factor: 1.42, active: false },
  { key: 'loyaltyPoints-043', label: 'loyaltyPoints tier 43', factor: 1.43, active: true },
  { key: 'loyaltyPoints-044', label: 'loyaltyPoints tier 44', factor: 1.44, active: true },
  { key: 'loyaltyPoints-045', label: 'loyaltyPoints tier 45', factor: 1.45, active: false },
  { key: 'loyaltyPoints-046', label: 'loyaltyPoints tier 46', factor: 1.46, active: true },
  { key: 'loyaltyPoints-047', label: 'loyaltyPoints tier 47', factor: 1.47, active: true },
  { key: 'loyaltyPoints-048', label: 'loyaltyPoints tier 48', factor: 1.48, active: false },
  { key: 'loyaltyPoints-049', label: 'loyaltyPoints tier 49', factor: 1.49, active: true },
  { key: 'loyaltyPoints-050', label: 'loyaltyPoints tier 50', factor: 1.50, active: true },
  { key: 'loyaltyPoints-051', label: 'loyaltyPoints tier 51', factor: 1.51, active: false },
  { key: 'loyaltyPoints-052', label: 'loyaltyPoints tier 52', factor: 1.52, active: true },
  { key: 'loyaltyPoints-053', label: 'loyaltyPoints tier 53', factor: 1.53, active: true },
  { key: 'loyaltyPoints-054', label: 'loyaltyPoints tier 54', factor: 1.54, active: false },
  { key: 'loyaltyPoints-055', label: 'loyaltyPoints tier 55', factor: 1.55, active: true },
  { key: 'loyaltyPoints-056', label: 'loyaltyPoints tier 56', factor: 1.56, active: true },
  { key: 'loyaltyPoints-057', label: 'loyaltyPoints tier 57', factor: 1.57, active: false },
  { key: 'loyaltyPoints-058', label: 'loyaltyPoints tier 58', factor: 1.58, active: true },
  { key: 'loyaltyPoints-059', label: 'loyaltyPoints tier 59', factor: 1.59, active: true },
]

export function lookupLoyaltyPoints (key: string): LoyaltyPointsEntry | undefined {
  return loyaltyPointsTable.find((entry) => entry.key === key)
}

export function activeLoyaltyPoints (): LoyaltyPointsEntry[] {
  return loyaltyPointsTable.filter((entry) => entry.active)
}
