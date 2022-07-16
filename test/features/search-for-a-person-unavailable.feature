Feature: Search a person - Unavailable
    
    Scenario: Search a Person and verify details 
        Given App open on "localhost"
            When Select option People if not selected
                When I search the "person" as "Mithrandir"
                    Then Verify Not Found message