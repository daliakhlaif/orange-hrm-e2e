export const USER_PAGE_LOCATORS = {
    headerAddUser: 'h6',
    usernameInput: ':nth-child(2) > .oxd-input',
    searchBtn: '.oxd-form-actions > .oxd-button--secondary',
    usersTable: '.oxd-table-body',
    usersTableRow: 'div.oxd-table-row',
    tableRowBtn: '.oxd-table-cell-actions > button',
    roleOption: '.oxd-select-option',
    roleDropdown: '.oxd-select-wrapper:eq(0)',
    statusDropdown: '.oxd-select-wrapper:eq(1)',
    statusOption: '.oxd-select-option',
    spanMsg: 'span.oxd-text--span',
    employeeNameInput: 'input[placeholder="Type for hints..."]',
    autComplete: '.oxd-autocomplete-option',
    row: ".oxd-table-card",
    cell: ".oxd-table-cell",
    editIcon: "i.oxd-icon.bi-pencil-fill",
    deleteIcon: "i.oxd-icon.bi-trash"
}

export const EDIT_USER_PAGE_LOCATORS = {
    headerEditUser: 'h6',
    roleDropdown: '.oxd-select-wrapper:eq(0)',
    roleOption: '.oxd-select-option',
    statusDropdown: '.oxd-select-wrapper:eq(1)',
    statusOption: '.oxd-select-option',
    saveBtn: 'button[type="submit"]',
}

export const ADD_USER_PAGE_LOCATORS = {
    headerAddUser: 'h6',
    role: '.oxd-select-wrapper',
    roleDropdown: '.oxd-select-wrapper:eq(0)',
    employeeNameInput: 'input[placeholder="Type for hints..."]',
    roleOption: '.oxd-select-option',
    usernameInput: '.oxd-input-group > :nth-child(2) > .oxd-input:eq(0)',
    passwordInput: '.oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    confirmPasswordInput: '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    statusDropdown: '.oxd-select-wrapper:eq(1)',
    statusOption: '.oxd-select-option',
    saveBtn: 'button[type="submit"]',
    autComplete: '.oxd-autocomplete-option',
    toastMsg: '.oxd-toast',
}
