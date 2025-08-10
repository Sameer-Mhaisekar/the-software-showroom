// Product page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize hub interactions
    initializeUseCaseHub();
    
    // Add accessibility features
    addAccessibilityFeatures();
    
    // Add performance optimizations
    optimizePerformance();
    
    // Initialize demo buttons
    initializeDemoButtons();
    
    // Initialize use case panel clicks
    initializeUseCasePanelClicks();
    
    // Initialize integration buttons
    initializeIntegrationButtons();
    
    // Initialize contact partner buttons
    initializeContactPartnerButtons();
    
    // Initialize use case card animations
    initializeUseCaseAnimations();
    
    // Initialize vendor actions
    initializeVendorActions();
    
    // Initialize mini-carousels
    initializeMiniCarousels();

    // Demo tab functionality
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoPanes = document.querySelectorAll('.demo-pane');
    
    demoTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetDemo = this.getAttribute('data-demo');
            
            // Remove active class from all tabs and panes
            demoTabs.forEach(t => t.classList.remove('active'));
            demoPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            this.classList.add('active');
            document.getElementById(targetDemo).classList.add('active');
        });
    });
    
    // Pricing button interactions
    const pricingButtons = document.querySelectorAll('.pricing-cta');
    pricingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planType = this.closest('.pricing-card').querySelector('h3').textContent;
            
            if (this.textContent === 'Contact Sales') {
                alert(`Contacting sales for ${planType} plan...\n\nIn a real implementation, this would open a contact form or scheduling system.`);
            } else {
                alert(`Starting free trial for ${planType} plan...\n\nIn a real implementation, this would redirect to a signup flow.`);
            }
        });
    });
    
    // Partner contact simulation
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach(card => {
        card.addEventListener('click', function() {
            const partnerName = this.querySelector('h3').textContent;
            alert(`Connecting you with ${partnerName}...\n\nIn a real implementation, this would open a contact form or direct messaging system.`);
        });
        
        // Add cursor pointer to indicate clickability
        card.style.cursor = 'pointer';
    });
    
    // Simulate interactive demo clicks
    const demoScreenshots = document.querySelectorAll('.screenshot-placeholder');
    demoScreenshots.forEach(screenshot => {
        screenshot.addEventListener('click', function() {
            const feature = this.closest('.demo-pane').querySelector('h4').textContent;
            alert(`Interactive demo: ${feature}\n\nIn a real implementation, this would launch an interactive product tour or demo environment.`);
        });
    });
    
    // Performance optimizations
    optimizePerformance();
    
    // Initialize demo buttons
    initializeDemoButtons();
});

