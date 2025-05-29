// Credit Workflow State Diagram Component
class CreditWorkflowStateDiagramComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }

    createContent() {
        const container = document.createElement('div');
        container.className = 'credit-workflow-diagram-container';

        // Title
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 2a: Credit Workflow State Diagram';
        titleSection.appendChild(title);
        container.appendChild(titleSection);

        // Description
        const descSection = document.createElement('div');
        descSection.className = 'desc-section';
        const desc = document.createElement('p');
        desc.className = 'desc-text';
        desc.innerHTML = 'This diagram illustrates the state transitions in the credit request workflow, from initial submission through review, sponsorship, analysis, and final approval or rejection. Each state and transition is mapped to clarify the end-to-end process.';
        descSection.appendChild(desc);
        container.appendChild(descSection);

        // Mermaid chart
        const mermaidBlock = document.createElement('pre');
        mermaidBlock.className = 'mermaid';
        mermaidBlock.textContent = `stateDiagram-v2\n    [*] --> CREDIT_REQUEST\n    CREDIT_REQUEST --> CREDIT_REVIEW: Submit for Credit Review\n    CREDIT_REVIEW --> BUSINESS_SPONSOR: Submit for Business Sponsorship\n    CREDIT_REVIEW --> REJECTED: Reject at Review Stage\n    BUSINESS_SPONSOR --> ANALYSIS: Submit for Analysis\n    BUSINESS_SPONSOR --> REJECTED: Reject at Sponsorship Stage\n    ANALYSIS --> COMPILATION: All Analysis Complete\n    COMPILATION --> APPROVAL: Submit for Approval\n    APPROVAL --> APPROVED: Approve Credit Paper\n    APPROVAL --> REJECTED: Reject at Approval Stage\n    APPROVED --> [*]\n    REJECTED --> [*]`;
        container.appendChild(mermaidBlock);

        return container;
    }

    initialize() {
        if (this.initialized) return;
        // Ensure Mermaid renders the diagram
        if (window.mermaid) {
            window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
        }
        this.initialized = true;
    }

    cleanup() {
        this.initialized = false;
    }
}
