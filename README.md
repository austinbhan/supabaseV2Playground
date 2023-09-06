# react-template
Next Steps
DONE 1: Create Basic Components

DONE 2: List Components with Fake Data

DONE 3: Create Custom URL Links with Each Component on App.jsx

DONE 4a: Create Supabase Data different from local data
DONE 4b: Obtain API URL and Key, put into .env
DONE 4c: Install Supabase library
DONE 4d: Create Fetch Utils to Render All Supabase Data instead of List Data
DONE 4e: Replace ListData with FetchUtils

DONE 5a: Create Creation Form
DONE 5b: Creation Form needs URL link from List Page
DONE 5c: Create submission function that will console log
DONE 5d: Create Fetch Utils to Add Supabase Data
DONE 5e: Create Form Submission Function that calls Fetch Utils
DONE 5f: Verify form works with Supabase table
DONE 5g: Form will remove text entries OR redirect to list page

DONE 6a: Add Delete Button for Each List Entry, make it an individual button per entry?
DONE 6b: Create Fetch Utils to Delete Supabase Data
DONE 6c: Link fetch-utils function so that button deletes data
DONE 6d: Need redirect functinality for creation and deletion form

DONE 7a: Create Edit Form of an Individual Book Data
DONE 7b: The edit form should have an individual entry of the specific id
DONE 7c: That individual entry should be called from a single fetch entry
DONE 7d: Create Edit fetch-utils
DONE 7e: Link from Create Page should procedurally move to unique edit page
DONE 7e: Form submission function for edit page
DONE 7f: Form will update the value of the rendered page
DONE 7g: Upon form editing, render new data on backend
DONE 7h: Make form edit return to the list page

DONE 8a: Create User Form will store user input
DONE 8b: Create fetch-utils add user form
DONE 8c: Create User data will invoke the fetch-utils data
DONE 8d: Create Logout that will remove session cookie
DONE 8e: Enable RLS for registered users

DONE 8d: Create User and Login should redirect to list page
DONE 8e: Login should not redirect if user does not exist
DONE 8f: Data should not be accessible if login credentials not verified
LATER 8g: Login should give user error if user does not exist

DONE 9a: User creates data that includes user_id credentials
DONE 9b: Create TWO PAGES
DONE 9c: A page with all user data, and their author/email
DONE 9d: A page dedicated to solely the user's creations
DONE 9e: Personal page includes template that will be looped in PersonalList
DONE 9f: Data from getPersonalBooks will be pushed into the loop

LIST OF FEATURES TO STILL ADD
a: Edit and delete options for personal list
b: Edit and delete options should be removed from all list

LIST OF BUGS
1: Create User should redirect to list page
2: !user should redirect in on Create Page and Edit Page