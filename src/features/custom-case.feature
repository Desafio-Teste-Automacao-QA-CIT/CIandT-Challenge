Feature: Search Bar
    Scenario: Search for questions
        Given A user who access the website
        And goes to the "BROWSE" tab
        When types in the search bar "Video Game"
        And clicks the "SEARCH" button
        Then there should be only 3 diificulty levels