// Hub and Spoke Functionality
function initializeUseCaseHub() {
    const spokes = document.querySelectorAll('.use-case-spoke');
    const detailPanel = document.getElementById('detail-panel');
    
    spokes.forEach(spoke => {
        spoke.addEventListener('click', function() {
            const useCaseId = this.getAttribute('data-use-case');
            showUseCaseDetails(useCaseId);
            
            // Update spoke states
            spokes.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function showUseCaseDetails(useCaseId) {
    const detailPanel = document.getElementById('detail-panel');
    const titleElement = document.getElementById('detail-title');
    const bodyElement = document.getElementById('detail-body');
    
    const useCaseData = getUseCaseData(useCaseId);
    const similarProducts = getSimilarProducts(useCaseId);
    
    // Update content
    titleElement.textContent = useCaseData.title;
    bodyElement.innerHTML = `
        <div class="rating-display">
            <div class="rating-stars">${useCaseData.stars}</div>
            <div class="rating-text">${useCaseData.score}</div>
        </div>
        
        <div class="analysis-content">
            <div class="strengths-section">
                <h4>Key Strengths</h4>
                <ul class="strengths-list">
                    ${useCaseData.strengths.map(strength => `<li>${strength}</li>`).join('')}
                </ul>
            </div>
            <div class="limitations-section">
                <h4>Limitations</h4>
                <ul class="limitations-list">
                    ${useCaseData.limitations.map(limitation => `<li>${limitation}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="context-info">
            <h4>Best For</h4>
            <p>${useCaseData.bestFor}</p>
        </div>
        
        <div class="integration-details">
            <h4>Integration Ecosystem</h4>
            <p>${useCaseData.integrations}</p>
        </div>
        
        <div class="similar-products">
            <h4>Similar Products</h4>
            <ul class="similar-products-list">
                ${similarProducts.map(product => `
                    <li class="product-item">
                        <a href="${product.link}" target="_blank" class="product-link">
                            <span class="product-name">${product.name}</span>
                            <span class="product-rating">${product.stars} (${product.rating})</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    // Show panel
    detailPanel.classList.add('active');
    
    // Scroll to panel
    detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeDetailPanel() {
    const detailPanel = document.getElementById('detail-panel');
    const spokes = document.querySelectorAll('.use-case-spoke');
    
    detailPanel.classList.remove('active');
    spokes.forEach(spoke => spoke.classList.remove('active'));
}

function getUseCaseData(useCaseId) {
    const data = {
        'msp-management': {
            title: 'MSP Multi-Tenant Management',
            scenario: 'Managing multiple client Intune environments from a single dashboard with client-specific alerts, branded portals, and streamlined warranty tracking across organizations.',
            strengths: [
                'Unified dashboard for managing multiple client tenants simultaneously',
                'Client-specific branding and custom reports for professional presentation',
                'Automated warranty tracking across Dell, HP, and Lenovo devices',
                'Role-based access controls for client isolation and security',
                'Streamlined billing and cost allocation per client tenant'
            ],
            implementation: [
                'Initial setup: 2-3 weeks for multi-tenant configuration',
                'Client onboarding: 2-4 hours per new tenant',
                'Staff training: 8-hour comprehensive MSP workflow training',
                'Integration with existing PSA/RMM tools via API'
            ],
            limitations: [
                'Requires minimum 500 devices for cost-effectiveness',
                'Complex pricing model with multiple client variables',
                'Limited customization of client portal branding options'
            ],
            bestFit: [
                'MSPs managing 5+ client environments with 100+ devices each',
                'Service providers requiring client-specific reporting and dashboards',
                'Organizations needing warranty lifecycle management at scale',
                'Teams requiring granular access controls and client isolation'
            ]
        },
        'enterprise-compliance': {
            title: 'Enterprise Compliance & Patch Management',
            scenario: 'Large-scale patch management with compliance tracking, multi-location device monitoring by department, and comprehensive executive reporting for enterprise environments.',
            strengths: [
                'Agentless patch tracking at granular level for Windows, Mac, and iOS',
                'Compliance dashboards meeting SOC2, ISO27001, and HIPAA requirements',
                'Department and location-based reporting for distributed organizations',
                'Executive-level KPI dashboards for C-suite presentations',
                'Automated compliance alerting and remediation workflows'
            ],
            implementation: [
                'Enterprise deployment: 4-6 weeks including pilot testing',
                'Compliance framework mapping: 2-3 weeks',
                'Department structure configuration: 1-2 weeks',
                'Executive dashboard customization: 1 week'
            ],
            limitations: [
                'Requires dedicated IT compliance team for optimal results',
                'Complex enterprise pricing based on device count and features',
                'Learning curve for advanced compliance reporting features'
            ],
            bestFit: [
                'Organizations with 1000+ devices across multiple locations',
                'Companies in regulated industries (healthcare, finance, government)',
                'Enterprises requiring detailed audit trails and compliance documentation',
                'Large IT teams needing departmental device management insights'
            ]
        },
        'smb-automation': {
            title: 'SMB Automated Device Management',
            scenario: 'Simplified Intune management without dedicated IT team, cost-effective monitoring, automated alerting to prevent business disruption, and easy tool integration.',
            strengths: [
                'Simplified dashboard designed for non-technical users',
                'Automated alerting prevents critical issues from escalating',
                'Cost-effective pricing for smaller device counts',
                'Pre-configured templates for common SMB scenarios',
                'Integration with popular SMB tools and services'
            ],
            implementation: [
                'Quick setup: 3-5 days with guided configuration',
                'Staff training: 4-hour basic training for non-IT personnel',
                'Alert configuration: 1-2 hours for business-critical notifications',
                'Integration setup: 2-4 hours depending on existing tools'
            ],
            limitations: [
                'Limited advanced features compared to enterprise plans',
                'Fewer customization options for reporting and dashboards',
                'Basic support level may require longer response times'
            ],
            bestFit: [
                'Small to medium businesses with 50-500 devices',
                'Organizations without dedicated IT staff',
                'Companies needing basic monitoring with minimal complexity',
                'Teams requiring cost-effective Intune enhancement solutions'
            ]
        },
        'policy-migration': {
            title: 'Policy Migration & Tenant Onboarding',
            scenario: 'Seamless policy backup, baseline management, and cross-tenant policy migration for rapid onboarding and disaster recovery scenarios with change tracking.',
            strengths: [
                'Complete policy backup and versioning system',
                'Cross-tenant policy migration with conflict resolution',
                'Change tracking and audit trails for policy modifications',
                'Template library for common policy configurations',
                'Disaster recovery capabilities with rapid tenant restoration'
            ],
            implementation: [
                'Initial policy backup: 1-2 days for comprehensive documentation',
                'Migration setup: 3-5 days including testing and validation',
                'Template creation: 1-2 weeks for organization-specific templates',
                'Staff training: 6-hour policy management workshop'
            ],
            limitations: [
                'Complex policy dependencies may require manual intervention',
                'Limited support for custom third-party policy extensions',
                'Migration testing requires temporary tenant resources'
            ],
            bestFit: [
                'Organizations undergoing M&A activities requiring tenant consolidation',
                'Companies implementing disaster recovery planning for Intune',
                'IT teams managing multiple development/testing tenants',
                'Organizations standardizing policy configurations across regions'
            ]
        },
        'cost-optimization': {
            title: 'Application Cost Optimization',
            scenario: 'Track and measure application usage (Adobe Pro, Office licenses, etc.) to ensure optimal licensing spend and eliminate waste through detailed usage analytics.',
            strengths: [
                'Detailed application usage tracking with last-used timestamps',
                'License optimization reports identifying unused or underutilized software',
                'Cost projection modeling for budget planning',
                'Integration with financial systems for accurate cost allocation',
                'Automated recommendations for license rightsizing'
            ],
            implementation: [
                'Usage data collection: 30-90 days for accurate baseline',
                'Financial integration: 1-2 weeks for cost allocation setup',
                'Optimization analysis: Ongoing monthly reviews',
                'Stakeholder training: 4-hour workshop on cost optimization processes'
            ],
            limitations: [
                'Requires 30-90 days of data collection for accurate optimization',
                'Limited visibility into cloud-based application usage patterns',
                'Financial integrations may require custom development'
            ],
            bestFit: [
                'Organizations with significant software licensing spend ($50K+ annually)',
                'Companies seeking to optimize Adobe, Microsoft, or other expensive licenses',
                'IT teams needing to justify software investments with usage data',
                'Organizations implementing cost center allocation for software expenses'
            ]
        },
        'service-desk-integration': {
            title: 'Service Desk Integration & Incident Management',
            scenario: 'Automated incident creation in ServiceNow, real-time Slack/Teams notifications, and webhook integrations for custom ITSM workflows with priority-based routing.',
            strengths: [
                'Native ServiceNow integration with automatic ticket creation',
                'Real-time notifications via Slack, Teams, and email',
                'Webhook support for custom ITSM and workflow integration',
                'Priority-based routing and escalation rules',
                'Comprehensive incident tracking and resolution analytics'
            ],
            implementation: [
                'ServiceNow integration: 3-5 days including testing',
                'Notification setup: 1-2 days for multi-channel configuration',
                'Webhook development: 1-2 weeks for custom integrations',
                'Workflow testing: 1 week for end-to-end validation'
            ],
            limitations: [
                'Limited to supported ITSM platforms (primarily ServiceNow)',
                'Custom webhooks require development resources',
                'Complex routing rules may need ongoing maintenance'
            ],
            bestFit: [
                'Organizations using ServiceNow or similar enterprise ITSM tools',
                'IT teams requiring automated incident management workflows',
                'Companies needing real-time alerting across multiple communication channels',
                'Organizations with complex IT support escalation procedures'
            ]
        },
        
        // Business Use Cases
        'msp-client-onboarding': {
            title: 'MSP Client Onboarding',
            scenario: 'Streamlining the onboarding process for new MSP clients with standardized Intune configurations, automated device enrollment, and rapid deployment of security policies.',
            strengths: [
                'Template-based client setup reducing onboarding time by 60%',
                'Automated device discovery and enrollment workflows',
                'Standardized security baselines with industry-specific templates',
                'Client-branded reporting and dashboard setup',
                'Integrated billing and licensing management for new clients'
            ],
            implementation: [
                'Initial setup: 1-2 weeks to create onboarding templates',
                'Client onboarding: 4-8 hours per new client (down from 2-3 days)',
                'Staff training: 8 hours focused on client onboarding workflows',
                'Integration with CRM systems, PSA tools, and client communication platforms'
            ],
            limitations: [
                'Initial template creation requires significant time investment',
                'Client-specific customizations may slow standardized processes',
                'Requires clear SOPs for consistent implementation across team'
            ],
            bestFit: [
                'MSPs with frequent new client acquisition (2+ new clients per month)',
                'Service providers needing to reduce onboarding time while maintaining security standards',
                'Organizations requiring standardized client delivery processes',
                'Teams needing scalable onboarding that doesn\'t require proportional staff increases'
            ]
        },
        'it-cost-optimization': {
            title: 'IT Cost Optimization',
            scenario: 'Reducing IT operational costs through automation of routine tasks, elimination of redundant tools, and optimization of licensing and resource allocation.',
            strengths: [
                '40% reduction in manual patch management tasks',
                'Consolidation of multiple monitoring tools into single platform',
                'Automated compliance reporting eliminating manual audit preparation',
                'Resource optimization recommendations for cost savings',
                'Licensing optimization identifying unused or duplicate licenses'
            ],
            implementation: [
                'Initial setup: 3-4 weeks for full automation implementation',
                'Cost analysis: 1-2 weeks to identify optimization opportunities',
                'Staff training: 12 hours covering automation setup and optimization techniques',
                'Integration with financial systems, asset management, and existing monitoring tools'
            ],
            limitations: [
                'ROI benefits most apparent in larger environments (500+ devices)',
                'Initial setup requires detailed process mapping and analysis',
                'May require organizational change management for process adoption'
            ],
            bestFit: [
                'Organizations spending significant resources on manual IT operations',
                'Companies needing measurable cost reduction and efficiency gains',
                'IT teams managing multiple redundant tools and processes',
                'Organizations preparing for budget optimization or cost center analysis'
            ]
        },
        'risk-mitigation-security': {
            title: 'Risk Mitigation & Security',
            scenario: 'Implementing comprehensive security risk management through continuous monitoring, automated threat response, and proactive vulnerability management.',
            strengths: [
                '99.5% uptime for critical security monitoring',
                'Automated incident response reducing response time by 75%',
                'Comprehensive compliance tracking for audit readiness',
                'Proactive vulnerability assessment and remediation',
                'Real-time threat intelligence and security alerting'
            ],
            implementation: [
                'Initial setup: 2-3 weeks for security framework implementation',
                'Security baseline: 1 week to establish monitoring and alerting',
                'Staff training: 16 hours focused on security workflows and incident response',
                'Integration with SIEM systems, security tools, and compliance platforms'
            ],
            limitations: [
                'Requires dedicated security personnel for optimal effectiveness',
                'Complex setup for organizations with legacy security tools',
                'May generate false positives during initial configuration period'
            ],
            bestFit: [
                'Security-conscious organizations with compliance requirements',
                'Companies needing proactive risk management and automated security operations',
                'Organizations preparing for security audits or certifications',
                'IT teams requiring 24/7 security monitoring without dedicated night staff'
            ]
        },
        'vendor-consolidation': {
            title: 'Vendor Consolidation',
            scenario: 'Consolidating multiple IT management vendors and tools into a unified Intune-based solution to reduce complexity, costs, and management overhead.',
            strengths: [
                '60% reduction in vendor relationships and associated costs',
                'Unified management interface eliminating tool switching',
                'Simplified procurement and contract management',
                'Reduced training requirements for IT staff',
                'Consolidated support reducing ticket complexity and response times'
            ],
            implementation: [
                'Initial setup: 4-6 weeks for phased migration from existing tools',
                'Vendor assessment: 2 weeks to evaluate current tool portfolio',
                'Staff training: 20 hours covering consolidated workflows and new processes',
                'Integration planning: Legacy tool migration, data consolidation, workflow mapping'
            ],
            limitations: [
                'Migration complexity increases with number of existing tools',
                'Potential temporary functionality gaps during transition period',
                'Requires careful change management and user adoption planning'
            ],
            bestFit: [
                'Organizations managing multiple IT tools with overlapping functionality',
                'Companies needing simplified operations and reduced vendor management complexity',
                'IT teams spending excessive time switching between management platforms',
                'Organizations seeking to reduce licensing costs and support complexity'
            ]
        },
        'scalable-growth': {
            title: 'Scalable Growth',
            scenario: 'Supporting rapid business expansion with automated device management that scales efficiently from hundreds to thousands of devices without proportional staff increases.',
            strengths: [
                'Linear scalability supporting 10x device growth with same team size',
                'Automated provisioning for new locations and users',
                'Self-service capabilities reducing help desk tickets by 45%',
                'Predictable cost scaling with business growth',
                'Standardized processes enabling rapid deployment to new locations'
            ],
            implementation: [
                'Initial setup: 3-4 weeks to implement scalable automation framework',
                'Growth planning: 1-2 weeks for capacity and scaling analysis',
                'Staff training: 14 hours focused on scalability planning and automation',
                'Integration with HR systems, identity management, and business applications'
            ],
            limitations: [
                'Requires significant upfront automation investment for maximum benefit',
                'Complex implementation for organizations with diverse IT needs',
                'May need custom development for unique business requirements'
            ],
            bestFit: [
                'Fast-growing organizations anticipating significant device count increases',
                'Companies needing scalable IT operations without proportional cost growth',
                'Organizations opening new locations or acquiring other companies',
                'IT teams preparing for business expansion or merger integration'
            ]
        },
        'client-satisfaction': {
            title: 'Client Satisfaction',
            scenario: 'Improving client satisfaction through proactive issue resolution, transparent reporting, and enhanced service delivery with measurable performance improvements.',
            strengths: [
                '35% improvement in client satisfaction scores',
                'Proactive issue detection preventing 80% of potential incidents',
                'Real-time client portals with transparent service metrics',
                'Automated SLA tracking and performance reporting',
                'Enhanced communication through automated status updates'
            ],
            implementation: [
                'Initial setup: 2-3 weeks for client portal and monitoring setup',
                'Portal customization: 1 week per client for branded portals',
                'Staff training: 10 hours focused on client communication and service delivery',
                'Integration with client communication tools, ticketing systems, and SLA monitoring'
            ],
            limitations: [
                'Requires consistent processes across all client interactions',
                'Client onboarding and training needed for portal adoption',
                'May expose performance issues requiring additional investment'
            ],
            bestFit: [
                'Service providers focused on client retention and satisfaction',
                'MSPs needing measurable service quality improvements',
                'Organizations with SLA commitments requiring transparent performance metrics',
                'Companies competing on service quality rather than just price'
            ]
        }
    };
    
    return data[useCaseId] || null;
}

// Similar products data for each use case
function getSimilarProducts(useCaseId) {
    const similarProducts = {
        'msp-management': [
            { name: 'Datto RMM', rating: 4.3, stars: '★★★★☆', link: 'https://datto.com/rmm' },
            { name: 'ConnectWise Automate', rating: 4.0, stars: '★★★★☆', link: 'https://connectwise.com/software/automate' },
            { name: 'Atera', rating: 4.2, stars: '★★★★☆', link: 'https://atera.com' },
            { name: 'NinjaOne', rating: 4.5, stars: '★★★★⭐', link: 'https://ninjaone.com' }
        ],
        'enterprise-compliance': [
            { name: 'Rapid7 InsightVM', rating: 4.3, stars: '★★★★☆', link: 'https://rapid7.com/products/insightvm' },
            { name: 'Qualys VMDR', rating: 4.2, stars: '★★★★☆', link: 'https://qualys.com/apps/vulnerability-management' },
            { name: 'Tenable.io', rating: 4.4, stars: '★★★★☆', link: 'https://tenable.com/products/tenable-io' },
            { name: 'Microsoft System Center', rating: 4.2, stars: '★★★★☆', link: 'https://microsoft.com/system-center' }
        ],
        'smb-automation': [
            { name: 'ManageEngine Desktop Central', rating: 4.1, stars: '★★★★☆', link: 'https://manageengine.com/desktop-central' },
            { name: 'Lansweeper', rating: 4.3, stars: '★★★★☆', link: 'https://lansweeper.com' },
            { name: 'PDQ Deploy', rating: 4.0, stars: '★★★★☆', link: 'https://pdq.com/pdq-deploy' },
            { name: 'Automox', rating: 4.2, stars: '★★★★☆', link: 'https://automox.com' }
        ],
        'policy-migration': [
            { name: 'Microsoft System Center', rating: 4.2, stars: '★★★★☆', link: 'https://microsoft.com/system-center' },
            { name: 'Group Policy Central', rating: 3.9, stars: '★★★⭐☆', link: 'https://grouppolicycentral.com' },
            { name: 'PolicyPak', rating: 4.1, stars: '★★★★☆', link: 'https://policypak.com' },
            { name: 'Faronics Deploy', rating: 3.8, stars: '★★★⭐☆', link: 'https://faronics.com/products/deploy' }
        ],
        'cost-optimization': [
            { name: 'Flexera One', rating: 4.4, stars: '★★★★☆', link: 'https://flexera.com/products/flexera-one' },
            { name: 'Snow License Manager', rating: 4.3, stars: '★★★★☆', link: 'https://snowsoftware.com/products/snow-license-manager' },
            { name: 'ServiceNow SAM Pro', rating: 4.2, stars: '★★★★☆', link: 'https://servicenow.com/products/software-asset-management' },
            { name: 'Matrix42 Software Asset Management', rating: 4.0, stars: '★★★★☆', link: 'https://matrix42.com/software-asset-management' }
        ],
        'service-desk-integration': [
            { name: 'ServiceNow ITSM', rating: 4.5, stars: '★★★★⭐', link: 'https://servicenow.com/products/itsm' },
            { name: 'Jira Service Management', rating: 4.3, stars: '★★★★☆', link: 'https://atlassian.com/software/jira/service-management' },
            { name: 'Freshservice', rating: 4.2, stars: '★★★★☆', link: 'https://freshservice.com' },
            { name: 'ManageEngine ServiceDesk Plus', rating: 4.1, stars: '★★★★☆', link: 'https://manageengine.com/products/service-desk' }
        ]
    };
    
    return similarProducts[useCaseId] || [];
}

// Enhanced accessibility and keyboard navigation
function addAccessibilityFeatures() {
    const useCasePanels = document.querySelectorAll('.use-case-panel');
    
    useCasePanels.forEach((panel, index) => {
        // Make panels keyboard accessible
        panel.setAttribute('tabindex', '0');
        panel.setAttribute('role', 'button');
        panel.setAttribute('aria-label', `Use case ${index + 1}: ${panel.querySelector('h4').textContent}`);
        
        // Add keyboard event listeners
        panel.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                panel.click();
            }
        });
        
        // Enhanced visual feedback
        panel.addEventListener('focus', function() {
            this.style.outline = '2px solid #8b5cf6';
            this.style.outlineOffset = '2px';
        });
        
        panel.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// Performance optimizations
function optimizePerformance() {
    // Debounce resize events for better performance
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recalculate grid layout if needed
            const grid = document.querySelector('.use-cases-grid');
            if (grid) {
                grid.style.display = 'none';
                grid.offsetHeight; // Force reflow
                grid.style.display = 'grid';
            }
        }, 150);
    });
}

// Demo button functionality
function initializeDemoButtons() {
    const demoButtons = document.querySelectorAll('.demo-button');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the panel click
            const demoType = this.getAttribute('data-demo');
            showDemo(demoType);
        });
    });
}

function showDemo(demoType) {
    // Get demo data
    const demoData = getDemoData(demoType);
    
    // Create and show demo modal
    const modal = createDemoModal(demoData);
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Handle close
    const closeBtn = modal.querySelector('.demo-close');
    const backdrop = modal.querySelector('.demo-backdrop');
    
    closeBtn.addEventListener('click', () => closeDemoModal(modal));
    backdrop.addEventListener('click', () => closeDemoModal(modal));
    
    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeDemoModal(modal);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function closeDemoModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}

function createDemoModal(demoData) {
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    
    modal.innerHTML = `
        <div class="demo-backdrop"></div>
        <div class="demo-content">
            <div class="demo-header">
                <h3>${demoData.title}</h3>
                <button class="demo-close">✕</button>
            </div>
            <div class="demo-body">
                <div class="demo-screenshot">
                    <div class="demo-placeholder">
                        <div class="demo-icon">${demoData.icon}</div>
                        <h4>Interactive Demo: ${demoData.shortTitle}</h4>
                        <p>${demoData.description}</p>
                        <div class="demo-features">
                            ${demoData.features.map(feature => `<div class="demo-feature">✓ ${feature}</div>`).join('')}
                        </div>
                        <div class="demo-cta">
                            <button class="start-demo-btn">🚀 Start Interactive Demo</button>
                            <p class="demo-note">This would launch a live, interactive demo in a real implementation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add interaction feedback for demo buttons
    const startDemoBtn = modal.querySelector('.start-demo-btn');
    if (startDemoBtn) {
        startDemoBtn.addEventListener('click', function() {
            this.innerHTML = '🚀 Loading Demo...';
            this.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            setTimeout(() => {
                this.innerHTML = '✅ Demo Ready!';
                setTimeout(() => {
                    alert('🎮 Interactive Demo Starting!\n\nIn a real implementation, this would launch a fully interactive demo environment where you could:\n\n• Test live features\n• Interact with real data\n• Experience the actual user interface\n• Try different scenarios\n\nThe demo would be specific to: ' + demoData.title);
                }, 500);
            }, 1500);
        });
    }
    
    return modal;
}

function getDemoData(demoType) {
    const demos = {
        'lead-scoring': {
            title: 'Lead Scoring Demo',
            shortTitle: 'AI Lead Scoring',
            icon: '🎯',
            description: 'Experience how FlowCRM Pro automatically scores and prioritizes leads based on behavior and fit.',
            features: [
                'Watch AI analyze lead behavior in real-time',
                'See scores update as leads interact with content',
                'Experience predictive conversion modeling',
                'Test different scoring criteria configurations'
            ]
        },
        'team-collaboration': {
            title: 'Team Collaboration Demo',
            shortTitle: 'Team Handoffs',
            icon: '👥',
            description: 'See how seamless team collaboration works across sales, marketing, and customer success.',
            features: [
                'Experience smooth handoff workflows',
                'See real-time activity timelines',
                'Test cross-team notifications',
                'Try role-based permission controls'
            ]
        },
        'enterprise-reporting': {
            title: 'Enterprise Reporting Demo',
            shortTitle: 'Advanced Analytics',
            icon: '📊',
            description: 'Explore powerful reporting and analytics capabilities for data-driven decision making.',
            features: [
                'Build custom reports with drag-and-drop',
                'See real-time dashboard updates',
                'Experience executive-level analytics',
                'Test automated insight generation'
            ]
        },
        'email-marketing': {
            title: 'Email Marketing Demo',
            shortTitle: 'Campaign Management',
            icon: '📧',
            description: 'Try the integrated email marketing system with CRM data synchronization.',
            features: [
                'Create automated drip campaigns',
                'See CRM data integration in action',
                'Experience engagement tracking',
                'Test A/B campaign optimization'
            ]
        },
        'automation': {
            title: 'Sales Automation Demo',
            shortTitle: 'Workflow Builder',
            icon: '⚙️',
            description: 'Build and test automated workflows that reduce manual tasks by 60%.',
            features: [
                'Use the no-code automation builder',
                'Set up intelligent triggers',
                'Test approval workflows',
                'Monitor automation performance'
            ]
        },
        'integration': {
            title: 'Integration Demo',
            shortTitle: 'Data Unification',
            icon: '🔗',
            description: 'See how FlowCRM Pro connects and unifies data from 50+ business tools.',
            features: [
                'Connect popular business tools',
                'Experience real-time data sync',
                'Test custom API integrations',
                'See unified data management'
            ]
        },
        'complex-sales-scenario': {
            title: 'Enterprise Sales Demo',
            shortTitle: 'Complex B2B Cycles',
            icon: '🏢',
            description: 'Experience how FlowCRM Pro handles complex, multi-stakeholder enterprise sales cycles.',
            features: [
                'Manage multi-location sales teams',
                'Track complex approval workflows',
                'See compliance documentation',
                'Experience audit trail features'
            ]
        }
    };
    
    return demos[demoType] || demos['lead-scoring'];
}

// Initialize use case panel clicks
function initializeUseCasePanelClicks() {
    const panels = document.querySelectorAll('.use-case-panel');
    
    panels.forEach(panel => {
        panel.addEventListener('click', function(e) {
            // Don't trigger panel details if clicking demo button or panel indicator
            if (e.target.classList.contains('demo-button') || 
                e.target.closest('.demo-button') ||
                e.target.classList.contains('panel-indicator') ||
                e.target.closest('.panel-indicator')) {
                return;
            }
            
            // Only trigger for FlowCRM sample page, not Eido
            if (window.location.pathname.includes('eido.html')) {
                return;
            }
            
            const useCaseId = this.getAttribute('data-use-case');
            showUseCaseDetails(useCaseId);
        });
    });
}

// Initialize integration buttons
function initializeIntegrationButtons() {
    // Find out more buttons
    const infoButtons = document.querySelectorAll('.integration-btn.btn-primary');
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const integration = this.getAttribute('data-integration');
            showIntegrationInfo(integration);
        });
    });
    
    // Try demo buttons
    const demoButtons = document.querySelectorAll('.integration-btn.btn-demo');
    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const demo = this.getAttribute('data-demo');
            showIntegrationDemo(demo);
        });
    });
}

