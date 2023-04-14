**For this lab, and every lab, add comments to your code to explain the new concepts, complex code, and anything that's not obvious from just reading the code.** 

Follow the slides/videos to build the student sign in app, and the activity tracker app. Ensure all the features are working as described.

**You must start from the starter code repository - don't copy code in from the finished version.** There are watermark bytes in the finished code that will alert my grader application if you copy code from it. If the previous sentence doesn't make any sense, then it means that if you submit the finished versions as your own work, I will know and I will give you a zero grade.  **Let me know if you need help building these apps.** 

**Part 1 Student Sign In, 6 points**

Build the app as shown in the videos. Make sure all the features work as described. You'll need a copy of this app for next week, we'll continue working on it. 

**Part 2: Activity Tracker Features, 14 points**

Make these changes to the activity tracker:

- DONE The table row for each type of activity - drawing, sketching and painting - should use `v-bind` so that rows for drawing have one class, rows for sketching have another class, and rows for painting have another class.  Apply a different style to all of the drawing rows, a different style to all of the painting rows, and another style to all of the sketching rows. 
    Tip: you can use `v-bind:class=" ??? "` in one of your HTML elements to set the class.  Replace ??? with some data from the Vue data.
-   Add two new inputs to the form. Add a corresponding property in the Vue data and use v-model to connect them. 
    -   Add another input to the form, a checkbox for **completed** (as opposed to work-in-progress). 
    -   Add another text input or textarea to the form for the user to enter a **note** about a record. For example 'experimenting with watercolors' or 'digital file saved at art.png'. Notes are optional, so there is no need to check for them during validation. The user can enter no text, or as much text here as they like. 
-   When the user adds a new record, include the
    -   **completed** value, as a boolean.
    -   **note** string.
-   Add two new columns in the table to display the completed and note data. You can display the completed data as the text "true" or "false", a non-editable checked/unchecked checkbox, or the text "Completed" or "Not Completed". 
-   Create and use a method to limit the number of characters displayed in a note to 40. If the text is truncated, add '...' to the end to indicate it has been shortened. Your app should still save the entire text in the record. (Hint: look up the `substring` method). 

Your new form will look something like this,

![](https://minneapolis.learn.minnstate.edu/content/2022/5973009-20235000657S/PastedImage_04aop29u7m5zvn1jt97m4c3mad2i85ae001772513220.png?_&d2lSessionVal=42wc14rhprjGPb3wHiof59age&ou=5973009)

The table will look like this. You can use any colors and styles you like. All the rows of one type are the same color.

Completed or Not Completed shown in the table.

Notes longer than 40 characters are shown with ... at the end but the full text is stored in the app.![](https://minneapolis.learn.minnstate.edu/content/2022/5973009-20235000657S/PastedImage_7v8gdcaqg5vf42nnnp21pg6shl340ojq001900566853.png?_&d2lSessionVal=42wc14rhprjGPb3wHiof59age&ou=5973009)

The data for the first two records shown in this example is as follows - there is more text than shown, and the completed data is stored as true and false booleans.

![](https://minneapolis.learn.minnstate.edu/content/2022/5973009-20235000657S/PastedImage_qx0q4xlsi535kcv59l5xkkrll39gd6j6001900566853.png?_&d2lSessionVal=42wc14rhprjGPb3wHiof59age&ou=5973009)

Push your updates to GitHub.

**Extra credit  - Student Club Roster, Vue Version +5 points**

Start with the Student Club Roster code we worked on in class [https://gist.github.com/claraj/02174127e8396165ca7758e6da2c664a](https://gist.github.com/claraj/02174127e8396165ca7758e6da2c664a). Complete the tasks marked with TODO comments, **add comments to your code to explain your work** and submit with the rest of your lab for this week. 

**To Submit:**

GitHub link