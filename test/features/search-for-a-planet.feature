Feature: Search a planet - Naboo
    
    Scenario: Search a Planet and verify details 
        Given App open on "localhost"
            When Select option Planet if not selected
                When I search the "Planet" as "Naboo"
                    Then Verify details of "Naboo"