from openai import OpenAI
import json

client = OpenAI()


# def send_prompt(schol_data):
#     """
#
#
#     :param schol_data:
#     :return:
#     """
#     scholarship = json.loads(schol_data)
#
#     prompt = (
#         f"Please create a scholarship application essay for the following scholarship:\n\n"
#         f"Scholarship Name: {scholarship['name']}\n"
#         f"Amount: {scholarship['amount']}\n"
#         f"Deadline: {scholarship['deadline']}\n"
#         f"Eligibility: {scholarship['notes']}\n"
#         f"Link: {scholarship['link']}\n\n"
#         f"Include why I am the best candidate for this scholarship based on my dedication to the field of {scholarship['fieldofstudy']}."
#     )
#
#     completion = client.chat.completions.create(
#         model="gpt-3.5-turbo",
#         messages=[
#             {"role": "system", "content": "You are an AI that assists in creating scholarship essays."},
#             {"role": "user", "content": prompt}
#         ]
#     )
#
#     with open(filename, 'w') as file:
#         file.write(essay)
#
#     return completion.choices[0].message
#     # print(completion.choices[0].message)


def test_prompt_processing():
    """

    :param schol_data:
    :return:
    """

    essay = "test essay content"

    with open(filename, 'w') as file:
        file.write(essay)

    # return completion.choices[0].message
    # print(completion.choices[0].message)


schol_data = '{"name": "Science Innovation Scholarship", "amount": "$2,000", "deadline": "August 1, 2024", "notes": "For students pursuing innovative research in renewable energy.", "link": "https://www.scholarshipportal.com/scholarship/science-innovation", "fieldofstudy": "Renewable Energy"}'
user_info = {
  "name": "Harry",
  "address": "1234 Privet Drive",
  "phone": "123-456-7890",
  "email": "harry@example.com",
  "educational_background": {
    "current_school": "Hogwarts School of Witchcraft and Wizardry",
    "GPA": "3.8",
    "transcripts": "Attached",
    "enrollment_status": "Full-time"
  },
  "extracurricular_activities": [
    "Quidditch team captain",
    "Dumbledore's Army founder"
  ],
  "honors_and_awards": [
    "Triwizard Tournament Champion",
    "Order of Merlin, First Class"
  ],
  "future_plans": {
    "study_plans": "To become an Auror",
    "career_goals": "Defeat dark wizards",
    "intended_major": "Defense Against the Dark Arts",
    "intended_university": "Hogwarts"
  },
  "proof_of_eligibility": "British citizen, resident of England",
  "other_details": {
    "heritage": "Half-blood",
    "courseload": "Heavy with a focus on magical defense"
  }
}



# essay = send_prompt(schol_data)
# print(essay)

filename = 'scholarship_essay.txt'
test_prompt_processing()

