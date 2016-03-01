# Starter files for MP3

### AngularJS Front-End Design
Goal: Create a single-page AngularJS app that lets users interact with the data from the [IMDB top 250 movies](http://www.imdb.com/chart/top). We've already crawled the data and formatted it as JSON: `public/data/imdb250.json`. We also downloaded the corresponding poster images for each movie: `public/data/images`. The images are named using the `imdbID` for each movies.

Your app should have the following features:

1. A list view where users can input a search query and the app returns a list of movies that match the query. There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type.
+ A gallery view that displays the movie posters for all the movies. There should be a way to select movies from different genres in the gallery.
+ When an item in search view or the gallery view is clicked, the app should display the different attributes of the selected movie (from the JSON file). Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of movies.
+ You app should use animations wherever appropriate (at least once).
+ You should use partials
+ You are free to use Foundation's components (such as the grid etc.) for this part as long as it is used for styling and not used to implement the core functionality of the app.

You can see a demo of a sample app in [this video](https://www.youtube.com/watch?v=_xZYYViPvig).

We recommend you to use the following project structure:

1. The main HTML file for this app should be `public/index.html`, *but you should not need to touch this file*.
+ Your app has three main views (one for the list, one for the gallery and the other for displaying the details of a particuar movie). These should be implemented using three different [Angular routing and partial templates](https://docs.angularjs.org/tutorial/step_07). You can implement them in the three files in `public/partials`
+ Your Angular code should go in `js/app.js` except for the controllers. The controllers should be in `js/controllers.js`. This keeps your code organized.
+ For styling, you can use the scss files in `scss` folder like you did in MP 1 or write a css file or borrow css/scss from elsewhere (such as from Foundation). In short, we are not grading for style for this MP.


Also, here is a list of angular components that you might find useful

* [ngApp](https://docs.angularjs.org/api/ng/directive/ngApp)
+ [ngController](https://docs.angularjs.org/api/ng/directive/ngController)
+ [ngModel](https://docs.angularjs.org/api/ng/directive/ngModel)
+ [ngRepeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)
+ [filter](https://docs.angularjs.org/api/ng/service/$filter)
+ [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)
+ [$http](https://docs.angularjs.org/api/ng/service/$http)
+ [ngSrc](https://docs.angularjs.org/api/ng/directive/ngSrc)

For the complete list, please refer to the [Angular documentation](https://docs.angularjs.org/api/ng).
