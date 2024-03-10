# QDS2024Tecknicians

## ScholarSwipe
A QDS 2024 Hackathon Project

Description: A scholarship-finding app for students that gamifies the process with a tinder-like swiping feature and self-generating 
application based on the user info and the description for the scholarship.

To run the app:

Install all dependencies for npm. You can do this by running the command npm i in the root, server, and the client folder. You also need the latest version of dotnet (8.0.2) for AI functionality to work. After that, running the runApp.bat from the root folder will be able to run the server and the client side code.



Project of:
Ashley Bilton
Harrison de Jong
Benny Li
Sukhraj Sidhu
Laurie Solkoski
Ozan Yurtisigi



## Inspiration:
Inspired by gamifying apps like Habitica and the popular “swipe” feature from Tinder, we aimed to transform the tedious task of scholarship search into an engaging experience. We noticed the issue of unapplied scholarships and envisioned a platform to make these opportunities easily accessible and captivating for students.

## What it Does:
ScholarSwipe dynamically presents scholarships as swipeable cards, populated via a web scraper. It leverages the OpenAI API for filtering scholarships based on user prompts, streamlining the search to match personal preferences and qualifications. It is an engaging platform to ease the scholarship search.

## How We Built It:
Our backend harnesses the power of Selenium which created a web scraper, meticulously navigates through scholarship websites, capturing key information by identifying specific HTML tags. This process allows us to aggregate data from countless scholarships across various platforms into a comprehensive JSON file, which then populates our dynamic card stack. Leveraging AI, ScholarSwipe intelligently filters scholarships based on user prompts—such as showcasing only nursing scholarships when requested—ensuring a tailored browsing experience. Meanwhile, user preferences and selected scholarship favourites are securely managed within a MongoDB database, offering personalized engagement. Designed with the student experience in mind, our front end adopts the popular and engaging 'swipe' mechanism, delivering a quick, seamless, and captivating way to explore scholarship opportunities without any hassle. The front end, designed with a student-centric approach, mirrors the engaging simplicity of popular 'swipe' interfaces. This provides a swift, intuitive, and captivating scholarship browsing experience, devoid of any hassle.

## Challenges We Ran Into:
The main hurdles included bridging the frontend and backend seamlessly and dealing with external distractions and time adjustments.

## Accomplishments That We're Proud Of:
Proudly developed a functioning full-stack application in under 48 hours, incorporating learned technologies and achieving a seamless client-server architecture integration.

## What We Learned:
Emphasized mastering core features using familiar technology stacks to ensure a solid foundation for the application.

## What's Next for ScholarSwipe:
Future developments include automating the scholarship application process and expanding the platform's scale to accommodate more scholarships and users.
