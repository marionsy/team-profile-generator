# Team Profile Generator

  ## Description

  Node command line application that generates an HTML page based on user input about employees and includes summaries.

  ## Installation

   * `npm install` to install required npm packages
   *  Install Node.js to run the application

  ## Usage

   * To see if all tests have passed, the user will enter `npm test`.
   * The application will be called when the user enters `node index.js`.
   * Users will then be prompted with questions about each employee.
     * Manager- only one is added
     * Engineer- any number
     * Intern- any number
   * Every employee will be asked the following questions, with validation included to ensure user input.
     * Name
     * ID
     * Email
   * In addition, the following questions will be asked depending on the selected employee.
     * Manager- office number
     * Engineer- GitHub
     * Intern- school
   * When the user is done building their team, the team.html page will be generated in the /dist folder.
   * The generated html page has functional email and GitHub links.
  
  ## Screenshot
  
  This screenshot is the sample team page created from this application.
  
  <img width="1287" alt="Screen Shot 2022-08-30 at 11 47 45 AM" src="https://user-images.githubusercontent.com/105673031/187518637-49ba91cd-8579-4cdd-bf89-e4c90ea2f74a.png">

  
  ## Video Demo
  
  This video demonstrates all four tests passing, how a user would invoke the application from the command line, how they would enter responses to prompts, and the team.html page generated from the user input.
  This video also shows that the email and GitHub information provided create functional links in the team.html page.

  https://user-images.githubusercontent.com/105673031/187518820-e0346a27-8065-47f5-816a-b3233321ffa1.mov 

  ## Features

   * Node.js
   * npm
   * jest
   * inquirer
   * Javascript
