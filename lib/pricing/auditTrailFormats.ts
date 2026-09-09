/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for auditTrailFormats. No I/O, no user input.

export interface AuditTrailFormatsEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const auditTrailFormatsTable: AuditTrailFormatsEntry[] = [
  { key: 'auditTrailFormats-000', label: 'auditTrailFormats tier 0', factor: 1.00, active: false },
  { key: 'auditTrailFormats-001', label: 'auditTrailFormats tier 1', factor: 1.01, active: true },
  { key: 'auditTrailFormats-002', label: 'auditTrailFormats tier 2', factor: 1.02, active: true },
  { key: 'auditTrailFormats-003', label: 'auditTrailFormats tier 3', factor: 1.03, active: false },
  { key: 'auditTrailFormats-004', label: 'auditTrailFormats tier 4', factor: 1.04, active: true },
  { key: 'auditTrailFormats-005', label: 'auditTrailFormats tier 5', factor: 1.05, active: true },
  { key: 'auditTrailFormats-006', label: 'auditTrailFormats tier 6', factor: 1.06, active: false },
  { key: 'auditTrailFormats-007', label: 'auditTrailFormats tier 7', factor: 1.07, active: true },
  { key: 'auditTrailFormats-008', label: 'auditTrailFormats tier 8', factor: 1.08, active: true },
  { key: 'auditTrailFormats-009', label: 'auditTrailFormats tier 9', factor: 1.09, active: false },
  { key: 'auditTrailFormats-010', label: 'auditTrailFormats tier 10', factor: 1.10, active: true },
  { key: 'auditTrailFormats-011', label: 'auditTrailFormats tier 11', factor: 1.11, active: true },
  { key: 'auditTrailFormats-012', label: 'auditTrailFormats tier 12', factor: 1.12, active: false },
  { key: 'auditTrailFormats-013', label: 'auditTrailFormats tier 13', factor: 1.13, active: true },
  { key: 'auditTrailFormats-014', label: 'auditTrailFormats tier 14', factor: 1.14, active: true },
  { key: 'auditTrailFormats-015', label: 'auditTrailFormats tier 15', factor: 1.15, active: false },
  { key: 'auditTrailFormats-016', label: 'auditTrailFormats tier 16', factor: 1.16, active: true },
  { key: 'auditTrailFormats-017', label: 'auditTrailFormats tier 17', factor: 1.17, active: true },
  { key: 'auditTrailFormats-018', label: 'auditTrailFormats tier 18', factor: 1.18, active: false },
  { key: 'auditTrailFormats-019', label: 'auditTrailFormats tier 19', factor: 1.19, active: true },
  { key: 'auditTrailFormats-020', label: 'auditTrailFormats tier 20', factor: 1.20, active: true },
  { key: 'auditTrailFormats-021', label: 'auditTrailFormats tier 21', factor: 1.21, active: false },
  { key: 'auditTrailFormats-022', label: 'auditTrailFormats tier 22', factor: 1.22, active: true },
  { key: 'auditTrailFormats-023', label: 'auditTrailFormats tier 23', factor: 1.23, active: true },
  { key: 'auditTrailFormats-024', label: 'auditTrailFormats tier 24', factor: 1.24, active: false },
  { key: 'auditTrailFormats-025', label: 'auditTrailFormats tier 25', factor: 1.25, active: true },
  { key: 'auditTrailFormats-026', label: 'auditTrailFormats tier 26', factor: 1.26, active: true },
  { key: 'auditTrailFormats-027', label: 'auditTrailFormats tier 27', factor: 1.27, active: false },
  { key: 'auditTrailFormats-028', label: 'auditTrailFormats tier 28', factor: 1.28, active: true },
  { key: 'auditTrailFormats-029', label: 'auditTrailFormats tier 29', factor: 1.29, active: true },
  { key: 'auditTrailFormats-030', label: 'auditTrailFormats tier 30', factor: 1.30, active: false },
  { key: 'auditTrailFormats-031', label: 'auditTrailFormats tier 31', factor: 1.31, active: true },
  { key: 'auditTrailFormats-032', label: 'auditTrailFormats tier 32', factor: 1.32, active: true },
  { key: 'auditTrailFormats-033', label: 'auditTrailFormats tier 33', factor: 1.33, active: false },
  { key: 'auditTrailFormats-034', label: 'auditTrailFormats tier 34', factor: 1.34, active: true },
  { key: 'auditTrailFormats-035', label: 'auditTrailFormats tier 35', factor: 1.35, active: true },
  { key: 'auditTrailFormats-036', label: 'auditTrailFormats tier 36', factor: 1.36, active: false },
  { key: 'auditTrailFormats-037', label: 'auditTrailFormats tier 37', factor: 1.37, active: true },
  { key: 'auditTrailFormats-038', label: 'auditTrailFormats tier 38', factor: 1.38, active: true },
  { key: 'auditTrailFormats-039', label: 'auditTrailFormats tier 39', factor: 1.39, active: false },
  { key: 'auditTrailFormats-040', label: 'auditTrailFormats tier 40', factor: 1.40, active: true },
  { key: 'auditTrailFormats-041', label: 'auditTrailFormats tier 41', factor: 1.41, active: true },
  { key: 'auditTrailFormats-042', label: 'auditTrailFormats tier 42', factor: 1.42, active: false },
  { key: 'auditTrailFormats-043', label: 'auditTrailFormats tier 43', factor: 1.43, active: true },
  { key: 'auditTrailFormats-044', label: 'auditTrailFormats tier 44', factor: 1.44, active: true },
  { key: 'auditTrailFormats-045', label: 'auditTrailFormats tier 45', factor: 1.45, active: false },
  { key: 'auditTrailFormats-046', label: 'auditTrailFormats tier 46', factor: 1.46, active: true },
  { key: 'auditTrailFormats-047', label: 'auditTrailFormats tier 47', factor: 1.47, active: true },
  { key: 'auditTrailFormats-048', label: 'auditTrailFormats tier 48', factor: 1.48, active: false },
  { key: 'auditTrailFormats-049', label: 'auditTrailFormats tier 49', factor: 1.49, active: true },
  { key: 'auditTrailFormats-050', label: 'auditTrailFormats tier 50', factor: 1.50, active: true },
  { key: 'auditTrailFormats-051', label: 'auditTrailFormats tier 51', factor: 1.51, active: false },
  { key: 'auditTrailFormats-052', label: 'auditTrailFormats tier 52', factor: 1.52, active: true },
  { key: 'auditTrailFormats-053', label: 'auditTrailFormats tier 53', factor: 1.53, active: true },
  { key: 'auditTrailFormats-054', label: 'auditTrailFormats tier 54', factor: 1.54, active: false },
  { key: 'auditTrailFormats-055', label: 'auditTrailFormats tier 55', factor: 1.55, active: true },
  { key: 'auditTrailFormats-056', label: 'auditTrailFormats tier 56', factor: 1.56, active: true },
  { key: 'auditTrailFormats-057', label: 'auditTrailFormats tier 57', factor: 1.57, active: false },
  { key: 'auditTrailFormats-058', label: 'auditTrailFormats tier 58', factor: 1.58, active: true },
  { key: 'auditTrailFormats-059', label: 'auditTrailFormats tier 59', factor: 1.59, active: true },
]

export function lookupAuditTrailFormats (key: string): AuditTrailFormatsEntry | undefined {
  return auditTrailFormatsTable.find((entry) => entry.key === key)
}

export function activeAuditTrailFormats (): AuditTrailFormatsEntry[] {
  return auditTrailFormatsTable.filter((entry) => entry.active)
}
