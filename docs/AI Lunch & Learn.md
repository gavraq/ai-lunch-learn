
# Prompt for Brainstorming:

```
<Theme>
Whilst the AI tools that are currently available to us inside of work are somewhat limited (often due to security concerns), we need to be experimenting with AI as much as possible because this field is accelerating so fast it is likely to change the future landscape very quickly and we should be preparing and positioning ourselves for this change.
</Theme>

<Audience> 
The audience consists of people working in an investment bank, specifically in the Risk Change  and Risk IT departments.  They would typically be Project Managers, Business
</Audience> 

<Topics>
Here are a few of the topics I want to cover (in no particular order):

Agents - in the future we will all become managers of AI agents who will go off and perform tasks on our behalf

Prompting - best practices for getting the most of AI by enhancing our prompts and instructions eg using xml tags and markdown

Model Context Protocol (MCP) Servers

Retrieval Augmented Generation (RAG)

Vibe Coding - using AI to help code and potentially as a mechanism for Risk Change people to build early prototypes rather than having to wait for IT to begin coding

Artefacts - AI can help to generate many artefacts that Project Managers would normally spend a lot of time having to create from scratch, for example:
- Diagrams such as entity relationship diagram, workflow diagrams, state transition diagrams etc. using tools like mermaid live to display them
- Project plans
- Gantt charts
- Business/Product Requirements Documents
- Systems architecture diagrams

Importance of planning - using AI to help code can definitely help accelerate system development/prototyping, but you should not  

No-code solution like n8n for easy introduction to integrating LLM's into workflows

LLM's integrated into coding IDE's like git-hub co-pilot, Cursor and Windsurf

Learning about AI through popular YouTube channels such as Riley Brown, The AI Daily Brief, Matthew Berman, Matt Wolf and others

Where to find the ultimate intro - follow Andrej Karapathy and his intro videoas which are long but very informative

There are many other topics that I need help to identify
<Topics>

<Task>
I need some help to brainstorm the presentation taking the context and topics already identified and helping to expand to other ideas and concepts.
I need to you ask me questions and engage in dialogue with me as we do the barinstorming together
I need to put some structure to the presentation once I have the topics identified so that it "tells a story" according to the overall theme and specifically relevant to the audience
I need help to produce materials which could include various artefacts such as pictures, animations, interactive web pages or anything that will keep the audience engaged and entertained.
<Task>

```

# Prompt for refining

```
<Theme>
Whilst the AI tools that are currently available to us inside of work are somewhat limited (often due to security concerns), we need to be experimenting with AI as much as possible because this field is accelerating so fast it is likely to change the future landscape very quickly and we should be preparing and positioning ourselves for this change.
</Theme>

<Audience> 
The audience consists of people working in an investment bank, specifically in the Risk Change  and Risk IT departments.  They would typically be Project Managers, Business
</Audience> 

<Topics>
The topics are captured in the document AI Lunch & Learn.md in my project folder.
<Topics>

<Task>
I need some help to refine the presentation taking the context and topics already identified and helping to make sure the supporting documentation is nicely formatted, has a good structure and flows smoothly to support my presentation and "tells a story" according to the overall theme and specifically relevant to the audience.
I need help to brainstorm materials that could be used to support the presentation including various artefacts such as pictures, animations, interactive web pages or anything that will keep the audience engaged and entertained.
<Task>

```

# Pre-Amble: AI Lunch & Learn: From AI User to AI Manager

## Positioning Ourselves for the AI Revolution

**Format**: Interactive Microsoft Teams Session  
**Audience**: Risk Change & Risk IT Teams (Project Managers, Business Analysts)
**Overall message**: AI is likely to fundamentally change our jobs so we need to be prepared for it, today we are each focused on doing very specific roles where we actively engage in detailed work, whether that be gathering & writing requirements and specification, tracking actions and creating or re-arranging plans, coding systems etc.  In the future we are likely to be managers of agents who will perform specific tasks on our behalf and we will become co-ordinators and architects. 

Key detailed points to include in the storyline below:
- agentic approach is important because of context length - LLMs are good if you give them the right context, but right now they can lose focus if context is too large so it is important to have agent who focus on specific tasks and then our job is to co-ordinate the agents in a coherent manner (in fact even some of this co-ordination can be done by agents)
- RAG is also important because of limited context length so you need to give the LLM the right information at the right time and RAG can help with this - RAG can also help with organisational memory (helps if there is high staff turnover)
- As we look at the various Risk Change and Risk IT tasks in our current end to end business process we can clearly see areas where LLMs can help to do the "heavy lifting" and in fact are arguable better as they wont "lose interest" and can be more reliable (with adequate supervision) at doing some of the more mundane tasks, freeing us up to do more of the strategic work that in todays world we don't have time to get to because we are frantically "doing the heavy lifting".
- Storyline below should go through each of the tasks one by one illustrating where AI can do the heavy lifting and then summarise at the end by saying if we have agents that can specialise and perform each of these individual tasks and we can co-ordinate them then we can move to the "new way of working"
- Longer term these agents can become even more sophisticated, for example by using agents to conduct interviews
- Corporate memory - The master prompt see video from Thiago Forte here: https://www.youtube.com/watch?v=_K_F_icxtrI


---

# Agenda

Introduction
- Poll on AI usage
- Superwhisper demo
- What could AI look like in the future? - An Agentic World
How could AI help for Risk Change and Risk IT?
- What are Credit Risk trying to achieve?
- Part 1: Level Up Your AI Prompting Game
	- The Power of Structured Prompting
	- The Power of Voice
- Part 2: Prototyping a new approach - Credit Risk Workflow Example
	- Old versus new approach
	- "Vibe coding"  might be the future of prototyping
	- My Three Prototyping Attempts and lessons learned
	- A structured prototyping approach & steps involved
