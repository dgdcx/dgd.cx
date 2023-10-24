#!/bin/bash

# Associative array of phrases
declare -A phrases
phrases["It's dangerous to go alone! Take this."]="/phrases/1.png"
phrases["Do a barrel roll!"]="/phrases/2.jpg"
#phrases["Hadouken!"]="phrases/.png"
#phrases["Finish him!"]="phrases/.png"
#phrases["Get over here!"]="phrases/.png"
#phrases["The cake is a lie."]="phrases/.png"
#phrases["War never changes."]="phrases/.png"
#phrases["Snake? Snake? Snaaaaake!"]="phrases/.png"
#phrases["Leroy Jenkins!"]="phrases/.png"
#phrases["Do you feel like a hero yet?"]="phrases/.png"
#phrases["I used to be an adventurer like you, then I took an arrow to the knee."]="phrases/.png"
#phrases["Get to the choppa!"]="phrases/.png"
#phrases["I'll be back."]="phrases/.png"
#phrases["May the Force be with you."]="phrases/.png"
#phrases["I am your father."]="phrases/.png"
#phrases["You shall not pass!"]="phrases/.png"
#phrases["You were almost a Jill sandwich!"]="phrases/.png"
#phrases["Hey! Listen!"]="phrases/.png"
#phrases["It's super effective!"]="phrases/.png"
#phrases["You have died of dysentery."]="phrases/.png"
#phrases["All your base are belong to us."]="phrases/.png"
#phrases["A winner is you!"]="phrases/.png"

# Path to index.html file
html_file="./index.html"

# Select a random phrase and its associated image URL
random_key="${!phrases[@]}"
random_index=$((RANDOM % ${#random_key[@]}))
selected_phrase="${random_key[$random_index]}"
selected_image_url="${phrases[$selected_phrase]}"

# Escape double quotes in the selected phrase
escaped_description=$(sed 's/"/\\"/g' <<< "$selected_phrase")

# Use sed to replace the og:description and og:image meta tags
sed -i "s/<meta property=\"og:description\" content=\"[^\"]*\" \/>/<meta property=\"og:description\" content=\"$escaped_description\" \/>/" "$html_file"
sed -i "s/<meta property=\"og:image\" content=\"[^\"]*\" \/>/<meta property=\"og:image\" content=\"$selected_image_url\" \/>/" "$html_file"

# Optional: You can add a timestamp to log when the script ran
echo "Updated OG description to: $escaped_description on $(date)"
