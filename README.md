# skebify

**Skebify** is a Chrome/Chromium and Firefox extension derived from [skeb-inc/skeb-button](https://github.com/skeb-inc/skeb-button), but updated to use more modern/safer browser extension practices.

## Building

```bash
yarn zip:firefox
yarn zip
```

The newly built extension files should be available at `build/firefox-mv2-prod.zip` and `build/chrome-mv3-prod.zip` respectively.

For unpacked development builds, use `yarn build:firefox` and `yarn build`.
WXT also creates a source archive when packaging Firefox for review by Mozilla.

## Releasing

1. Update and commit the version in `package.json`.
2. Create and push a matching `vX.Y.Z` tag. A package version such as
   `1.2.0-fork` uses the tag `v1.2.0`.
3. GitHub Actions builds the Chrome and Firefox packages and creates a draft
   GitHub Release containing both zip files and `SHA256SUMS`.
4. Verify the draft's assets, then publish it manually from the GitHub UI.

To rebuild an existing tag manually, run the **Build and Release Extension**
workflow from the Actions tab and enter the existing tag in the required
`tag` input. The workflow rejects missing tags and tags that do not match the
numeric portion of `package.json`'s version.

After downloading all three release assets, verify the packages with:

```bash
sha256sum --check SHA256SUMS
```
