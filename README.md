# Pet Gallery 
## Running the project
To install dependencies:
```bash
  npm install
```
To start the dev server on port 9000:
```bash
  npm start
```
To build the project:
```bash
  npm run build
```
## Requirements

Build an image gallery of pets up for adoption. Use vanilla JS, CSS, and HTML An optional framework, pre- or post-processor are allowed, if they add value. Solution must also be SEO optimized. 

### Guidance from the design team

"These images should be displayed on the page as a set of thumbnails; clicking on a thumbnail should display a full-sized image to the user."

"Full-size photos should be able to be closed, and the user should be returned to the thumbnail gallery."

### Requirements from the adoption team

"Starting next month, we'll be partnering with a shelter that has 2000 pets available for adoption. We need this page to be able to handle that many listings."

"Most people find out about us from internet searches. We need this page to appear towards the top of search results."

## Solution
I decided to use a CSS-grid to create a custom masonry style layout without having to use any external libraries. In order to keep the page SEO optimized, I use webpack to compile an index.html file with all the necessary markup for the app to run, and search enginge to index. 
I then lazy load all the images as they scroll into view, to keep the page load time low and will and then as each image is loaded, I render them into the masonry grid. 

In order to create a scalable project, I broke down the html, js, and scss files into separate components and use webpack to compile everything into one js, css, and html file. Additionally, I have added ESLint and Stylelint into the project to keep consist code standards across all files.

### Supported browsers/devices
This app has been tested on the following environments:
- iPhone X: Chrome and Safari
- Samsung S8: Chrome
- Mac OS: Chrome, FF 
- Windows 10: Chrome, FF, Edge (no IE11 support)

### Known issues
Some known issues I noticed while testing, or enhancements to add to the future
- Images are not optimized, would be great to add compression and resizing to build process
- On mobile, when scrolling quickly, there is a visible resizing of the images that causes a flicker
- Add auto-fix for style linting, like there currently is for JS linting
- Create color constants SCSS file 
- Add AA compliance
- Modal is specific to rendering an image and dog description, could be made more generic
- I'm not sure how well re-rendering of the masonry grid will work with 2000 nodes on the page. This would need to be tested and further optimized, such as restricting the re-render to only the visible viewport, or possibly breaking down the data into virtual "pages" and re-rendering those "pages".
- Reflow of the page could be further test and optimized
- Since the images are laoded via Promises, sometimes the ones further down the page are loaded before the ones higher up, which causes some jumps in the grid. This can be optimized by possibly preventing rendering of the image until the ones before it are loaded.


