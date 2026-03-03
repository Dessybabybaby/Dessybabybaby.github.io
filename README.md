# Achusi Desmond | Cybersecurity & IT Operations Portfolio

> I build and automate secure IT environments that improve threat visibility, reduce incident response time, and harden infrastructure against operational and cyber risks.

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE.txt)
[![Astro](https://img.shields.io/badge/Astro-v5.0+-ff5f1f)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8)](https://tailwindcss.com)
[![Deployment: GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-2ea44f)](https://dessybabybaby.github.io)

---

## What This Portfolio Demonstrates

**Security monitoring automation** 
**Vulnerability intelligence ingestion and triage**
**Log analysis and detection scripting**
**OSINT-based exposure monitoring**
**Infrastructure hardening practices**
**Communicating Securtiy**

---

## Technical Features

* **Python**
* **n8n**
* **GitHub Actions (CI/CD)**
* **Astro (static site framework for portfolio deployment)**

---

## Selected Security Pipelines

1.  **[CVE-RSS Alert System](https://github.com/Dessybabybaby/cve-rss-alert-system)**: Real-time vulnerability monitoring and risk evaluation.
2.  **[Secret Exposure Pipeline](https://github.com/Dessybabybaby/secret-exposure-monitoring-pipeline)**: Automated scanning for leaked public credentials.
3.  **[OSINT Email Harvester](https://github.com/Dessybabybaby/osint-email-harvester)**: Security research tool for data harvesting and validation.
4.  **[Log File Analyzer](https://github.com/Dessybabybaby/log-file-analyzer)**: Automated threat detection within server system logs.

---

## Development Setup

This project uses the Tailwind CSS V4 engine. Configuration is handled directly via `src/styles/global.css`.

### Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds production site to `./dist/` |
| `npm run preview` | Previews the production build locally |

### Project Structure
```text
/
├── public/          # Static assets (Favicons, etc.)
├── src/
│   ├── components/  # Modular Astro components (Hero, Work, Intro)
│   ├── layouts/     # Base HTML structure
│   ├── pages/       # Routing (index.astro)
│   └── styles/      # Tailwind V4 CSS configuration (global.css)
└── package.json     # Project metadata and dependencies