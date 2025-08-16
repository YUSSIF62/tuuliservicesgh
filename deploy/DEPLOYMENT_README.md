# Tuuli Services - Deployment Guide for cPanel

## What's Included
This folder contains the compiled and production-ready version of your Tuuli Services website, ready for deployment to cPanel or any other web hosting platform.

## Files Structure
```
deploy/
├── index.html              # Main HTML file (updated to use relative paths)
├── assets/
│   ├── index-DP6120rQ.js  # Compiled JavaScript bundle
│   └── index-BCM3-LYz.css # Compiled CSS bundle
├── images/                 # All website images
├── favicon.ico            # Website favicon
├── robots.txt             # SEO robots file
└── placeholder.svg        # Placeholder image
```

## Deployment Steps for cPanel

### Option 1: File Manager Upload
1. Log into your cPanel account
2. Open File Manager
3. Navigate to your public_html folder (or your desired domain folder)
4. Upload all contents from this `deploy` folder to that location
5. Ensure the file structure is maintained

### Option 2: FTP Upload
1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your hosting server
3. Navigate to your public_html folder
4. Upload all contents from this `deploy` folder

### Option 3: ZIP Upload
1. Zip the contents of this `deploy` folder
2. Upload the ZIP file to cPanel
3. Extract it in your public_html directory

## Important Notes
- ✅ TypeScript has been compiled to JavaScript
- ✅ All asset paths are now relative (./) for better compatibility
- ✅ CSS and JavaScript are minified and optimized
- ✅ Images are included and properly referenced
- ✅ The website is ready for production use

## Verification
After deployment, visit your website to ensure:
- The page loads without errors
- All images display correctly
- JavaScript functionality works
- CSS styling is applied properly

## Support
If you encounter any issues during deployment, check:
1. File permissions (should be 644 for files, 755 for folders)
2. That all files were uploaded completely
3. That the file structure matches exactly

Your Tuuli Services website is now ready for production deployment! 🚀
