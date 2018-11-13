# Pet Gallery 
## Demo
<a href="http://www.lizavolkova.com/pet-gallery" target="_blank">Open Demo</a>
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
In order to keep the page SEO optimized, I use webpack to compile an index.html file with all the necessary markup for the app to run, and search enginges to index. 
I then lazy load all the images as they scroll into view, and make sure that there is no page-blocking JS, which keeps the page laod time hight. 

In order to create a scalable project, I broke down the html, js, and scss files into separate components and use webpack to compile everything into one js, css, and html file. Additionally, I have added ESLint and Stylelint into the project to keep consist code standards across all files.

To create the scattered grid, I decided to use a CSS-grid to create a custom masonry style layout without having to use any external libraries. It is optimized to cause minimal reflows and lazy loads images, however I'm sure it can be optimized further. There is also a different animation that run when opening and closing the modal on mobile vs desktop devices, which creates a slightly better UX across the two formats.
You can also notice that large devices will blur the background when a modal opens, but smaller devices will not. This was intentional since blur is an intensive operation that when testing, was causing performance issues on phones.

### Area to focus on:
**Design Focus!** My favorite ascept of Front-End developemt is creating a beautiful and engaging user experience, so for this challenge, I strove to create a visually exciting layout with playful animations that could do just that.  Even though I was striving for perfect animations, given the time frame I had, I was not able to fine tune everything to my liking (some notes in the "Knows Issues" section below). However I still feel like I have created something very sleek and fun to use, both on mobile and desktop browsers!

### Supported browsers/devices
This app has been tested on the following environments:
- iPhone X: Chrome and Safari
- Samsung S8: Chrome
- Mac OS: Chrome, FF 
- Windows 10: Chrome, FF, Edge (no IE11 support)

### Some known issues / enhancements
Some known issues I noticed while testing, or enhancements to add to the future:
- Since the images are laoded via Promises, sometimes the ones further down the page are loaded before the ones higher up, which causes some jumps in the grid. This can be optimized by possibly preventing rendering of the image until the ones before it are loaded.
- Images are not optimized, would be great to add compression and resizing to build process. This would also boost SEO.
- I'm not sure how well re-rendering of the masonry grid will work with 2000 nodes on the page. This would need to be tested and further optimized, such as restricting the re-render to only the visible viewport, or possibly breaking down the data into virtual "pages" and re-rendering those "pages".
- Reflow of the page could be further tested and optimized
- Add auto-fix for style linting, like there currently is for JS linting (Prettier)
- Create color constants SCSS file 
- Add AA compliance
- Modal is specific to rendering an image and dog description, could be made more generic



