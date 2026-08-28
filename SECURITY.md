# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 3.x.x   | ✅ Actively supported |
| 2.x.x   | ⚠️ Critical fixes only |
| 1.x.x   | ❌ No longer supported |

## Reporting a Vulnerability

If you discover a security vulnerability in **Annam Farm Intelligence**, please **do not** open a public GitHub issue. Instead, contact the maintainer directly:

- **Email / LinkedIn:** [linkedin.com/in/madhu-s-](https://www.linkedin.com/in/madhu-s-)
- **Phone:** +91 9740595939

Please include:
1. A description of the vulnerability
2. Steps to reproduce
3. Potential impact assessment
4. Any suggested fixes (optional)

You will receive an acknowledgement within **48 hours** and a resolution timeline within **7 days**.

## Security Model

Since Annam Farm Intelligence is an **offline-first browser app**, the security model differs from traditional web apps:

- **No server-side data storage** — all user data remains on the local device in `localStorage`
- **No external API calls** in the core offline mode — nothing is transmitted over the network
- **Session management** via `sessionStorage` — sessions expire automatically when the browser is closed
- **Password validation** is enforced client-side with strict rules (8+ chars, number, special character)
- **Admin credentials** in the demo are hardcoded — always change these before any real deployment

## Best Practices for Deployment

If you deploy this app publicly:
- Replace all hardcoded admin credentials immediately
- Serve over **HTTPS** (required for Service Workers and PWA features)
- Implement server-side authentication if connecting to a real backend
- Sanitize all user inputs before storing or processing
