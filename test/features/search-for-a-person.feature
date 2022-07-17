Feature: Search a person - Luke Skywalker & an unavailable user
    
    Scenario: Search a Person and verify details 
        Given App open on "localhost"
            When I Select option People if not selected
                When I search the "person" as "Luke Skywalker"
                    Then Verify details of "Luke Skywalker"
    
    Scenario: Search a Person and verify details 
        Given App open on "localhost"
            When I Select option People if not selected
                When I search the "person" as "Mithrandir"
                    Then Verify Not Found message

    Scenario: Search a Person with Partial data and verify multiple entries displayed 
        Given App open on "localhost"
            When I Select option People if not selected
                When I search the "person" as "Lars"
                    Then Verify multiple entries of "Lars"