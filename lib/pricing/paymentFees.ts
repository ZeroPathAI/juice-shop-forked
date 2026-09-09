/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for paymentFees. No I/O, no user input.

export interface PaymentFeesEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const paymentFeesTable: PaymentFeesEntry[] = [
  { key: 'paymentFees-000', label: 'paymentFees tier 0', factor: 1.00, active: false },
  { key: 'paymentFees-001', label: 'paymentFees tier 1', factor: 1.01, active: true },
  { key: 'paymentFees-002', label: 'paymentFees tier 2', factor: 1.02, active: true },
  { key: 'paymentFees-003', label: 'paymentFees tier 3', factor: 1.03, active: false },
  { key: 'paymentFees-004', label: 'paymentFees tier 4', factor: 1.04, active: true },
  { key: 'paymentFees-005', label: 'paymentFees tier 5', factor: 1.05, active: true },
  { key: 'paymentFees-006', label: 'paymentFees tier 6', factor: 1.06, active: false },
  { key: 'paymentFees-007', label: 'paymentFees tier 7', factor: 1.07, active: true },
  { key: 'paymentFees-008', label: 'paymentFees tier 8', factor: 1.08, active: true },
  { key: 'paymentFees-009', label: 'paymentFees tier 9', factor: 1.09, active: false },
  { key: 'paymentFees-010', label: 'paymentFees tier 10', factor: 1.10, active: true },
  { key: 'paymentFees-011', label: 'paymentFees tier 11', factor: 1.11, active: true },
  { key: 'paymentFees-012', label: 'paymentFees tier 12', factor: 1.12, active: false },
  { key: 'paymentFees-013', label: 'paymentFees tier 13', factor: 1.13, active: true },
  { key: 'paymentFees-014', label: 'paymentFees tier 14', factor: 1.14, active: true },
  { key: 'paymentFees-015', label: 'paymentFees tier 15', factor: 1.15, active: false },
  { key: 'paymentFees-016', label: 'paymentFees tier 16', factor: 1.16, active: true },
  { key: 'paymentFees-017', label: 'paymentFees tier 17', factor: 1.17, active: true },
  { key: 'paymentFees-018', label: 'paymentFees tier 18', factor: 1.18, active: false },
  { key: 'paymentFees-019', label: 'paymentFees tier 19', factor: 1.19, active: true },
  { key: 'paymentFees-020', label: 'paymentFees tier 20', factor: 1.20, active: true },
  { key: 'paymentFees-021', label: 'paymentFees tier 21', factor: 1.21, active: false },
  { key: 'paymentFees-022', label: 'paymentFees tier 22', factor: 1.22, active: true },
  { key: 'paymentFees-023', label: 'paymentFees tier 23', factor: 1.23, active: true },
  { key: 'paymentFees-024', label: 'paymentFees tier 24', factor: 1.24, active: false },
  { key: 'paymentFees-025', label: 'paymentFees tier 25', factor: 1.25, active: true },
  { key: 'paymentFees-026', label: 'paymentFees tier 26', factor: 1.26, active: true },
  { key: 'paymentFees-027', label: 'paymentFees tier 27', factor: 1.27, active: false },
  { key: 'paymentFees-028', label: 'paymentFees tier 28', factor: 1.28, active: true },
  { key: 'paymentFees-029', label: 'paymentFees tier 29', factor: 1.29, active: true },
  { key: 'paymentFees-030', label: 'paymentFees tier 30', factor: 1.30, active: false },
  { key: 'paymentFees-031', label: 'paymentFees tier 31', factor: 1.31, active: true },
  { key: 'paymentFees-032', label: 'paymentFees tier 32', factor: 1.32, active: true },
  { key: 'paymentFees-033', label: 'paymentFees tier 33', factor: 1.33, active: false },
  { key: 'paymentFees-034', label: 'paymentFees tier 34', factor: 1.34, active: true },
  { key: 'paymentFees-035', label: 'paymentFees tier 35', factor: 1.35, active: true },
  { key: 'paymentFees-036', label: 'paymentFees tier 36', factor: 1.36, active: false },
  { key: 'paymentFees-037', label: 'paymentFees tier 37', factor: 1.37, active: true },
  { key: 'paymentFees-038', label: 'paymentFees tier 38', factor: 1.38, active: true },
  { key: 'paymentFees-039', label: 'paymentFees tier 39', factor: 1.39, active: false },
  { key: 'paymentFees-040', label: 'paymentFees tier 40', factor: 1.40, active: true },
  { key: 'paymentFees-041', label: 'paymentFees tier 41', factor: 1.41, active: true },
  { key: 'paymentFees-042', label: 'paymentFees tier 42', factor: 1.42, active: false },
  { key: 'paymentFees-043', label: 'paymentFees tier 43', factor: 1.43, active: true },
  { key: 'paymentFees-044', label: 'paymentFees tier 44', factor: 1.44, active: true },
  { key: 'paymentFees-045', label: 'paymentFees tier 45', factor: 1.45, active: false },
  { key: 'paymentFees-046', label: 'paymentFees tier 46', factor: 1.46, active: true },
  { key: 'paymentFees-047', label: 'paymentFees tier 47', factor: 1.47, active: true },
  { key: 'paymentFees-048', label: 'paymentFees tier 48', factor: 1.48, active: false },
  { key: 'paymentFees-049', label: 'paymentFees tier 49', factor: 1.49, active: true },
  { key: 'paymentFees-050', label: 'paymentFees tier 50', factor: 1.50, active: true },
  { key: 'paymentFees-051', label: 'paymentFees tier 51', factor: 1.51, active: false },
  { key: 'paymentFees-052', label: 'paymentFees tier 52', factor: 1.52, active: true },
  { key: 'paymentFees-053', label: 'paymentFees tier 53', factor: 1.53, active: true },
  { key: 'paymentFees-054', label: 'paymentFees tier 54', factor: 1.54, active: false },
  { key: 'paymentFees-055', label: 'paymentFees tier 55', factor: 1.55, active: true },
  { key: 'paymentFees-056', label: 'paymentFees tier 56', factor: 1.56, active: true },
  { key: 'paymentFees-057', label: 'paymentFees tier 57', factor: 1.57, active: false },
  { key: 'paymentFees-058', label: 'paymentFees tier 58', factor: 1.58, active: true },
  { key: 'paymentFees-059', label: 'paymentFees tier 59', factor: 1.59, active: true },
]

export function lookupPaymentFees (key: string): PaymentFeesEntry | undefined {
  return paymentFeesTable.find((entry) => entry.key === key)
}

export function activePaymentFees (): PaymentFeesEntry[] {
  return paymentFeesTable.filter((entry) => entry.active)
}
