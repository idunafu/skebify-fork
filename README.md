# skebify

**Skebify** is a Chrome/Chromium and Firefox extension derived from [skeb-inc/skeb-button](https://github.com/skeb-inc/skeb-button), but updated to use more modern/safer browser extension practices.

## Building

```bash
yarn build --no-minify --no-hoist --zip --target=firefox-mv2
yarn package --target=chrome-mv3
```

The newly built extension files should be available at `build/firefox-mv2-prod.zip` and `build/chrome-mv3-prod.zip` respectively.

## Releasing

- When you push tags in the `v*` format, GitHub Actions will automatically build zip files for Firefox and Chrome, then attach them to the GitHub Release.
- To manually trigger the process, select the **Build and Release Extension** workflow from the Actions tab and execute the `workflow_dispatch` trigger.
