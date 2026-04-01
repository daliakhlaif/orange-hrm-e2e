export interface Entitlement {
    employeeType: 'Individual' | 'Multiple'
    employeeName?: string
    leaveType: string
    leavePeriod: string
    entitlementValue: string
}