- Part 3: Building Institutional Memory
- Part 4: Next Level Agents using voice
- Closing Comments: Your AI Challenge
- Resources for Continuous Learning

---

## Introduction: "We are still very early in the AI Revolution but this is changing rapidly"

### Interactive Poll

- "Who's used an AI model this week?"
- What models are you using (ChatGPT, Claude, Grok, Gemini, Perplexity)?"
- "Who's used it for work-related tasks?"
- Are we using AI to its full potential? 
- Have we thought through all of the possibilities of how we might use it?

`animation with various model logos onto the screen`

To really leverage the potential we need to be keeping pace with developments in this field.  I understand that our current in-house model (Co-pilot) is not the best, but we should be keeping abreast and experimenting outside of work too so that we are not left behind

Today I want to share some of my own experiences and hear some of yours so that we can try to take our AI usage to the next level

### Superwhisper demo

Lets start with something simple....can you improve your efficiency by using AI to transcribe instead of having to write...here is an example of an app called Superwhisper that can help you do that:

`[demo of Superwhisper...need to find something relevant to use perhaps in Word doc showing how it takes out the ums and ahs too]`

### What could the future of AI in the workplace look like? - An Agentic World

"Right now, you're AI users. In 2 years, you could be managing teams of AI agents!"

What exactly is an Agent? 

Definition:

- **AI Agents**: Autonomous AI assistants that can perform multi-step tasks
- Example: "An agent that monitors risk limits, drafts exception reports, and schedules approval meetings"
- See some good papers here:
	- Anthropic: https://www.anthropic.com/engineering/building-effective-agents
	- Google: https://ia600601.us.archive.org/15/items/google-ai-agents-whitepaper/Newwhitepaper_Agents.pdf
	- OpenAI: https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf

This may seem afar fetched now, but I am going to walk you through an example of how this might actually work and at the end we can see if that statement is just a pipe-dream to a future possibility.

---

# How could AI help for Risk Change and Risk IT?

A worked example: From Emails to Apps - Credit Risk Workflow Journey
## What are Credit Risk trying to achieve?

- Visual: Credit Risk are currently managing their Credit Limit Request process manually through emails which is slow, not very transparent
- "Sarah's on holiday = approvals stop for a week"
- "Which version is the latest? Email_v3_final_FINAL_v2.xlsx"

## Part 1: Level Up Your AI Prompting Game

### The Power of Structured Prompting

#### Example: Business Requirements Document

**Scenario**: "We need a BRD for replacing our email-based credit approval system"

**Bad Prompt**:

```
"Write a BRD for a credit risk workflow system"
```

