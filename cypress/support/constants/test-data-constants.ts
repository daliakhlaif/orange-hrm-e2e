export const JOB_DETAILS = {
  JOINED_DATE: "2025-09-01" ,  
  JOB_TITLE: { id: 22, name: "Mobile Application Developer" },
  LOCATION: { id: 2, name: "New York Sales Office" },
  EMPLOYMENT_STATUS: { id: 2, name: "Full-Time Contract"},
  CATEGORY: {id: 9, name: "Laborers and Helpers"},
  SUB_UNIT: { id: 10, name: "Client Services" },
} as const;


export const VACANCY_DETAILS = {
  name: "Vacancy - Mobile Developer Using Swift/Kotlin",
  description: "Mobile Application Vacancy for Android/iOS Apps",
  positions: 1,
  status: "true",
  isPublished: "true",
}

export const CANDIDATE_DETAILS = {
  name: "Lina Ali Omar", 
  email: `candidate.${Date.now()}@mail.com`, 
  resume: "cypress/fixtures/files/candidateResume.pdf",
  interviewTitle: "Technical Interview",
  interviewDate: "2025-10-20",
  comment: "Strong profile, shortlisted for interview"
}