function showIntegrationInfo(integration) {
    // Show integration information modal or redirect
    alert(`Learn more about ${integration} integration...\n\nIn a real implementation, this would open a detailed information modal or redirect to a dedicated integration page with setup instructions, documentation, and configuration options.`);
}

function showIntegrationDemo(demo) {
    // Show integration demo
    alert(`Try ${demo} demo...\n\nIn a real implementation, this would launch an interactive demo showing how the ${demo} integration works with FlowCRM Pro, including data sync examples and workflow demonstrations.`);
}

// Initialize contact partner buttons
function initializeContactPartnerButtons() {
    const contactButtons = document.querySelectorAll('.contact-partner-btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the partner name from the closest partner card
            const partnerCard = this.closest('.partner-card');
            const partnerName = partnerCard.querySelector('h3').textContent;
            
            // Show contact modal or redirect to contact form
            alert(`Contact ${partnerName}\n\nIn a real implementation, this would:\n• Open a contact form\n• Pre-fill partner information\n• Send inquiry to the implementation partner\n• Provide contact details and next steps`);
        });
    });
}

// Vendor contact functionality
function initializeVendorActions() {
    const vendorContactBtn = document.querySelector('.vendor-contact-btn');
    
    if (vendorContactBtn) {
        vendorContactBtn.addEventListener('click', function() {
            showVendorContactModal();
        });
    }
}

