#!/bin/sh
# Replace placeholders in static files with environment variables
find '/usr/share/nginx/html' -name '*.js' -exec sed -i \
    -e "s|__VITE_GOOGLE_TAG__|${VITE_GOOGLE_TAG}|g" \
    -e "s|__VITE_NEPHREN_BLOG__|${VITE_NEPHREN_BLOG}|g" \
    {} \;

# Start NGINX
exec nginx -g 'daemon off;'