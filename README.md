# 📈Transition

- Transitioning between careers is more than just making a change – it's embarking on a journey of personal and professional growth. Let **Transition** be your compass as you embrace the exciting challenges that lie ahead.
  <img width="927" alt="homepage" src="https://github.com/tiffany831101/transition-website-page/assets/39373272/07cc27ce-9bd7-4ac8-b192-3f07c4844bbe">

## Table of Contents

- [Transition](#transition)
  - [Getting Started](#getting-started)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
  - [Features](#features-1)
  - [Technologies](#technologies)

## Getting Started

To begin using Transition and create your professional resume, follow these simple steps:

1. **Visit the Website:** Go to the [Transition Website](http://frontend-elb-753027556.us-east-1.elb.amazonaws.com/#/).
2. **Sign Up or Log In:** If you're new to Transition, create an account. If you already have one, log in using your credentials.
   - Click on "Sign In" or "Sign Up" based on your needs.
![Sign Up](https://github.com/tiffany831101/transition-website-page/assets/39373272/c09165bf-7cc9-4377-b6a1-4ce5bd6415ff)
   - Choose either Google Authentication or the regular sign-in option.
    ![Google Auth](https://github.com/tiffany831101/transition-website-page/assets/39373272/49dbbb9d-a4b0-4434-9433-76f0be32ad2e)
4. **Create Your Resume:** Once logged in, navigate to the resume creation section. 
   - Click "Create Resume" in the upper right corner to begin creating your remarkable resume.
    ![Create Resume](https://github.com/tiffany831101/transition-website-page/assets/39373272/7960c76d-b7d9-4bda-87e4-0c888b80b367)
   - Fill in your details and accomplishments.
    ![Fill Details](https://github.com/tiffany831101/transition-website-page/assets/39373272/ffc1b149-97d6-457e-af69-030c71cd3045)
  
5. **Choose Your Format:** Decide whether you want your resume as an interactive website or a downloadable PDF.
   - After creating your resume, you'll have the option to choose your preferred format: 
    ![Choose Format](https://github.com/tiffany831101/transition-website-page/assets/39373272/48cb9bea-69f3-4275-8b01-6aa69379f4e4)

## Features

- **Create Resumes:** Design appealing resumes that showcase your uniqueness and strengths.
- **Website or PDF:** Download your resume as either an interactive website or a PDF document.


## Architecture

The **Transition** website is built using the following architecture:

- **Elastic Load Balancer (ELB):** Acts as a reverse proxy and load balancer, distributing incoming traffic to ensure efficient handling of user requests.
- **Nginx Service:** Serves as an intermediary between the ELB and the React app, enhancing security and performance.
- **React App:** The frontend of the application, where users interact with the website and create their resumes.

The entire application is orchestrated to run on Amazon ECS (Elastic Container Service), ensuring scalability and resource-efficient deployment.

## Usage

### Installation

To run the Transition App on your local machine, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
   - `cd myapp`
3. Install npm modules
   - `npm install`
4. Run the app
   - `npm run start`

## Technologies
- React
- Material UI
  
