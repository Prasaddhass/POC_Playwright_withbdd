Feature: Shop Functionality

  As a registered user
  I want to shop some items shown in the application
  So that I can add some items and place the order for the same

Scenario: Add an item to the cart
    Given the user on the shop page where items are shown
    When the user clicks the add cart button of the item "Blackberry"    
    Then the selected item "Blackberry" should be added to the cart