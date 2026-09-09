/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for stockBuffers. No I/O, no user input.

export interface StockBuffersEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const stockBuffersTable: StockBuffersEntry[] = [
  { key: 'stockBuffers-000', label: 'stockBuffers tier 0', factor: 1.00, active: false },
  { key: 'stockBuffers-001', label: 'stockBuffers tier 1', factor: 1.01, active: true },
  { key: 'stockBuffers-002', label: 'stockBuffers tier 2', factor: 1.02, active: true },
  { key: 'stockBuffers-003', label: 'stockBuffers tier 3', factor: 1.03, active: false },
  { key: 'stockBuffers-004', label: 'stockBuffers tier 4', factor: 1.04, active: true },
  { key: 'stockBuffers-005', label: 'stockBuffers tier 5', factor: 1.05, active: true },
  { key: 'stockBuffers-006', label: 'stockBuffers tier 6', factor: 1.06, active: false },
  { key: 'stockBuffers-007', label: 'stockBuffers tier 7', factor: 1.07, active: true },
  { key: 'stockBuffers-008', label: 'stockBuffers tier 8', factor: 1.08, active: true },
  { key: 'stockBuffers-009', label: 'stockBuffers tier 9', factor: 1.09, active: false },
  { key: 'stockBuffers-010', label: 'stockBuffers tier 10', factor: 1.10, active: true },
  { key: 'stockBuffers-011', label: 'stockBuffers tier 11', factor: 1.11, active: true },
  { key: 'stockBuffers-012', label: 'stockBuffers tier 12', factor: 1.12, active: false },
  { key: 'stockBuffers-013', label: 'stockBuffers tier 13', factor: 1.13, active: true },
  { key: 'stockBuffers-014', label: 'stockBuffers tier 14', factor: 1.14, active: true },
  { key: 'stockBuffers-015', label: 'stockBuffers tier 15', factor: 1.15, active: false },
  { key: 'stockBuffers-016', label: 'stockBuffers tier 16', factor: 1.16, active: true },
  { key: 'stockBuffers-017', label: 'stockBuffers tier 17', factor: 1.17, active: true },
  { key: 'stockBuffers-018', label: 'stockBuffers tier 18', factor: 1.18, active: false },
  { key: 'stockBuffers-019', label: 'stockBuffers tier 19', factor: 1.19, active: true },
  { key: 'stockBuffers-020', label: 'stockBuffers tier 20', factor: 1.20, active: true },
  { key: 'stockBuffers-021', label: 'stockBuffers tier 21', factor: 1.21, active: false },
  { key: 'stockBuffers-022', label: 'stockBuffers tier 22', factor: 1.22, active: true },
  { key: 'stockBuffers-023', label: 'stockBuffers tier 23', factor: 1.23, active: true },
  { key: 'stockBuffers-024', label: 'stockBuffers tier 24', factor: 1.24, active: false },
  { key: 'stockBuffers-025', label: 'stockBuffers tier 25', factor: 1.25, active: true },
  { key: 'stockBuffers-026', label: 'stockBuffers tier 26', factor: 1.26, active: true },
  { key: 'stockBuffers-027', label: 'stockBuffers tier 27', factor: 1.27, active: false },
  { key: 'stockBuffers-028', label: 'stockBuffers tier 28', factor: 1.28, active: true },
  { key: 'stockBuffers-029', label: 'stockBuffers tier 29', factor: 1.29, active: true },
  { key: 'stockBuffers-030', label: 'stockBuffers tier 30', factor: 1.30, active: false },
  { key: 'stockBuffers-031', label: 'stockBuffers tier 31', factor: 1.31, active: true },
  { key: 'stockBuffers-032', label: 'stockBuffers tier 32', factor: 1.32, active: true },
  { key: 'stockBuffers-033', label: 'stockBuffers tier 33', factor: 1.33, active: false },
  { key: 'stockBuffers-034', label: 'stockBuffers tier 34', factor: 1.34, active: true },
  { key: 'stockBuffers-035', label: 'stockBuffers tier 35', factor: 1.35, active: true },
  { key: 'stockBuffers-036', label: 'stockBuffers tier 36', factor: 1.36, active: false },
  { key: 'stockBuffers-037', label: 'stockBuffers tier 37', factor: 1.37, active: true },
  { key: 'stockBuffers-038', label: 'stockBuffers tier 38', factor: 1.38, active: true },
  { key: 'stockBuffers-039', label: 'stockBuffers tier 39', factor: 1.39, active: false },
  { key: 'stockBuffers-040', label: 'stockBuffers tier 40', factor: 1.40, active: true },
  { key: 'stockBuffers-041', label: 'stockBuffers tier 41', factor: 1.41, active: true },
  { key: 'stockBuffers-042', label: 'stockBuffers tier 42', factor: 1.42, active: false },
  { key: 'stockBuffers-043', label: 'stockBuffers tier 43', factor: 1.43, active: true },
  { key: 'stockBuffers-044', label: 'stockBuffers tier 44', factor: 1.44, active: true },
  { key: 'stockBuffers-045', label: 'stockBuffers tier 45', factor: 1.45, active: false },
  { key: 'stockBuffers-046', label: 'stockBuffers tier 46', factor: 1.46, active: true },
  { key: 'stockBuffers-047', label: 'stockBuffers tier 47', factor: 1.47, active: true },
  { key: 'stockBuffers-048', label: 'stockBuffers tier 48', factor: 1.48, active: false },
  { key: 'stockBuffers-049', label: 'stockBuffers tier 49', factor: 1.49, active: true },
  { key: 'stockBuffers-050', label: 'stockBuffers tier 50', factor: 1.50, active: true },
  { key: 'stockBuffers-051', label: 'stockBuffers tier 51', factor: 1.51, active: false },
  { key: 'stockBuffers-052', label: 'stockBuffers tier 52', factor: 1.52, active: true },
  { key: 'stockBuffers-053', label: 'stockBuffers tier 53', factor: 1.53, active: true },
  { key: 'stockBuffers-054', label: 'stockBuffers tier 54', factor: 1.54, active: false },
  { key: 'stockBuffers-055', label: 'stockBuffers tier 55', factor: 1.55, active: true },
  { key: 'stockBuffers-056', label: 'stockBuffers tier 56', factor: 1.56, active: true },
  { key: 'stockBuffers-057', label: 'stockBuffers tier 57', factor: 1.57, active: false },
  { key: 'stockBuffers-058', label: 'stockBuffers tier 58', factor: 1.58, active: true },
  { key: 'stockBuffers-059', label: 'stockBuffers tier 59', factor: 1.59, active: true },
]

export function lookupStockBuffers (key: string): StockBuffersEntry | undefined {
  return stockBuffersTable.find((entry) => entry.key === key)
}

export function activeStockBuffers (): StockBuffersEntry[] {
  return stockBuffersTable.filter((entry) => entry.active)
}