If that bis "Bad" then what makes a "good" prompt:
- Give more context! - bad prompting is giving 1 sentence and asking to LLM to generate 1000 sentences -> good prompting is giving LLM 100 sentences and asking to generate 100 sentences (almost like the saying "I wanted to write you a short letter but I didnt have the time so I wrote you a long letter instead" - make sure what you put in your prompt is well thought out!)
- Use xml or markdown to break up prompt into sections - LLM's use xml internally and therefore know it structure well
- Give it a role - if it know the role it will perform to that role
- Tell it exactly the output format if you want it in a particular way
- Specifically tell the LLM to ask any questions if the requirement is vague
- If you are struggling to come up with the right prompt then ask the LLM to some up with the prompt or to refine you prompt further (this is especially useful when you are running out of context on an existing session (see example)

**Good Prompt**:

```xml
<context>
Current Process: Credit analysts email Excel files for approval through 5 different stakeholders
Average approval time: 3-5 days
Pain points: Lost emails, version control issues, no audit trail
Monthly volume: 150 credit assessments
</context>

<task>
Create a comprehensive Business Requirements Document for a new Credit Risk Workflow System
Ask me questions to help fill out any gaps.
</task>

<requirements>
- Executive summary (max 200 words)
- Current state analysis with process flow
- Future state vision with measurable benefits
- Functional requirements (categorized by priority)
- Non-functional requirements (performance, security, audit)
- Success metrics and KPIs
</requirements>

<format>
- Use numbered sections with clear headings
- Include a requirements traceability matrix
- Add diagrams using mermaid syntax for process flows
- Create user stories in "As a... I want... So that..." format
</format>

<stakeholders>
Risk Analysts, Credit Approvers, Compliance Team, IT Security
</stakeholders>
```

Using this enhanced prompting will dramatically increase the quality of output
### The Power of Voice

Remember our Superwhisper example earlier?

Why capture detailed notes in a meeting when AI can do it for you - this is an obvious use case we are already using but taking these notes to the next level we can use LLM's to directly create BRD's from meeting notes - we should be doing this today!

What about meetings that are not on Teams?
You have a hone already which has capabilities to support this:
- Simple Voice memos
- Using an app such as Otter.ai (has limited free use but enough for shorter meetings - less than 40mins)

![[Pasted image 20250523092438.png]]

### Artifacts

- Transcribed meeting minutes - [[Credit Workflow Meeting Minutes]]
- Example PRD - [[PRD (v3)]]

---

## Part 2: Prototyping a new approach - Credit Risk Workflow Example

### Old versus new approach

Just using AI to gather and write requirement documents is really the tip of the iceberg, we can use AI in all of the steps in a Change project, including the technology aspects.  I am not just talking about using AI in each step to help us, I am talking about changing the approach from the  "traditional":
Business Requirements Document -> Technical Requirements Document ->  Code -> Unit & Integration Testing -> UAT -> Release

To an approach where Risk Change can do more prototyping with less reliance on documents where it is difficult to fully explain the actual functionality and implications of certain choices. Using prototyping is also a better mechanism to get early feedback from actual end-users.  This is a hard lesson learned from our experiences with the FMDM project where functionality tested today is quite different from what we envisioned and was written down in documents from 5 years ago!!

None of the steps actually change, but the flow of these steps works slightly differently such that you iterate through the cycles multiple times in succession using prototypes to refine the product.

### "Vibe coding"  might be the future of prototyping

If you have been following AI developments recently you may have come across a phenomenon called "vibe coding" coined in March 2025 by Andrej Karpathy, one of the founder of OpenAI and formerly head of self-driving as Tesla in this post in X:

![[Pasted image 20250524182052.png]]

If you are interested in vibe coding you may also want to watch some of these YouTube channels:
- Riley Brown: https://www.youtube.com/@rileybrownai
- Sean Kochel: https://www.youtube.com/@iamseankochel

Essentially in vibe coding you get AI to do your coding for you.  This has been made a lot easier for non-professional developers though tools such as:
- Cursor: https://cursor.ai/
- Windsurf: https://windsurf.com
- Lovable: https://lovable.dev/
- Replit: https://replit.com/

Armed with my new found vibe-coding superpowers I decided to try and vibe-code a Credit Risk Workflow prototype here is some of my experiences and lessons learned.

TLDR: "Before you write code make a plan"

### My Three Prototyping Attempts and lessons learned

#### Attempt 1: "Diving In"

- Took Product Requirements Document plugged into Claude
- Started coding immediately
- No clear architecture
- Result: Spaghetti code that didn't work
- **Lesson**: AI can code, but it needs direction
#### Attempt 2: "Better Planning, But..."

- Created basic design documents
- Halfway through: "Let's change the database!"
- Result: Frankenstein system
- **Lesson**: Changing fundamental design mid-flight = disaster

#### Attempt 3: "AI as My Architect"

- Comprehensive planning phase (reference Sean Kochel method)
- Detailed architecture BEFORE coding
- AI helped design, then build
- Result: Working prototype in days, not months

### A structured prototyping approach & steps involved

Plan before code approach: Explore -> plan -> confirm -> code -> commit

"75% of real software application development is done during the planning phase"

Although there are alternative workflows that you can use:
- Write tests -> commit -> code -> iterate -> commit
- Write code -> screenshot -> iterate

#### Step 1: Do some Deep Research

Many of the new AI models have the ability nto do Deep Research which put the model into "thinking mode" ...the difference is instead of just sending the first version of the output, it performs multiple versions of the request and evaluates the alternatives to refine the final output.  This is known as reinforcement learning and has recently become very popular after it was used by DeepSeek, a new Chinese LLM that gained popularity recently, showing the improvements that can be made through re-inforcement learning.

Do some Deep Research first - see example here: [[Credit Workflow System - Deep Research Prompt]]

#### Step 2: Gather Comprehensive Business Requirements

As already shown above, however a PRD/BRD is only one artefact that help to gather good requirements, this should also include other visuals which can help to bring the requirements to life.

- Example state transition and workflow diagrams using Mermaid
	- [[Credit Risk Workflow - Transition State Model (v3)]]
	- [[Credit Workflow - Mermaid Charts - State Transition & Workflow (v3)]]
	- [[Credit Workflow - Mermaid Chart -  Entity Relationship Diagram (v3)]]

#### Step 3: UI/UX Design

In our traditional approach we are so focused on trying to capture documentation of all of the detailed functionality that we forget about UI/UX design until the very end when we are performing User Acceptance testing...and by then it is too late!  Even worse, we leave the UI/UX Design to backend developers who typically are not specialists in this area. 

With a prototyping approach we try to build the design aspects up front since we are trying to get something in front of end-users as quickly as possible.

It is useful to get the design and aesthetics done first to set an overall style for the app as all other aspects of the front end need to keep consistent with that design.  What we are trying to get first is a Design Brief, here is an example prompt for this type of artefact:

Prompt:
```
<goal>
You are an industry-veteran SaaS product designer. You’ve built high-touch UIs for FANG-style companies.

Your goal is to take the context below, the guidelines, and the user inspiration, and turn it into a functional UX/UI style-guide
</goal>

<inspirations>
The attached images serve as the user’s inspiration (if any). You don’t need to take it literally in any way, but let it serve as an understanding of what the user likes aesthetically 
</inspirations>

<guidelines>

<aesthetics>
- Bold simplicity with intuitive navigation creating frictionless experiences
- Breathable whitespace complemented by strategic color accents for visual hierarchy
- Strategic negative space calibrated for cognitive breathing room and content prioritization
- Systematic color theory applied through subtle gradients and purposeful accent placement
- Typography hierarchy utilizing weight variance and proportional scaling for information architecture
- Visual density optimization balancing information availability with cognitive load management
- Motion choreography implementing physics-based transitions for spatial continuity
- Accessibility-driven contrast ratios paired with intuitive navigation patterns ensuring universal usability
- Feedback responsiveness via state transitions communicating system status with minimal latency
- Content-first layouts prioritizing user objectives over decorative elements for task efficiency
</aesthetics>

<practicalities>
- The organisation is a joint ventur betrween two companies ICBC which has a red primary colour palette and standard bank which has a primary blue colour as indicated below 
- icbc-red: #e31937; Primary red colour 
- standard bank-blue: #0c4da2; Primary blue colour 
- This is meant for a website design but later transition to iPhone or tablet would help
</practicalities>

</guidelines>

<context>

<app-overview>
The app is for Credit Risk Workflow, traversing the following process: 
1) Credit Request: the relationship manager requests the extension of credit limits for a counterparty in a Credit Request form. This credit request moves to a Credit Review form where, 
2) Credit Review: a credit analyst reviews the Credit Request and sets a specific approval level required and identifies the need for an additional Credit Questionnaire to be completed. After which 
3) Business Sponsorship: a business sponsor provides further justification and approves the request to move to analysis 
4) Analysis: The analysis phase splits into 3 parallel sub-processes: 
	a) Credit Qustionnaire completion - if required during Credit Review 
	b) Legal Review completion - analysis of legal documentation requirements 
	c) Credit Analysis - the most substantial part where financial details are captured and analysed to determine whether credit can be extended 
5) Credit Paper compliation - final review of all associated forma and capture of final comments 
6) Approval or Rejection of the Credit Request 
A dashboard is required to track overall progress and serve as an inbox for various stakeholder to access forms and progress workflows.
</app-overview>

<task>

Your goal here is to think like a designer and build a “style guide” for the app as a whole. Take into account the following:

Primary colors
Secondary colors
Accent colors
Functional colors
Background colors
Font families
Font weights
Font styles
Button styling
Card styling
Input styling
Icons
App spacing
Motion & animation
  
I need you to look at the examples in my project folder:
Credit Risk Workflow - Colour Palette.tsx
Interactive Credit Request Form.tsx
Legal Review Form.tsx
Credit questionnaire Form.tsx
Credit Risk Workflow - Dashboard.tsx

and give me a cohesive Design Brief. Here’s an EXAMPLE of how I want it formatted:

<format>
##Color Palette

### Primary Colours
- Primary Colour - #XXXXXX (Used for backgrounds and clean surfaces)
- Primary Colour - #XXXXXX (Primary brand color for buttons, icons, and emphasis)

### Secondary Colours
- Secondary Colour - #XXXXXX (For hover states and secondary elements)
- Secondary Colou - #XXXXXX (For backgrounds, selected states, and highlights)

### Accent Colours
- Accent Colour - #XXXXXX (For important actions and notifications)
- Accent Colour - #XXXXXX (For warnings and highlights)

### Functional Colours
- Success Colour - #XXXXXX (For success states and confirmations)
- Error Colour - #XXXXXX (For errors and destructive actions)
- Neutral Colour - #XXXXXX (For secondary text and disabled states)
- Dark Colour - #XXXXXX (For primary text)

### Background Colours
- Background Colour - #XXXXXX (for cards and content areas)
- Background Colour - #XXXXXX (for app background)
- Background Colour - #XXXXXX (For dark mode primary background)

## Typography

### Font Family
- Primary Font: XXX
- Alternative Font: XXX

### Font Weights

- Regular: XXX
- Medium: XXX
- Semibold: XXX
- Bold: XXX

### Text Styles

#### Headings
- H1: XXX
- Used for screen titles and major headers

- H2: XXX
- Used for section headers and card titles

- H3: XXX
- Used for subsection headers and important text

#### Body Text
- Body Large: XXX
- Primary reading text for transcript content    

- Body: XXX
- Standard text for most UI elements

- Body Small: XXX
- Secondary information and supporting text

#### Special Text
- Caption: XXX
- Used for timestamps, metadata, and labels    

- Button Text: XXX
- Used specifically for buttons and interactive elements

- Link Text: XXX
- Clickable text throughout the application    

## Component Styling

### Buttons

- Primary Button
- Background: Colour (#XXXXXX)
- Text: Colour (#XXXXXX)
- Height: XXdp
- Corner Radius: XXdp
- Padding: XXdp horizontal

- Secondary Button
- Border: XXdp Colour (#XXXXXX)
- Text: Colour (#XXXXXX)
- Background: e.g. Transparent
- Height: XXdp
- Corner Radius: XXdp

- Text Button
- Text: Colour (#XXXXXX)
- e.g. No background or border
- Height: XXdp

### Cards

- Background: Colour (#XXXXXX)
- Shadow: Y-offset XXdp, Blur XXdp, Opacity XX%
- Corner Radius: XXdp
- Padding: XXdp

### Input Fields

- Height: XXdp
- Corner Radius: XXdp
- Border: XXdp Colour (#XXXXXX)
- Active Border: XXdp Colour (#XXXXXX)
- Background: Colour (#XXXXXX)
- Text: Colour (#XXXXXX)
- Placeholder Text: Colour (#XXXXXX)

### Icons

- Primary Icons: XXdp x XXdp
- Small Icons: XXdp x XXdp
- Navigation Icons: XXdp x XXdp
- Primary color for interactive icons: Colour (#XXXXXX)
- Secondary color for inactive/decorative icons: Colour (#XXXXXX)

## Spacing System

- XXdp - Micro spacing (between related elements)
- XXdp - Small spacing (internal padding)
- XXdp - Default spacing (standard margins)
- XXdp - Medium spacing (between sections)
- XXdp - Large spacing (major sections separation)
- XXdp - Extra large spacing (screen padding top/bottom)

## Motion & Animation

- Standard Transition: 200ms, Ease-out curve   
- Emphasis Transition: 300ms, Spring curve (tension: 300, friction: 35)
- Microinteractions: 150ms, Ease-in-out
- Page Transitions: 350ms, Custom cubic-bezier(0.2, 0.8, 0.2, 1) 

## Dark Mode Variants

- Dark Background: #XXXXXX (primary dark background)  
- Dark Surface: #XXXXXX (card backgrounds)
- Dark Primary Colour: #XXXXXX (adjusted for contrast)
- Dark Text Primary: #XXXXXX
- Dark Text Secondary: #XXXXXX

</format>

</task>

</context>

```

Resulting document: [[Credit Workflow Design Brief.md]]

#### Step 4: Design Specific Forms/Screens

Once you have an overall Design Brief you can start to design specific screens.

Prompt used to design specific forms based on PRD:
```
<goal>
You are an industry-veteran SaaS product designer. You’ve built high-touch UIs for FANG-style companies.

Your goal is to take the context below, the guidelines, and the user requirements, and design specific screens in accordance with the UX/UI design brief.
</goal>

<aesthetics>
- Bold simplicity with intuitive navigation creating frictionless experiences
- Breathable whitespace complemented by strategic color accents for visual hierarchy
- Strategic negative space calibrated for cognitive breathing room and content prioritization
- Systematic color theory applied through subtle gradients and purposeful accent placement
- Typography hierarchy utilizing weight variance and proportional scaling for information architecture
- Visual density optimization balancing information availability with cognitive load management
- Motion choreography implementing physics-based transitions for spatial continuity
- Accessibility-driven contrast ratios paired with intuitive navigation patterns ensuring universal usability
- Feedback responsiveness via state transitions communicating system status with minimal latency
- Content-first layouts prioritizing user objectives over decorative elements for task efficiency
Specific details about the design can be found in the attached document - Credit Workflow Design Brief.md
</aesthetics>

<app-overview>
The Credit Risk Workflow app is outlined in some detail in the requirements document attached - PRD (v3).md specifically in the functional requirements section which detailed the exact workflow and screens required.
</app-overview>

<inspiration>
Some example forms have already been developed and attached in this project which serve as the user’s inspiration. These form resemble quite closely some of the key requirements in the PRD but lack some of the specific details which have been outlined in the PRD.
</inspiration>

<task>
I need example forms to be developed in accordance with that outlined in the PRD, specifically:
Parent process:
- Credit Paper (including workflow section at the top of the Credit Paper)
Sub-processes:
- Credit Request
- Credit Review
- Business Sponsorship
- Credit Questionnaire
- Legal Review
- Credit Analysis (with all sub-sections within this form)
- Credit Paper Compilation
- Credit Approval
Dashboards:
- Request Tracking Dashboard
- Performance Metrics Dashboard

I need each of these as a separate form and if these are too long, then it might be better to also break out into further sub-forms e.g. Credit analysis.
</task>

<output format>
The front end application will be built in React and Material-UI so the format should be consistent with that technology choice.
</output format>

```

Example artefacts see examples in Claude Credit Workflow Design Project under:

1. Credit Risk Workflow React Components (for Credit Request Form)
2. Credit Workflow UI Design (Credit Review Form, Business Sponsorship Form, Credit Questionnaire Form and Legal Review Form)
3. Credit Analysis Form Design (Credit analysis Form)
4. Credit Request Tracking Dashboard Design (Dashboard Form)

#### Step 5: Architecture design

Even for a prototype you need to spend the time getting the architecture right!  This step is essential if you are using a number of different technologies.  For my prototype I chose a React Front end and Python Django backend which was established as part of my requirements gathering (see section 6.1 Technology Recommendation) when looking at the different technology options and evaluating the best options given the business requirements.

Since I had already done some research on this in my earlier attempt, I was able to pull togther a cohesive architecture document based on both the original version in attempt 1 and new version from attempt 3.

Original Version:
see Claude steps in Project folder in chat entitled: "Credit Risk Workflow Tool with Django"

Prompt:
```
I'm working on implementing a Credit Risk Workflow Tool using Django and a custom workflow engine. The system will track credit limit requests through approval stages (from Front Office to Credit Risk to Legal to final approval). Key requirements: 
- Digital forms for complex credit requests 
- Document generation (PDFs with tables, financial data) 
- Dashboard for tracking requests 
- Email notifications 
- Role-based permissions 
I already have a PRD with detailed requirements in my Obsidian vault called "Credit Risk Workflow Tool PRD". 
Can you help me with technical advice on: 
1. Django models design for the workflow system 
2. Best approach for form handling with complex nested data 
3. PDF generation strategy for financial documents 
4. Authentication and permission system implementation
```

New version:
See Claude steps in chat (not in project folder) entitled: "Integrating React Front-end within Django Credit Risk App"

Prompt:
```
I am looking to build a Credit Risk Workflow application in python django. I have already done some pre-work designing some screens for the front end using react. Would these react front end screens integrate well with a python django app or should they rather be taken as inspiration. What is best to use for the front end development?
```

See final document entitled: [[Credit-Risk-workflow-architecture]]

#### Step 6: State Model & Database Schema

Original version was done in Claude in the chat entitled: "Credit Risk Workflow Database Schema"

Database Schema Prompt (adapted from original version):
```
<role>
You are a database design specialist.
</role>

<context>
I am building a Credit Risk Workflow system.  The requirements are captured a Product Requirements Document - PRD (v3).md. which is stored in my Obsidian vault in the Credit Risk Workflow folder.
</context>

<task>
I need you to design a database schema consistent with the PRD. Please create: 
1. An entity-relationship diagram showing all major entities 
2. Description of key relationships 
3. Suggested fields for each model including data types Focus on these key components from the PRD: 
- User roles (Credit Analyst, Relationship Manager, etc.)
- Counterparty
- Limit
- Workflow states and transitions 
- Credit Paper forms and their components (Credit Request, Credit Review, Business Sponsorship, Legal Review, Credit Questionnaire, Credit Analysis, Credit Compilation, Credit Approval etc.)
- Document management
</task>

```

The Entity Relationship diagram can be viewed in Mermaid as follows:

Online Mermaid Live Editor:
- Go to [https://mermaid.live](https://mermaid.live)
- Open the file in a text editor, copy the code, and paste it into the Mermaid Live Editor
- The diagram will render automatically

State Model Design Prompt:
```
Based on the Credit Risk Workflow PRD, the Database Schema design and the Credit-Risk-workflow-architecture documents I need to design a workflow state machine model and associated transition model. Please provide: 
1. Workflow States 
2. Role Permissions 
3. Workflow Transitions 
4. Actions required to effect Transitions 
5. Any important Notes associated with the specific transition

Also can you produce a mermaid chart for the workflow state machine model and transitions
```

See final artefacts here:
- Database Design: [[Credit Risk Workflow System Database Schema (v3)]]
- Transition State Model: [[Credit Risk Workflow - Transition State Model (v3)]]

#### Step 7: Pre-Planning Consistency Check

I have spent a significant amount of time getting together all of the requisite documentation, however this has been done in individual steps.  I want to first check that I have all the relevant documentation first and that these documents are consistent before doing the final plan.

Pre-planning Prompt:

```
<Background>
I am building a Credit Risk Workflow system. I have created a Product Requirements Document - PRD (v3).md, which is attached. This requirements document outlines: 
- An overview of the requirements 
- Specific functional requirements 
- Non functional requirements 
- High level Technical Requirements and Technology choices and final selection (using python Django for backend and React for Front end) 
- A glossary of important terms 
</background>

<Technology specific requirements>
The key technology choice is using:
- Python Django with custom workflows for the backend
- React and Material-UI as a front end.
- Deployment of the python components using uv, specifically with Prefer `uv add` and `uv sync` over pip for managing dependencies.
- Postgres database and file local file storage
- Initially this will run on a local server directly but later on the plan is to "dockerise"
The specific technology details are captured in the attached document Credit-Risk-workflow-architecture.md.
</Technology specific requirements>

<Additional information>
In addition to the PRD (v3).md and Credit-Risk-workflow-architecture.md documents, there are some additional documents that can help with specific implementation details:
1) Credit Risk Workflow System Database Schema (v3).md - which has information about the specific database fields to support application forms, roles, transitions etc.
2) Credit Risk Workflow Transition State Model (v3).md - which has some further detail to assist in the build of the specific workflows 
3)  Credit Workflow Design Brief.md - this provides input for the branding of the application
</Additional information>

<Your role>
I need to plan this project very carefully and perform the build in an incremental manner, this will allow:
1) Me to understand the code base as it gets built incrementally
2) Ensure that we keep good documentation as we go along 
3) Allow test cases to be developed as we build the functionality so that we have comprehensive coverage at the end 

You are both an experienced python django and react developer, as well as a seasoned project manager with experience building complex systems with many dependencies.

I need you to review all of the files provided to determine if there are any inconsistences or gaps that need further exaplanation or any other specific documents that should be provided in order to build a detailed project plan.
</Your role>)

<output>
At this stage I do not want you to develop the plan itself, but only output a list of specific:
- Inconsistencies or areas that require clarification in the existing documents
- Gaps in the existing documents
- Missing documents or areas which need to be documented
in order to facilitate the next step which will be to build a comprehensive project plan.
</output>

```

#### Step 8: Project Plan

In Claude chat entitled: "Credit Risk Workflow System Requirements and Project Plan" I asked to build a Project Plan using the following prompt:

Project Plan Prompt:
```
Background:
I am building a Credit Risk Workflow system. I have created a Product Requirements Document - PRD (v3).md, which is attached. This requirements document outlines: 
- An overview of the requirements 
- Specific functional requirements 
- Non functional requirements 
- Technology choices and final selection (using python Django) 
- Post go live requirements such as training and support 
- A glossary of important terms 

Technology specific requirements: 
The key technology choice is using Python Django with custom workflows. As a further enhancement I would like to ustilise a hybrid approach whereby I:
1. Start with a `uv` environment for initial Django development - using uv since it is based on Rust and works faster than a traditional Python virtual environment using pip 
2. Develop core functionality (models, workflow engine, basic views) 
3. Once the core functionality of the application is working, then "Dockerise" the application to run in a Docker container 
4. Complete the remaining development in the containerized environment 

Additional information:
In addition to the PRD, there are some additional documents that can help with specific implementation ideas: 
1) workflow_transitions.md - which has some further detail to assist in the build of the specific workflows 
2) role_implementation.md - which has some information about implementing roles
3) .css files for both the main application as well as the admin screens - this provides input for the branding of the application 

Your role:
This is an extremely ambitious project, in particular because I am not an experienced developer and only have a high level understanding of the chosen technology. For this reason we need to plan this project very carefully and perform the build in an incremental manner, this will allow:
1) Me to understand the code base as it gets built incrementally - so you will be teaching me as we go 
2) Ensure that we keep good documentation as we go along 
3) Allow test cases to be developed as we build the functionality so that we have comprehensive coverage at the end 

You are both an experienced python developer, experienced project manager as well as a great teacher to succeed in this project - you will need all of these skills but each of these skills will be needed in very specific phases. 

What you need to output:
I need you to build a comprehensive project plan (in markdown format) with specific steps that will be needed in order to achieve the final goal of a working Credit Risk Workflow system 
I need you to identify the specific skills that will be need for each step. 
I need a checklist that identified each step so we can keep track of progress and mark-off each step as it is done
```

See the version here: [[Credit Risk Workflow - Project Plan FINAL]]

In version 3 I used Clause Taskmaster (https://github.com/eyaltoledano/claude-task-master) to generate the plan which is embedded into the  Code editor (Windsurf) using an MCP-Server.

#### Step 9: Set up AI Coding Tools

Modern AI coding tools, as outlined in Vibe Coding section above, are the key to doing prototypes as a non-developer.  These tools allow you to code using just natural language.

There are also Low-Code solutions such as n8n (https://n8n.io/) which are also very powerful tools, especially for workflow automation.

`Possible Live mini-demo: showing this web page app`

In order to get the best out of these tools, as indicated before you get the best results when you keep the LLM focused.  In this particular instance you want to keep the LLM focused on the particular coding language choices made during the technology evaluation phase of you plan.  In my example that is Python Django and React.

I had already put some rules into Windsurf (my vibe-coding IDE of choice), but I wanted these refined further so I let the LLM do that refinement for me:

Prompt:
```
I have added a local rules file to my credit-project entitled .windsurfrules, stored here: /Users/gavinslater/projects/credit-project. Can you use this to create your own local rules for this project.
```

As a result Windsurf created these local rules specific to this particular project:

```
**Cascade Local Rules for credit-project**

1. Write clear, technical code with precise Django implementations.
2. Use Django's built-in features and tools wherever possible.
3. Prioritize readability and maintainability (PEP 8 compliance).
4. Use descriptive variable and function names with consistent naming conventions.
5. Structure the project in a modular way using specialized Django apps (e.g., users, workflow_engine, credit_applications, documents, core).
6. Each app should have a clear, single responsibility, with dedicated subdirectories for models, views, services, and tests.
7. Maintain separate settings files for different environments (dev, test, prod).
8. Keep frontend (React) and backend (Django) code separate but well-integrated.
9. Implement a service layer pattern to separate business logic from views and models:
    - Service classes for each domain (e.g., ApplicationService, WorkflowService)
    - Models focused on data structure and simple data access
    - Services orchestrate complex operations and handle transaction management
    - No business logic in views, forms, or serializers
    - Services for all advanced DB operations
10. Use Django CBVs for complex views, FBVs for simple logic.
11. Leverage Django ORM; avoid raw SQL unless necessary.
12. Extend Django user model for role-based permissions.
13. Use Django forms/model forms for validation.
14. Use middleware judiciously.
15. Workflow engine as a reusable, standalone app:
    - State machine architecture, DB-backed workflow definitions/instances
    - Generic relations for flexibility
    - Transition-level permission checks
    - Comprehensive audit trail of state transitions
    - Logic separated from domain-specific rules
16. Document management:
    - Use ContentType framework to attach documents
    - Define document types, allowed extensions, size limits
    - Unique storage paths, preserve original filenames
17. Always consider security, performance, and scalability from the start.
18. Avoid code duplication; reuse existing patterns and code where possible.
19. Write thorough tests for all major functionality.
20. Avoid major architectural changes unless explicitly instructed.
21. Focus only on code relevant to the task; do not touch unrelated code.
22. Never mock or stub data for dev/prod; only for tests.
```

#### Step 10: Set up MCP Servers - The Future of AI Integration

Before we start coding we need want our coding IDE to make use of some additional tools.  These tools give the coding editor additional super-powers to do certain tasks for example, browse the web, search for documents in your computer, or in my case access an application that helps to build project plans - claude taskmaster (https://github.com/eyaltoledano/claude-task-master)

These tools can be built in to your IDE using MCP-servers (Model Context Protocol Servers), which are standardised ways for AI to interact with your tools.  This protocol was developed by Anthropic and made as an open standard to allow LLMs to interact with tools to perform tasks on your behalf.

See Anthropic paper here: https://www.anthropic.com/news/model-context-protocol

In a traditional coding sense an API (Application Programming Interface) is the mechanism to perform tasks with outside tools, MCP severs are the next iteration of this.  

The "problem" with this is that you have to go and:
- read all of the documentation about how the API works
- programme an API end-point with specific configuration parameters for each API function
- build an integration into your app for each API
- if the API changes you have to go and change all of those API end-points

You can think of an MCP server as something which has:
- all of the documentation about an API
- a specific implementation for each API end-point
- knowledge of what types of prompts would work best for each end-piont

Once a particular MCP server is configured, in this approach you can ask your LLM in natural language to perform a task and it will automatically:
- look for the relevant tools that can perform this task,
- populate the API requests with all the necessary parameters based on the documentation
- execute the tool request

Even if the API changes the MCP server will automatically adapt and allow the integration to keep working!

#### Step 11: Project Plan using Task Master

In Windsurf to start planning using my claude taskmaster MCP Server I prompt the following:

`initialise task master for this project`

It responds as follows:

```
Task Master has been successfully initialized for your `credit-project`.

**Next steps:**

1. You need a `prd.txt` file (Product Requirements Document) in the `scripts/`  directory (e.g., `scripts/prd.txt`). This file will be used to generate your initial set of tasks.
2. If you already have a `prd.txt` file, I can proceed to parse it and create your tasks.
3. If you do not have a `prd.txt` file, I can help you create one based on your project requirements or by using a template.

Would you like to:

- Proceed with parsing an existing `scripts/prd.txt` file?
- Have me help you create a new `prd.txt` for your project?
- Review an example template first?

Let me know how you’d like to proceed!
```

My response:

```
I have a number of documents already prepared as follows: 
- Product Requirements Document - PRD (v3).md 
- Architecture documents:
	- Credit-Risk-workflow-architecture.md 
	- Credit Risk Workflow - Transition State Model (v3).md 
	- Credit Risk Workflow Syatem Database Schema (v3).md 
	- Credit Risk Workflow Design Brief.md 
I would like to factor in all of this pre-planning into my project plan and task list
```

Windsurf:

```
Great, you have a comprehensive set of planning documents! To ensure your project plan and task list are as thorough and accurate as possible, I will:

1. Locate and review each of the following documents in your project:
    
    - Product Requirements Document - PRD (v3).md
    - Credit-Risk-workflow-architecture.md
    - Credit Risk Workflow - Transition State Model (v3).md
    - Credit Risk Workflow Syatem Database Schema (v3).md
    - Credit Risk Workflow Design Brief.md
2. Synthesize the key requirements, architecture, workflow, and design elements from all these documents.
    
3. Combine the insights into a unified `prd.txt` in your `scripts/` directory, which will serve as the basis for parsing and generating your Task Master project plan and tasks.    

Let’s start by locating these files in your project directory so I can review their contents.
```

Windsurf (with task master) then proceeds to generate a plan with various tasks along with an analysis of the complexity of each task:

```
Here's a summary of the task complexity analysis:

1. **High Complexity Tasks (Score 8-9)**:
    - Database Schema Design and Implementation (Task 2, Score 8)
    - Workflow Engine Core Implementation (Task 4, Score 9)
    - Workflow Sub-process Implementation (Task 7, Score 9)
    - Testing and Quality Assurance (Task 18, Score 9)
    - Deployment and DevOps Setup (Task 19, Score 8)
2. **Medium Complexity Tasks (Score 6-7)**:
    - Project Setup and Environment Configuration (Task 1, Score 6)
    - Frontend Setup and Authentication UI (Task 8, Score 6)
    - Dashboard Implementation (Task 9, Score 7)
    - Document Upload and Management UI (Task 11, Score 7)
    - Reporting and Analytics Features (Task 14, Score 8)
    - System Administration UI (Task 17, Score 7)
3. **Key Insights**:
    - The workflow-related tasks (2, 4, 7) are the most complex due to their architectural and state management requirements
    - Testing and deployment are critical high-complexity tasks
    - Frontend tasks have moderate complexity due to UI integration and state management
    - The database schema is particularly complex due to its cross-domain relationships
4. **Recommendations**:
    - For high-complexity tasks (8+), consider breaking them down into more subtasks (recommended 10-12)
    - Medium-complexity tasks (6-7) should be broken down into 8-10 subtasks
    - Focus on proper testing and documentation for high-complexity tasks
    - Consider parallel development for independent tasks while focusing resources on high-complexity areas

Would you like me to:

1. Expand any specific task into its recommended subtasks?
2. Focus on the highest complexity areas first?
3. Create a phased implementation plan based on complexity?

Let me know how you'd like to proceed!
```

I can then ask task master to break down the complex tasks further:

```
Can you expand the high complexity tasks into more detailed sub-tasks
```

Response from Windsurf:

```
I've successfully broken down the Workflow Engine Core Implementation (Task 4) into 11 detailed subtasks, following the recommended complexity score of 9. Each subtask is focused on a specific aspect of the workflow engine and includes clear implementation details, dependencies, and test requirements.

Would you like me to:

1. Break down another high-complexity task (like Database Schema or Testing)?
2. Review and adjust the dependencies between subtasks?
3. Add more detailed implementation steps to any specific subtask?

Let me know how you'd like to proceed!
```

Continue to iterate until the tasks are all at the appropriate leval and any other details are ironed out appropriately.

#### Step 12: Start Vibe Coding

Once this planning has been done it is time to start vibe coding:

```
I would like to proceed with building my project can you start at task 1
```

#### Step 13: Testing

As functionality is built it is best practice to build test cases as you go and ask the LLM to perform the tests and generate a test report.

#### Step 14: Documentation

Equally important is to do documentation as you go and ask the LLM to do this for you.

```
Can you create a markdown file called Task 2 Documentation with information on all of the steps we just perfomed for task 2 and put it in a Documentation folder
```

#### Step 15: Regular backups

Make sure you keep your code base properly up to date.  Using the MCP Server for Github this is as simple as saying:

```
Can you commit the project to github
```

#### Live Demo

- Show the actual working system
- Highlight: Built by a non-developer

---

## Part 3: Building Institutional Memory

### Retrieval Augmented Generation (RAG) - Interactive Demo

What is it?

I mentioned earlier that LLM's work best when given the right context, but their context window is limited.  Retrieval Augmented Generation is an AI framework that enhances LLMs by incorporating external information retrieval. Instead of solely relying on the LLM's pre-trained knowledge, RAG retrieves relevant data from external sources, such as databases or search engines, and uses it to generate more accurate, up-to-date, and contextually appropriate responses.

Interactive web demonstration:

1. Input sample risk documents
2. Show vector conversion animation
3. Query with different words, same meaning
4. Demonstrate why "boss approval" finds "executive authorization"

Why can this be used to "capture" institutional memory?

- We have hundreds of Confluence pages which contain valuable information about our Risk Knowledge Management
- New joiner: "Where do I start?"
- Existing Employee: "What is the process to get access to FMDM?"

Integration of LLM's with RAG on our Confluence can help to make these sort of question answered easily.

---

## Part 4: Next Level Agents using voice

Longer term you can imagine a world where AI Agents are able to conduct interviews on our behalf.

There are already companies starting to look into this  - See YouTube video from AI Daily Brief here: https://www.youtube.com/watch?v=p3K51_CaQ0g

If you would like to see how advanced this is already getting go an visit Sesame here:
https://app.sesame.com/

and go and speak to Maya or Miles for a conversation.

## Part 5: Agent Orchestration

Eventually you can imagine a world where we have numerous specialised Agents, each able to perform very focused tasks.

- Multiple AI agents working together
- Example: Requirements Agent → Design Agent → Test Case Agent
- "You become the conductor, not the performer"

---

## Closing Comments: Your AI Challenge

### Choose Your Level

**🟢 Beginner Challenge**:

- Use XML-structured prompts for 5 work tasks this week
- Share your best before/after in our Teams channel

**🟡 Intermediate Challenge**:

- Pick one repetitive task you do weekly
- Build a simple prototype using Claude/ChatGPT

**🔴 Advanced Challenge**:

- Create a prompt library for your team
- Experiment with an MCP server

## Resources for Continuous Learning

**YouTube Channels**:

Vibe Coding:
- Riley Brown: https://www.youtube.com/@rileybrownai
- Sean Kochel: https://www.youtube.com/@iamseankochel

Stay Current:
- The AI Daily Brief - https://www.youtube.com/@AIDailyBrief
- Matthew Berman - https://www.youtube.com/@matthew_berman
- Matt Wolfe - https://www.youtube.com/@mreflow

Deep Dive:
- Andrej Karpathy's intro videos (warning: long but worth it) - https://www.youtube.com/@AndrejKarpathy
### Final Thought

"The question isn't whether AI will change our jobs. It's whether we'll be leading that change or playing catch-up."

---
