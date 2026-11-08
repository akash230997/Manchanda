# Manchanda & Manchanda – React website

## Run locally

    npm install
    npm run dev        # http://localhost:5173

## Build

    npm run build      # output in /dist

## Before building

1. `src/content.js`: set SITE_URL, confirm email/phone/address.
2. Replace `https://www.example.com` with the real domain in index.html, public/sitemap.xml, public/robots.txt.
3. Set `$to` in public/api/contact.php.

## Deploy to GoDaddy (cPanel / Linux shared hosting)

1. GoDaddy > My Products > Web Hosting > cPanel Admin > File Manager > `public_html`.
2. Upload the CONTENTS of `dist/` (including hidden `.htaccess` and the `api` folder; enable "Show hidden files").
3. Hosting > SSL Certificates: enable SSL, then the HTTPS redirect in `.htaccess` works.
4. Test /about and refresh (handled by `.htaccess`), and test the contact form.
   Note: Windows hosting, Websites + Marketing (builder) and Managed WordPress plans do NOT support this setup. Check the plan first.

## Add content

Text: `src/content.js`. New page: file in `src/pages`, Route in `App.jsx`, link in `nav`, entry in sitemap.xml.
