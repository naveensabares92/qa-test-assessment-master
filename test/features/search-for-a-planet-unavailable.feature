Feature: Search a planet - Unavailable
    
    Scenario: Search a Planet and verify details 
        Given App open on "localhost"
            When Select option Planet if not selected
                When I search the "Planet" as "Earth 616"
                    Then Verify Not Found message