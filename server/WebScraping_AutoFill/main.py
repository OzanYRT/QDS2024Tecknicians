import json
from server.WebScraping_AutoFill import convertjsontocsv
from server.WebScraping_AutoFill.JulieColeAutoComplete import *
from server.WebScraping_AutoFill.helpfunctions import *


def scrape_scholarships():
    id = 1

    main_url = 'https://www.scholarshipscanada.com/Scholarships/Browse-Scholarships.aspx'
    scholarships_data = []

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    username = "MightyMights"  # Your actual username
    password = "6qiwSQMaP4S5DsT"  # Your actual password
    perform_login(driver, username, password)

    # Handles the scraping of scholarship data
    category_links = get_category_links(main_url)
    for category_link in category_links:
        scholarship_links = get_scholarship_links(category_link)
        # IF WANT MORE DATA DELETE BELOW 5 LINE AND UNCOMMENT OTHER CODE
        for i, scholarship_link in enumerate(scholarship_links):
            if i == 2:  # stop after processing 10 links
                break
            scholarship_info = scrape_scholarship_info(id, scholarship_link, driver)
            scholarships_data.append(scholarship_info)
            id += 1
    #     for scholarship_link in scholarship_links:
    #         scholarship_info = scrape_scholarship_info(id, scholarship_link, driver)
    #         scholarships_data.append(scholarship_info)
    #         id += 1

    filtered_data = [item for item in scholarships_data if item is not None]

    # Save the data to JSON and then read the first entry
    with open('scholarships_data.json', 'w') as f:
        json.dump(filtered_data, f, indent=4)

    # Now, reopen the file in read mode to load the first entry
    with open('scholarships_data.json', 'r') as f:
        first_entry = json.load(f)[0]


    # this is to autocomplete the application for Julie Cole Auto
    autocompleteapplication()

    driver.quit()

    convertjsontocsv.load_json_data()
    convertjsontocsv.convert_to_csv()

    return first_entry
# if __name__ == '__main__':
#     main()
