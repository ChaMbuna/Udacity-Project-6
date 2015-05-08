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

    // ensure allFeeds has a URL defined
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

    // Ensure allFeeds has a name defined
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


  // Ensure menu element is hidden by default.
  describe('The menu', function () {
    it('body has menu-hidden class', function () {
      //check for menu-hidden class on body init
      expect($('body')).toHaveClass('menu-hidden');
    });
  });

  // Ensure menu visibility toggles when icon is clicked
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

  // Ensure there's at least one entry in feed container
  describe('Initial Entries', function () {
    beforeEach(function (done) {
      //load first feed
      loadFeed(0);
      //use done() function as argument to beforeEach(), afterEach(), it()
      done();
    });

    it('Single .entry exists in .feed container', function () {
      //check if entry exists
      expect($('.feed')).toExist();
      //check if entry is not null
      expect($('.entry').length).not.toBe(null);
    });

  });


  // Ensure content change on new feed loads
   describe("New Feed selection", function(){
        var previousContent;
        beforeEach(function(done) {
        loadFeed(0, function() {
          previousContent = $('.feed').html();
          loadFeed(1, done);
        });
      });

      it('has changed', function() {
        expect($('.feed').html()).not.toBe(previousContent);
      });
   });

}());