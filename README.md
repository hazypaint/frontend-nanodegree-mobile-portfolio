## Website Performance Optimization portfolio project

Run the file by opening index.html in a Browser.

Optimization steps taken:

1. Looked for scripts, css, etc. in index.html that weren't needed immediately when loading 
-> async for print css by adding media="print"
-> async google-analytics link by adding async at beginning
-> async perfmatters.js as it is not neede immediatly when loading
-> to load fonts faster I added WebFontConfig found vua https://github.com/typekit/webfontloader

2. Image optimization
-> ran all images through a compressor: http://compressjpeg.com/
-> additionally I created an extra icon from the pizzeria image, so there is no need to load the large image

3. Optimizing main.js for pizza.html
-> I rewrote the changePizzaSizes function according to less than 5 ms
-> and fixed the updatePositions functions by taking the constant variable "document.body.scrollTop / 1250" out of the loop.
frame rate is now below 60 fps when scrolling

4. Creating the gulp file
After installing npm and gulp, I created a gulpfile.js, which does the following:
-> minifies the script in the js file for index.html
-> inlines the css into index.html
-> minimizes images even further (however, I think compression in step 2 was necessary as I would not have achieved same results)
-> minimizes the html for index.html
-> minifies the script in the js file for pizza.html
-> did NOT inline css for pizza.html as this changes the layout
-> minifies pictures for pizza.html
-> minimizes the html for pizza.html
-> I also added a watch function to detect changes to the source code.

In creating the gulpfile, I used code from this site: https://www.npmjs.com/private-modules

Finally I ran gulp in the terminal and created the procution version in a seperate folder.

With these optimization steps I accomplished the following
for index.html:
- a score of 93/100 for Speed and 100/100 for User Experience on mobile (via pagespeed insights)
- a score of 94/100 for Desktop

for pizza.html
- Time to resize pizzas: 0.3929999948013574ms
- Time to generate pizzas on load: 27.79500000178814ms