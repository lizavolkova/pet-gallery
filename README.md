# Pet Gallery 

## Requirements

Build an image gallery of pets up for adoption. Use vanilla JS, CSS, and HTML, but an options framework, pre- or post-processor are allowed, if they add value. Solution must also be SEO optimized. 

### Guidance from the design team

"These images should be displayed on the page as a set of thumbnails; clicking on a thumbnail should display a full-sized image to the user."

"Full-size photos should be able to be closed, and the user should be returned to the thumbnail gallery."

### Requirements from the adoption team

"Starting next month, we'll be partnering with a shelter that has 2000 pets available for adoption. We need this page to be able to handle that many listings."

"Most people find out about us from internet searches. We need this page to appear towards the top of search results."

## Solution
I decided to use a CSS-grid to create a custom masonry style layout without having to use any external libraries. In order to keep the page SEO optimized, I use webpack to compile an index.html file with all the necessary markup for the app to run, and search enginge to index. 
I then lazy load all the images as they scroll into view, to keep the page load time low, and then as each image is loaded, I render them into the masonry grid. 

In order to create a scalable project, I broke down the html, js, and scss files into separate components and use webpack to compile everything into one js, css, and html file. Additionally, I have added ESLint and Stylelint into the project to keep consist code standards across all files.

### Supported browsers/devices
This app has been tested on the following environments:
- iPhone X running iOS12 Chrome and Safari
- Windows 10 latest versions of Chrome, FF
- Samsung S8 phone

### Known issues
Some known issues I noticed while testing, or enhancements to add to the future
- Images are not optimized, would be great to add compression and resizing to build process
- On mobile, when scrolling quickly, there is a visible resizing of the images that causes a flicker
- Add auto-fix for style linting, like there currently is for JS linting
- Create color constants SCSS file 
- Add AA compliance
- Modal is specific to rendering an image and dog description, could be made more generic



