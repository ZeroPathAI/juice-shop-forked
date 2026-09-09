/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Pure lookup tables and helpers for warehouseZones. No I/O, no user input.

export interface WarehouseZonesEntry {
  key: string
  label: string
  factor: number
  active: boolean
}

export const warehouseZonesTable: WarehouseZonesEntry[] = [
  { key: 'warehouseZones-000', label: 'warehouseZones tier 0', factor: 1.00, active: false },
  { key: 'warehouseZones-001', label: 'warehouseZones tier 1', factor: 1.01, active: true },
  { key: 'warehouseZones-002', label: 'warehouseZones tier 2', factor: 1.02, active: true },
  { key: 'warehouseZones-003', label: 'warehouseZones tier 3', factor: 1.03, active: false },
  { key: 'warehouseZones-004', label: 'warehouseZones tier 4', factor: 1.04, active: true },
  { key: 'warehouseZones-005', label: 'warehouseZones tier 5', factor: 1.05, active: true },
  { key: 'warehouseZones-006', label: 'warehouseZones tier 6', factor: 1.06, active: false },
  { key: 'warehouseZones-007', label: 'warehouseZones tier 7', factor: 1.07, active: true },
  { key: 'warehouseZones-008', label: 'warehouseZones tier 8', factor: 1.08, active: true },
  { key: 'warehouseZones-009', label: 'warehouseZones tier 9', factor: 1.09, active: false },
  { key: 'warehouseZones-010', label: 'warehouseZones tier 10', factor: 1.10, active: true },
  { key: 'warehouseZones-011', label: 'warehouseZones tier 11', factor: 1.11, active: true },
  { key: 'warehouseZones-012', label: 'warehouseZones tier 12', factor: 1.12, active: false },
  { key: 'warehouseZones-013', label: 'warehouseZones tier 13', factor: 1.13, active: true },
  { key: 'warehouseZones-014', label: 'warehouseZones tier 14', factor: 1.14, active: true },
  { key: 'warehouseZones-015', label: 'warehouseZones tier 15', factor: 1.15, active: false },
  { key: 'warehouseZones-016', label: 'warehouseZones tier 16', factor: 1.16, active: true },
  { key: 'warehouseZones-017', label: 'warehouseZones tier 17', factor: 1.17, active: true },
  { key: 'warehouseZones-018', label: 'warehouseZones tier 18', factor: 1.18, active: false },
  { key: 'warehouseZones-019', label: 'warehouseZones tier 19', factor: 1.19, active: true },
  { key: 'warehouseZones-020', label: 'warehouseZones tier 20', factor: 1.20, active: true },
  { key: 'warehouseZones-021', label: 'warehouseZones tier 21', factor: 1.21, active: false },
  { key: 'warehouseZones-022', label: 'warehouseZones tier 22', factor: 1.22, active: true },
  { key: 'warehouseZones-023', label: 'warehouseZones tier 23', factor: 1.23, active: true },
  { key: 'warehouseZones-024', label: 'warehouseZones tier 24', factor: 1.24, active: false },
  { key: 'warehouseZones-025', label: 'warehouseZones tier 25', factor: 1.25, active: true },
  { key: 'warehouseZones-026', label: 'warehouseZones tier 26', factor: 1.26, active: true },
  { key: 'warehouseZones-027', label: 'warehouseZones tier 27', factor: 1.27, active: false },
  { key: 'warehouseZones-028', label: 'warehouseZones tier 28', factor: 1.28, active: true },
  { key: 'warehouseZones-029', label: 'warehouseZones tier 29', factor: 1.29, active: true },
  { key: 'warehouseZones-030', label: 'warehouseZones tier 30', factor: 1.30, active: false },
  { key: 'warehouseZones-031', label: 'warehouseZones tier 31', factor: 1.31, active: true },
  { key: 'warehouseZones-032', label: 'warehouseZones tier 32', factor: 1.32, active: true },
  { key: 'warehouseZones-033', label: 'warehouseZones tier 33', factor: 1.33, active: false },
  { key: 'warehouseZones-034', label: 'warehouseZones tier 34', factor: 1.34, active: true },
  { key: 'warehouseZones-035', label: 'warehouseZones tier 35', factor: 1.35, active: true },
  { key: 'warehouseZones-036', label: 'warehouseZones tier 36', factor: 1.36, active: false },
  { key: 'warehouseZones-037', label: 'warehouseZones tier 37', factor: 1.37, active: true },
  { key: 'warehouseZones-038', label: 'warehouseZones tier 38', factor: 1.38, active: true },
  { key: 'warehouseZones-039', label: 'warehouseZones tier 39', factor: 1.39, active: false },
  { key: 'warehouseZones-040', label: 'warehouseZones tier 40', factor: 1.40, active: true },
  { key: 'warehouseZones-041', label: 'warehouseZones tier 41', factor: 1.41, active: true },
  { key: 'warehouseZones-042', label: 'warehouseZones tier 42', factor: 1.42, active: false },
  { key: 'warehouseZones-043', label: 'warehouseZones tier 43', factor: 1.43, active: true },
  { key: 'warehouseZones-044', label: 'warehouseZones tier 44', factor: 1.44, active: true },
  { key: 'warehouseZones-045', label: 'warehouseZones tier 45', factor: 1.45, active: false },
  { key: 'warehouseZones-046', label: 'warehouseZones tier 46', factor: 1.46, active: true },
  { key: 'warehouseZones-047', label: 'warehouseZones tier 47', factor: 1.47, active: true },
  { key: 'warehouseZones-048', label: 'warehouseZones tier 48', factor: 1.48, active: false },
  { key: 'warehouseZones-049', label: 'warehouseZones tier 49', factor: 1.49, active: true },
  { key: 'warehouseZones-050', label: 'warehouseZones tier 50', factor: 1.50, active: true },
  { key: 'warehouseZones-051', label: 'warehouseZones tier 51', factor: 1.51, active: false },
  { key: 'warehouseZones-052', label: 'warehouseZones tier 52', factor: 1.52, active: true },
  { key: 'warehouseZones-053', label: 'warehouseZones tier 53', factor: 1.53, active: true },
  { key: 'warehouseZones-054', label: 'warehouseZones tier 54', factor: 1.54, active: false },
  { key: 'warehouseZones-055', label: 'warehouseZones tier 55', factor: 1.55, active: true },
  { key: 'warehouseZones-056', label: 'warehouseZones tier 56', factor: 1.56, active: true },
  { key: 'warehouseZones-057', label: 'warehouseZones tier 57', factor: 1.57, active: false },
  { key: 'warehouseZones-058', label: 'warehouseZones tier 58', factor: 1.58, active: true },
  { key: 'warehouseZones-059', label: 'warehouseZones tier 59', factor: 1.59, active: true },
]

export function lookupWarehouseZones (key: string): WarehouseZonesEntry | undefined {
  return warehouseZonesTable.find((entry) => entry.key === key)
}

export function activeWarehouseZones (): WarehouseZonesEntry[] {
  return warehouseZonesTable.filter((entry) => entry.active)
}
