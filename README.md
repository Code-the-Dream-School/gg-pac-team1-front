*** Search Form ***
# readme searchForm

install dependency npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons 

use trips data as a guide

## SearchForm Component

### Overview

The `SearchForm` component provides a dynamic and interactive form for users to search for destinations, select travel dates, and specify the number of travelers, including optional child travelers. It includes form validation to ensure all necessary fields are completed correctly before submission.

### Props

- **onSearch (function):**
    - A callback function that is triggered when the form is successfully submitted. It receives an object containing the search criteria as its argument.
- **destinationLabel (string):**
    - A label for the destination input field. Default is `"Destination"`.
- **destinationPlaceholder (string):**
    - A placeholder for the destination input field. Default is `"Going to"`.
- **travelersLabel (string):**
    - A label for the travelers input field. Default is `"Number of Travelers"`.
- **searchButtonLabel (string):**
    - The text displayed on the search button. Default is `"Buscar"`.

### State Variables

- **destination (string):**
    - Stores the user's selected destination.
- **checkInDate (string):**
    - Stores the user's selected check-in date.
- **checkOutDate (string):**
    - Stores the user's selected check-out date.
- **showCheckOut (boolean):**
    - Controls the visibility of the check-out date input, shown after a check-in date is selected.
- **adults (number):**
    - Stores the number of adult travelers.
- **showChildrenOption (boolean):**
    - Controls the visibility of the children options based on the number of adults.
- **hasChildren (boolean):**
    - Indicates whether the user selected to include children travelers.
- **children (number):**
    - Stores the number of children travelers.
- **errors (object):**
    - Stores any validation errors for the form fields.

### Methods

- **handleCheckInChange(e):**
    - Updates the `checkInDate` state and shows the check-out date input.
- **handleCheckOutChange(e):**
    - Updates the `checkOutDate` state.
- **handleAdultsChange(e):**
    - Updates the `adults` state and manages visibility for children options based on the number of adults.
- **handleHasChildrenChange(e):**
    - Updates the `hasChildren` state based on the user's selection.
- **handleChildrenChange(e):**
    - Updates the `children` state.
- **handleSubmit(e):**
    - Validates the form inputs and triggers the `onSearch` callback if the form is valid. Otherwise, it updates the `errors` state with any validation errors.

## validateForm Utility

### Overview

The `validateForm` utility function is designed to validate the input fields of a search form. It checks for required fields, ensures the dates are logically correct, and verifies that the number of travelers is appropriate. This function returns an object containing any validation errors, which can be used to display error messages to the user.

### Parameters

The function accepts an object with the following properties:

- **destination (string):**
    - The destination input provided by the user. This field is required.
- **checkInDate (string):**
    - The selected check-in date. This field is required and must be a valid date.
- **checkOutDate (string):**
    - The selected check-out date. This field is required and must be later than the check-in date.
- **adults (number):**
    - The number of adult travelers. There must be at least one adult.
- **hasChildren (boolean):**
    - Indicates whether the user has selected to include children travelers.
- **children (number):**
    - The number of children travelers. If `hasChildren` is true, this number must be zero or higher.

### Return Value

The function returns an object `errors` that contains key-value pairs where the key is the name of the form field and the value is the corresponding error message. If no errors are found, the object will be empty.

## DateInput Component

### Overview

The `DateInput` component is a reusable form element designed for selecting a check-in and, optionally, a check-out date. It includes basic validation and conditionally displays the check-out date input based on user interaction.

### Props

- **checkInDate (string):**
    - The current value of the check-in date input.
- **checkOutDate (string):**
    - The current value of the check-out date input, which is conditionally rendered.
- **handleCheckInChange (function):**
    - Callback function to handle changes in the check-in date input.
- **handleCheckOutChange (function):**
    - Callback function to handle changes in the check-out date input.
- **showCheckOut (boolean):**
    - A boolean that determines whether the check-out date input should be displayed. Typically controlled by the parent component based on whether a check-in date has been selected.

## ChildrenSelector Component

