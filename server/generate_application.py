from openai import OpenAI
import json

client = OpenAI()


def generate_application(scholarship_data, user_data):
    """

    :param user_data:
    :param scholarship_data:
    :return:
    """
    scholarship = json.loads(scholarship_data)
    user = json.loads(user_data)  # ERROR HERE
    prompt = (
        f"Please create a scholarship application essay for the following scholarship:\n\n"
        f"Scholarship Name: {scholarship['name']}\n"
        f"Amount: {scholarship['amount']}\n"
        f"Deadline: {scholarship['deadline']}\n"
        f"Eligibility: {scholarship['notes']}\n"
        f"Link: {scholarship['link']}\n\n"
        f"Include why I am the best candidate for this scholarship based on my dedication to the field of {scholarship['fieldofstudy']}.\n\n"
        f"This is the candidate for the scholarship:\n"
        f"Name: {user['name']}\n"
        f"School: {user['educational_background']['current_school']}\n"
        f"GPA: {user['educational_background']['GPA']}\n"
        f"Major: {user['future_plans']['intended_major']}\n"
        f"Extracurricular Activities: {', '.join(user['extracurricular_activities'])}\n"
        f"Awards: {', '.join(user['honors_and_awards'])}\n"
        f"Career Goals: {user['future_plans']['career_goals']}\n"
        f"Why I am a good fit for this scholarship: [Candidate's personal statement here.]\n"
    )

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an AI that assists in creating scholarship essays."},
            {"role": "user", "content": prompt}
        ]
    )

    essay = completion.choices[0].message.content

    filename = 'scholarship_essay.txt'

    # Write the essay to a file
    with open(filename, 'w') as file:
        file.write(essay)

    # Call the function with the JSON scholarship data and filename
    print(f"Essay written to {filename}")