Feature: Search Bar
    Scenario: Nonexistent Question
        Given A user who access the website
        And goes to the "BROWSE" tab
        When types in the search bar "Science: Computers"
        And clicks the "SEARCH" button
        Then a error message should pop up saying "No questions found."
