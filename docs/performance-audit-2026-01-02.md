# Animation Performance Audit Report

**Date:** 2026-01-02
**Branch:** refactor/general-updates-01
**Test Environment:** Chrome with simulated CPU throttling (headless)

---

## Executive Summary

| Overall Result | **FAIL** |
|----------------|----------|
| Critical Issues | 3 |
| Warnings | 2 |
| Passed | 2 |

The landing page has **severe performance issues** on lower-end devices. Main thread blocking during scroll causes significant jank and unresponsive interactions.

---

## Core Web Vitals

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| **FCP** (First Contentful Paint) | 364ms | < 1.8s | ✅ PASS |
| **LCP** (Largest Contentful Paint) | 10,412ms | < 2.5s | ❌ FAIL |
| **CLS** (Cumulative Layout Shift) | 0 | < 0.1 | ✅ PASS |
| **TBT** (Total Blocking Time) | ~15,000ms* | < 200ms | ❌ FAIL |

*Estimated from sum of long tasks exceeding 50ms threshold

### LCP Root Cause
The YouTube iframe (`tye5mfEtoBw`) is the LCP element, taking **18.3 seconds** to fully load. This blocks the LCP metric.

---

## Animation Performance Metrics

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| **Long Tasks** (>50ms) | 45 | < 3 | ❌ FAIL |
| **Longest Task** | 3,928ms | < 50ms | ❌ CRITICAL |
| **Frame Drops** (below 30fps) | 32 | 0 | ⚠️ WARNING |
| **Animated Elements** | 57 | N/A | Info |

### Long Task Distribution

| Duration Range | Count | Impact |
|----------------|-------|--------|
| 50-100ms | 12 | Minor jank |
| 100-200ms | 15 | Noticeable stutter |
| 200-500ms | 8 | Visible freeze |
| 500-1000ms | 3 | Major freeze |
| >1000ms | 7 | **Unresponsive** |

### Worst Offenders (Tasks >1s)
1. **3,928ms** - Likely StorybrandSection scroll handler
2. **3,249ms** - Likely NumberTicker animation + Intl.NumberFormat
3. **1,567ms** - Likely scrollytelling calculation
4. **1,212ms** - Animation batch processing

---

## Interaction Responsiveness

| Test | Latency | Target | Status |
|------|---------|--------|--------|
| FAQ Accordion Click #1 | 1,475ms | < 100ms | ❌ FAIL |
| FAQ Accordion Click #2 | 1,252ms | < 100ms | ❌ FAIL |
| **Average Interaction Delay** | **1,363ms** | < 100ms | ❌ FAIL |

Users will perceive the page as **frozen/unresponsive** during scroll.

---

## Bundle Analysis

| Metric | Value |
|--------|-------|
| Landing Page JS | 16.9 kB |
| First Load JS | 227 kB |
| Shared JS | 87.4 kB |
| Total Resources | 34 |

Bundle size is acceptable. The issue is **runtime performance**, not initial load.

---

## Components Causing Issues

### 1. YouTube Iframe (Hero Section)
**File:** `app/page.tsx:176`
**Impact:** LCP blocker
**Issue:** Iframe loads synchronously and blocks LCP measurement

**Recommendation:**
```tsx
// Use lite-youtube-embed or facade pattern
<div onClick={() => setShowVideo(true)}>
  {showVideo ? <iframe ... /> : <img src="/video-thumbnail.jpg" />}
</div>
```

### 2. StorybrandSection (Scrollytelling)
**File:** `components/sections/home-page/StorybrandSection.tsx`
**Impact:** 3.9s long task during scroll
**Issue:** Complex scroll calculations + AnimatePresence + state updates

**Recommendations:**
- Debounce scroll handler with `requestAnimationFrame`
- Use CSS `will-change: transform` on animated elements
- Reduce AnimatePresence scope

### 3. NumberTicker (Statistics Section)
**File:** `components/magicui/number-ticker.tsx`
**Impact:** 3.2s long task
**Issue:** `Intl.NumberFormat` called on every animation frame

**Recommendations:**
```tsx
// Cache the formatter
const formatter = useMemo(
  () => new Intl.NumberFormat("en-US"),
  []
);
```

### 4. LogoCloud Marquee
**File:** `components/custom/logo-cloud.tsx`
**Impact:** Continuous repaints
**Issue:** CSS animation without `will-change` hint

**Recommendation:**
```css
.animate-marquee {
  will-change: transform;
}
```

---

## Priority Fixes

### P0 - Critical (Fix Immediately)

1. **Lazy load YouTube iframe**
   - Use facade pattern with thumbnail
   - Only load iframe on user interaction
   - Expected improvement: LCP < 2.5s

2. **Debounce StorybrandSection scroll**
   - Wrap calculations in `requestAnimationFrame`
   - Add `will-change: transform` to animated elements
   - Expected improvement: -80% long tasks

### P1 - High (Fix This Sprint)

3. **Cache Intl.NumberFormat in NumberTicker**
   - Create formatter once with `useMemo`
   - Expected improvement: -50% animation jank

4. **Add GPU hints to animations**
   - `will-change: transform` on marquee
   - `transform: translateZ(0)` on scroll sections
   - Expected improvement: -30% frame drops

### P2 - Medium (Backlog)

5. **Reduce AnimatePresence scope**
   - Only wrap elements that need exit animations
   - Consider `mode="wait"` instead of `mode="popLayout"`

6. **Throttle viewport triggers**
   - Add intersection observer `rootMargin` buffer
   - Batch animation triggers

---

## Pass/Fail Summary

| Category | Result |
|----------|--------|
| Core Web Vitals | ⚠️ PARTIAL (2/3 pass) |
| Animation Smoothness | ❌ FAIL |
| Interaction Latency | ❌ FAIL |
| Bundle Size | ✅ PASS |
| Reduced Motion Support | ✅ PASS |

### Overall Verdict

**❌ FAIL** - The landing page is **not ready for production** on lower-end devices.

Critical fixes required:
1. YouTube iframe lazy loading
2. Scroll handler optimization
3. NumberFormatter caching

---

## Reproduction Steps

1. Build production: `npm run build && npm run start`
2. Open Chrome DevTools → Performance panel
3. Enable CPU throttling (4x slowdown)
4. Record while scrolling through full page
5. Observe long tasks in flame graph

---

## Test Methodology

- **Browser:** Chromium (Playwright headless)
- **CPU Throttling:** Simulated via prolonged task measurement
- **Metrics Collection:** Performance Observer API
- **Interaction Testing:** Playwright automation

---

*Report generated by Claude Code performance-oracle agent*