function showVendorContactModal() {
    alert(`Contact Eido Sales Team\n\nIn a real implementation, this would:\n• Open a contact form\n• Pre-fill product information (Eido - Intune for Everyone)\n• Collect your requirements and use case\n• Connect you directly with Eido's sales team\n• Provide pricing and implementation timelines\n\nContact Information:\n📧 sales@eido.io\n📞 +1 (555) EIDO-NOW\n🌐 https://eido.io/contact`);
}

// Carousel functionality for resources section
let carouselPositions = {
    blog: 0,
    downloads: 0,
    casestudies: 0,
    company: 0
};

function moveCarousel(type, direction) {
    const track = document.getElementById(`${type}-track`);
    const cards = track.children;
    const cardWidth = cards[0].offsetWidth + 24; // width + gap
    const containerWidth = track.parentElement.offsetWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const maxPosition = Math.max(0, cards.length - visibleCards);
    
    carouselPositions[type] += direction;
    
    // Constrain position
    if (carouselPositions[type] < 0) {
        carouselPositions[type] = 0;
    } else if (carouselPositions[type] > maxPosition) {
        carouselPositions[type] = maxPosition;
    }
    
    // Apply transform
    const translateX = -carouselPositions[type] * cardWidth;
    track.style.transform = `translateX(${translateX}px)`;
    
    // Update button states
    updateCarouselButtons(type, carouselPositions[type], maxPosition);
}

