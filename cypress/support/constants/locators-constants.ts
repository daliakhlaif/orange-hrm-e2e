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

export const ADMIN_PAGE_LOCATORS = {
  mainMenuItem: '.oxd-main-menu-item',
  headeerH6: '.oxd-topbar-header-breadcrumb h6',
}

export const ADD_EMPLOYEE_PAGE_LOCATORS = {
  headerAddEmployee: 'h6',
  firstName: 'input[name="firstName"]',
  middleName: 'input[name="middleName"]',
  lastName: 'input[name="lastName"]',
  saveButton: 'button[type="submit"]',
  toastMsg: '.oxd-toast',
  photoInput: 'input[type="file"]',
  createLoginDetailsSwitch: '.oxd-switch-input',
  UsernameInput: ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
  passwordInput: '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input',
  confirmPasswordInput: '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
  employeeImg: '.employee-image',
  employeeIdInput: '.oxd-input-group input.oxd-input',
  firstNameError: '.oxd-input-field-error-message',
  fileError: 'span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message',
  passwordError: '.oxd-input-field-error-message',
}

export const EMPLOYEE_LIST_PAGE_LOCATORS = {
  employeeList: '.oxd-topbar-body-nav-tab-item',
  employeeIdInput: ':nth-child(2) > .oxd-input',
  searchBtn: '.oxd-form-actions > .oxd-button--secondary',
  usersTable: '.oxd-table-body',
  tableRow: '.oxd-table-card .oxd-table-row',
  jobTitleDropdown: '.oxd-select-wrapper:eq(2)',
  jobTitleOption: '.oxd-select-option',
  subUnitDropdown: '.oxd-select-wrapper:eq(3)',
  subUnitOption: '.oxd-select-option',
};

export const LOGIN_PAGE_LOCATORS = {
  username: 'input[name="username"]',
  password: 'input[name="password"]',
  submitBtn: 'button[type="submit"]',
  requiredMsg: '.oxd-input-group__message'
}

export const USER_MANAGEMENT_PAGE_LOCATORS = {
  addBtn: 'button.oxd-button.oxd-button--medium.oxd-button--secondary',
}


export const CONFIRM_DELETE_DIALOG_LOCATORS = {
  msgContainer: '.oxd-dialog-container-default',
  delete: 'button.oxd-button--label-danger',
  cancel: 'button.oxd-button--ghost',
}

export const LOGOUT_PAGE_LOCATORS = {
  profileDropdown: '.oxd-userdropdown',
  logoutBtn: 'a[href="/web/index.php/auth/logout"]',
}

export const BUZZ_PAGE_LOCATORS = {
  headerBuzz: 'h6',
  buzzTab: 'a[href="/web/index.php/buzz/viewBuzz"]',
  postTextArea: '.oxd-buzz-post-input',
  postButton: '.oxd-buzz-post-slot',
  postFeed: '.orangehrm-buzz-post-body',
  toastMsg: '.oxd-toast'
}

export const ADD_ENTITLEMENT_PAGE = {
  AddLeaveEntText: 'p.oxd-text.oxd-text--p.orangehrm-main-title',
  employeeTypeWrapper: '.oxd-radio-group',
  employeeTypeOption: '.oxd-radio-wrapper',
  employeeNameInput: 'input[placeholder="Type for hints..."]',
  autComplete: '.oxd-autocomplete-option',
  leaveTypeDropdown: '.oxd-select-wrapper:eq(0)',
  leaveTypeOption: '.oxd-select-option',
  leavePeriodDropdown: '.oxd-select-wrapper:eq(1)',
  leavePeriodOption: '.oxd-select-option',
  entitlementInput: '.oxd-input-group input.oxd-input',
  saveBtn: 'button[type="submit"]',
  toastMsg: '.oxd-toast'
}

export const CONFIRM_DIALOG_LOCATORS = {
  msgContainer: '.oxd-dialog-container-default',
  confirmBtn: 'button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-button-margin',
  cancelBtn: 'button.oxd-button--ghost'
}

export const APPLY_LEAVE_PAGE_LOCATORS = {
  titleApplyLeave: 'h6.oxd-text.oxd-text--h6.orangehrm-main-title',
  leaveTypeDropdown: '.oxd-select-wrapper:eq(0)',
  leaveTypeOption: '.oxd-select-option',
  fromDateInput: 'input[placeholder="yyyy-dd-mm"]:eq(0)',
  toDateInput: 'input[placeholder="yyyy-dd-mm"]:eq(1)',
  commentsTextArea: 'textarea.oxd-textarea',
  applyBtn: 'button[type="submit"]',
  toastMsg: '.oxd-toast'
}

