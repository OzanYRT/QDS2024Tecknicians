import json
from WebScraping_AutoFill.main import scrape_scholarships
from generate_application import generate_application

first_scholarship = scrape_scholarships()
user_info_json = json.dumps({
    "username": "Harry",
    "email": "harry@example.com",
    "interests": "As a spirited leader and innovative thinker, I have honed "
                 "my skills as the Quidditch team captain and founder of Dumbledore's Army. "
                 "My commitment and success have been recognized through prestigious awards "
                 "such as the Triwizard Tournament Champion and the Order of Merlin, First Class. "
                 "Intent on specializing in Defense Against the Dark Arts, my ambition is to "
                 "excel as an Auror, a testament to my British heritage and my profound dedication "
                 "to magical defense. This journey is set to begin at the esteemed Hogwarts University, "
                 "where I aim to merge academic prowess with my practical experiences to achieve my goal "
                 "of protecting society from dark wizards."
})

# user_info_json = json.dumps({
#     "name": "Harry",
#     "address": "1234 Privet Drive",
#     "phone": "123-456-7890",
#     "email": "harry@example.com",
#     "educational_background": {
#         "current_school": "Hogwarts School of Witchcraft and Wizardry",
#         "GPA": "3.8",
#         "transcripts": "Attached",
#         "enrollment_status": "Full-time"
#     },
#     "extracurricular_activities": [
#         "Quidditch team captain",
#         "Dumbledore's Army founder"
#     ],
#     "honors_and_awards": [
#         "Triwizard Tournament Champion",
#         "Order of Merlin, First Class"
#     ],
#     "future_plans": {
#         "study_plans": "To become an Auror",
#         "career_goals": "Defeat dark wizards",
#         "intended_major": "Defense Against the Dark Arts",
#         "intended_university": "Hogwarts"
#     },
#     "proof_of_eligibility": "British citizen, resident of England",
#     "other_details": {
#         "heritage": "Half-blood",
#         "courseload": "Heavy with a focus on magical defense"
#     }
# })

# this is the logic that needs the JSON for the scholarship passed in, calls the generate application
# function with it
if first_scholarship:
    try:
        scholarship_data_json = json.dumps(first_scholarship) if first_scholarship else '{}'
        generate_application(scholarship_data_json, user_info_json)
        print("The scholarship essay has been generated and saved to 'scholarship_essay.txt'.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
else:
    print("No scholarship data found.")

