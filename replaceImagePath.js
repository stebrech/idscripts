// Relink images with regex. 
// This can be used to change the link if the document is opened on another OS 
// or if linked files are available on a new location but still existing on old location.
// Highly inspired by the script of m1b on https://community.adobe.com/t5/indesign-discussions/change-link-filepath-in-indesign/m-p/12734040
// Author: Stefan Brechbühl

var myDoc = app.activeDocument;
var allImages = myDoc.links;
var counter = 0;


var fromRegex = /\/Volumes\//; // change this regex
var toRegex =/\\\\share\\/; // to this

for (var i = 0; i < allImages.length; i++) {
	var currentImage = allImages[i];
	var currentImageLink = currentImage.linkResourceURI;
	var newImageLink = currentImageLink.replace(fromRegex, toRegex);
	currentImage.reinitLink(newImageLink);
	if (currentImageLink != newImageLink) {
		counter++;
	}
}

alert(counter + " images has been relinked" )