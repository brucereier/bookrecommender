import csv

def parseCSV(filename):
    output_fields = ["Title", "Author", "ISBN13", "My Rating", "Average Rating", "Publisher", "Number of Pages", "Year Published"]
    with open(filename, 'r') as infile, open('trimmed.csv', 'w', newline = '') as outfile:
        reader = csv.DictReader(infile)
        writer = csv.DictWriter(outfile, fieldnames = output_fields)

        writer.writeheader()

        for row in reader:
            if float(row["My Rating"]) != 0.0:
                row["ISBN13"] = row["ISBN13"].replace('="', '').replace('"', '')
                
                output_row = {field: row[field] for field in output_fields}
                writer.writerow(output_row)
             

parseCSV("books.csv")