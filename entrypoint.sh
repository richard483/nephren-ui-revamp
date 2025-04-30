#!/bin/sh
# Replace placeholders with environment variables
sed -i "s|__VITE_GOOGLE_TAG__|${VITE_GOOGLE_TAG}|g" /app/dist/js/*.js
sed -i "s|__VITE_NEPHREN_BLOG__|${VITE_NEPHREN_BLOG}|g" /app/dist/js/*.js

# Start the server
serve -s dist -l 7002