import time

from WebScraping_AutoFill.helpfunctions import *
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
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



        # Since the button might open in a new tab based on your HTML snippet,
        # handle the new tab if necessary here
        # Example:
        driver.switch_to.window(driver.window_handles[1])

    except Exception as e:
        print(f"An error occurred: {e}")
