#!/bin/bash

# Colors
YELLOW='\033[1;33m'
BLUE='\033[1;36m'
NC='\033[0m'

echo -e "${YELLOW}======================================================================="
echo -e "============               REPOSITORY UPDATE               ============"
echo -e "=======================================================================${NC}"
# Clean git repository
git reset --hard HEAD~

# Update git repository
git pull
echo -e "${BLUE}----------------------------- UPDATE DONE -----------------------------${NC}"

# Go to "front" folder
cd front

# Remove node_module
echo -e "${YELLOW}======================================================================="
echo -e "============              DELETED NODE MODULE              ============"
echo -e "=======================================================================${NC}"
sudo rm -rf ./node_modules
echo -e "${BLUE}------------------------- NODE MODULE DELETED -------------------------${NC}"

# Install Library
echo -e "${YELLOW}======================================================================="
echo -e "============                LIBRARY INSTALL                ============"
echo -e "=======================================================================${NC}"
npm i
echo -e "${BLUE}------------------------- LIBRARY ARE INSTALL -------------------------${NC}"

# GENERATE SITEMAP
echo -e "${YELLOW}======================================================================="
echo -e "============               SITEMAP GENERATOR               ============"
echo -e "=======================================================================${NC}"
npm run generate-sitemap
echo -e "${BLUE}------------------------- SITEMAP IS GENERATE -------------------------${NC}"

# Build project
echo -e "${YELLOW}======================================================================="
echo -e "============                 BUILD PROJECT                 ============"
echo -e "=======================================================================${NC}"
npm run build
echo -e "${BLUE}---------------------------- PROJECT BUILD ----------------------------${NC}"

# Create and Write the .htaccess
echo -e "${YELLOW}======================================================================="
echo -e "============              WRITE NEW .HTACCESS              ============"
echo -e "=======================================================================${NC}"
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
echo -e "${BLUE}-------------------------- HTACCESS COMPLETE --------------------------${NC}"

# Restart Apache
echo -e "${YELLOW}======================================================================="
echo -e "============                RESTART APACHE2                ============"
echo -e "=======================================================================${NC}"
sudo service apache2 restart
echo -e "${BLUE}---------------------------- APACHE2 RESTART --------------------------${NC}"

# deploy.sh autorisations
echo -e "${YELLOW}======================================================================="
echo -e "============                 AUTORIZATIONS                 ============"
echo -e "=======================================================================${NC}"
cd ..
sudo chmod +x deploy.sh
echo -e "${BLUE}-------------------------- AUTORIZATION DONE --------------------------${NC}"
