# ComicSearchAPI

Built a web application in three parts using Node.js and Angular.js that allows a user to search for a Comic Character by name using the Comicvine Developer's API.

# Part 1

-- Implement a server with Node.js using the express framework
-- Implement client side using Angular.js and Jade or EJS (no jQuery)

-- IF the search is successful - user can see details (name and description) about the character searched
-- IF the search is NOT successful - user can see a message indicating no results found

# Part 2 : Adding new features to the web application built from Part 1.

Feature 1 - Switch Between Characters

The response from the ComicVine API is an array of character objects.

Using this response - return the first object in the array as the main character searched.

Then display additional characters contain in the array as similar matches.

When the user clicks on the character's name, the selected character's name and description will now be displayed and replace the area where the main character was displayed.

Feature 2 - Character Detail View

Have added a detail button to the character search page.

When the user clicks the details button - they are taken to a new page which shows the full details of the character including - name, deck, origin, publisher, powers, friends, and enemies.

When a user clicks on a friend or enemy in the list - they are taken to the details page about that character.

# Part 3 : Adding new feature to the web application built from Part 2.

Feature 3 - Versus Characters

Added a 'versus' button for each enemy listed on the character detail page.

When the user clicks the versus button - they are taken to a new page which shows basic info (name, origin, deck, publisher) and the stats (listed below) between the two characters. Both the character and the enemy should have details buttons.

Teams

Number of Teams
Top 3 Teams
Powers

Number of Powers
Top 5 Powers
Friends

Number of Friends
Top 10 friends
link to details page
Enemies

Number of Enemies
Top 10 enemies
link to details page
