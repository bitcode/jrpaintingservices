#!/bin/bash

# Declare an array of string with file name
declare -a arr=("pages/CommercialServices/index.tsx" "pages/ResidentialServices/index.tsx" "pages/ContactUs/index.tsx" "middleware.ts" "components/NavBar.tsx" "app/globals.css" "pages/index.tsx" "app/layout.tsx" "package.json" "postcss.config.js" "tailwind.config.js" "tsconfig.json")

# Create an empty string to hold all file content
all_content=""

# Iterate the string array using for loop
for fileName in "${arr[@]}"; do
    all_content+="---- $fileName ----\n"
    all_content+="$(cat $fileName)\n"
done

# Copy all content to clipboard
echo -e "$all_content" | xclip -sel clip
