# UCI Digital Learning Lab website

Source for the University of California, Irvine Digital Learning Lab website.

## Structure

- `dist/` contains the static website deployed to ChatGPT Sites.
- `.openai/hosting.json` identifies the temporary ChatGPT Sites deployment.

The site is intentionally buildless: open `dist/index.html` through any static web server.

## Local preview

```powershell
python -m http.server 4173 --directory dist
```

## Deployment

The production source of truth is this GitHub repository. ChatGPT Sites is a temporary hosting target until the site is transferred to Cloudflare.
