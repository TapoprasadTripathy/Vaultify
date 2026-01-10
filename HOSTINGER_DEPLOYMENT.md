# Hosting Vault Landing Page on Hostinger

This guide will help you deploy your Vault landing page to Hostinger.

## Step 1: Build Your Project

First, build your project for production:

```bash
npm run build
```

This will create a `build` folder with all the production-ready files.

## Step 2: Prepare Files for Upload

After building, you'll have a `build` folder. The contents of this folder need to be uploaded to Hostinger.

## Step 3: Access Hostinger File Manager

1. Log in to your **Hostinger Control Panel (hPanel)**
2. Go to **Files** → **File Manager**
3. Navigate to the `public_html` folder (this is your website's root directory)
   - If you're using a subdomain, use that folder instead
   - For addon domains, use the domain's specific folder

## Step 4: Upload Your Files

### Option A: Using File Manager (Recommended for beginners)

1. Delete all existing files in `public_html` (or back them up first)
2. Click **Upload** in the File Manager
3. Select all files from your `build` folder:
   - `index.html`
   - `assets/` folder (contains CSS, JS, and images)
   - Any other files from the build folder
4. Upload all files

### Option B: Using FTP

1. Get your FTP credentials from Hostinger:
   - Go to **FTP Accounts** in hPanel
   - Note down: Host, Username, Password
2. Use an FTP client (FileZilla, Cyberduck, etc.)
3. Connect to your server
4. Navigate to `public_html`
5. Upload all contents from the `build` folder

## Step 5: Configure for Single Page Application (SPA)

Since this is a React SPA, you need to configure the server to handle client-side routing.

Create a `.htaccess` file in your `public_html` folder with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Step 6: Verify Deployment

1. Visit your domain in a browser
2. The site should load correctly
3. Check that all images and assets load properly
4. Test navigation to ensure routing works

## Troubleshooting

### Images Not Loading

- Verify that all files from `public` folder were copied to the build
- Check file paths in the browser console
- Ensure image file names match exactly (case-sensitive)

### 404 Errors on Refresh

- Make sure `.htaccess` file is uploaded correctly
- Verify `mod_rewrite` is enabled on your Hostinger server
- Contact Hostinger support if needed

### Blank Page

- Check browser console for errors
- Verify all files were uploaded
- Ensure `index.html` is in the root directory
- Check that JavaScript files are loading (Network tab)

## Quick Build and Deploy Checklist

- [ ] Run `npm run build`
- [ ] Check `build` folder contains all files
- [ ] Backup existing files on server (if any)
- [ ] Upload all files from `build` folder to `public_html`
- [ ] Create/upload `.htaccess` file
- [ ] Test website in browser
- [ ] Verify all images load
- [ ] Test navigation and routing

## Additional Notes

- **SSL Certificate**: Make sure your domain has SSL enabled in Hostinger for HTTPS
- **Domain**: Point your domain to the correct folder if using addon domains
- **Updates**: To update the site, rebuild and re-upload the files

