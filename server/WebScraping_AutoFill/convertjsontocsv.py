import json
import csv


def load_json_data():
    # Load the JSON data from file
    with open('scholarships_data.json', 'r') as json_file:
        data = json.load(json_file)
    return data


def convert_to_csv():
    # Load the JSON data
    scholarships_data = load_json_data()

    with open('scholarships_data.csv', 'w', newline='') as csv_file:
        # Create a CSV writer object
        csv_writer = csv.writer(csv_file)

        # Write the header row, assuming all dictionaries have the same keys
        header = scholarships_data[0].keys()
        csv_writer.writerow(header)

        # Write the data rows
        for item in scholarships_data:
            csv_writer.writerow(item.values())
