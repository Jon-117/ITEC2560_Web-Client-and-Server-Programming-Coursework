**1. Student Sign In + API (14 points)** Follow the slides to create an API for the Student Sign In app. Deploy the Student Sign In app to Azure.  **COMMENT YOUR CODE! Add notes as you work through the video to help you understand what the different parts are for.** 

**2. Change sort order (3 points)** Make this change:

-   Sort the student table by present and then by StarID.   [In the video, you sort by present and then name]
-   Re-build your Vue app and redeploy to Azure.
    -   You don't need to make any changes to the database, just redeploy the app, because we are changing the question that app is asking the database, not changing the database itself. 

**3.** **Test** **for errors with curl (3 points)**  Make sure that when you use curl to create two students with the same star ID, your server returns an error message. (Not a curl error or that your code crashes or other different error message - you are looking for the specific error message your server sends, as shown in the videos. This is the error message the server sends for missing student name or ID. For this question, you'll make a request to create a student with a StarID that is already in the database, and you should see curl displaying the error message that your server responds with. 

![](https://minneapolis.learn.minnstate.edu/content/2022/5973009-20235000657S/PastedImage_ekhpcq7wnnh9p4z7zskrl5jzn783uru8001894807819.png?_&d2lSessionVal=svNRePkxpmMtBu3pv6vdLogXc&ou=5973009)

Windows users, you might find curl works better in your git bash shell, not the command prompt.  

**To submit:**

-   Link to your live Azure site 
-   Link to your code for the site at GitHub
-   A screenshot of your server's error message from part 3, testing with curl.