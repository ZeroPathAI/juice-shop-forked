/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for catalogSynonyms. No I/O, no user input.

export interface CatalogSynonymsEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const catalogSynonymsTable: CatalogSynonymsEntry[] = [
  { key: 'catalogSynonyms-000', label: 'catalogSynonyms tier 0', factor: 1.00, active: false },
  { key: 'catalogSynonyms-001', label: 'catalogSynonyms tier 1', factor: 1.01, active: true },
  { key: 'catalogSynonyms-002', label: 'catalogSynonyms tier 2', factor: 1.02, active: true },
  { key: 'catalogSynonyms-003', label: 'catalogSynonyms tier 3', factor: 1.03, active: false },
  { key: 'catalogSynonyms-004', label: 'catalogSynonyms tier 4', factor: 1.04, active: true },
  { key: 'catalogSynonyms-005', label: 'catalogSynonyms tier 5', factor: 1.05, active: true },
  { key: 'catalogSynonyms-006', label: 'catalogSynonyms tier 6', factor: 1.06, active: false },
  { key: 'catalogSynonyms-007', label: 'catalogSynonyms tier 7', factor: 1.07, active: true },
  { key: 'catalogSynonyms-008', label: 'catalogSynonyms tier 8', factor: 1.08, active: true },
  { key: 'catalogSynonyms-009', label: 'catalogSynonyms tier 9', factor: 1.09, active: false },
  { key: 'catalogSynonyms-010', label: 'catalogSynonyms tier 10', factor: 1.10, active: true },
  { key: 'catalogSynonyms-011', label: 'catalogSynonyms tier 11', factor: 1.11, active: true },
  { key: 'catalogSynonyms-012', label: 'catalogSynonyms tier 12', factor: 1.12, active: false },
  { key: 'catalogSynonyms-013', label: 'catalogSynonyms tier 13', factor: 1.13, active: true },
  { key: 'catalogSynonyms-014', label: 'catalogSynonyms tier 14', factor: 1.14, active: true },
  { key: 'catalogSynonyms-015', label: 'catalogSynonyms tier 15', factor: 1.15, active: false },
  { key: 'catalogSynonyms-016', label: 'catalogSynonyms tier 16', factor: 1.16, active: true },
  { key: 'catalogSynonyms-017', label: 'catalogSynonyms tier 17', factor: 1.17, active: true },
  { key: 'catalogSynonyms-018', label: 'catalogSynonyms tier 18', factor: 1.18, active: false },
  { key: 'catalogSynonyms-019', label: 'catalogSynonyms tier 19', factor: 1.19, active: true },
  { key: 'catalogSynonyms-020', label: 'catalogSynonyms tier 20', factor: 1.20, active: true },
  { key: 'catalogSynonyms-021', label: 'catalogSynonyms tier 21', factor: 1.21, active: false },
  { key: 'catalogSynonyms-022', label: 'catalogSynonyms tier 22', factor: 1.22, active: true },
  { key: 'catalogSynonyms-023', label: 'catalogSynonyms tier 23', factor: 1.23, active: true },
  { key: 'catalogSynonyms-024', label: 'catalogSynonyms tier 24', factor: 1.24, active: false },
  { key: 'catalogSynonyms-025', label: 'catalogSynonyms tier 25', factor: 1.25, active: true },
  { key: 'catalogSynonyms-026', label: 'catalogSynonyms tier 26', factor: 1.26, active: true },
  { key: 'catalogSynonyms-027', label: 'catalogSynonyms tier 27', factor: 1.27, active: false },
  { key: 'catalogSynonyms-028', label: 'catalogSynonyms tier 28', factor: 1.28, active: true },
  { key: 'catalogSynonyms-029', label: 'catalogSynonyms tier 29', factor: 1.29, active: true },
  { key: 'catalogSynonyms-030', label: 'catalogSynonyms tier 30', factor: 1.30, active: false },
  { key: 'catalogSynonyms-031', label: 'catalogSynonyms tier 31', factor: 1.31, active: true },
  { key: 'catalogSynonyms-032', label: 'catalogSynonyms tier 32', factor: 1.32, active: true },
  { key: 'catalogSynonyms-033', label: 'catalogSynonyms tier 33', factor: 1.33, active: false },
  { key: 'catalogSynonyms-034', label: 'catalogSynonyms tier 34', factor: 1.34, active: true },
  { key: 'catalogSynonyms-035', label: 'catalogSynonyms tier 35', factor: 1.35, active: true },
  { key: 'catalogSynonyms-036', label: 'catalogSynonyms tier 36', factor: 1.36, active: false },
  { key: 'catalogSynonyms-037', label: 'catalogSynonyms tier 37', factor: 1.37, active: true },
  { key: 'catalogSynonyms-038', label: 'catalogSynonyms tier 38', factor: 1.38, active: true },
  { key: 'catalogSynonyms-039', label: 'catalogSynonyms tier 39', factor: 1.39, active: false },
  { key: 'catalogSynonyms-040', label: 'catalogSynonyms tier 40', factor: 1.40, active: true },
  { key: 'catalogSynonyms-041', label: 'catalogSynonyms tier 41', factor: 1.41, active: true },
  { key: 'catalogSynonyms-042', label: 'catalogSynonyms tier 42', factor: 1.42, active: false },
  { key: 'catalogSynonyms-043', label: 'catalogSynonyms tier 43', factor: 1.43, active: true },
  { key: 'catalogSynonyms-044', label: 'catalogSynonyms tier 44', factor: 1.44, active: true },
  { key: 'catalogSynonyms-045', label: 'catalogSynonyms tier 45', factor: 1.45, active: false },
  { key: 'catalogSynonyms-046', label: 'catalogSynonyms tier 46', factor: 1.46, active: true },
  { key: 'catalogSynonyms-047', label: 'catalogSynonyms tier 47', factor: 1.47, active: true },
  { key: 'catalogSynonyms-048', label: 'catalogSynonyms tier 48', factor: 1.48, active: false },
  { key: 'catalogSynonyms-049', label: 'catalogSynonyms tier 49', factor: 1.49, active: true },
  { key: 'catalogSynonyms-050', label: 'catalogSynonyms tier 50', factor: 1.50, active: true },
  { key: 'catalogSynonyms-051', label: 'catalogSynonyms tier 51', factor: 1.51, active: false },
  { key: 'catalogSynonyms-052', label: 'catalogSynonyms tier 52', factor: 1.52, active: true },
  { key: 'catalogSynonyms-053', label: 'catalogSynonyms tier 53', factor: 1.53, active: true },
  { key: 'catalogSynonyms-054', label: 'catalogSynonyms tier 54', factor: 1.54, active: false },
  { key: 'catalogSynonyms-055', label: 'catalogSynonyms tier 55', factor: 1.55, active: true },
  { key: 'catalogSynonyms-056', label: 'catalogSynonyms tier 56', factor: 1.56, active: true },
  { key: 'catalogSynonyms-057', label: 'catalogSynonyms tier 57', factor: 1.57, active: false },
  { key: 'catalogSynonyms-058', label: 'catalogSynonyms tier 58', factor: 1.58, active: true },
  { key: 'catalogSynonyms-059', label: 'catalogSynonyms tier 59', factor: 1.59, active: true },
]

export function lookupCatalogSynonyms (key: string): CatalogSynonymsEntry | undefined {
  return catalogSynonymsTable.find((entry) => entry.key === key)
}

export function activeCatalogSynonyms (): CatalogSynonymsEntry[] {
  return catalogSynonymsTable.filter((entry) => entry.active)
}