export const LEAVE_LIST_PAGE = {
  header: 'h5.oxd-text.oxd-text--h5',
  employeeNameInput: 'input[placeholder="Type for hints..."]',
  searchBtn: 'button[type="submit"]',
  leaveRow: '.oxd-table-card',
  approveBtn: 'button.oxd-button.oxd-button--medium.oxd-button--label-success.oxd-table-cell-action-space',
  toastMsg: '.oxd-toast',
  autCompleteOption: '.oxd-autocomplete-option',
}


export const MY_LEAVE_PAGE_LOCATORS = {
  header: 'h5.oxd-text--h5',
  searchBtn: 'button[type="submit"]',
  leaveRow: '.oxd-table-card',
  leaveTypeDropdown: '.oxd-select-wrapper:eq(0)',
  leaveTypeOption: '.oxd-select-option',
  toastMsg: '.oxd-toast',
  balance: 'div.oxd-table-cell.oxd-padding-cell:eq(4)',
  statusValue: 'div.oxd-table-cell.oxd-padding-cell',
}

export const ADD_CANDIDATE_PAGE = {
  title: "h6.oxd-text.oxd-text--h6.orangehrm-main-title",
  firstName: "input.oxd-input.oxd-input--active.orangehrm-firstname",
  middleName: "input.oxd-input.oxd-input--active.orangehrm-middlename",
  lastName: "input.oxd-input.oxd-input--active.orangehrm-lastname",
  vacancyDropdown: "div.oxd-select-text-input",
  vacancyOption: ".oxd-select-option",
  email: ".oxd-input-group.oxd-input-field-bottom-space input.oxd-input.oxd-input--active:eq(2)",
  resumeFileInput: "input[type='file']",
  saveBtn: "button[type='submit']",
  toastMsg: ".oxd-toast",
}

export const VIEW_CANDIDATES_PAGE = {
  title: "h5.oxd-text.oxd-text--h5.oxd-table-filter-title",
  name: "input[placeholder='Type for hints...']",
  searchBtn: "button[type='submit']",
  autComplete: ".oxd-autocomplete-option",
  table: ".oxd-table-body",
  row: ".oxd-table-card",
  cell: ".oxd-table-cell",
  eyeIcon: "i.oxd-icon.bi-eye-fill",
  downloadIcon: "i.oxd-icon.bi-download",
  shortlistBtn: "button.oxd-button.oxd-button--medium.oxd-button--success",
  commentTextArea: "textarea.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical"
}

export const SHORTLIST_CANDIDATE_PAGE = {
  shortlistBtn: "button.oxd-button.oxd-button--medium.oxd-button--success",
  commentTextArea: "textarea.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical",
  saveBtn: "button[type='submit']",
  scheduleInterviewBtn: "button.oxd-button.oxd-button--medium.oxd-button--success:eq(0)",
  toastMsg: ".oxd-toast",
  interviewTitle: "div.oxd-input-group.oxd-input-field-bottom-space input.oxd-input.oxd-input--active:eq(4)",
  interviewer: "input[placeholder='Type for hints...']",
  autComplete: ".oxd-autocomplete-option",
  date: "input[placeholder='yyyy-dd-mm']",
  status: "p.oxd-text.oxd-text--p.oxd-text--subtitle-2",
  markPassed: "button.oxd-button.oxd-button--medium.oxd-button--success",
  downloadFileIcon: "i.oxd-icon.bi-download.orangehrm-file-download"
}

export const ADD_VACANCY_PAGE_LOCATORS = {
  title: "h6.oxd-text.oxd-text--h6.orangehrm-main-title",
  vacancyNameInput: ".oxd-form input.oxd-input.oxd-input--active:eq(0)",
  jobTitleDropdown: "div.oxd-select-text-input",
  jobTitleOption: ".oxd-select-option",
  hiringManagerInput: "input[placeholder='Type for hints...']",
  autComplete: ".oxd-autocomplete-option",
  saveBtn: "button[type='submit']",
  toastMsg: ".oxd-toast",
  editVacancyTitle: "h6.oxd-text.oxd-text--h6.orangehrm-main-title"
}