﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace webapicall.Data.Migrations
{
    /// <inheritdoc />
    public partial class M1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Scholarships",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(type: "TEXT", nullable: true),
                    amount = table.Column<string>(type: "TEXT", nullable: true),
                    deadline = table.Column<string>(type: "TEXT", nullable: true),
                    notes = table.Column<string>(type: "TEXT", nullable: true),
                    levelofstudy = table.Column<string>(type: "TEXT", nullable: true),
                    link = table.Column<string>(type: "TEXT", nullable: true),
                    gender = table.Column<string>(type: "TEXT", nullable: true),
                    citizenship = table.Column<string>(type: "TEXT", nullable: true),
                    yearofstudy = table.Column<string>(type: "TEXT", nullable: true),
                    schoolsattended = table.Column<string>(type: "TEXT", nullable: true),
                    heritage = table.Column<string>(type: "TEXT", nullable: true),
                    schoolofstudy = table.Column<string>(type: "TEXT", nullable: true),
                    fieldofstudy = table.Column<string>(type: "TEXT", nullable: true),
                    regionofresidence = table.Column<string>(type: "TEXT", nullable: true),
                    courseload = table.Column<string>(type: "TEXT", nullable: true),
                    regionofstudy = table.Column<string>(type: "TEXT", nullable: true),
                    academicstanding = table.Column<string>(type: "TEXT", nullable: true),
                    activities = table.Column<string>(type: "TEXT", nullable: true),
                    financialneed = table.Column<string>(type: "TEXT", nullable: true),
                    contactinfoname = table.Column<string>(type: "TEXT", nullable: true),
                    contactinfoemail = table.Column<string>(type: "TEXT", nullable: true),
                    contactinfophone = table.Column<string>(type: "TEXT", nullable: true),
                    contactinfoaddress = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Scholarships", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "Scholarships",
                columns: new[] { "id", "academicstanding", "activities", "amount", "citizenship", "contactinfoaddress", "contactinfoemail", "contactinfoname", "contactinfophone", "courseload", "deadline", "fieldofstudy", "financialneed", "gender", "heritage", "levelofstudy", "link", "name", "notes", "regionofresidence", "regionofstudy", "schoolofstudy", "schoolsattended", "yearofstudy" },
                values: new object[,]
                {
                    { 1, "80", "n/s", "$500", "Any", "4401 University Drive West, Lethbridge, AB, Canada.  T1K 3M4", "N/A", "University of Lethbridge", "403-329-2741", "Full-time", "March 15, 2024", "Drama and Dramatics/Theatre Arts, General, Education, General, Fine/Studio Arts, General, Music, General", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/4132/Robert-M.-Cook-Scholarship-in-Fine-Arts", "Robert M. Cook Scholarship in Fine Arts", "New high school students entering a Bachelor of Fine Arts, Bachelor of Music, Bachelor of Fine Arts/Bachelor of Education, or Bachelor of Music/Bachelor of Education degree at the University of Lethbridge. Students must demonstrate academic achievement (minimum 80% admission average), and have achieved a minimum of 80% in at least one Fine Arts discipline from high school. Nominated by the Faculty of Fine Arts. Payable upon confirmation of full-time enrolment in classes at the University of Lethbridge in the Fall and Spring terms immediately following the granting of the award.", "n/s", "Alberta", "University of Lethbridge", "Any School", "Entering first year" },
                    { 3, "N/A", "n/s", "$20,000", "Canada", "The Centre, 1st Floor, Ira Needles Hall, University of Waterloo, Waterloo, ON, Canada.  N2L 3G1", "safainfo@uwaterloo.ca", "Jessica Bruni", "(519) 888-4567 ext 46603", "Full-time", "April 15, 2024", "Computer Engineering, General, Computer Software Engineering, Management Science, General, Mechatronics, Robotics, and Automation Engineering, Systems Engineering", "No", "Any", "Black,Indigenous", "No", "https://www.scholarshipscanada.com//Scholarships/75174/Vitaly-Pecherskiy-Entrance-Award-for-Black-and-Indigenous-Students", "Vitaly Pecherskiy Entrance Award for Black and Indigenous Students", "One award valued at $20,000, or two awards valued at $10,000 each, will be provided to Black and/or Indigenous undergraduate students entering Year One of Computer, Management, Mechatronics, Software or Systems Design Engineering. For the purpose of this scholarship, an Indigenous person is a person who self identifies as First Nations (Status/Non-Status), M�tis and/or Inuit. Candidates must be a Canadian citizen, permanent resident, or a protected person in Canada. Selection will be based on a combination of academic achievement, the Admission Information Form (AIF), the online video interview, as well as an application statement wherein students are asked to describe the impact this award will have on their pursuit of postsecondary studies. Interested students should submit an online application by April 15.", "n/s", "Ontario", "University of Waterloo", "Any School", "Entering first year, Entering or in first year" },
                    { 4, "N/A", "n/s", "$1,650", "Any", "The Centre, 1st Floor, Ira Needles Hall, University of Waterloo, Waterloo, ON, Canada.  N2L 3G1", "safainfo@uwaterloo.ca", "Jessica Bruni", "(519) 888-4567 ext 46603", "Full-time", "April 15, 2024", "Architecture (BArch, BA/BS, MArch, MA/MS, PhD), Chemical Engineering, Civil Engineering, General, Computer Engineering, General, Computer Software Engineering, Electrical, Electronics and Communications Engineering�more, Engineering, General, Environmental/Environmental Health Engineering, Geological/Geophysical Engineering, Management Science, General, Mechanical Engineering, Nanotechnology, Systems Engineering�less", "No", "Any", "Black,Indigenous", "No", "https://www.scholarshipscanada.com//Scholarships/75072/Aziz-Shallwani-Memorial-Award-for-Black-and-Indigenous-Students", "Aziz Shallwani Memorial Award for Black and Indigenous Students", "An award, valued at up to $1,650, will be provided annually to a Black or Indigenous undergraduate student entering Year One of any program in the Faculty of Engineering. For the purpose of this scholarship, an Indigenous person is a person who self identifies as First Nations (Status/Non-Status), M�tis and/or Inuit. Selection will be based on a combination of academic achievement, the Admission Information Form (AIF), the online video interview, as well as an application statement wherein students are asked to describe the impact this award will have on their pursuit of post-secondary studies.", "n/s", "Ontario", "University of Waterloo", "Any School", "Entering first year, Entering or in first year" },
                    { 6, "N/A", "Exchange Program", "N/A", "Any", "Faculty of Health Sciences, University of Ottawa, 539-540 King Edward, Ottawa, ON, Canada.  K1N 6N5", "fssrecherche@uottawa.ca", "Celine Marie", "613-562-5800 ext 1398", "Full-time or Part-time", "March 31, 2024", "Accounting, Business Administration and Management, General, Business Administration, Management and Operations, Other, Business/Commerce, General, Entrepreneurship/Entrepreneurial Studies, Finance, General�more, Health Services Administration, Health/Health Care Administration/Management, Human Resources Management/Personnel Administration, General, International Business/Trade/Commerce, Law (LL.B, J.D., B.C.L.), Management Information Systems, General, Management Science, General, Marketing/Marketing Management, General�less", "Yes", "Any", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/57154/Chrysler-Canada-International-Exchange-Fund", "Chrysler Canada International Exchange Fund", "To help offset travel expenses for students of the Telfer School of Management participating in international exchange programs. The applicant must: be registered in a program at the Telfer School of Management of the University of Ottawa; participate in international exchange programs; and demonstrate financial need, as determined by the Financial Aid and Awards Service.", "n/s", "Ontario", "Telfer School of Management, University of Ottawa/Universit� d'Ottawa", "Any School", "Entering or in first year, Entering or in second year, Entering or in third year, Entering or in fourth year" },
                    { 7, "92", "Extracurricular Activities", "$11,500", "Canada", "Desmarais Building, 55 Laurier Avenue East, Room 3156	, Ottawa, ON, Canada.  K1N 6N5", "loansandawards@uOttawa.ca", "Financial Aid and Awards", "613-562-5734", "Full-time", "March 15, 2024", "Biochemistry, Biology/Biological Sciences, General, Biomedical Sciences, General, Chemistry, General, Economics, General, Environmental Science�more, Financial Mathematics, Geography, Geology/Earth Science, General, Mathematics, General, Ophthalmic Laboratory Technology/Technician, Pharmaceutical Sciences, Physics, General, Statistics, General�less", "No", "Any", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/28154/Faculty-of-Science-Undergraduate-Research-Scholarship", "Faculty of Science Undergraduate Research Scholarship", "The Faculty of Science awards 16 of these scholarships to the best eligible students. This scholarship consists of two work terms with a research group at the Faculty of Science or the Faculty of Medicine (first work term = $5,000; second work term = $6,500). Students must be enrolled full time, for the first time in September, in an undergraduate program at the Faculty of Science and have a minimum admission average of 92%. They must also demonstrate research skills and involvement in extracurricular scientific activities. Applications must include a letter of recommendation from a science teacher and a 250-word text describing how the candidate explores their passion for science and shares it with others. Students must also be available for an interview in the spring. Applications must be submitted online.", "n/s", "n/s", "University of Ottawa/Universit� d'Ottawa", "Any School", "Entering first year" },
                    { 8, "N/A", "n/s", "$15,000", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Administration (MSN, MS, PhD), Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/64940/Dr.-Dorothy-J.-Kergin-Fellowship", "Dr. Dorothy J. Kergin Fellowship", "Open to all eligible students at the master and doctorate level. Doctorate prize: $10,000; Master's prize: $5000.", "n/s", "Canada", "Any School", "Any School", "All Years" },
                    { 9, "N/A", "n/s", "$1,000", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/84076/Diversability/Disability-Award", "Diversability/Disability Award", "Available to students who self-identify as having a diversability and/or disability and are currently enrolled in a RPN, LPN, or RN program. You must submit a 500-word essay detailing your experiences as a nursing student with a diversability and/or disability (positive or negative).", "n/s", "Canada", "Any School", "Any School", "All Years" },
                    { 11, "N/A", "School or Community Service", "$1,000", "Any", "700 Coronation Blvd, Cambridge, ON, Canada.  N1R 3G2", "bcollins@cmh.org", "Bonnie Collins ", "N/A", "Full-time or Part-time", "July 17, 2024", "Health Professions and Related Clinical Sciences, Other, Nursing, Other, Registered Nursing, Nursing Administration, Nursing Research and Clinical Nursing, Other", "Yes", "Any", "Any Visible Minority", "No", "https://www.scholarshipscanada.com//Scholarships/67251/CMH-Staff-Trust-Diversity-Bursary", "CMH Staff Trust Diversity Bursary", "The CMH Staff Trust Fund is an employee led and funded trust. For almost 50 years it has donated to local charities and organizations that help those in need in Cambridge, North Dumfries and the Region of Waterloo. In addition to supporting local charities, the CMH Staff Trust Fund members have developed an education bursary to help increase diversity in health care.\n\nThe Cambridge Memorial Hospital (CMH) Staff Trust Diversity Bursary is to assist African Canadians, Indigenous people, persons of colour, persons with disabilities and/or those identifying as 2SLGBTQIA+ in their pursuit of post-secondary education in a health-related discipline. The longer term goal is to create a more diverse health care workforce.\n\nTo be considered, bursary applicants must:\n\nIdentify as an African Canadian, Indigenous person, person of colour, having a disability, and/or belonging to the 2SLGBTQIA+ community.\nBe a resident of the Region of Waterloo\nBe starting or continuing full or part-time studies for the academic year in a Canadian post-secondary institution that is recognized by the Universities Canada or Colleges and Institutes Canada.", "Ontario", "Canada", "Any School", "Any School", "All Years" },
                    { 13, "N/A", "n/s", "$7,500", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/84203/Frances-Moran-Award", "Frances Moran Award", "Open to all nursing students in a Doctoral nursing program.", "n/s", "Canada", "Any School", "Any School", "All Years" },
                    { 14, "N/A", "n/s", "$15,000", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Administration (MSN, MS, PhD), Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/64940/Dr.-Dorothy-J.-Kergin-Fellowship", "Dr. Dorothy J. Kergin Fellowship", "Open to all eligible students at the master and doctorate level. Doctorate prize: $10,000; Master's prize: $5000.", "n/s", "Canada", "Any School", "Any School", "All Years" },
                    { 15, "N/A", "n/s", "$1,500", "Any", "3333 University Way, Prince George, BC, Canada.  V2N 4Z9", "awards@unbc.ca", "Awards and Financial Aid", "(250) 960-6319", "Full-time", "April 01, 2024", "English Creative Writing, English Language and Literature, General, Journalism", "Yes", "Female", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/4070/Eileen-Williston-Bursary", "Eileen Williston Bursary", "Open to a full-time student enrolled and majoring in the English program or other programs related to careers in creative writing or journalism. Preference given to mature women students. Minimum GPA of 2 required.", "International or Visa Student, Canada", "British Columbia", "University of Northern British Columbia", "Any School", "All Years" },
                    { 18, "N/A", "Volunteer", "$500", "Canada", "101 � 44981 Commercial Ct, Chilliwack, BC, Canada.  V2R 0E6", "manufacturing@safetyalliancebc.ca", "Jennifer Wiebe", "16047959595", "Full-time", "March 15, 2024", "Hazardous Materials Information Systems Technology/Technician, Industrial Safety Technology/Technician, Occupational Safety and Health Technology/Technician, Quality Control and Safety Technologies/Technicians, Other", "Yes", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/66102/Julie-Cole-Bursary-for-Studies-in-Occupational-Health-and-Safety", "Julie Cole Bursary for Studies in Occupational Health and Safety", "The loss of Julie Cole in 2020 left a hole in the safety community of British Columbia. An external auditor for the Manufacturing Safety Alliance of BC and health and safety manager, a principal consultant and safety trainer, and Manager of Health and Wellness for School District 20, Julie was a vital member of the safety community.\n\nThe Alliance has created a new bursary in her honour to support a student who shares Julie�s passion for Occupational Health and Safety.\n\n\nThis award will support a student pursuing a career in Occupational Health and Safety through post-secondary studies with demonstrated genuine financial need.\n\nThe Manufacturing Safety Alliance of BC is a leading provider of health and safety services in BC. An industry-funded organization with a board of directors elected from BC manufacturing industries, the Alliance is dedicated to ensuring Occupational Health and Safety professionals of the future are well qualified to provide industry advice and leadership.\n\n\n\nApplications will be accepted from students enrolling in a full-time, accredited Occupational Health and Safety program at college or university in BC (BCIT, UBC)\nApplications will be accepted from high school graduates and those furthering their education in health and safety graduate studies as outlined in the list of qualified programs\nApplicants will submit abstracts showing their academic results\nApplicants will submit an essay of 750 to 1,200 words explaining why workplace health and safety is important to them, and why they are pursuing this course of study\nApplicants will include information about their financial need in their application\nApplicants will be Canadian citizens or permanent residents residing in the province of B.C.", "British Columbia", "British Columbia", "British Columbia Institute of Technology, Langara College, Simon Fraser University, Simon Fraser University - Faculty of Applied Sciences, The University of British Columbia - Vancouver, University of Northern British Columbia�more, University of Victoria�less", "Any School", "All Years" },
                    { 19, "N/A", "n/s", "$4,000", "Any", "210 Administration-Humanities Building, Regina, SK, Canada.  S4S 0A2", "Scholarships@uregina.ca", "Student Awards & Financial Aid", "(306) 585-5556", "Full-time", "March 15, 2024", "Electrical, Electronics and Communications Engineering, Engineering, General, Environmental Engineering Technology/Environmental Technology, Industrial Engineering, Petroleum Engineering", "Yes", "N/A", "Aboriginal,Indigenous", "No", "https://www.scholarshipscanada.com//Scholarships/71367/Association-of-Professional-Engineers-&-Geoscientists-of-Saskatchewan-(APEGS)-Entrance-Bursary-(Engineering)", "Association of Professional Engineers & Geoscientists of Saskatchewan (APEGS) Entrance Bursary (Engineering)", "1 bursary of $4,000.00 will be presented to an entering Engineering student and 1 bursary of $4,000.00 will be presented to an entering Engineering student with a preference to a student who is self-declared Indigenous.The bursary will be presented to the University of Regina entering student who meets the following criteria:\n\nEntering the Faculty of Engineering and Applied Science degree program in any Engineering discipline;\nRegistered and remains registered in a minimum of 9 credit hours in the semester the bursary is presented;\nDemonstrated financial need; and\nSelf-declared Indigenous student (for one of the entrance bursaries).\nNote: The student recipient must agree to have their contact information (phone number and email) shared with the Donor. The student recipient must be willing to be highlighted in the Donor's newsletter, website and other communications vehicles.", "n/s", "Saskatchewan", "University of Regina", "Any School", "Entering first year" },
                    { 21, "N/A", "n/s", "$10,000", "Canada", "2282 Bloor Street West, Toronto, ON, Canada.  M6S 1N9", "info@bcufoundation.com", "BCU Foundation", "416-763-3388", "Full-time", "March 31, 2024", "Accounting, Business Administration and Management, General, Business/Commerce, General, Computer Science, Engineering, General, Finance, General�more, Physical Sciences, Social Sciences, General�less", "No", "Any", "Ukrainian", "No", "https://www.scholarshipscanada.com//Scholarships/72782/Canada-150-Fund-Graduate-Student-Scholarship", "Canada 150 Fund Graduate Student Scholarship", "BCU Foundation is committed to fostering the development of future generations of scholars and young professionals who will flourish in their careers, make meaningful and lasting contributions to the development of their Ukrainian Canadian community, and continue the tradition of excellence set by Ukrainians in Canada.\n\n\nIn 2017 BCU Foundation launched the Canada 150 Fund in commemoration of Canada's 150th anniversary of Confederation. The Fund provides an annual scholarship for Ukrainian Canadian graduate students and young scholars pursuing a graduate degree, including Master's, MBA, PhD, or post-doctoral research at a recognized North American institution.", "Canada", "Canada, United States", "Any School", "Any School", "All Years" },
                    { 23, "N/A", "n/s", "$4,000", "Any", "210 Administration-Humanities Building, Regina, SK, Canada.  S4S 0A2", "Scholarships@uregina.ca", "Student Awards & Financial Aid", "(306) 585-5556", "Full-time", "March 15, 2024", "Electrical, Electronics and Communications Engineering, Engineering, General, Environmental Engineering Technology/Environmental Technology, Industrial Engineering, Petroleum Engineering", "Yes", "N/A", "Aboriginal,Indigenous", "No", "https://www.scholarshipscanada.com//Scholarships/71367/Association-of-Professional-Engineers-&-Geoscientists-of-Saskatchewan-(APEGS)-Entrance-Bursary-(Engineering)", "Association of Professional Engineers & Geoscientists of Saskatchewan (APEGS) Entrance Bursary (Engineering)", "1 bursary of $4,000.00 will be presented to an entering Engineering student and 1 bursary of $4,000.00 will be presented to an entering Engineering student with a preference to a student who is self-declared Indigenous.The bursary will be presented to the University of Regina entering student who meets the following criteria:\n\nEntering the Faculty of Engineering and Applied Science degree program in any Engineering discipline;\nRegistered and remains registered in a minimum of 9 credit hours in the semester the bursary is presented;\nDemonstrated financial need; and\nSelf-declared Indigenous student (for one of the entrance bursaries).\nNote: The student recipient must agree to have their contact information (phone number and email) shared with the Donor. The student recipient must be willing to be highlighted in the Donor's newsletter, website and other communications vehicles.", "n/s", "Saskatchewan", "University of Regina", "Any School", "Entering first year" },
                    { 25, "N/A", "n/s", "$10,000", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/64945/NANB/TD-Meloche-Monnex-Centennial-Doctoral-Scholarship", "NANB/TD Meloche Monnex Centennial Doctoral Scholarship", "Registered nurses in New Brunswick studying at the doctoral level from all domains of practice. Available only to New Brunswick residents who are registered on the practicing register of NANB. An individual may receive the Scholarship one time only.", "New Brunswick", "Canada", "Any School", "Any School", "All Years" },
                    { 26, "N/A", "n/s", "$6,000", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/84204/Carolyn-Sifton-Research-Grant", "Carolyn Sifton Research Grant", "Open to all nurses with a focus in at risk youth.", "n/s", "Canada", "Any School", "Any School", "All Years" },
                    { 27, "N/A", "n/s", "$4,000", "Any", "210 Administration-Humanities Building, Regina, SK, Canada.  S4S 0A2", "Scholarships@uregina.ca", "Student Awards & Financial Aid", "(306) 585-5556", "Full-time", "March 15, 2024", "Electrical, Electronics and Communications Engineering, Engineering, General, Environmental Engineering Technology/Environmental Technology, Industrial Engineering, Petroleum Engineering", "Yes", "N/A", "Aboriginal,Indigenous", "No", "https://www.scholarshipscanada.com//Scholarships/71367/Association-of-Professional-Engineers-&-Geoscientists-of-Saskatchewan-(APEGS)-Entrance-Bursary-(Engineering)", "Association of Professional Engineers & Geoscientists of Saskatchewan (APEGS) Entrance Bursary (Engineering)", "1 bursary of $4,000.00 will be presented to an entering Engineering student and 1 bursary of $4,000.00 will be presented to an entering Engineering student with a preference to a student who is self-declared Indigenous.The bursary will be presented to the University of Regina entering student who meets the following criteria:\n\nEntering the Faculty of Engineering and Applied Science degree program in any Engineering discipline;\nRegistered and remains registered in a minimum of 9 credit hours in the semester the bursary is presented;\nDemonstrated financial need; and\nSelf-declared Indigenous student (for one of the entrance bursaries).\nNote: The student recipient must agree to have their contact information (phone number and email) shared with the Donor. The student recipient must be willing to be highlighted in the Donor's newsletter, website and other communications vehicles.", "n/s", "Saskatchewan", "University of Regina", "Any School", "Entering first year" },
                    { 28, "N/A", "n/s", "$9,000", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "Aboriginal,First Nation,Indigenous", "No", "https://www.scholarshipscanada.com//Scholarships/64948/TD-Insurance-Indigenous-Nursing-Award", "TD Insurance Indigenous Nursing Award", "Open to all eligible Indigenous nurses studying at the doctoral level.", "n/s", "Canada", "Any School", "Any School", "All Years" },
                    { 29, "N/A", "n/s", "$10,000", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/64945/NANB/TD-Meloche-Monnex-Centennial-Doctoral-Scholarship", "NANB/TD Meloche Monnex Centennial Doctoral Scholarship", "Registered nurses in New Brunswick studying at the doctoral level from all domains of practice. Available only to New Brunswick residents who are registered on the practicing register of NANB. An individual may receive the Scholarship one time only.", "New Brunswick", "Canada", "Any School", "Any School", "All Years" },
                    { 30, "N/A", "n/s", "$6,000", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/84204/Carolyn-Sifton-Research-Grant", "Carolyn Sifton Research Grant", "Open to all nurses with a focus in at risk youth.", "n/s", "Canada", "Any School", "Any School", "All Years" },
                    { 31, "N/A", "n/s", "$7,500", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/84203/Frances-Moran-Award", "Frances Moran Award", "Open to all nursing students in a Doctoral nursing program.", "n/s", "Canada", "Any School", "Any School", "All Years" },
                    { 32, "N/A", "n/s", "$15,000", "Canada", "135 Michael Cowpland Drive Suite 105, Kanata, ON, Canada.  K2M 2E9", "info@cnf-fiic.ca", "Canadian Nurses Foundation", "6136800879 x 221", "Full-time or Part-time", "March 15, 2024", "Family Practice Nurse/Nurse Practitioner, Nursing Administration (MSN, MS, PhD), Nursing Science (MS, PhD), Nursing/Registered Nurse (RN, ASN, BSN, MSN)", "No", "N/A", "N/A", "No", "https://www.scholarshipscanada.com//Scholarships/64940/Dr.-Dorothy-J.-Kergin-Fellowship", "Dr. Dorothy J. Kergin Fellowship", "Open to all eligible students at the master and doctorate level. Doctorate prize: $10,000; Master's prize: $5000.", "n/s", "Canada", "Any School", "Any School", "All Years" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Scholarships");
        }
    }
}
