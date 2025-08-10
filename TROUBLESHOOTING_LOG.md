# Troubleshooting Log - Azure Deployment

This document tracks all troubleshooting steps, failed attempts, and intermediate commands used during the Azure deployment process.

## Session: August 10, 2025

### Azure Static Web Apps Deployment Issues

#### Problem: "Ready Soon" Message Persists
- Initial deployment showed "ready soon" message indefinitely
- CSS files returning 404 errors
- Static content not accessible

#### Failed Attempts
1. **Dry run deployment**:
   ```powershell
   swa deploy . --deployment-token "TOKEN" --dry-run
   ```
   - Error: "Request is missing the pull request id"
   - Issue: Dry run mode has different requirements

2. **Production environment deployment**:
   ```powershell
   swa deploy . --deployment-token "TOKEN" --env production
   ```
   - Appeared to start but files still not accessible

#### Working Solution - GitHub Integration
```powershell
# Refresh PATH
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH", "User")

# Create Static Web App with GitHub integration
az staticwebapp create --name "software-showroom-new" --resource-group "rg-software-showroom" --location "East US 2" --source "https://github.com/Sameer-Mhaisekar/the-software-showroom" --branch "main" --app-location "/" --login-with-github
```

**GitHub Device Authentication Process:**
1. Command displays: `Please navigate to https://github.com/login/device and enter the user code DEEB-056B`
2. User goes to https://github.com/login/device
3. Enters device code (e.g., `DEEB-056B`)
4. Authorizes Azure CLI access
5. Deployment completes automatically

**✅ SUCCESS:** Website deployed to `https://orange-bush-05fb1170f.1.azurestaticapps.net`

#### Verification Commands
```powershell
# Check if CSS file is accessible
curl -I https://agreeable-rock-095cd0a0f.1.azurestaticapps.net/styles.css

# Check hostname
az staticwebapp show --name "software-showroom" --resource-group "rg-software-showroom" --query "defaultHostname"
```

---

## Lessons Learned
1. Azure Static Web Apps deployments can take 2-5 minutes to propagate
2. The `--app-location` parameter is important for proper file deployment
3. Preview environment works better than production for initial deployments
4. File accessibility can be tested with curl commands

---

*Session notes for internal reference only*

---

*Session notes for internal reference only*
