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

export const platformStatisticsItems: StatisticItem[] = [
  { value: medicalRecords, label: "Medical Records", delay: 0.3 },
  { value: medicalPatients, label: "Patients Served", delay: 0.4 },
  { value: medicalEncounters, label: "Patient Encounters", delay: 0.5 },
  // 47,371,315
  { value: medicalRecords + medicalPatients + medicalEncounters, label: "Total Records", delay: 0.6 },
]
