## Website Performance Optimization portfolio project

CREATING YOUR OPTIMIZED PRODUCTION CODE

1. Installing npm and Gulp
You can find helpful directons on installing npm and Gulp here: https://docs.npmjs.com/getting-started/installing-node

2. Run gulp
In your terminal move to the directory where the source code is safed. Then simply run "gulp" in your terminal.
This will create new folders named "build", which contain the optimized data (one in the current folder, one in the views folder).

3. Assembling your website work
Create a new folder from where you will be hosting the site and move the following files into them:
- all the files in the /build folder
- all the files in the /views/build folder
- the original css folder from /views/css (this is necessary as it is not being optimized due to style changes)
- Finally delete the html files in all the new folders and replace them with the html files of the minihtml folders respectively (you may also delete the then empty minihtml folders). This last step is necessary to receive the most compresed version of the html files.


OPTIMIZATION STEPS TAKEN:

A Critical Rendering Path:
1. Looked for scripts, css, etc. in index.html that weren't needed immediately when loading 
-> async for print css by adding media="print"
-> async google-analytics link by adding async at beginning
-> async perfmatters.js as it is not neede immediatly when loading
-> to load fonts faster I added WebFontConfig found vua https://github.com/typekit/webfontloader

2. Creating the gulp file
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

B Computation Efficiency & Frame Rate
1. Image optimization
-> ran all images through a compressor: http://compressjpeg.com/
-> additionally I created an extra icon from the pizzeria image, so there is no need to load the large image

2. Optimizing main.js for pizza.html
-> I rewrote the changePizzaSizes function and the updatePositions functions to be more efficient 
-> moved constant variables out of the loop and defining variables before loops
_> also declared the pizzasDiv outside of the loop
-> when possible I changed querySelectorAll() to getElementsByClassName() as it is faster
-> I reduced the number of background pizzas to 35
-> Added will-change: transform; to the .mover in css to tell the browser to expect changes on this layer

5. Other
-> enabled the strict mode using 'use strict';

I ran gulp in the terminal after all the manual optimization steps and created the procution version in a seperate folder.

With these optimization steps I accomplished the following
for index.html:
- a score of 93/100 for Speed and 100/100 for User Experience on mobile (via pagespeed insights)
- a score of 94/100 for Desktop

for pizza.html
- Time to resize pizzas: 0.3929999948013574ms
- Time to generate pizzas on load: 27.79500000178814ms