# ml-survey-service

This is ml-survey-services, the managed-learn component responsible for creating observation and surveys within the managed learn services.

# Setup Guide

## Pre-Requisite

- Install any IDE in your system(eg: VScode etc..)
- Install nodejs from : https://nodejs.org/en/download/
- Install mongoDB: https://docs.mongodb.com/manual/installation/
- Install Robo 3T: ​​https://robomongo.org/

Basic understanding of git and github is recommended.

- https://www.youtube.com/watch?v=RGOj5yH7evk&t=2s
- https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F

## Setup ml-survey-services

### Clone the service repository onto your system

- Create a new folder where you want to clone the repository.
- Navigate to that directory using the terminal.
- Execute the git commands to clone the repository using the provided link from the code tab.

Git link

    https://github.com/shikshalokam/ml-survey-service.git

command to clone

    git clone https://github.com/shikshalokam/ml-survey-service.git

### Create .env file

Create a file named `.env` and copy the environment-specific data corresponding to that service into the `.env` file.

# ML Survey Service Config

    APPLICATION_PORT = 3000                                                         // Application port number
    APPLICATION_ENV = 'development'                                                 // Application running enviornment

    # Setting for custom request timeout for reports
    MONGODB_URL = mongodb://localhost:27017/sl-assessment                           // Mongodb connection url
    USER_SERVICE_URL = "http://user-service:3000"                                   // Base url of the sunbird enviornment
    INTERNAL_ACCESS_TOKEN = "Internal access token to access reports"               // Internal access token for accessing Admin specific APIs

    # Kafka Configuration
    KAFKA_COMMUNICATIONS_ON_OFF = "ON/OFF"                                          // Kafka enable or disable communication flag
    KAFKA_URL = "100.0.0.1:9092"                                                    // IP address of kafka server with port without HTTP
    SUBMISSION_RATING_QUEUE_TOPIC = "dev.sl.submission.rating.raw"                                // Kafka topic name for pushing submissions for which rating has to be done.
    COMPLETED_SURVEY_SUBMISSION_TOPIC = "dev.sl.survey.raw"                            // Kafka topic name for completed survey submission
    INCOMPLETE_SURVEY_SUBMISSION_TOPIC = "dev.sl.incomplete.survey.raw"                           // Kafka topic name for incomplete survey submission
    KAFKA_GROUP_ID = "survey"                                                       // Kafka consumer group for ML Survey Service
    IMPROVEMENT_PROJECT_SUBMISSION_TOPIC = "dev.sl.improvement.project.submission"                                       // Kafka topic name for pushing project submission related data
    OBSERVATION_SUBMISSION_TOPIC = "dev.sl.observation.raw"                         // Kafka topic name for pushing observation submission


    # ML Core Service
    ML_CORE_SERVICE_URL = "http://ml-core-service:3000"                             // ML Core Service URL

    # IMPROVEMENT PROJECT SERVICE
    ML_PROJECT_SERVICE_URL = "http://ml-project-service:3000"                       // Project Service URL

    KEYCLOAK_PUBLIC_KEY_PATH = "keycloak-public-keys"                               // Keycloak public keys path

    DISABLE_LEARNER_SERVICE_ON_OFF = "ON"                                          // Disable learner service check

    FORM_SERVICE_URL = "http://player:3000"                                         // Base url for form search

### Install Dependencies

To install dependencies from a `package.json` file in Visual Studio Code, you can use the integrated terminal. Here are the steps:

- Open the integrated terminal by going to View > Terminal or using the shortcut Ctrl+` (backtick).
- In the terminal, navigate to the directory where the package.json file is located.
- Run the command `npm install` or `yarn install`, depending on your preferred package manager.
- The package manager will read the package.json file and install all the dependencies specified in it.
- Wait for the installation process to complete. You should see progress indicators or a success message for each installed dependency.
- Once the installation is finished, the dependencies listed in the package.json file will be installed in a node_modules directory in your project.

### Setting the keycloak

- Create a folder on service directory named: `keycloak-public-keys`
- Inside that folder create a file `GRxxx....................xxxxx60fA`

**for keycloak file please contact Backend Team**

### Setup Database

Before proceeding with these steps, ensure that you have MongoDB installed on your computer. For a graphical user interface (GUI) for MongoDB, you can choose to install Robo 3T.

- Obtain the latest database dump from the backend team.
- Restore the database in your local environment using the following command:

  For Windows/Linux:
  `mongorestore <name you want to give the db>  <directory or file to restore>`

  For macOS: `mongorestore -d <name you want to give the db>  <directory or file to restore>`

Note: Add `<name you want to give the db>` to mongoDB url in `.env` file.

### DB Schema

The schema serves as a blueprint for creating and maintaining the database that supports the ML survey services data storage and retrieval operations.

![ML-Survey Service](https://ml-services-uploads.s3.ap-south-1.amazonaws.com/DBSchema/ML-Survey.png)

[Click here](https://ml-services-uploads.s3.ap-south-1.amazonaws.com/DBSchema/ML-Survey.pdf) for DB schema and corresponding examples in a PDF format.

### Postman Collection

The ML Survey Service Postman Collection is a comprehensive resource for interacting with the ML Core Service. It includes organized endpoints, detailed documentation, and example workflows, providing a valuable reference for developers. Leverage this collection to enhance productivity and collaboration in ML Services.

[Click here](https://documenter.getpostman.com/view/7997930/2s946chuaT)

## IMPORTANT:

Always work on branches. **Never make changes to master**.

Creating a branch from master.

For more information on git you can use :  
 https://education.github.com/git-cheat-sheet-education.pdf
