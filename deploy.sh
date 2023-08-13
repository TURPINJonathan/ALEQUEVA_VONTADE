#!/bin/bash

# Clean git repository
git reset --hard HEAD~

# Update git repository
git pull

# Go to "front" folder
cd front

# Execute the complete build
npm run complete-build

# Create the .htaccess
sudo nano build/.htaccess

# Write the .htaccess
htaccess_content="
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Handle requests for files that exist
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  # Redirect all other requests to index.html
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>
"

# Écrire le contenu dans le fichier .htaccess
echo "$htaccess_content" | sudo tee build/.htaccess

# Restart Apache
sudo service apache2 restart
