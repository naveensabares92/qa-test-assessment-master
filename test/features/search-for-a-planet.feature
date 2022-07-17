Feature: Search a planet - Naboo  & an unavailable planet
    
    Scenario: Search a Planet and verify details 
        Given App open on "localhost"
            When Select option Planet if not selected
                When I search the "Planet" as "Naboo"
                    Then Verify details of "Naboo"

    Scenario: Search a Planet and verify details 
        Given App open on "localhost"
            When Select option Planet if not selected
                When I search the "Planet" as "Earth 616"
                    Then Verify Not Found message