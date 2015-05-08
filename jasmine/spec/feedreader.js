/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS feeds', function () {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function () {
      //check if AllFeeds is defined
      expect(allFeeds).toBeDefined();
      //check if AllFeeds is not empty
      expect(allFeeds.length).not.toBe(0);
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it('URL is defined', function () {
      allFeeds.forEach(function (feed) {
        //check if feed url is defined
        expect(feed.url).toBeDefined();
      });
    });

    it('URL is not empty', function () {
      allFeeds.forEach(function (feed) {
        //check if feed url is not null
        expect(feed.url).not.toBe(null);
        //check if feed url is not emtpy string
        expect(feed.url).not.toBe("");
      });
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('name is defined', function () {
      allFeeds.forEach(function (feed) {
        //check if feed name is defined
        expect(feed.name).toBeDefined();
      });
    });

    it('name is not empty', function () {
      allFeeds.forEach(function (feed) {
        //check if feed name is not null
        expect(feed.name).not.toBe(null);
        //check if feed name is not empty string
        expect(feed.name).not.toBe("");
        
      });
    });

  });


  /* TODO: Write a new test suite named "The menu" */

  /* TODO: Write a test that ensures the menu element is
   * hidden by default. You'll have to analyze the HTML and
   * the CSS to determine how we're performing the
   * hiding/showing of the menu element.
   */

  describe('The menu', function () {
    it('body has menu-hidden class', function () {
      //check for menu-hidden class on body init
      expect($('body')).toHaveClass('menu-hidden');
    });
  });

  /* TODO: Write a test that ensures the menu changes
   * visibility when the menu icon is clicked. This test
   * should have two expectations: does the menu display when
   * clicked and does it hide when clicked again.
   */


  describe('Menu clicks', function () {
    beforeEach(function (done) {
      $('.menu-icon-link').trigger('click');
      //use done() function as argument to beforeEach(), afterEach(), it()
      done();
    });

    it('menu is visible when clicked', function () {
      //check for menu-hidden class on click
      expect($('body')).not.toHaveClass('menu-hidden');
    });

    it('menu turns hidden when clicked again', function () {
      //check for menu-hidden class on clicking again
      expect($('body')).toHaveClass('menu-hidden');
    });

  });

  /* TODO: Write a new test suite named "Initial Entries" */

  /* TODO: Write a test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test wil require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   */

  describe('Initial Entries', function () {
    beforeEach(function (done) {
      //load first feed
      loadFeed(0);
      //use done() function as argument to beforeEach(), afterEach(), it()
      done();
    });

    it('Single .entry exists in .feed container', function () {
      //check if entry is not null
      expect($('.entry').length).not.toBe(null);
      //check if entry exists
      expect($('.feed')).toExist();
    });

  });


    /* TODO: Write a new test suite named "New Feed Selection"

      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */


  describe('New Feed selection', function (done) {
    var feed;

    beforeEach(function (done) {
      loadFeed(1 , done);
      feed = $('.feed').html();
    });
    it('has changed', function (done) {
      //check if feed has actually changed
      expect($('.feed').html()).not.toEqual(feed);
      loadFeed(0, done);
    });
  });

}());