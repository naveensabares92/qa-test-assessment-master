Feature: Search for a Planet
    
    Scenario: Open a browser
        Given App open on "localhost"
            When Page Title is as expected
                Then Verify Default state of app