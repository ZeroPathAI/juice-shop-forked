/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for channelMargins. No I/O, no user input.

export interface ChannelMarginsEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const channelMarginsTable: ChannelMarginsEntry[] = [
  { key: 'channelMargins-000', label: 'channelMargins tier 0', factor: 1.00, active: false },
  { key: 'channelMargins-001', label: 'channelMargins tier 1', factor: 1.01, active: true },
  { key: 'channelMargins-002', label: 'channelMargins tier 2', factor: 1.02, active: true },
  { key: 'channelMargins-003', label: 'channelMargins tier 3', factor: 1.03, active: false },
  { key: 'channelMargins-004', label: 'channelMargins tier 4', factor: 1.04, active: true },
  { key: 'channelMargins-005', label: 'channelMargins tier 5', factor: 1.05, active: true },
  { key: 'channelMargins-006', label: 'channelMargins tier 6', factor: 1.06, active: false },
  { key: 'channelMargins-007', label: 'channelMargins tier 7', factor: 1.07, active: true },
  { key: 'channelMargins-008', label: 'channelMargins tier 8', factor: 1.08, active: true },
  { key: 'channelMargins-009', label: 'channelMargins tier 9', factor: 1.09, active: false },
  { key: 'channelMargins-010', label: 'channelMargins tier 10', factor: 1.10, active: true },
  { key: 'channelMargins-011', label: 'channelMargins tier 11', factor: 1.11, active: true },
  { key: 'channelMargins-012', label: 'channelMargins tier 12', factor: 1.12, active: false },
  { key: 'channelMargins-013', label: 'channelMargins tier 13', factor: 1.13, active: true },
  { key: 'channelMargins-014', label: 'channelMargins tier 14', factor: 1.14, active: true },
  { key: 'channelMargins-015', label: 'channelMargins tier 15', factor: 1.15, active: false },
  { key: 'channelMargins-016', label: 'channelMargins tier 16', factor: 1.16, active: true },
  { key: 'channelMargins-017', label: 'channelMargins tier 17', factor: 1.17, active: true },
  { key: 'channelMargins-018', label: 'channelMargins tier 18', factor: 1.18, active: false },
  { key: 'channelMargins-019', label: 'channelMargins tier 19', factor: 1.19, active: true },
  { key: 'channelMargins-020', label: 'channelMargins tier 20', factor: 1.20, active: true },
  { key: 'channelMargins-021', label: 'channelMargins tier 21', factor: 1.21, active: false },
  { key: 'channelMargins-022', label: 'channelMargins tier 22', factor: 1.22, active: true },
  { key: 'channelMargins-023', label: 'channelMargins tier 23', factor: 1.23, active: true },
  { key: 'channelMargins-024', label: 'channelMargins tier 24', factor: 1.24, active: false },
  { key: 'channelMargins-025', label: 'channelMargins tier 25', factor: 1.25, active: true },
  { key: 'channelMargins-026', label: 'channelMargins tier 26', factor: 1.26, active: true },
  { key: 'channelMargins-027', label: 'channelMargins tier 27', factor: 1.27, active: false },
  { key: 'channelMargins-028', label: 'channelMargins tier 28', factor: 1.28, active: true },
  { key: 'channelMargins-029', label: 'channelMargins tier 29', factor: 1.29, active: true },
  { key: 'channelMargins-030', label: 'channelMargins tier 30', factor: 1.30, active: false },
  { key: 'channelMargins-031', label: 'channelMargins tier 31', factor: 1.31, active: true },
  { key: 'channelMargins-032', label: 'channelMargins tier 32', factor: 1.32, active: true },
  { key: 'channelMargins-033', label: 'channelMargins tier 33', factor: 1.33, active: false },
  { key: 'channelMargins-034', label: 'channelMargins tier 34', factor: 1.34, active: true },
  { key: 'channelMargins-035', label: 'channelMargins tier 35', factor: 1.35, active: true },
  { key: 'channelMargins-036', label: 'channelMargins tier 36', factor: 1.36, active: false },
  { key: 'channelMargins-037', label: 'channelMargins tier 37', factor: 1.37, active: true },
  { key: 'channelMargins-038', label: 'channelMargins tier 38', factor: 1.38, active: true },
  { key: 'channelMargins-039', label: 'channelMargins tier 39', factor: 1.39, active: false },
  { key: 'channelMargins-040', label: 'channelMargins tier 40', factor: 1.40, active: true },
  { key: 'channelMargins-041', label: 'channelMargins tier 41', factor: 1.41, active: true },
  { key: 'channelMargins-042', label: 'channelMargins tier 42', factor: 1.42, active: false },
  { key: 'channelMargins-043', label: 'channelMargins tier 43', factor: 1.43, active: true },
  { key: 'channelMargins-044', label: 'channelMargins tier 44', factor: 1.44, active: true },
  { key: 'channelMargins-045', label: 'channelMargins tier 45', factor: 1.45, active: false },
  { key: 'channelMargins-046', label: 'channelMargins tier 46', factor: 1.46, active: true },
  { key: 'channelMargins-047', label: 'channelMargins tier 47', factor: 1.47, active: true },
  { key: 'channelMargins-048', label: 'channelMargins tier 48', factor: 1.48, active: false },
  { key: 'channelMargins-049', label: 'channelMargins tier 49', factor: 1.49, active: true },
  { key: 'channelMargins-050', label: 'channelMargins tier 50', factor: 1.50, active: true },
  { key: 'channelMargins-051', label: 'channelMargins tier 51', factor: 1.51, active: false },
  { key: 'channelMargins-052', label: 'channelMargins tier 52', factor: 1.52, active: true },
  { key: 'channelMargins-053', label: 'channelMargins tier 53', factor: 1.53, active: true },
  { key: 'channelMargins-054', label: 'channelMargins tier 54', factor: 1.54, active: false },
  { key: 'channelMargins-055', label: 'channelMargins tier 55', factor: 1.55, active: true },
  { key: 'channelMargins-056', label: 'channelMargins tier 56', factor: 1.56, active: true },
  { key: 'channelMargins-057', label: 'channelMargins tier 57', factor: 1.57, active: false },
  { key: 'channelMargins-058', label: 'channelMargins tier 58', factor: 1.58, active: true },
  { key: 'channelMargins-059', label: 'channelMargins tier 59', factor: 1.59, active: true },
]

export function lookupChannelMargins (key: string): ChannelMarginsEntry | undefined {
  return channelMarginsTable.find((entry) => entry.key === key)
}

export function activeChannelMargins (): ChannelMarginsEntry[] {
  return channelMarginsTable.filter((entry) => entry.active)
}
