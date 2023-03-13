**1. Adding a 404 page**

Add the 404 page we worked on in class (see [Dec 8 - 50 states, part 2 (Includes 404 handlers for lab 14](https://minneapolis.learn.minnstate.edu/d2l/common/dialogs/quickLink/quickLink.d2l?ou=5973009&type=content&rcode=minnstate-36797906) for details) and make sure visiting links like 

[http://127.0.0.1:8080/#/querty](http://127.0.0.1:8080/#/)

and 

[http://127.0.0.1:8080/#/map/NotAState](http://127.0.0.1:8080/#/map/Alaska)

both redirect to your new Not Found page.

**2. List of states visited - new API route and new page**

Create a new page showing only the states you have visited.

_**In your server,**_ Create a new API route that gets all the visited states. Your API route should only return states with visited = true.

You can decide what URL path to use for this route.  

_**In your Vue client**_, add a function to the StateService.js file that will make a request to your new API route.

_**In your Vue Client**_, create a new component called StatesVisited.vue.  This component, when mounted, will use the state service to request all the states that are visited. Display the names of these states on the page. The page should have a heading explaining the page content (e.g. "States you have visited") and a list of the states that have been visited. You may style and present this data however you wish.

_**In your Vue Client**_, update the router configuration to create a new route to this page. You can use the URL path of your choice.

_**In your Vue Client,**_ Add a router-link to the PageFooter.vue component so a user can visit the new page. 

Your page may look something like this, if you had visited New Mexico, New York, North Carolina, Oklahoma, Wyoming and Wisconsin. Note the link in the Footer. 

![](https://minneapolis.learn.minnstate.edu/content/2022/5973009-20235000657S/PastedImage_q69uv9q7kkitdayesxtv88dzhd6xonrg001901952667.png?_&d2lSessionVal=42wc14rhprjGPb3wHiof59age&ou=5973009)

**3. Deploy your changes**

Deploy the new version of your app to Azure and make sure everything works in the live version too.

To submit: push all of your code to GitHub. Submit 

-   Link to your live site at Azure
-   Link to your code at GitHub

to the [Lab 14](https://minneapolis.learn.minnstate.edu/d2l/common/dialogs/quickLink/quickLink.d2l?ou=5973009&type=dropbox&rcode=minnstate-36906851) dropbox.

_**Extra credit question +5:**_ Include a state fact about the state on each StateMap component. Use the API you created for the extra credit question in class [Express Concepts - State Fact API - Extra Credit](https://minneapolis.learn.minnstate.edu/d2l/common/dialogs/quickLink/quickLink.d2l?ou=5973009&type=content&rcode=minnstate-41839212)[](https://minneapolis.learn.minnstate.edu/d2l/le/content/5438943/viewContent/52242631/View).  To use your API in a web page, add these lines to router/facts.js and redeploy, 

[https://github.com/claraj/state_fact_api/blob/fdc193bc2b5ba9f74413cfbebcf173371fae9be6/routes/facts.js#L7-L11](https://github.com/claraj/state_fact_api/blob/fdc193bc2b5ba9f74413cfbebcf173371fae9be6/routes/facts.js#L7-L11)

You'll need a Washington DC fact - find and add your own fact or use this one, [https://github.com/claraj/state_fact_api/blob/1857b37d462a72f5a8d389fb7b8ade7c30d36bab/routes/state_fact.json#L49](https://github.com/claraj/state_fact_api/blob/1857b37d462a72f5a8d389fb7b8ade7c30d36bab/routes/state_fact.json#L49)

If you didn't build the state fact API then you can use this one - [https://state-facts.azurewebsites.net/](https://state-facts.azurewebsites.net/)