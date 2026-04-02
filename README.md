# OrangeHRM E2E Testing Automation

[![Cypress](https://img.shields.io/badge/Cypress-10.0.0-brightgreen)](https://www.cypress.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Allure Reports](https://img.shields.io/badge/Allure-Reports-red)](https://docs.qameta.io/allure/)
[![GitHub Actions](https://github.com/daliakhlaif/orange-hrm-e2e/actions/workflows/trigger-jenkins.yml/badge.svg)](https://github.com/daliakhlaif/orange-hrm-e2e/actions)

---

## 📌 Project Description
End-to-end (E2E) automation testing project for the [OrangeHRM](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) demo site using **Cypress with TypeScript**.  
Manual tests were initially designed, then automated using **Page Object Model (POM)** to improve maintainability and readability.  
The project also integrates **CI/CD pipelines using Jenkins and GitHub Actions** and generates **Allure reports** for detailed test insights.


---

## 🎯 Goals
- Automate critical workflows for OrangeHRM
- Ensure regression coverage across modules
- Implement CI/CD for continuous test execution
- Generate visual test reports using Allure

---

## 🛠 Tech Stack
- **Testing:** Cypress (TypeScript)
- **Design Pattern:** Page Object Model (POM)
- **CI/CD:** Jenkins, GitHub Actions
- **Reports:** Allure
- **Version Control:** GitHub

---

## 📝 Test Coverage
**Core Test Cases:**

| ID | Title | Expected Result |
|----|-------|----------------|
| TC01 | Valid Login | Dashboard opens |
| TC02 | Invalid Password | Invalid credentials message |
| TC03 | Invalid Username | Invalid credentials message |
| TC05 | Empty Username | Username required message |
| TC06 | Empty Username (invalid pass) | Username required message |
| TC07 | Empty Password | Password required message |
| TC09 | Both Fields Empty | Required messages for both fields |
| TC10 | Password Masking | Field is masked (type="password") |
| TC11 | Add New System User (Admin) | User created successfully |
| TC12 | User Search | Correct results displayed |
| TC13 | Edit User Role & Status | Changes persisted |
| TC14 | Delete User | User removed from list |
| TC15 | Add Employee with Photo & Login | Employee profile created |
| TC16 | Add Employee Validation Errors | Validation messages |
| TC17 | Leave: Apply → Approve → Verify | Status = Approved |
| TC18 | Buzz: Add New Post | Post visible in stream |
| TC19 | Recruitment Flow | Candidate status updated |
| TC20 | Assign Job Details | Job assignment persisted |

> Full test details are available in the [Wiki](https://github.com/daliakhlaif/orange-hrm-e2e/wiki/Test-Cases-Details).

---

## 📂 Project Structure

```
cypress/
│── e2e/            # Test cases
│── fixtures/       # Test data
│── support/        # Custom commands and configurations
│── pages/          # Page Object Model classes
```

---

## ⚙️ Setup & Installation

```bash
# Clone repo
git clone https://github.com/daliakhlaif/orange-hrm-e2e.git

# Install dependencies
npm install

# Open Cypress Test Runner
npx cypress open

# Run all tests in headless mode
npx cypress run

```
---

## 🧩 Design Decisions

- **Cypress + TypeScript**  
  Provides a reliable testing framework with strong typing and better developer experience  

- **Page Object Model (POM)**  
  Separates UI elements from test logic, improving readability and maintainability  

- **Manual Tests First**  
  Ensures workflows are validated before automation, reducing errors  

- **CI/CD Integration**  
  Automates test execution and ensures continuous quality  

- **Allure Reports**  
  Provides clear, visual, and shareable test reports  

---
## ⚠️ Challenges & Solutions

- **Dynamic Selectors**  
  Used stable CSS selectors and avoided brittle locators  

- **Flaky Tests**  
  Improved stability using Cypress retry-ability and proper assertions  

- **Test Data Management**  
  Used fixtures and controlled test data to avoid conflicts between tests  

---

## 🚀 Future Improvements

- Adding parallel execution for faster test runs  
- Expanding coverage to additional modules  
- Integrating notifications (Slack/Email) for test failures  
---

## 👩‍💻 Author

**Dalia Khlaif**  
[GitHub Profile](https://github.com/daliakhlaif)
