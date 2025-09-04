# Scraped Content Directory

This directory contains all scraped content from external websites for reference and recreation purposes.

## Directory Structure

```
scraped-content/
├── screenshots/          # Full page screenshots for visual reference
│   └── [page-name]-full.png
├── data/                # Extracted text and structured content
│   └── [page-name].json
├── assets/              # Downloaded images and media from scraped pages
│   └── [page-name]/
│       └── images/
└── README.md            # This file
```

## Naming Convention

- **Screenshots**: `[page-name]-full.png` (e.g., `clinics-page-full.png`)
- **Data files**: `[page-name].json` (e.g., `clinics-page.json`)
- **Assets**: Organized in subdirectories by page name

## Scraped Pages Log

| Date | Source URL | Target Page | Layout Style | Status |
|------|------------|-------------|--------------|--------|
| 2025-01-03 | https://www.mycure.md/clinics | /app/clinics/page.tsx | product-style | In Progress |

## Usage

1. **Screenshots** - Use for visual reference when recreating layouts
2. **Data** - Contains extracted text content and structure
3. **Assets** - Images and media to be replaced with local versions

## Notes

- Always update this README when adding new scraped content
- Screenshots are for reference only - do not commit large files to git
- Consider adding `.gitignore` for large media files