from fpdf import FPDF


def download_essay(essay: str):
    # Assuming `essay` contains the text you want to convert to PDF
    pdf = PDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    pdf.chapter_title("Scholarship Essay")
    pdf.chapter_body(essay)

    pdf_filename = 'scholarship_essay.pdf'
    pdf.output(pdf_filename)
    print(f"PDF essay written to {pdf_filename}")


class PDF(FPDF):
    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, title, 0, 1, 'L')
        self.ln(10)

    def chapter_body(self, body):
        self.set_font('Arial', '', 12)
        self.multi_cell(0, 10, body)
        self.ln()
