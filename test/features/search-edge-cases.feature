Feature: Search Functionality - Edge cases
    
    Scenario: Complete Search, Search again with an empty text-box and validate no results displayed 
        Given App open on "localhost"
            When I search the "person" as "Vader"
                Then Verify details of "Darth Vader"
                    When I clear the search text-box and click on search again
                        Then I should see no search results

    Scenario: Search a data by clicking on Enter button  
        Given App open on "localhost"
            When I Select option People if not selected
                When I search the "person" as "Luke Skywalker"
                    When I press ENTER key
                        Then Verify details of "Luke Skywalker"

    Scenario: Complete Search of People, Switch to planet radio button, search for the same data and validate No result found message
        Given App open on "localhost"
            When I search the "person" as "Vader"
                Then Verify details of "Darth Vader"
                    When Select option Planet if not selected
                        Then I click on search again
                            Then Verify Not Found message