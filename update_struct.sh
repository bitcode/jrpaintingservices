#!/bin/bash

# Move favicon.ico from app to public directory
mv app/favicon.ico public/

# Create necessary environment files
touch .env
touch .env.development
touch .env.local
touch .env.production

# Create necessary configuration files
touch .eslintrc.json

# Create necessary files in app directory
touch app/error.tsx
touch app/global-error.tsx
touch app/loading.tsx
touch app/not-found.tsx

# Create middleware file
touch middleware.ts

# Create necessary files in pages directory
touch pages/_app.tsx
touch pages/_document.tsx
touch pages/_error.tsx
touch pages/404.tsx
touch pages/500.tsx

# Create necessary files in public directory
touch public/icon.png
touch public/opengraph-image.png
touch public/twitter-image.png

# Create necessary SEO files
touch robots.txt
touch sitemap.xml
