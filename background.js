/**
 * Background script for Instructables URL sniffing.
 */

/**
 * Blocking requests to instructables.
 */
chrome.webRequest.onBeforeRequest.addListener(
  // Checking if it is not redirecting to all steps.
  function(details) {
    var queryCharacter; // Either '?' or '&' depending on the presence of a query string
    
    if(details.url.indexOf("ALLSTEPS") == -1) {
      // Not in all steps view yet
      if(details.url.indexOf("?") == -1) {
        // No query string present yet
        queryCharacter = "?";
      }
      else {
        // Query already present, add to end with ampersand
        queryCharacter = "&";
      }
      
      // Redirect to all steps page
      return {redirectUrl: details.url+queryCharacter+"ALLSTEPS"};
    }
  },
  // Applies to following url patterns - can have a query string following
  {urls: ["*://www.instructables.com/id/*"]},
  // In request blocking mode
  ["blocking"]
);
