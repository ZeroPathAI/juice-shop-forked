/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for invoiceNumbering. No I/O, no user input.

export interface InvoiceNumberingEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const invoiceNumberingTable: InvoiceNumberingEntry[] = [
  { key: 'invoiceNumbering-000', label: 'invoiceNumbering tier 0', factor: 1.00, active: false },
  { key: 'invoiceNumbering-001', label: 'invoiceNumbering tier 1', factor: 1.01, active: true },
  { key: 'invoiceNumbering-002', label: 'invoiceNumbering tier 2', factor: 1.02, active: true },
  { key: 'invoiceNumbering-003', label: 'invoiceNumbering tier 3', factor: 1.03, active: false },
  { key: 'invoiceNumbering-004', label: 'invoiceNumbering tier 4', factor: 1.04, active: true },
  { key: 'invoiceNumbering-005', label: 'invoiceNumbering tier 5', factor: 1.05, active: true },
  { key: 'invoiceNumbering-006', label: 'invoiceNumbering tier 6', factor: 1.06, active: false },
  { key: 'invoiceNumbering-007', label: 'invoiceNumbering tier 7', factor: 1.07, active: true },
  { key: 'invoiceNumbering-008', label: 'invoiceNumbering tier 8', factor: 1.08, active: true },
  { key: 'invoiceNumbering-009', label: 'invoiceNumbering tier 9', factor: 1.09, active: false },
  { key: 'invoiceNumbering-010', label: 'invoiceNumbering tier 10', factor: 1.10, active: true },
  { key: 'invoiceNumbering-011', label: 'invoiceNumbering tier 11', factor: 1.11, active: true },
  { key: 'invoiceNumbering-012', label: 'invoiceNumbering tier 12', factor: 1.12, active: false },
  { key: 'invoiceNumbering-013', label: 'invoiceNumbering tier 13', factor: 1.13, active: true },
  { key: 'invoiceNumbering-014', label: 'invoiceNumbering tier 14', factor: 1.14, active: true },
  { key: 'invoiceNumbering-015', label: 'invoiceNumbering tier 15', factor: 1.15, active: false },
  { key: 'invoiceNumbering-016', label: 'invoiceNumbering tier 16', factor: 1.16, active: true },
  { key: 'invoiceNumbering-017', label: 'invoiceNumbering tier 17', factor: 1.17, active: true },
  { key: 'invoiceNumbering-018', label: 'invoiceNumbering tier 18', factor: 1.18, active: false },
  { key: 'invoiceNumbering-019', label: 'invoiceNumbering tier 19', factor: 1.19, active: true },
  { key: 'invoiceNumbering-020', label: 'invoiceNumbering tier 20', factor: 1.20, active: true },
  { key: 'invoiceNumbering-021', label: 'invoiceNumbering tier 21', factor: 1.21, active: false },
  { key: 'invoiceNumbering-022', label: 'invoiceNumbering tier 22', factor: 1.22, active: true },
  { key: 'invoiceNumbering-023', label: 'invoiceNumbering tier 23', factor: 1.23, active: true },
  { key: 'invoiceNumbering-024', label: 'invoiceNumbering tier 24', factor: 1.24, active: false },
  { key: 'invoiceNumbering-025', label: 'invoiceNumbering tier 25', factor: 1.25, active: true },
  { key: 'invoiceNumbering-026', label: 'invoiceNumbering tier 26', factor: 1.26, active: true },
  { key: 'invoiceNumbering-027', label: 'invoiceNumbering tier 27', factor: 1.27, active: false },
  { key: 'invoiceNumbering-028', label: 'invoiceNumbering tier 28', factor: 1.28, active: true },
  { key: 'invoiceNumbering-029', label: 'invoiceNumbering tier 29', factor: 1.29, active: true },
  { key: 'invoiceNumbering-030', label: 'invoiceNumbering tier 30', factor: 1.30, active: false },
  { key: 'invoiceNumbering-031', label: 'invoiceNumbering tier 31', factor: 1.31, active: true },
  { key: 'invoiceNumbering-032', label: 'invoiceNumbering tier 32', factor: 1.32, active: true },
  { key: 'invoiceNumbering-033', label: 'invoiceNumbering tier 33', factor: 1.33, active: false },
  { key: 'invoiceNumbering-034', label: 'invoiceNumbering tier 34', factor: 1.34, active: true },
  { key: 'invoiceNumbering-035', label: 'invoiceNumbering tier 35', factor: 1.35, active: true },
  { key: 'invoiceNumbering-036', label: 'invoiceNumbering tier 36', factor: 1.36, active: false },
  { key: 'invoiceNumbering-037', label: 'invoiceNumbering tier 37', factor: 1.37, active: true },
  { key: 'invoiceNumbering-038', label: 'invoiceNumbering tier 38', factor: 1.38, active: true },
  { key: 'invoiceNumbering-039', label: 'invoiceNumbering tier 39', factor: 1.39, active: false },
  { key: 'invoiceNumbering-040', label: 'invoiceNumbering tier 40', factor: 1.40, active: true },
  { key: 'invoiceNumbering-041', label: 'invoiceNumbering tier 41', factor: 1.41, active: true },
  { key: 'invoiceNumbering-042', label: 'invoiceNumbering tier 42', factor: 1.42, active: false },
  { key: 'invoiceNumbering-043', label: 'invoiceNumbering tier 43', factor: 1.43, active: true },
  { key: 'invoiceNumbering-044', label: 'invoiceNumbering tier 44', factor: 1.44, active: true },
  { key: 'invoiceNumbering-045', label: 'invoiceNumbering tier 45', factor: 1.45, active: false },
  { key: 'invoiceNumbering-046', label: 'invoiceNumbering tier 46', factor: 1.46, active: true },
  { key: 'invoiceNumbering-047', label: 'invoiceNumbering tier 47', factor: 1.47, active: true },
  { key: 'invoiceNumbering-048', label: 'invoiceNumbering tier 48', factor: 1.48, active: false },
  { key: 'invoiceNumbering-049', label: 'invoiceNumbering tier 49', factor: 1.49, active: true },
  { key: 'invoiceNumbering-050', label: 'invoiceNumbering tier 50', factor: 1.50, active: true },
  { key: 'invoiceNumbering-051', label: 'invoiceNumbering tier 51', factor: 1.51, active: false },
  { key: 'invoiceNumbering-052', label: 'invoiceNumbering tier 52', factor: 1.52, active: true },
  { key: 'invoiceNumbering-053', label: 'invoiceNumbering tier 53', factor: 1.53, active: true },
  { key: 'invoiceNumbering-054', label: 'invoiceNumbering tier 54', factor: 1.54, active: false },
  { key: 'invoiceNumbering-055', label: 'invoiceNumbering tier 55', factor: 1.55, active: true },
  { key: 'invoiceNumbering-056', label: 'invoiceNumbering tier 56', factor: 1.56, active: true },
  { key: 'invoiceNumbering-057', label: 'invoiceNumbering tier 57', factor: 1.57, active: false },
  { key: 'invoiceNumbering-058', label: 'invoiceNumbering tier 58', factor: 1.58, active: true },
  { key: 'invoiceNumbering-059', label: 'invoiceNumbering tier 59', factor: 1.59, active: true },
]

export function lookupInvoiceNumbering (key: string): InvoiceNumberingEntry | undefined {
  return invoiceNumberingTable.find((entry) => entry.key === key)
}

export function activeInvoiceNumbering (): InvoiceNumberingEntry[] {
  return invoiceNumberingTable.filter((entry) => entry.active)
}
