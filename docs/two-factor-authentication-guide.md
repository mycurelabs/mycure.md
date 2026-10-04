# Two-factor authentication guide

Public route: `/guides/two-factor-authentication`.

## Screenshot provenance

The five WebP images in `public/guides/two-factor-authentication/` show the actual MYCURE account-security and authentication components against a local Hapihub backend, using an unmistakably synthetic account with no clinic or patient records. They were captured in a standalone page harness rather than the clinic dashboard shell. Enrollment was completed and the backend session confirmed `twoFactorEnabled: true`.

The account setup order in the current application is:

1. Select **Enable Two-Factor** in Login and Security.
2. Confirm the MYCURE password.
3. Save backup codes and select **Continue**.
4. Scan the enrollment code and verify a current authenticator code.
5. Confirm the settings card offers **Disable Two-Factor**.

Backup-code values and the entire private enrollment code were covered with opaque screenshot masks before capture. The password confirmation image has an empty input. The images contain no account identifiers or patient information, and were converted to lossless WebP without retaining metadata. No unmasked images, session state, enrollment URI, passwords, or recovery codes belong in this repository.

These are instructional product assets, not evidence of staging or Maestro Box verification. Raw capture files remain outside the repositories.

## Maintenance

- Recapture when button labels, the enrollment order, or authentication UI changes.
- Use only a synthetic account and local test data. Never use a clinic account or patient record.
- Mask every backup code and the entire enrollment code, and inspect every image before copying a sanitized instructional asset into `public/`.
- Never include authentication secrets in capture logs, filenames, traces, or metadata.
- Keep the official store URLs in `lib/account-security.ts` aligned with the MYCURE application's `src/constants/account-security.ts`.
- The application guide link points to the public route. Deploy the website page before distributing an application release that links to it. Deployment is not part of creating the guide.
