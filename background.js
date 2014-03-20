/**
 * Background script for Instructables URL sniffing.
 */

/**
 * Blocking requests to instructables.
 */
chrome.webRequest.onBeforeRequest.addListener(
  // Checking if it is not redirecting to all steps.
  function(details) {
    if(details.url.indexOf("ALLSTEPS") == -1) {
      // Redirecting it to all steps page.
      return {redirectUrl: details.url+"?ALLSTEPS"};
    }
  },
  // Applies to following url patterns
  {urls: ["*://www.instructables.com/id/*/"]},
  // In request blocking mode
  ["blocking"]
);
