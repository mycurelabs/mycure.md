import type { StatisticItem } from "@/components/types/product-page"

// Company-wide record counts shown in the "Trusted by Healthcare Facilities"
// statistics bar on the home, /clinics and /mobile-labs pages.
//
// Each table's figure on the site is the sum of the two sources below, and the
// last figure is the total of all three tables. To update, replace a source's
// counts and its `countedAt` date; the sums follow.

// Table counts from the separate legacy dataset Joff shared on 2026-11-19.
// This is not MYCURE production.
const LEGACY_SOURCE_COUNTS = {
  countedAt: "2026-11-19",
  medical_records: 33_436_331,
  medical_patients: 4_773_067,
  medical_encounters: 3_299_201,
}

// Exact table counts from MYCURE production, taken 2026-11-19.
const PRODUCTION_COUNTS = {
  countedAt: "2026-11-19",
  medical_records: 3_873_619,
  medical_patients: 520_991,
  medical_encounters: 1_468_106,
}

const medicalRecords = LEGACY_SOURCE_COUNTS.medical_records + PRODUCTION_COUNTS.medical_records // 37,309,950
const medicalPatients = LEGACY_SOURCE_COUNTS.medical_patients + PRODUCTION_COUNTS.medical_patients // 5,294,058
const medicalEncounters = LEGACY_SOURCE_COUNTS.medical_encounters + PRODUCTION_COUNTS.medical_encounters // 4,767,307

// Shown in millions with one decimal, such as 37.3M.
const inMillions = (count: number, label: string, delay: number): StatisticItem => ({
  value: Math.round(count / 100_000) / 10,
  decimalPlaces: 1,
  suffix: "M",
  label,
  delay,
})

export const platformStatisticsItems: StatisticItem[] = [
  inMillions(medicalRecords, "Medical Records", 0.3), // 37.3M
  inMillions(medicalPatients, "Patients Served", 0.4), // 5.3M
  inMillions(medicalEncounters, "Patient Encounters", 0.5), // 4.8M
  inMillions(medicalRecords + medicalPatients + medicalEncounters, "Total Records", 0.6), // 47,371,315 → 47.4M
]
