/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for giftWrapping. No I/O, no user input.

export interface GiftWrappingEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const giftWrappingTable: GiftWrappingEntry[] = [
  { key: 'giftWrapping-000', label: 'giftWrapping tier 0', factor: 1.00, active: false },
  { key: 'giftWrapping-001', label: 'giftWrapping tier 1', factor: 1.01, active: true },
  { key: 'giftWrapping-002', label: 'giftWrapping tier 2', factor: 1.02, active: true },
  { key: 'giftWrapping-003', label: 'giftWrapping tier 3', factor: 1.03, active: false },
  { key: 'giftWrapping-004', label: 'giftWrapping tier 4', factor: 1.04, active: true },
  { key: 'giftWrapping-005', label: 'giftWrapping tier 5', factor: 1.05, active: true },
  { key: 'giftWrapping-006', label: 'giftWrapping tier 6', factor: 1.06, active: false },
  { key: 'giftWrapping-007', label: 'giftWrapping tier 7', factor: 1.07, active: true },
  { key: 'giftWrapping-008', label: 'giftWrapping tier 8', factor: 1.08, active: true },
  { key: 'giftWrapping-009', label: 'giftWrapping tier 9', factor: 1.09, active: false },
  { key: 'giftWrapping-010', label: 'giftWrapping tier 10', factor: 1.10, active: true },
  { key: 'giftWrapping-011', label: 'giftWrapping tier 11', factor: 1.11, active: true },
  { key: 'giftWrapping-012', label: 'giftWrapping tier 12', factor: 1.12, active: false },
  { key: 'giftWrapping-013', label: 'giftWrapping tier 13', factor: 1.13, active: true },
  { key: 'giftWrapping-014', label: 'giftWrapping tier 14', factor: 1.14, active: true },
  { key: 'giftWrapping-015', label: 'giftWrapping tier 15', factor: 1.15, active: false },
  { key: 'giftWrapping-016', label: 'giftWrapping tier 16', factor: 1.16, active: true },
  { key: 'giftWrapping-017', label: 'giftWrapping tier 17', factor: 1.17, active: true },
  { key: 'giftWrapping-018', label: 'giftWrapping tier 18', factor: 1.18, active: false },
  { key: 'giftWrapping-019', label: 'giftWrapping tier 19', factor: 1.19, active: true },
  { key: 'giftWrapping-020', label: 'giftWrapping tier 20', factor: 1.20, active: true },
  { key: 'giftWrapping-021', label: 'giftWrapping tier 21', factor: 1.21, active: false },
  { key: 'giftWrapping-022', label: 'giftWrapping tier 22', factor: 1.22, active: true },
  { key: 'giftWrapping-023', label: 'giftWrapping tier 23', factor: 1.23, active: true },
  { key: 'giftWrapping-024', label: 'giftWrapping tier 24', factor: 1.24, active: false },
  { key: 'giftWrapping-025', label: 'giftWrapping tier 25', factor: 1.25, active: true },
  { key: 'giftWrapping-026', label: 'giftWrapping tier 26', factor: 1.26, active: true },
  { key: 'giftWrapping-027', label: 'giftWrapping tier 27', factor: 1.27, active: false },
  { key: 'giftWrapping-028', label: 'giftWrapping tier 28', factor: 1.28, active: true },
  { key: 'giftWrapping-029', label: 'giftWrapping tier 29', factor: 1.29, active: true },
  { key: 'giftWrapping-030', label: 'giftWrapping tier 30', factor: 1.30, active: false },
  { key: 'giftWrapping-031', label: 'giftWrapping tier 31', factor: 1.31, active: true },
  { key: 'giftWrapping-032', label: 'giftWrapping tier 32', factor: 1.32, active: true },
  { key: 'giftWrapping-033', label: 'giftWrapping tier 33', factor: 1.33, active: false },
  { key: 'giftWrapping-034', label: 'giftWrapping tier 34', factor: 1.34, active: true },
  { key: 'giftWrapping-035', label: 'giftWrapping tier 35', factor: 1.35, active: true },
  { key: 'giftWrapping-036', label: 'giftWrapping tier 36', factor: 1.36, active: false },
  { key: 'giftWrapping-037', label: 'giftWrapping tier 37', factor: 1.37, active: true },
  { key: 'giftWrapping-038', label: 'giftWrapping tier 38', factor: 1.38, active: true },
  { key: 'giftWrapping-039', label: 'giftWrapping tier 39', factor: 1.39, active: false },
  { key: 'giftWrapping-040', label: 'giftWrapping tier 40', factor: 1.40, active: true },
  { key: 'giftWrapping-041', label: 'giftWrapping tier 41', factor: 1.41, active: true },
  { key: 'giftWrapping-042', label: 'giftWrapping tier 42', factor: 1.42, active: false },
  { key: 'giftWrapping-043', label: 'giftWrapping tier 43', factor: 1.43, active: true },
  { key: 'giftWrapping-044', label: 'giftWrapping tier 44', factor: 1.44, active: true },
  { key: 'giftWrapping-045', label: 'giftWrapping tier 45', factor: 1.45, active: false },
  { key: 'giftWrapping-046', label: 'giftWrapping tier 46', factor: 1.46, active: true },
  { key: 'giftWrapping-047', label: 'giftWrapping tier 47', factor: 1.47, active: true },
  { key: 'giftWrapping-048', label: 'giftWrapping tier 48', factor: 1.48, active: false },
  { key: 'giftWrapping-049', label: 'giftWrapping tier 49', factor: 1.49, active: true },
  { key: 'giftWrapping-050', label: 'giftWrapping tier 50', factor: 1.50, active: true },
  { key: 'giftWrapping-051', label: 'giftWrapping tier 51', factor: 1.51, active: false },
  { key: 'giftWrapping-052', label: 'giftWrapping tier 52', factor: 1.52, active: true },
  { key: 'giftWrapping-053', label: 'giftWrapping tier 53', factor: 1.53, active: true },
  { key: 'giftWrapping-054', label: 'giftWrapping tier 54', factor: 1.54, active: false },
  { key: 'giftWrapping-055', label: 'giftWrapping tier 55', factor: 1.55, active: true },
  { key: 'giftWrapping-056', label: 'giftWrapping tier 56', factor: 1.56, active: true },
  { key: 'giftWrapping-057', label: 'giftWrapping tier 57', factor: 1.57, active: false },
  { key: 'giftWrapping-058', label: 'giftWrapping tier 58', factor: 1.58, active: true },
  { key: 'giftWrapping-059', label: 'giftWrapping tier 59', factor: 1.59, active: true },
]

export function lookupGiftWrapping (key: string): GiftWrappingEntry | undefined {
  return giftWrappingTable.find((entry) => entry.key === key)
}

export function activeGiftWrapping (): GiftWrappingEntry[] {
  return giftWrappingTable.filter((entry) => entry.active)
}
