# Azure Deployment Guide - The Software Showroom

This guide documents the complete process of deploying The Software Showroom to Azure with vendor portal functionality.

## Overview

**Project Goal:** Host a static website on Azure with vendor registration, authentication, and dynamic profile management.

**Architecture:**
- Azure Static Web Apps (Free tier)
- Azure Functions (Consumption plan)
- Azure SQL Database (Basic tier)
- Azure AD B2C (Free tier)
- Estimated cost: ~$5-10/month

## Deployment Summary

**Session Date:** August 10, 2025  
**Status:** Phase 1 Complete - Paused before Phase 2

**Azure Subscription Used:**
- **Subscription:** Visual Studio Enterprise Subscription
- **Subscription ID:** 9bcc24d9-6812-49e0-a171-3532565f7259
- **Tenant:** Default Directory (16489e77-76ab-4228-ae10-372ede62ddbd)

**Resources Created:**
- **Resource Group:** `rg-software-showroom` (East US)
- **Static Web App:** `software-showroom-new` (East US 2)
- **GitHub Repository:** https://github.com/Sameer-Mhaisekar/the-software-showroom
- **Live Website:** https://orange-bush-05fb1170f.1.azurestaticapps.net

**Current Costs:** $0/month (Free tier)

---

## Phase 1: Foundation & Hosting ✅ COMPLETE

### Task 1: Set up Azure Static Web Apps ✅

#### Prerequisites
- Azure account (free tier available)
- PowerShell (Windows)
- Git repository

#### Step 1: Install Azure CLI

```powershell
# Install Azure CLI using Windows Package Manager
winget install Microsoft.AzureCLI
```

#### Step 2: Refresh Environment and Verify Installation

```powershell
# Refresh PATH environment variable to access az command
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH", "User")

# Verify Azure CLI installation
az --version
```

**Expected Output:**
```
azure-cli                         2.76.0
core                              2.76.0
telemetry                          1.1.0
```

#### Step 3: Login to Azure

```powershell
# Login to your Azure account (opens browser for authentication)
az login
```

This command will:
- Open your default browser
- Prompt you to sign in with your Azure credentials
- Return authentication confirmation in terminal

#### Step 4: Verify Azure Account

```powershell
# Check current subscription details
az account show --output table
```

### Task 2: Create Resource Group and Static Web App

#### Step 1: Create Resource Group

```powershell
# Create a resource group for the project
az group create --name rg-software-showroom --location "East US"
```

#### Step 2: Initialize Git Repository

```powershell
# Check Git installation
git --version

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit - Software Showroom website"
```

#### Step 3: Create Azure Static Web App

```powershell
# Create the static web app (Free tier)
az staticwebapp create --name "software-showroom" --resource-group "rg-software-showroom" --location "East US 2"
```

**Note the output:** Your website URL will be provided in the `defaultHostname` field (e.g., `agreeable-rock-095cd0a0f.1.azurestaticapps.net`)

#### Step 4: Get Deployment Token

```powershell
# Get the deployment token for uploading files
az staticwebapp secrets list --name "software-showroom" --resource-group "rg-software-showroom"
```

#### Step 5: Install Static Web Apps CLI

```powershell
# Install the Azure Static Web Apps CLI globally
npm install -g @azure/static-web-apps-cli

# Verify installation
swa --version
```

#### Step 6: Deploy Website

```powershell
# Deploy your website (replace TOKEN with the apiKey from step 4)
swa deploy . --deployment-token "YOUR_DEPLOYMENT_TOKEN"
```

### Task 3: GitHub Integration for Reliable Deployment

The direct SWA CLI deployment showed "ready soon" indefinitely, so we're using GitHub integration for reliable automated deployment.

#### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (+ icon or green button)
3. **Repository name:** `the-software-showroom`
4. **Description:** `Azure-hosted vendor directory and software discovery platform`
5. **Visibility:** Public (required for free Azure Static Web Apps)
6. **DON'T** initialize with README, .gitignore, or license
7. Click "Create repository"

#### Step 2: Connect Local Repository to GitHub

```powershell
# Add GitHub as remote origin
git remote add origin https://github.com/Sameer-Mhaisekar/the-software-showroom.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Connect Azure Static Web App to GitHub

```powershell
# Delete current static web app (to recreate with GitHub integration)
az staticwebapp delete --name "software-showroom" --resource-group "rg-software-showroom" --yes

# Refresh PATH and create new static web app with GitHub integration
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH", "User")

az staticwebapp create --name "software-showroom-new" --resource-group "rg-software-showroom" --location "East US 2" --source "https://github.com/Sameer-Mhaisekar/the-software-showroom" --branch "main" --app-location "/" --login-with-github
```

**GitHub Device Authentication:**
When prompted, the command will show:
```
Please navigate to https://github.com/login/device and enter the user code XXXX-XXXX
```

1. Go to `https://github.com/login/device`
2. Enter the device code displayed in terminal (e.g., `DEEB-056B`)
3. Click "Continue" and authorize Azure CLI

#### Step 4: Verify Deployment

**✅ SUCCESS:** Website is now live at: `https://orange-bush-05fb1170f.1.azurestaticapps.net`

The new static web app has automatic deployment configured. Every push to the `main` branch will trigger a new deployment via GitHub Actions.

**✅ Completed Phase 1: Foundation & Hosting**
- Task 1: ✅ Set up Azure Static Web Apps
- Task 2: ✅ Create Git repository and deploy to Azure  
- Task 3: ✅ Verify basic hosting with GitHub integration

**Current Status:**
- Website URL: `https://orange-bush-05fb1170f.1.azurestaticapps.net`
- GitHub Repository: `https://github.com/Sameer-Mhaisekar/the-software-showroom`
- Auto-deployment: ✅ Configured via GitHub Actions
- Hosting Cost: $0 (Free tier)

---

## Next Steps

**Phase 2: Database & Backend**
- Phase 2: Database & Backend setup
- Phase 3: Authentication implementation
- Phase 4: Vendor portal development
- Phase 5: Admin dashboard and publishing workflow

---

## Project Structure

Current website files:
```
The-Software-Showroom/
├── index.html              # Homepage (dark theme)
├── eido.html               # Product profile page
├── the-software-showroom.html
├── styles.css              # Global dark theme styles
├── product.css             # Product page styles (now dark mode)
├── product.js              # Interactive functionality
├── script.js               # Site-wide JavaScript
└── [various test/debug files]
```

## Cost Breakdown

| Service | Tier | Monthly Cost |
|---------|------|-------------|
| Azure Static Web Apps | Free | $0 |
| Azure Functions | Consumption | ~$0-5 |
| Azure SQL Database | Basic | ~$5 |
| Azure AD B2C | Free (up to 50k users) | $0 |
| **Total** | | **~$5-10** |

---

*Last updated: August 10, 2025*
