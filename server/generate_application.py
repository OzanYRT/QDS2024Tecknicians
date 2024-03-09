from openai import OpenAI
import json

client = OpenAI()


def send_prompt(scholarship_data, user_data):
    """

    :param schol_data:
    :return:
    """
    scholarship = json.loads(scholarship_data)
    user = json.loads(user_data)

    prompt = (
        f"Please create a scholarship application essay for the following scholarship:\n\n"
        f"Scholarship Name: {scholarship['name']}\n"
        f"Amount: {scholarship['amount']}\n"
        f"Deadline: {scholarship['deadline']}\n"
        f"Eligibility: {scholarship['notes']}\n"
        f"Link: {scholarship['link']}\n\n"
        f"Include why I am the best candidate for this scholarship based on my dedication to the field of {scholarship['fieldofstudy']}."
    )

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an AI that assists in creating scholarship essays."},
            {"role": "user", "content": prompt}
        ]
    )

    essay = completion.choices[0].message['content']

    with open(filename, 'w') as file:
        file.write(essay)

    # return essay
    # print(completion.choices[0].message)


first_scholarship = scholarships[0] if scholarships else None
schol_data_json = json.dumps(first_scholarship) if first_scholarship else "{}"


user_info_json = {
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



essay = send_prompt(schol_data_json, user_info_json)
print("The essay has been generated and saved to 'scholarship_essay.txt'.")

# print(essay)

filename = 'scholarship_essay.txt'
