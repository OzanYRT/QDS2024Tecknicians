import time

import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def readjson(json_filename):
    with open(json_filename, 'r') as f:
        data = json.load(f)

    for entry in data:
        if entry.get('name') == 'Julie Cole Bursary for Studies in Occupational Health and Safety':
            print(entry.get('link'))
            return entry.get('link')


def open_link():
    first_entry = readjson('scholarships_data.json')
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get(first_entry)

    # Click the login trigger (e.g., a span that brings up the login form)
    apply_button_id = "ctl00_ContentPlaceHolder1_hylApplication"

    try:
        # Wait for the Apply button to be clickable and click it
        apply_button = WebDriverWait(driver, 60).until(
            EC.element_to_be_clickable((By.ID, apply_button_id))
        )

        apply_button.click()

        time.sleep(5)

        if len(driver.window_handles) > 1:
            driver.switch_to.window(driver.window_handles[1])
        else:
            print("No new window opened")

        return driver

        # driver.switch_to.window(driver.window_handles[1])

    except Exception as e:
        print(f"An error occurred: {e}")


def fill_form(driver):
    # Read the form data from your JSON file
    with open('userinfo.json', 'r') as f:
        form_data = json.load(f)[0]

    # Create a dictionary to map your JSON keys to the form field names
    field_mappings = {
        "name": "form_fields[name]",
        "Address": "form_fields[message]",
        "Person_City": "form_fields[field_9eeabd0]",
        "Postal Code": "form_fields[field_3ae4982]",
        "Phone": "form_fields[field_b6a5322]",
        "Email": "form_fields[email]",
        "School": "form_fields[field_1bd2567]",
        "School_City": "form_fields[field_17f4ff3]",
        "Awards": "form_fields[field_104a7e3]",
        "Extra_Curricular": "form_fields[field_a9a9a95]",
        "Volunteer_Organization": "form_fields[field_14ec6b3]",
        "Post_Secondary": "form_fields[field_b2e25a7]",
        "Financial_Aid": "form_fields[field_0fc3a0c]"

    }

    try:
        # Iterate through the mappings and fill the forms
        for json_key, form_field_name in field_mappings.items():
            field_value = form_data.get(json_key)
            if field_value:  # Check if the value is not None
                field_element = driver.find_element(By.NAME, form_field_name)
                field_element.clear()  # Clear the field before sending keys
                field_element.send_keys(field_value)
            else:
                print(f"Warning: No value provided for {json_key}")

        time.sleep(30)

    except Exception as e:
        print(f"An error occurred while filling the form: {e}")


def autocompleteapplication():
    driver = open_link()
    fill_form(driver)
    driver.quit()
