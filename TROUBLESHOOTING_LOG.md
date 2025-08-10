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

#### Working Solution
```powershell
swa deploy --app-location . --deployment-token "TOKEN"
```
- Using explicit `--app-location` parameter
- Deploying to preview environment (default)
- Should properly upload all static files

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