function updateCarouselButtons(type, currentPos, maxPos) {
    const container = document.getElementById(`${type}-carousel`);
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    
    prevBtn.disabled = currentPos === 0;
    nextBtn.disabled = currentPos >= maxPos;
}

// Initialize carousels on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize button states for all carousels
    const carouselTypes = ['blog', 'downloads', 'casestudies', 'company'];
    
    carouselTypes.forEach(type => {
        const track = document.getElementById(`${type}-track`);
        if (track) {
            updateCarouselButtons(type, 0, Math.max(0, track.children.length - 3));
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Reset positions on resize
        carouselTypes.forEach(type => {
            carouselPositions[type] = 0;
            const track = document.getElementById(`${type}-track`);
            if (track) {
                track.style.transform = 'translateX(0px)';
                updateCarouselButtons(type, 0, Math.max(0, track.children.length - 3));
            }
        });
    });
});

// Mini-carousel functionality for horizontal resources
let miniCarouselPositions = {
    blog: 0,
    downloads: 0,
    casestudies: 0,
    company: 0
};

function moveMiniCarousel(type, direction) {
    const track = document.getElementById(`${type}-mini-track`);
    if (!track) return;
    
    const cards = track.children;
    const totalCards = cards.length;
    
    if (totalCards === 0) return;
    
    miniCarouselPositions[type] += direction;
    
    // Constrain position
    if (miniCarouselPositions[type] < 0) {
        miniCarouselPositions[type] = 0;
    } else if (miniCarouselPositions[type] >= totalCards) {
        miniCarouselPositions[type] = totalCards - 1;
    }
    
    // Apply transform
    const translateX = -miniCarouselPositions[type] * 100;
    track.style.transform = `translateX(${translateX}%)`;
    
    // Update button states
    updateMiniCarouselButtons(type, miniCarouselPositions[type], totalCards);
}

