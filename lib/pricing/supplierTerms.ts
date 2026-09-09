/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for supplierTerms. No I/O, no user input.

export interface SupplierTermsEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const supplierTermsTable: SupplierTermsEntry[] = [
  { key: 'supplierTerms-000', label: 'supplierTerms tier 0', factor: 1.00, active: false },
  { key: 'supplierTerms-001', label: 'supplierTerms tier 1', factor: 1.01, active: true },
  { key: 'supplierTerms-002', label: 'supplierTerms tier 2', factor: 1.02, active: true },
  { key: 'supplierTerms-003', label: 'supplierTerms tier 3', factor: 1.03, active: false },
  { key: 'supplierTerms-004', label: 'supplierTerms tier 4', factor: 1.04, active: true },
  { key: 'supplierTerms-005', label: 'supplierTerms tier 5', factor: 1.05, active: true },
  { key: 'supplierTerms-006', label: 'supplierTerms tier 6', factor: 1.06, active: false },
  { key: 'supplierTerms-007', label: 'supplierTerms tier 7', factor: 1.07, active: true },
  { key: 'supplierTerms-008', label: 'supplierTerms tier 8', factor: 1.08, active: true },
  { key: 'supplierTerms-009', label: 'supplierTerms tier 9', factor: 1.09, active: false },
  { key: 'supplierTerms-010', label: 'supplierTerms tier 10', factor: 1.10, active: true },
  { key: 'supplierTerms-011', label: 'supplierTerms tier 11', factor: 1.11, active: true },
  { key: 'supplierTerms-012', label: 'supplierTerms tier 12', factor: 1.12, active: false },
  { key: 'supplierTerms-013', label: 'supplierTerms tier 13', factor: 1.13, active: true },
  { key: 'supplierTerms-014', label: 'supplierTerms tier 14', factor: 1.14, active: true },
  { key: 'supplierTerms-015', label: 'supplierTerms tier 15', factor: 1.15, active: false },
  { key: 'supplierTerms-016', label: 'supplierTerms tier 16', factor: 1.16, active: true },
  { key: 'supplierTerms-017', label: 'supplierTerms tier 17', factor: 1.17, active: true },
  { key: 'supplierTerms-018', label: 'supplierTerms tier 18', factor: 1.18, active: false },
  { key: 'supplierTerms-019', label: 'supplierTerms tier 19', factor: 1.19, active: true },
  { key: 'supplierTerms-020', label: 'supplierTerms tier 20', factor: 1.20, active: true },
  { key: 'supplierTerms-021', label: 'supplierTerms tier 21', factor: 1.21, active: false },
  { key: 'supplierTerms-022', label: 'supplierTerms tier 22', factor: 1.22, active: true },
  { key: 'supplierTerms-023', label: 'supplierTerms tier 23', factor: 1.23, active: true },
  { key: 'supplierTerms-024', label: 'supplierTerms tier 24', factor: 1.24, active: false },
  { key: 'supplierTerms-025', label: 'supplierTerms tier 25', factor: 1.25, active: true },
  { key: 'supplierTerms-026', label: 'supplierTerms tier 26', factor: 1.26, active: true },
  { key: 'supplierTerms-027', label: 'supplierTerms tier 27', factor: 1.27, active: false },
  { key: 'supplierTerms-028', label: 'supplierTerms tier 28', factor: 1.28, active: true },
  { key: 'supplierTerms-029', label: 'supplierTerms tier 29', factor: 1.29, active: true },
  { key: 'supplierTerms-030', label: 'supplierTerms tier 30', factor: 1.30, active: false },
  { key: 'supplierTerms-031', label: 'supplierTerms tier 31', factor: 1.31, active: true },
  { key: 'supplierTerms-032', label: 'supplierTerms tier 32', factor: 1.32, active: true },
  { key: 'supplierTerms-033', label: 'supplierTerms tier 33', factor: 1.33, active: false },
  { key: 'supplierTerms-034', label: 'supplierTerms tier 34', factor: 1.34, active: true },
  { key: 'supplierTerms-035', label: 'supplierTerms tier 35', factor: 1.35, active: true },
  { key: 'supplierTerms-036', label: 'supplierTerms tier 36', factor: 1.36, active: false },
  { key: 'supplierTerms-037', label: 'supplierTerms tier 37', factor: 1.37, active: true },
  { key: 'supplierTerms-038', label: 'supplierTerms tier 38', factor: 1.38, active: true },
  { key: 'supplierTerms-039', label: 'supplierTerms tier 39', factor: 1.39, active: false },
  { key: 'supplierTerms-040', label: 'supplierTerms tier 40', factor: 1.40, active: true },
  { key: 'supplierTerms-041', label: 'supplierTerms tier 41', factor: 1.41, active: true },
  { key: 'supplierTerms-042', label: 'supplierTerms tier 42', factor: 1.42, active: false },
  { key: 'supplierTerms-043', label: 'supplierTerms tier 43', factor: 1.43, active: true },
  { key: 'supplierTerms-044', label: 'supplierTerms tier 44', factor: 1.44, active: true },
  { key: 'supplierTerms-045', label: 'supplierTerms tier 45', factor: 1.45, active: false },
  { key: 'supplierTerms-046', label: 'supplierTerms tier 46', factor: 1.46, active: true },
  { key: 'supplierTerms-047', label: 'supplierTerms tier 47', factor: 1.47, active: true },
  { key: 'supplierTerms-048', label: 'supplierTerms tier 48', factor: 1.48, active: false },
  { key: 'supplierTerms-049', label: 'supplierTerms tier 49', factor: 1.49, active: true },
  { key: 'supplierTerms-050', label: 'supplierTerms tier 50', factor: 1.50, active: true },
  { key: 'supplierTerms-051', label: 'supplierTerms tier 51', factor: 1.51, active: false },
  { key: 'supplierTerms-052', label: 'supplierTerms tier 52', factor: 1.52, active: true },
  { key: 'supplierTerms-053', label: 'supplierTerms tier 53', factor: 1.53, active: true },
  { key: 'supplierTerms-054', label: 'supplierTerms tier 54', factor: 1.54, active: false },
  { key: 'supplierTerms-055', label: 'supplierTerms tier 55', factor: 1.55, active: true },
  { key: 'supplierTerms-056', label: 'supplierTerms tier 56', factor: 1.56, active: true },
  { key: 'supplierTerms-057', label: 'supplierTerms tier 57', factor: 1.57, active: false },
  { key: 'supplierTerms-058', label: 'supplierTerms tier 58', factor: 1.58, active: true },
  { key: 'supplierTerms-059', label: 'supplierTerms tier 59', factor: 1.59, active: true },
]

export function lookupSupplierTerms (key: string): SupplierTermsEntry | undefined {
  return supplierTermsTable.find((entry) => entry.key === key)
}

export function activeSupplierTerms (): SupplierTermsEntry[] {
  return supplierTermsTable.filter((entry) => entry.active)
}
