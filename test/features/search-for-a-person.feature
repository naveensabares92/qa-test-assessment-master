Feature: Search a person - Luke Skywalker
    
    Scenario: Search a Person and verify details 
        Given App open on "localhost"
            When Select option People if not selected
                When I search the "person" as "Luke Skywalker"
                    Then Verify details of "Luke Skywalker"