### Overview

The `ChildrenSelector` component is a form element designed to allow users to specify whether they are traveling with children and, if so, to select the number of children. It conditionally renders the input field for the number of children based on the user's selection.

### Props

- **hasChildren (boolean):**
    - A boolean value that indicates whether the user has selected that they are traveling with children. This prop controls the conditional rendering of the children input field.
- **children (number):**
    - The current value of the children input field, representing the number of children traveling.
- **handleHasChildrenChange (function):**
    - Callback function that handles changes to the radio buttons, allowing the user to indicate whether they are traveling with children.
- **handleChildrenChange (function):**
    - Callback function that handles changes to the number input field, updating the number of children traveling.

### Structure

- **Form Group:**
    - The component organizes its inputs within `div` elements with the class `form-group` to maintain a consistent layout and styling with other form elements in the form.
- **Radio Group:**
    - The component includes a `radio-group` div that contains radio buttons for selecting whether the user is traveling with children.
- **Conditional Rendering:**
    - If `hasChildren` is `true`, the component conditionally renders an input field to allow the user to specify the number of children. The input field is not displayed if `hasChildren` is `false`.

### Notes

- The component is designed to be used as part of a larger form where information about travelers, including children, is collected.
- Ensure proper state management in the parent component to handle the values passed as props (`hasChildren`, `children`) and to process the form data accordingly.
- The component can be styled or extended as needed to fit the specific design requirements of your application.

### Overview

The `Home` component is designed to handle navigation within the application. It leverages the `useNavigate` hook from React Router to redirect users to the search results page based on the input data.

### Functionality

- **useNavigate Hook:**
    - The `useNavigate` hook is initialized to manage the navigation within the app.
- **handleSearch Function:**
    - The `handleSearch` function accepts `searchData` as a parameter.
    - It uses the `navigate` function to redirect users to the `/search` route.
    - The search data is passed as state to the `/search` route, allowing the search page to access and utilize the provided information.


*** search form ***


*** week2 ***
## Summary of Changes

## Search Component

The `Search` component is designed to display search results within the application. It provides a simple layout that includes the number of results, a potential sorting option, and a placeholder for displaying the search results.

### Key Features:

- **Result Count and Sort Option:** The header indicates the total number of search results (e.g., "Resultados(250) sort"), with potential space for implementing sorting functionality.
- **Traveler Reviews Placeholder:** A paragraph gives an overview, encouraging users to read reviews from other travelers.
- **Result List Placeholder:** Placeholder text "1-2-3" suggests where search results will be listed.

### Future Enhancements:

- **Display FormSearch Results:** The section will be used to display results generated by the FormSearch component.
- **Images and Text in Lists:** The component will eventually display images and text sorted into lists for better organization.
- **Filters and Sorting:** Plans include adding filters and sorting options to refine search results.
- **Pagination:** Pagination will be implemented to allow users to navigate through multiple pages of results easily.

## Home Component

The `Home` component serves as the main landing page of the application, providing users with essential tools and information for planning their travels.

### Key Features:

- **FormSearch Integration:** The `Home` page includes the `FormSearch` component, allowing users to search for destinations directly from the homepage.
- **Discover Section:** Introduces users to new and exciting destinations, encouraging exploration.
- **Reviews Section:** Offers a space for users to read reviews and feedback from other travelers, helping them make informed decisions.
- **Trips Section:** Provides tailored trip packages to help users plan their next adventure efficiently.

## FormSearch Component

The `FormSearch` component is designed to capture user input for planning a trip. It includes fields for entering a destination, selecting a date, specifying the number of travelers, and choosing a mode of transportation.

### Key Features:

- **Destination Input:** A text field where users can enter the destination they are planning to visit.
- **Date Selection:** A date picker that allows users to select their travel date.
- **Travelers Input:** A numeric input for users to specify the number of travelers. The minimum value is set to zero.
- **Transportation Options:** Radio buttons for users to select their preferred mode of transportation (plane or car), each accompanied by an icon.
- **Submit Button:** A submit button that is currently disabled, indicating that additional functionality or validation may be added later.

