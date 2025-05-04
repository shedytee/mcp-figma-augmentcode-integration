# Troubleshooting

## 1. Missing validator
**Error:** `TypeError: Figma.string is not a function`
**Fix:** Use `zod` for input schemas, not figma-js.

## 2. MODULE_NOT_FOUND or broken paths
**Error:** `Cannot find module 'C:/Users/yourname/Documents/Dev/Moments'`
**Fix:** Wrap the full script path in quotes inside Augment Code.
