# Project details

The goal of this project was to check the RSS feed reader functions as expected, is constructed well and handles events properly.

# Project requirements

1. Take the JavaScript Testing course.
2. Download the required project assets.
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (./index.html), CSS (./css/style.css) and   JavaScript (./js/app.js) to gain an understanding of how it works.
5. Explore the Jasmine spec file in ./jasmine/spec/feedreader.js and review the Jasmine documentation.
6. Edit the allFeeds variable in ./js/app.js to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the allFeeds variable to a passing state.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named "The menu".
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named "Initial Entries".
Write a test that ensures when the loadFeed function is called and completes its 14. work, there is at least a single .entry element within the .feed container.
15. Write a test suite named "New Feed Selection".
16. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

# Running the project

Open the index.html file to see Jasmine tests performed underneath the app.

# Resources used

1. Project assets (http://github.com/udacity/frontend-nanodegree-feedreader).
2. Jasmine docs (http://jasmine.github.io).
3. HTML Goodies Article (http://www.htmlgoodies.com/beyond/javascript/testing-javascript-using-the-jasmine-framework.html).
4. Udacity video course.
5. Jessy Warden Youtube video (https://www.youtube.com/watch?v=eVpXkyN0zOE)