## Footer Component

The `Footer` component provides a structured footer for the application, offering links to important sections such as company information, policies, blog, and social media. It also includes a copyright notice.

### Key Features:

- **About Us Section:** Links to information about the team, services, support, and location.
- **Policies Section:** Provides links to essential policies such as Privacy Policy, Terms of Service, and FAQs.
- **Blog Section:** Offers links to various blog categories, including travel guides and popular destinations.
- **Social Media Section:** Includes links to the company's social media profiles on Facebook, Twitter, and Instagram.
- **Copyright Notice:** Displays the company's copyright information at the bottom.

## Header Component

The `Header` component provides the top navigation and branding for the application. It features a dynamic resizing effect that adjusts the header's size based on the user's scroll position.

### Key Features:

- **Scroll-Based Resizing:** The header shrinks when the user scrolls down more than 50 pixels, providing a more compact view.
- **Branding:** The header includes a brand link with the application name "TravelAmigos."
- **Navigation Links:** Basic navigation is provided with links to Support, Notifications, and Sign In.

## Layout Component

The `Layout` component is designed to provide a consistent structure across all pages of the application. It includes a `Header` at the top, a `Footer` at the bottom, and a main content area in between where nested routes are rendered using the `Outlet` component from `react-router-dom`.

**Remove Styles.css and replace with SASS**

- Removed the `Styles.css` file.
- Replaced the CSS stylesheet with SASS files to improve style management and modularization.

**Implemented SASS for CSS preprocessing**

- Implemented SASS as a CSS preprocessor.
- All styles are now managed through `.scss` files.

**Update package-lock.json after SASS installation**

- Updated `package-lock.json` to reflect the installation of SASS.

**Add SASS dependency to package.json**

- Added SASS as a dependency in the `package.json` file.

**Setup React Router with createBrowserRouter and RouterProvider**

- Initial setup of React Router using `createBrowserRouter` and `RouterProvider` to handle navigation within the application.

**Configured Vite to use React plugin and set server port to 3000**

- Configured Vite to use the React plugin.
- Set the server port to `3000`.

**Updated package-lock.json to lock the react-router-dom dependency**

- Updated `package-lock.json` to lock the `react-router-dom` dependency.

**Added react-router-dom version 6.26.0 as a dependency for routing**

- Added version `6.26.0` of `react-router-dom` as a dependency for handling routing.

**Added Font Awesome 6.0.0 CSS via CDN for icon support**

- Added Font Awesome version `6.0.0` via CDN for icon support in the application.
*** End week2 ***

# Front-End Repo for Node/React Practicum

This will be the front-end for your team's practicum project.

It is suggested that you run these instructions **after** you setup the back-end server first.
You can go through these steps during your first group meeting in case you need assistance from your mentors.

You will have two folders inside one team folder (one for front-end and one for back-end). Name the parent folder something appropriate (in the below example we title it "Practicum Project").  Then clone directly (do not fork and clone) the front and back repos while inside the parent ("Practicum Project") project folder.

![folders](images/folder_structure.png)

>The front-end app (React) will be running on port 3000. The back-end server will be running on port 8000. You will need to run both the front-end app and the back-end server at the same time to test your app.

### Setting up local development environment

1. Clone this repository to the folder that was already created for both the front-end and back-end repos
2. Run `npm install` to install dependencies
3. Pull the latest version of the `main` branch (when needed)
4. Run `npm start` to start the development server
5. Open http://localhost:3000 with your browser to see the data received the back-end server.
6. Now you have your front-end and back-end running locally!

#### Running the front-end server in Visual Studio Code
Note: In the below example, the group's front-end repository was named `bb-practicum-team1-front` and the back-end repository was named `bb-practicum-team-1-back`.  Your repository will have a different name, but the rest should look the same.
![vsc running](images/front-end-running-vsc.png)

#### Running the front-end server in the browser
![browser running](images/front-end-running-browser.png)