function updateMiniCarouselButtons(type, currentPos, totalCards) {
    const container = document.querySelector(`[id="${type}-mini-track"]`).parentElement;
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    
    if (prevBtn) prevBtn.disabled = currentPos === 0;
    if (nextBtn) nextBtn.disabled = currentPos >= totalCards - 1;
}

// Initialize mini-carousels
function initializeMiniCarousels() {
    const carouselTypes = ['blog', 'downloads', 'casestudies', 'company'];
    
    carouselTypes.forEach(type => {
        const track = document.getElementById(`${type}-mini-track`);
        if (track) {
            const totalCards = track.children.length;
            updateMiniCarouselButtons(type, 0, totalCards);
        }
    });
}

// Close FAQ when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.faq-item')) {
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// FAQ toggle functionality
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items in the same section
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle the clicked item
    if (isActive) {
        faqItem.classList.remove('active');
    } else {
        faqItem.classList.add('active');
    }
}

// Show Use Case Overlay
function showUseCaseOverlay(useCaseId) {
    const overlay = document.getElementById('use-case-overlay');
    const data = getUseCaseData(useCaseId);
    
    if (!data) {
        console.warn('Use case data not found for:', useCaseId);
        return;
    }
    
    // Update overlay content
    document.getElementById('overlay-title').textContent = data.title;
    document.getElementById('overlay-scenario').textContent = data.scenario;
    
    // Update strengths
    const strengthsList = document.getElementById('overlay-strengths');
    strengthsList.innerHTML = '';
    data.strengths.forEach(strength => {
        const li = document.createElement('li');
        li.textContent = strength;
        strengthsList.appendChild(li);
    });
    
    // Update implementation details
    const implementationList = document.getElementById('overlay-implementation');
    implementationList.innerHTML = '';
    data.implementation.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        implementationList.appendChild(li);
    });
    
    // Update limitations
    const limitationsList = document.getElementById('overlay-limitations');
    limitationsList.innerHTML = '';
    data.limitations.forEach(limitation => {
        const li = document.createElement('li');
        li.textContent = limitation;
        limitationsList.appendChild(li);
    });
    
    // Update best fit scenarios
    const bestFitList = document.getElementById('overlay-best-fit');
    bestFitList.innerHTML = '';
    data.bestFit.forEach(scenario => {
        const li = document.createElement('li');
        li.textContent = scenario;
        bestFitList.appendChild(li);
    });
    
    // Update similar products
    const similarProductsContainer = document.getElementById('overlay-similar-products');
    similarProductsContainer.innerHTML = '';
    const similarProducts = getSimilarProducts(useCaseId);
    
    if (similarProducts.length > 0) {
        similarProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'similar-product-item';
            
            productItem.innerHTML = `
                <div class="similar-product-header">
                    <h5 class="similar-product-name">${product.name}</h5>
                    <div class="similar-product-rating">
                        <span class="similar-product-stars">${product.stars}</span>
                        <span class="similar-product-score">${product.rating}</span>
                    </div>
                </div>
                <a href="${product.link}" target="_blank" class="similar-product-link">View Product</a>
                <a href="#" class="similar-product-link">Compare</a>
            `;
            
            similarProductsContainer.appendChild(productItem);
        });
    } else {
        similarProductsContainer.innerHTML = '<p style="color: #6b7280; font-style: italic;">No similar products data available for this use case.</p>';
    }
    
    // Show overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Use Case Overlay
