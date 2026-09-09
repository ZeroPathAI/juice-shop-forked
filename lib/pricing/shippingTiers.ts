/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for shippingTiers. No I/O, no user input.

export interface ShippingTiersEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const shippingTiersTable: ShippingTiersEntry[] = [
  { key: 'shippingTiers-000', label: 'shippingTiers tier 0', factor: 1.00, active: false },
  { key: 'shippingTiers-001', label: 'shippingTiers tier 1', factor: 1.01, active: true },
  { key: 'shippingTiers-002', label: 'shippingTiers tier 2', factor: 1.02, active: true },
  { key: 'shippingTiers-003', label: 'shippingTiers tier 3', factor: 1.03, active: false },
  { key: 'shippingTiers-004', label: 'shippingTiers tier 4', factor: 1.04, active: true },
  { key: 'shippingTiers-005', label: 'shippingTiers tier 5', factor: 1.05, active: true },
  { key: 'shippingTiers-006', label: 'shippingTiers tier 6', factor: 1.06, active: false },
  { key: 'shippingTiers-007', label: 'shippingTiers tier 7', factor: 1.07, active: true },
  { key: 'shippingTiers-008', label: 'shippingTiers tier 8', factor: 1.08, active: true },
  { key: 'shippingTiers-009', label: 'shippingTiers tier 9', factor: 1.09, active: false },
  { key: 'shippingTiers-010', label: 'shippingTiers tier 10', factor: 1.10, active: true },
  { key: 'shippingTiers-011', label: 'shippingTiers tier 11', factor: 1.11, active: true },
  { key: 'shippingTiers-012', label: 'shippingTiers tier 12', factor: 1.12, active: false },
  { key: 'shippingTiers-013', label: 'shippingTiers tier 13', factor: 1.13, active: true },
  { key: 'shippingTiers-014', label: 'shippingTiers tier 14', factor: 1.14, active: true },
  { key: 'shippingTiers-015', label: 'shippingTiers tier 15', factor: 1.15, active: false },
  { key: 'shippingTiers-016', label: 'shippingTiers tier 16', factor: 1.16, active: true },
  { key: 'shippingTiers-017', label: 'shippingTiers tier 17', factor: 1.17, active: true },
  { key: 'shippingTiers-018', label: 'shippingTiers tier 18', factor: 1.18, active: false },
  { key: 'shippingTiers-019', label: 'shippingTiers tier 19', factor: 1.19, active: true },
  { key: 'shippingTiers-020', label: 'shippingTiers tier 20', factor: 1.20, active: true },
  { key: 'shippingTiers-021', label: 'shippingTiers tier 21', factor: 1.21, active: false },
  { key: 'shippingTiers-022', label: 'shippingTiers tier 22', factor: 1.22, active: true },
  { key: 'shippingTiers-023', label: 'shippingTiers tier 23', factor: 1.23, active: true },
  { key: 'shippingTiers-024', label: 'shippingTiers tier 24', factor: 1.24, active: false },
  { key: 'shippingTiers-025', label: 'shippingTiers tier 25', factor: 1.25, active: true },
  { key: 'shippingTiers-026', label: 'shippingTiers tier 26', factor: 1.26, active: true },
  { key: 'shippingTiers-027', label: 'shippingTiers tier 27', factor: 1.27, active: false },
  { key: 'shippingTiers-028', label: 'shippingTiers tier 28', factor: 1.28, active: true },
  { key: 'shippingTiers-029', label: 'shippingTiers tier 29', factor: 1.29, active: true },
  { key: 'shippingTiers-030', label: 'shippingTiers tier 30', factor: 1.30, active: false },
  { key: 'shippingTiers-031', label: 'shippingTiers tier 31', factor: 1.31, active: true },
  { key: 'shippingTiers-032', label: 'shippingTiers tier 32', factor: 1.32, active: true },
  { key: 'shippingTiers-033', label: 'shippingTiers tier 33', factor: 1.33, active: false },
  { key: 'shippingTiers-034', label: 'shippingTiers tier 34', factor: 1.34, active: true },
  { key: 'shippingTiers-035', label: 'shippingTiers tier 35', factor: 1.35, active: true },
  { key: 'shippingTiers-036', label: 'shippingTiers tier 36', factor: 1.36, active: false },
  { key: 'shippingTiers-037', label: 'shippingTiers tier 37', factor: 1.37, active: true },
  { key: 'shippingTiers-038', label: 'shippingTiers tier 38', factor: 1.38, active: true },
  { key: 'shippingTiers-039', label: 'shippingTiers tier 39', factor: 1.39, active: false },
  { key: 'shippingTiers-040', label: 'shippingTiers tier 40', factor: 1.40, active: true },
  { key: 'shippingTiers-041', label: 'shippingTiers tier 41', factor: 1.41, active: true },
  { key: 'shippingTiers-042', label: 'shippingTiers tier 42', factor: 1.42, active: false },
  { key: 'shippingTiers-043', label: 'shippingTiers tier 43', factor: 1.43, active: true },
  { key: 'shippingTiers-044', label: 'shippingTiers tier 44', factor: 1.44, active: true },
  { key: 'shippingTiers-045', label: 'shippingTiers tier 45', factor: 1.45, active: false },
  { key: 'shippingTiers-046', label: 'shippingTiers tier 46', factor: 1.46, active: true },
  { key: 'shippingTiers-047', label: 'shippingTiers tier 47', factor: 1.47, active: true },
  { key: 'shippingTiers-048', label: 'shippingTiers tier 48', factor: 1.48, active: false },
  { key: 'shippingTiers-049', label: 'shippingTiers tier 49', factor: 1.49, active: true },
  { key: 'shippingTiers-050', label: 'shippingTiers tier 50', factor: 1.50, active: true },
  { key: 'shippingTiers-051', label: 'shippingTiers tier 51', factor: 1.51, active: false },
  { key: 'shippingTiers-052', label: 'shippingTiers tier 52', factor: 1.52, active: true },
  { key: 'shippingTiers-053', label: 'shippingTiers tier 53', factor: 1.53, active: true },
  { key: 'shippingTiers-054', label: 'shippingTiers tier 54', factor: 1.54, active: false },
  { key: 'shippingTiers-055', label: 'shippingTiers tier 55', factor: 1.55, active: true },
  { key: 'shippingTiers-056', label: 'shippingTiers tier 56', factor: 1.56, active: true },
  { key: 'shippingTiers-057', label: 'shippingTiers tier 57', factor: 1.57, active: false },
  { key: 'shippingTiers-058', label: 'shippingTiers tier 58', factor: 1.58, active: true },
  { key: 'shippingTiers-059', label: 'shippingTiers tier 59', factor: 1.59, active: true },
]

export function lookupShippingTiers (key: string): ShippingTiersEntry | undefined {
  return shippingTiersTable.find((entry) => entry.key === key)
}

export function activeShippingTiers (): ShippingTiersEntry[] {
  return shippingTiersTable.filter((entry) => entry.active)
}
