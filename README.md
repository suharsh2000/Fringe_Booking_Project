# Cloud-Based Fringe Booking System (CI/CD-Enabled)

A fullstack web application for booking Fringe Festival events, designed and deployed using modern DevOps principles. This project demonstrates CI/CD, environment segregation, cloud deployment, and version control workflows.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Spring Boot (Java)
- **Database:** MySQL Flexible Server (Azure)
- **DevOps Tools:** GitHub Actions, Azure DevOps Pipelines
- **Containerization:** Docker, docker-compose
- **Hosting:** Azure App Service
- **Branching Strategy:** Feature → Dev → Test → Main

## CI/CD Workflow

We implemented a three-stage CI/CD pipeline:
1. **Development Branch (`dev`)**
   - Unit testing
   - Build checks via GitHub Actions

2. **Testing Branch (`test`)**
   - Staging deployment
   - Integration and QA tests
   - Manual review gates

3. **Main Branch (`main`)**
   - Final production deployment to Azure App Service

 Triggered automatically on PR merges via GitHub Actions.

