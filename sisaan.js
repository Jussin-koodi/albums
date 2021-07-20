

function authenticate() {
  return gapi.auth2.getAuthInstance()
      .signIn({scope: " https://www.googleapis.com/auth/photoslibrary.readonly "})
      //"https://www.googleapis.com/auth/photoslibrary.sharing"})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}
function loadClient() {
  gapi.client.setApiKey("AIzaSyBd_ELyTOGDB3sYWs0PM_a9qI2YycaAMQg");
  return gapi.client.load("https://photoslibrary.googleapis.com/$discovery/rest?version=v1")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "615580118109-fudch3jka7pe9sechhn2nm3bt6l32lfp.apps.googleusercontent.com",
  immediate: true,
  fetch_basic_profile: true
});
}

);  


