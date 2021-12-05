Feature: Search Bar
    Scenario: Search for Category
        Given A user who access the website
        And goes to the "BROWSE" tab
        When selects "Category" option
        And update types "Science: Computers"
        And And clicks the "SEARCH" button
        Then there should be return a 25 items list
        And a pagination control element at the end of the page.
