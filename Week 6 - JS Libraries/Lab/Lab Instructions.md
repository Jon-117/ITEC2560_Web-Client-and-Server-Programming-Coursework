**For this lab, and every lab, add comments to your code to explain the new concepts, complex code, and anything that's not obvious from just reading the code.** 

**Part 1a: Longest US Bridges Map**. (9 points) Use the dataset below to draw a **Leaflet** map showing a marker for each of the five bridges with the longest spans in the USA.

Put all the data into an array of objects, and then loop over that array to create the markers and popups. Don't create five individual markers in your code.

Your map should have an appropriate size, center location, and zoom level, to clearly show all five bridges.

Place a marker at each bridge location.

Each marker should have a popup with the bridge's name and span length. Use HTML to format this information neatly. 

**Part 1b: Map Markers**

Work with the page you created for the previous part.

-   Instead of the default marker, draw a bridge icon as the marker at the bridge locations.
    -   You'll need to download an icon image, for example,  [https://www.flaticon.com/free-icon/bridge_183412](https://www.flaticon.com/free-icon/bridge_183412). 
    -   You'll find instructions for replacing the default icon with your own image at Leaflet's website. You don't need to include an icon shadow. Make sure you set the height and width to values that work with your image icon, so your bridge icon isn't squashed or stretched. [https://leafletjs.com/examples/custom-icons/](https://leafletjs.com/examples/custom-icons/)
-   Examine your bridge data array and use JavaScript to figure out which bridge is longest. Draw the marker for this bridge in a different color, or display a different icon for the longest bridge. You can change the colors of an icon if you register for a Flaticon account. 

Part 2: **Longest US Bridges Chart.** (9 points) Use the dataset below to draw a Chart.js **bar chart** of the bridge names and their span lengths. 

You can draw the chart on the same page as the map, or you can make a new page. You can include multiple libraries on one page if you'd like to display both on one page. 

Use the array you created in part 2 to avoid typing the data into your program again.  Don't manually write the data into Chart.js arrays. 

You can use ChartJS's default colors, or set all the colors to the same value, or cycle through a set of colors for the bar colors.

Your map, and chart, should still work if you replace the bridges below with this data: [https://gist.github.com/claraj/be7acf9d1b0971e5971603bab7d72158](https://gist.github.com/claraj/be7acf9d1b0971e5971603bab7d72158)

**Bridge Data**

**_Bridge Name_**

**_City, State_**

**_Span (meters)_**

**_Location (latitude, longitude)_**

Verrazano-Narrows Bridge

New York, NY

1298.4

40.6066, -74.0447

Golden Gate Bridge

San Francisco and Marin, CA

1280.2

37.8199, -122.4783

Mackinac Bridge

Mackinaw and St Ignace, MI

1158.0

45.8174, -84.7278

George Washington Bridge

New York, NY and New Jersey, NJ

1067.0

40.8517, -73.9527

Tacoma Narrows Bridge

Tacoma and Kitsap, WA

853.44

47.2690, -122.5517

Data from [Road Traffic Technology](https://www.roadtraffic-technology.com/features/feature-the-ten-longest-suspension-bridges-in-the-us/)

**GitHub Pages (2 points)**

Enable GitHub pages for your repository so all pages have live versions. 

**To Submit:**

-   **A link to your GITHUB repository with all of your files in.** 
-   **DIRECT WORKING links to your live pages - the links should take me directly to your page.**

**Optional extra credit:** **Drawing Program**. (+5 points) Start with the [mouse drag program in the example repository](https://github.com/claraj/week5-examples/blob/master/canvas/mouse_drag.html).  Add the following features:

-   Draw a circle instead of a square. The circle's center should be centered over the mouse pointer.
-   Add an input type="color" to select the drawing color.  The value from a color input can be used to set the color in a `context.strokeStyle` or `context.fillStyle` statement. 
-   Add an input type="range" to set the radius, or size, of the circles drawn

When the user draws circles, the circles should be the color selected in the color input, and the size of the circles should be the size selected in the radius input. 

Include a link to your drawing program at GitHub pages in your lab submission.