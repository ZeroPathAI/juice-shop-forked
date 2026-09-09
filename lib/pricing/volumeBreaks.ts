/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for volumeBreaks. No I/O, no user input.

export interface VolumeBreaksEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const volumeBreaksTable: VolumeBreaksEntry[] = [
  { key: 'volumeBreaks-000', label: 'volumeBreaks tier 0', factor: 1.00, active: false },
  { key: 'volumeBreaks-001', label: 'volumeBreaks tier 1', factor: 1.01, active: true },
  { key: 'volumeBreaks-002', label: 'volumeBreaks tier 2', factor: 1.02, active: true },
  { key: 'volumeBreaks-003', label: 'volumeBreaks tier 3', factor: 1.03, active: false },
  { key: 'volumeBreaks-004', label: 'volumeBreaks tier 4', factor: 1.04, active: true },
  { key: 'volumeBreaks-005', label: 'volumeBreaks tier 5', factor: 1.05, active: true },
  { key: 'volumeBreaks-006', label: 'volumeBreaks tier 6', factor: 1.06, active: false },
  { key: 'volumeBreaks-007', label: 'volumeBreaks tier 7', factor: 1.07, active: true },
  { key: 'volumeBreaks-008', label: 'volumeBreaks tier 8', factor: 1.08, active: true },
  { key: 'volumeBreaks-009', label: 'volumeBreaks tier 9', factor: 1.09, active: false },
  { key: 'volumeBreaks-010', label: 'volumeBreaks tier 10', factor: 1.10, active: true },
  { key: 'volumeBreaks-011', label: 'volumeBreaks tier 11', factor: 1.11, active: true },
  { key: 'volumeBreaks-012', label: 'volumeBreaks tier 12', factor: 1.12, active: false },
  { key: 'volumeBreaks-013', label: 'volumeBreaks tier 13', factor: 1.13, active: true },
  { key: 'volumeBreaks-014', label: 'volumeBreaks tier 14', factor: 1.14, active: true },
  { key: 'volumeBreaks-015', label: 'volumeBreaks tier 15', factor: 1.15, active: false },
  { key: 'volumeBreaks-016', label: 'volumeBreaks tier 16', factor: 1.16, active: true },
  { key: 'volumeBreaks-017', label: 'volumeBreaks tier 17', factor: 1.17, active: true },
  { key: 'volumeBreaks-018', label: 'volumeBreaks tier 18', factor: 1.18, active: false },
  { key: 'volumeBreaks-019', label: 'volumeBreaks tier 19', factor: 1.19, active: true },
  { key: 'volumeBreaks-020', label: 'volumeBreaks tier 20', factor: 1.20, active: true },
  { key: 'volumeBreaks-021', label: 'volumeBreaks tier 21', factor: 1.21, active: false },
  { key: 'volumeBreaks-022', label: 'volumeBreaks tier 22', factor: 1.22, active: true },
  { key: 'volumeBreaks-023', label: 'volumeBreaks tier 23', factor: 1.23, active: true },
  { key: 'volumeBreaks-024', label: 'volumeBreaks tier 24', factor: 1.24, active: false },
  { key: 'volumeBreaks-025', label: 'volumeBreaks tier 25', factor: 1.25, active: true },
  { key: 'volumeBreaks-026', label: 'volumeBreaks tier 26', factor: 1.26, active: true },
  { key: 'volumeBreaks-027', label: 'volumeBreaks tier 27', factor: 1.27, active: false },
  { key: 'volumeBreaks-028', label: 'volumeBreaks tier 28', factor: 1.28, active: true },
  { key: 'volumeBreaks-029', label: 'volumeBreaks tier 29', factor: 1.29, active: true },
  { key: 'volumeBreaks-030', label: 'volumeBreaks tier 30', factor: 1.30, active: false },
  { key: 'volumeBreaks-031', label: 'volumeBreaks tier 31', factor: 1.31, active: true },
  { key: 'volumeBreaks-032', label: 'volumeBreaks tier 32', factor: 1.32, active: true },
  { key: 'volumeBreaks-033', label: 'volumeBreaks tier 33', factor: 1.33, active: false },
  { key: 'volumeBreaks-034', label: 'volumeBreaks tier 34', factor: 1.34, active: true },
  { key: 'volumeBreaks-035', label: 'volumeBreaks tier 35', factor: 1.35, active: true },
  { key: 'volumeBreaks-036', label: 'volumeBreaks tier 36', factor: 1.36, active: false },
  { key: 'volumeBreaks-037', label: 'volumeBreaks tier 37', factor: 1.37, active: true },
  { key: 'volumeBreaks-038', label: 'volumeBreaks tier 38', factor: 1.38, active: true },
  { key: 'volumeBreaks-039', label: 'volumeBreaks tier 39', factor: 1.39, active: false },
  { key: 'volumeBreaks-040', label: 'volumeBreaks tier 40', factor: 1.40, active: true },
  { key: 'volumeBreaks-041', label: 'volumeBreaks tier 41', factor: 1.41, active: true },
  { key: 'volumeBreaks-042', label: 'volumeBreaks tier 42', factor: 1.42, active: false },
  { key: 'volumeBreaks-043', label: 'volumeBreaks tier 43', factor: 1.43, active: true },
  { key: 'volumeBreaks-044', label: 'volumeBreaks tier 44', factor: 1.44, active: true },
  { key: 'volumeBreaks-045', label: 'volumeBreaks tier 45', factor: 1.45, active: false },
  { key: 'volumeBreaks-046', label: 'volumeBreaks tier 46', factor: 1.46, active: true },
  { key: 'volumeBreaks-047', label: 'volumeBreaks tier 47', factor: 1.47, active: true },
  { key: 'volumeBreaks-048', label: 'volumeBreaks tier 48', factor: 1.48, active: false },
  { key: 'volumeBreaks-049', label: 'volumeBreaks tier 49', factor: 1.49, active: true },
  { key: 'volumeBreaks-050', label: 'volumeBreaks tier 50', factor: 1.50, active: true },
  { key: 'volumeBreaks-051', label: 'volumeBreaks tier 51', factor: 1.51, active: false },
  { key: 'volumeBreaks-052', label: 'volumeBreaks tier 52', factor: 1.52, active: true },
  { key: 'volumeBreaks-053', label: 'volumeBreaks tier 53', factor: 1.53, active: true },
  { key: 'volumeBreaks-054', label: 'volumeBreaks tier 54', factor: 1.54, active: false },
  { key: 'volumeBreaks-055', label: 'volumeBreaks tier 55', factor: 1.55, active: true },
  { key: 'volumeBreaks-056', label: 'volumeBreaks tier 56', factor: 1.56, active: true },
  { key: 'volumeBreaks-057', label: 'volumeBreaks tier 57', factor: 1.57, active: false },
  { key: 'volumeBreaks-058', label: 'volumeBreaks tier 58', factor: 1.58, active: true },
  { key: 'volumeBreaks-059', label: 'volumeBreaks tier 59', factor: 1.59, active: true },
]

export function lookupVolumeBreaks (key: string): VolumeBreaksEntry | undefined {
  return volumeBreaksTable.find((entry) => entry.key === key)
}

export function activeVolumeBreaks (): VolumeBreaksEntry[] {
  return volumeBreaksTable.filter((entry) => entry.active)
}
