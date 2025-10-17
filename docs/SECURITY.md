# Security Policy

## Supported Versions

We release security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of MYCURE seriously. If you have discovered a security vulnerability, we appreciate your help in disclosing it to us in a responsible manner.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **security@mycure.md** (or your preferred contact email)

Please include the following information in your report:

- Type of vulnerability (e.g., XSS, SQL injection, authentication bypass, etc.)
- Full paths of source file(s) related to the manifestation of the vulnerability
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### What to Expect

After you submit a report, you can expect:

1. **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours
2. **Assessment**: We will investigate and assess the vulnerability within 5 business days
3. **Updates**: We will keep you informed about our progress in addressing the vulnerability
4. **Resolution**: Once the vulnerability is fixed, we will notify you and may publicly disclose it (with your permission)

### Security Update Process

1. Vulnerability is reported and confirmed
2. A fix is prepared in a private repository
3. The fix is tested thoroughly
4. A security advisory is prepared
5. The fix is released as a patch version
6. The security advisory is published

## Security Best Practices

When using MYCURE, we recommend:

- Keep your dependencies up to date
- Use environment variables for sensitive configuration
- Never commit `.env.local` or other files containing secrets
- Enable HTTPS in production
- Regularly review your application's security headers
- Monitor your application for suspicious activity
- Follow the principle of least privilege for API keys and credentials

## Third-Party Dependencies

We regularly monitor our dependencies for known vulnerabilities using:

- npm audit
- Dependabot alerts
- Security advisories from the Node.js and Next.js communities

## Contact

For any security-related questions or concerns, please contact:

- **Email**: security@mycure.md
- **Website**: https://mycure.md

Thank you for helping keep MYCURE and our users safe!
