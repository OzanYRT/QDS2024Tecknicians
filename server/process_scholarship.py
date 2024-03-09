import json
import subprocess
from generate_application import send_prompt

# Path to the web scraping script
web_scraper_script = '../WebScraping/main.py'

# Run the web scraper to update scholarship data
subprocess.run(['python', web_scraper_script], check=True)

# Read the updated scholarship data
with open('../WebScraping/scholarships_data.json', 'r') as f:
    scholarships_data = json.load(f)

# Extract the first scholarship from the scraped data
first_scholarship = scholarships_data[0] if scholarships_data else None

# Assuming the user_info_json is already defined in your generate_application.py
user_info_json = json.dumps({
  # ... your hardcoded user_info data ...
})

if first_scholarship:
    # Convert scholarship data to JSON string
    scholarship_data_json = json.dumps(first_scholarship)

    # Generate the application essay
    essay = send_prompt(scholarship_data_json, user_info_json)

    # Output the essay to a text file
    with open('scholarship_essay.txt', 'w') as f:
        f.write(essay)

    print("The scholarship essay has been generated and saved to 'scholarship_essay.txt'.")
else:
    print("No scholarship data found.")
