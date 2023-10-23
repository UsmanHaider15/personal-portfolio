# Deploy project from Github

1. Clone project

2. link project with vercel

```bash
npx vercel link
```

3. Select project from vercel and go to integration tab and add sanity integration. Then configure sanity
   integration and then manage integration and in manage integration create new sanity project.

4. Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```
