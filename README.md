# skebify

**Skebify** is a Chrome/Chromium and Firefox extension derived from [skeb-inc/skeb-button](https://github.com/skeb-inc/skeb-button), but updated to use more modern/safer browser extension practices.

## Development setup

This project uses Node.js 24.18.0 and Yarn 4.17.1. Volta selects the pinned Node.js
version from `package.json`, while Corepack selects the pinned Yarn version.

When using Volta, install Corepack and replace Volta's Yarn shim with Corepack's
shim. In PowerShell, run:

```powershell
volta install node@24.18.0
npm install --global corepack@0.35.0
$voltaHome = if ($env:VOLTA_HOME) { $env:VOLTA_HOME } else { Join-Path $env:LOCALAPPDATA "Volta" }
corepack enable --install-directory "$voltaHome\bin"
yarn --version
yarn install --immutable
```

On macOS or Linux with Volta, use
`corepack enable --install-directory "${VOLTA_HOME:-$HOME/.volta}/bin"` instead.
Without Volta, run `corepack enable` after installing Corepack.

## Building

```bash
yarn zip:firefox
yarn zip
```

The newly built extension files should be available at `build/firefox-mv2-prod.zip` and `build/chrome-mv3-prod.zip` respectively.

For unpacked development builds, use `yarn build:firefox` and `yarn build`.
WXT also creates a source archive when packaging Firefox for review by Mozilla.

## Data transmission

To look up the Skeb account associated with the X/Twitter profile currently
being viewed, the extension sends that profile's Twitter user ID to
`https://skeb.jp/api/users/exists`. The extension does not transmit analytics,
telemetry, or unrelated browsing data, and does not persist the lookup data.

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