function closeUseCaseOverlay() {
    const overlay = document.getElementById('use-case-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close overlay when clicking background
document.addEventListener('click', function(e) {
    const overlay = document.getElementById('use-case-overlay');
    if (e.target === overlay) {
        closeUseCaseOverlay();
    }
});

// Close overlay with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeUseCaseOverlay();
    }
});

// Use Case Card Animation Initialization
function initializeUseCaseAnimations() {
    console.log('Initializing use case animations...');
    
    // Get all use case panels
    const useCasePanels = document.querySelectorAll('.use-case-panel');
    console.log('Found', useCasePanels.length, 'use case panels');
    
    // Trigger animations immediately for testing
    setTimeout(() => {
        useCasePanels.forEach((panel, index) => {
            console.log('Adding appear class to panel', index);
            panel.classList.add('appear');
        });
    }, 1000); // 1 second delay to see the initial state
    
    // Also set up intersection observer for future scroll interactions
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('appear')) {
                console.log('Panel came into view, adding appear class');
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);
    
    // Observe all panels
    useCasePanels.forEach(panel => {
        observer.observe(panel);
    });
}

// Comparison functionality placeholder
function openComparison(product1, product2) {
    // For now, show an alert. Later this will redirect to a comparison page
    alert(`Comparison feature coming soon!\n\nWould compare: Eido vs ${product2.replace(/-/g, ' ')}\n\nThis will redirect to a dedicated comparison page where both products will be analyzed side-by-side.`);
    
    // Future implementation:
    // window.location.href = `/compare?product1=${product1}&product2=${product2}`;
}

// Make comparison function globally accessible
window.openComparison = openComparison;

// Make overlay functions globally accessible for onclick handlers
window.showUseCaseOverlay = showUseCaseOverlay;
window.closeUseCaseOverlay = closeUseCaseOverlay;
