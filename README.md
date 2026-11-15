# My Garage — Week 12 CI/CD

This updates the Week 10 My Garage site with reusable JavaScript functions, unit tests, and GitHub Actions automatic S3 deployment.

## Files
- `index.html` uses `<script type="module" src="script.js"></script>`
- `style.css` contains the original simple styling
- `script.js` handles form submission and imports from `functions.mjs`
- `functions.mjs` has the functions tested in `tests/functions.test.mjs`
- `.github/workflows/deploy.yml` runs tests, then deploys only when they pass

## GitHub setup
Under repository **Settings > Secrets and variables > Actions** add:
Repository secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` (new, valid AWS key; never commit).
Repository variables: `AWS_REGION` = `us-east-2`, `S3_BUCKET` = `egg114-car-website`.

Push this folder's **contents**, including hidden `.github`, to the `main` branch of your existing `ChenToasty/Car_Website` repository.
Do not upload AWS keys or CSV credentials. If using Windows, view hidden items to see `.github`.

## Test and presentation
1. Push files; on GitHub open **Actions** and show green test and deploy jobs.
2. Make a visible text change (e.g. change the intro paragraph in index.html), push, and refresh the public S3 URL to show the change.
3. Intentionally break the code by changing `return` to `return null;` inside `createCar` in `functions.mjs`, commit and push. The tests must fail and deploy must be skipped. **Do not leave the bad change in place.**
4. Restore the original `createCar` function, commit and push again; watch the workflow return to green.

Website: http://egg114-car-website.s3-website.us-east-2.amazonaws.com/

To preview this module-based site locally, use VS Code's Live Server extension instead of opening index.html directly as a file.

Note: S3 website hosting needs an already functional public-read bucket. The AWS user/key used by GitHub must be allowed to upload to that bucket.
