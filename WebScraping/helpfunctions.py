from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.common import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager


def get_category_links(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # can add additional patterns here for scholarships
    pattern1 = "/Scholarships/ScholarshipSearch.aspx?type=StudyField"
    pattern2 = "/Scholarships/ScholarshipSearch.aspx?type=ScholarshipName"

    # Find all <a> tags, then filter by those containing specific href structure
    all_links = soup.find_all('a')
    category_links = [link for link in all_links if pattern1 in link.get('href', '')
                      or pattern2 in link.get('href', '')]

    print(f"Fetching URL: {url}, Status Code: {response.status_code}")

    # Use urljoin to handle absolute and relative URLs correctly
    extracted_links = {urljoin('https://www.scholarshipscanada.com', link['href']) for link in category_links}

    # print(f"Category Links: {extracted_links}")
    return extracted_links


def get_scholarship_links(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    scholarship_links = soup.find_all('a', class_="ViewAll")
    extracted_links = {'https://www.scholarshipscanada.com/' + link['href'] for link in scholarship_links}
    # print(f"scholarship Links: {extracted_links}")
    return extracted_links


def perform_login(driver, username, password):
    # Navigate to the website's login page or the page that contains the login trigger
    driver.get("https://www.scholarshipscanada.com/Index.aspx")

    # Click the login trigger (e.g., a span that brings up the login form)
    login_trigger = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "LoginControl_lblAccessLoginSignin"))
    )
    login_trigger.click()

    # Wait for the login form to appear and fill in the credentials
    # Replace 'USERNAME_FIELD_ID' and 'PASSWORD_FIELD_ID' with the actual field IDs
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, "FooterControl_pnlSignIn")))
    driver.find_element(By.ID, "FooterControl_txtUsername").send_keys(username)
    driver.find_element(By.NAME, "FooterControl$txtPassword").send_keys(password)

    # Click the submit button
    # Assuming 'FooterControl_btnLogin' is the ID of the submit button based on your provided HTML snippet
    driver.find_element(By.ID, "FooterControl_btnLogin").click()


def scrape_scholarship_info(url, driver=None):
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')

    name = "N/A"
    amount = "N/A"
    deadline = "N/A"
    notes = "N/A"
    levelofstudy = "N/A"
    gender = "N/A"
    citizenship = "N/A"
    yearofstudy = "N/A"
    schoolsattended = "N/A"
    heritage = "N/A"
    schoolofstudy = "N/A"
    fieldofstudy = "N/A"
    regionofresidence = "N/A"
    courseload = "N/A"
    regionofstudy = "N/A"
    academicstanding = "N/A"
    activities = "N/A"
    financialneed = "N/A"
    contactinfoname = "N/A"
    contactinfoemail = "N/A"
    contactinfophone = "N/A"
    contactinfoaddress = "N/A"

    # Try to find each element, catching TimeoutException if any occur
    name_element = soup.find('h1')
    if name_element:
        name = name_element.text
        if "Featured Scholarships" in name:
            return None

    amount_element = soup.find(class_="Award-Amount")
    if amount_element:
        amount = amount_element.text

    deadline_element = soup.find(id='ctl00_ContentPlaceHolder1_lblDeadline')
    if deadline_element:
        deadline = deadline_element.text

    try:
        notes_element = WebDriverWait(driver, 2).until(
            EC.presence_of_element_located((By.ID, "ctl00_ContentPlaceHolder1_lblNotes"))
        )
        notes = notes_element.text
    except TimeoutException:
        print("Timeout while trying to find notes.")

    level_of_study_div = soup.find('div', class_="Column4Layout Left-Column")
    if level_of_study_div and level_of_study_div.find('span', class_="Field"):
        levelofstudy = level_of_study_div.find('span', class_="Field").text

    gender_element = soup.find(id='ctl00_ContentPlaceHolder1_lblGender')
    if gender_element:
        gender = gender_element.text

    citizenship_element = soup.find(id='ctl00_ContentPlaceHolder1_lblCitizenship')
    if citizenship_element:
        citizenship = citizenship_element.text

    yearofstudy_element = soup.find(id='ctl00_ContentPlaceHolder1_lblYearOfStudy')
    if yearofstudy_element:
        yearofstudy = yearofstudy_element.text

    schoolsattended_element = soup.find(id='ctl00_ContentPlaceHolder1_lblAttendedSchool')
    if schoolsattended_element:
        schoolsattended = schoolsattended_element.text

    heritage_element = soup.find(id='ctl00_ContentPlaceHolder1_lblHeritage')
    if heritage_element:
        heritage = heritage_element.text

    schoolofstudy_element = soup.find(id='ctl00_ContentPlaceHolder1_lblSchoolOfStudy')
    if schoolofstudy_element:
        schoolofstudy = schoolofstudy_element.text

    fieldofstudy_element = soup.find(id='ctl00_ContentPlaceHolder1_lblFieldOfStudy')
    if fieldofstudy_element:
        fieldofstudy = fieldofstudy_element.text

    regionofresidence_element = soup.find(id='ctl00_ContentPlaceHolder1_lblRegionResidence')
    if regionofresidence_element:
        regionofresidence = regionofresidence_element.text

    courseload_element = soup.find(id='ctl00_ContentPlaceHolder1_lblCourseLoad')
    if courseload_element:
        courseload = courseload_element.text

    regionofstudy_element = soup.find(id='ctl00_ContentPlaceHolder1_lblRegionStudy')
    if regionofstudy_element:
        regionofstudy = regionofstudy_element.text

    academicstanding_element = soup.find(id='ctl00_ContentPlaceHolder1_lblAcademicAverage')
    if academicstanding_element:
        academicstanding = academicstanding_element.text

    activities_element = soup.find(id='ctl00_ContentPlaceHolder1_lblActivity')
    if activities_element:
        activities = activities_element.text

    financialneed_element = soup.find(id='ctl00_ContentPlaceHolder1_lblFinacialNeed')
    if financialneed_element:
        financialneed = financialneed_element.text

    contactinfoname_element = soup.find(id='ctl00_ContentPlaceHolder1_lblContactInfoName')
    if contactinfoname_element:
        contactinfoname = contactinfoname_element.text

    contactinfoemail_element = soup.find(id='ctl00_ContentPlaceHolder1_hylContactInfoEmail')
    if contactinfoemail_element:
        contactinfoemail = contactinfoemail_element.text

    contactinfophone_element = soup.find(id='ctl00_ContentPlaceHolder1_lblContactInfoPhone')
    if contactinfophone_element:
        contactinfophone = contactinfophone_element.text

    contactinfoaddress_element = soup.find(id='ctl00_ContentPlaceHolder1_lblContactInfoAddress')
    if contactinfoaddress_element:
        contactinfoaddress = contactinfoaddress_element.text

    link = url
    info = {
        'name': name,
        'amount': amount,
        'deadline': deadline,
        'notes': notes,
        'levelofstudy': levelofstudy,
        'link': link,
        'gender': gender,
        'citizenship': citizenship,
        'yearofstudy': yearofstudy,
        'schoolsattended': schoolsattended,
        'heritage': heritage,
        'schoolofstudy': schoolofstudy,
        'fieldofstudy': fieldofstudy,
        'regionofresidence': regionofresidence,
        'courseload': courseload,
        'regionofstudy': regionofstudy,
        'academicstanding': academicstanding,
        'activities': activities,
        'financialneed': financialneed,
        'contactinfoname': contactinfoname,
        'contactinfoemail': contactinfoemail,
        'contactinfophone': contactinfophone,
        'contactinfoaddress': contactinfoaddress
    }

    print(info)
    return info
