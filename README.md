# React E-Shop

Hosted Site: https://radiant-centaur-30b2cf.netlify.app/

## Summary

A mock e-commerce app for retro videogames built using SCSS React.js and a Firestore database. Features include a product carousel, a product grid, product order forms and a cart.

## Technologies Used

- React (with SCSS)
- Firebase / Firestore
- Git Version Control

## Installation

To install and run the app enter `npm install`, then `npm run dev` in the command line (from inside the project's root directory) and navigate to the provided localhost port in the browser
## Features

### General

- Responsive design
- Navbar which highlights the link for the page the user is currently on
- Product and cart data stored in the cloud using a Firestore Database

### Home Page

*Game Cards*

An outline appears around the game cards when they're hovered over. Clicking on one (in either the feature games carousel or the games grid) will direct the user to the game's product page where the game can be added to the cart.

*Featured Games Carousel*

Featured games are set in the Firestore Database and can be scrolled through using the left and right arrow buttons. The buttons will not appear in the number of featured games isn't greater than the number of games displayed. The list loops back to the start when the user reaches the end.On smaller mobile and tablet screens one game is show. On desktop screens three games are shown. 

*Games Grid*

All the games in the Firestore Database are displayed responsively in the games grid. A single column is displayed on mobile screens, two on tablets, three on small desktop screens and four on large desktop screens.

### Product Page

*Game Details*

The game's cover image is displayed along with a list of its variants and the number of available units for each. The stock count is updated (using data from the Firestore database) whenever a purchase is made

*Game Order Form*

Up to five units of a variant of a game can be ordered using the form. The total price of the selected quantity is displayed and updates when the user adjusts the quantity. When the form is sucessfully submitted, a green message appears to inform the user that their selection has been added to the cart.

If the user attempts to submit the form with a quantity less than one, the form will not submit and browser will display a warning specifying that the value must be greater than or equal to one.

If the user attempts to submit the form with a quantity greater than five, the form will not submit and browser will display a warning specifying that the value must be below five.

If the user attempts to submit the form with a quantity greater the stock for the selected varient, the form will not submit and a red error message will be displayed specifying that the quantity exceeds the item's availability.

If the user attempts to submit the form with a selected variant that is already in the cart, the form will not submit and a red error message will be displayed specifying that the item is already in the cart.

### Cart Page

*Cart Item Listing*

The game variants currently in the cart are listed with their cover images, titles, selected quantities and total price. Clicking on either the game's cover image or title directs the user to its product page.

The quantity can be adjusted up or down using the plus and minus buttons. Adjusting the quantity updates the total displayed price.

The quantity cannot be adjusted less than one or greater than five. If the user attempts to set the quantity to a value greater than five the adjustment will not be made and a red error message will be displayed specifying that the maximum order quantity has been reached.

If the user attempts to set the quantity to a value greater than the variant's stock count the adjustment will not be made and a red error message will be displayed specifying that the amount the user tried to selected is greater than the variant's current stock count. The stock code will be displayed in the error message.
 
A game variant can also be removed from the cart altogether using the Remove button.

If the cart is empty a message will by displayed to convey that there are currently no items in the cart.

*Total Price*

The total price of the current cart is displayed below the listed cart items. When the user successfully adjusts the quantity of any item in the cart, the total price updates.

*Place Order Button*

When the place order is clicked the user makes a purchase. The cart is cleared (both in the app and the Firestore database) and the stock counts of the ordered variants are updated in the database and on each game's product page.

A green message is displayed to inform the user that they've successfully made a purchase, along with the message informing the user that there are currently no items in the cart. 
