Feature: Login Functionality

  As a registered user
  I want to log into the application
  So that I can access my account

  Scenario: Successful login with valid credentials
    Given the user navigates to the login page
    When the user enters username "rahulshettyacademy" and password "Learning@830$3mK2"
    And clicks on the login button
    Then the user should be redirected to the dashboard

  Scenario: Unsuccessful login with invalid credentials
    Given the user navigates to the login page
    When the user enters username "invalid" and password "wrong"
    And clicks on the login button
    Then an error message "Invalid username or password" should be displayed

  Scenario: Username field is missing for login
    Given the user navigates to the login page
    When the user enters username "" and password "wrong"
    And clicks on the login button
    Then a mising username field and "username is mandatory" should be displayed

  Scenario: Password field is missing for login
    Given the user navigates to the login page
    When the user enters username "username" and password ""
    And clicks on the login button
    Then a mising password field and "password is mandatory" should be displayed 