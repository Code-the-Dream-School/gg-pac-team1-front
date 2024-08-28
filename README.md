## Recent Updates

### August 27, 2024

## SearchForm Refactor

The `SearchForm` component has been refactored to enhance usability and streamline the code. Key improvements and changes include:

### Additions:
- **Dynamic Destination Suggestions:** As users type in the destination field, relevant suggestions from available trips are displayed, improving the search experience.
- **Improved Date Validation:** Enhanced validation for check-in and check-out dates to ensure logical date selections.
- **Simplified Logic:** Focused on core functionality to improve maintainability and user experience.
- **New URL Parameters:** The `HotelSearchPage` now dynamically receives `state` and `city` as parameters from the URL, allowing the page to filter search results effectively based on the user's selected destination.

### Removals:
- **Child Selection Options:** Removed the functionality related to selecting and managing the number of children during the search process, simplifying the form.
- **`DateInput` and `ChildrenSelector` Components:** These components were removed to streamline the form and focus on essential features.
- **`validateForm` Function:** The centralized validation function was removed in favor of inline validation logic, which may simplify the code but also reduces some validation robustness.

These changes aim to provide a more intuitive and responsive user interface while maintaining code simplicity and focusing on the most critical features.

*** Search page ***
## Recent Updates

### August 22, 2024

### Components

**New Feature Added: HotelSearchPage**

In the latest update, we have introduced a new feature to the project—a dedicated Hotel Search page. This enhancement includes:

- **HotelSearchPage Route**: A new route (`/search`) has been added to the application's routing configuration. This route is designed to render the `HotelSearchPage` component, allowing users to search for hotels directly within the application.
- **Integration with Layout**: The new `HotelSearchPage` route has been integrated seamlessly with the existing `Layout` component, ensuring a consistent user experience across the application.
- **Future Expansion**: Placeholder comments have been added to the codebase to facilitate the addition of future routes and features, such as authentication and discovery pages.

These updates enhance the application's functionality.

**Implemented HotelSearchPage with Filtering, Sorting, and Pagination**

- **HotelSearchPage Component**: Added the core functionality for the HotelSearchPage component, allowing users to search for hotels based on their preferences.
- **Search Handling**: Integrated `useLocation` and `useNavigate` from `react-router-dom` to manage search data and user navigation within the application.
- **Filtering**: Implemented filtering options, enabling users to filter hotels by price range, number of reviews, and room type.
- **Sorting**: Added sorting options to allow users to sort hotels by price (low to high or high to low) and by reviews (best to worst).
- **Pagination**: Implemented pagination to manage and display a limited number of search results per page, with the ability to navigate between pages.
- **Component Integration**: Integrated `ResultList`, `Pagination`, and `HotelSearchFilter` components to display and manage the filtered and sorted search results.
- **Navigation**: Added a `NavLink` component for easy navigation back to the Home page.

**Added ResultList Component with Conditional Rendering**

- **ResultList Component**: Introduced the `ResultList` component to manage and display hotel search results.
- **Conditional Rendering**: Implemented logic to handle different search states:
    - Displays a prompt to perform a search if none has been conducted.
    - Shows a message when no hotels match the search criteria.
    - Renders a list of hotels using the `HotelSearchResultCard` component for each result.
- **Component Integration**: Integrated `HotelSearchResultCard` to provide detailed information about each hotel within the result list.

**Added HotelSearchResultCard Component with Detailed Features**

- **Amenity Icons**: Integrated FontAwesome icons to visually represent hotel amenities such as a pool, restaurant, Wi-Fi, gym, spa, and parking availability. These icons provide a quick overview of the facilities offered by each hotel.
- **Review Color Coding**: Implemented a color-coded system for displaying hotel reviews. The rating is highlighted in green, yellow, or red, depending on the review score, giving users a quick visual cue about the hotel's quality.
- **Hotel Details Link**: Added a direct link for users to navigate to a detailed view of each hotel. This enhances the user experience by making it easy to access more information about the hotel directly from the search results.

**Added HotelSearchFilter Component with Multiple Filter Options**

- **Price Filter**: Introduced a price filter allowing users to set a minimum and maximum price range to narrow down hotel search results based on their budget.
- **Room Type Filter**: Added a room type filter that enables users to select specific types of rooms (e.g., single, double, suite) they are interested in.
- **Star Rating Filter**: Implemented a star rating filter that lets users filter hotels based on the number of stars or reviews they have received.
- **Apply Filters**: Added an "Apply Filters" button to apply the selected filters and update the search results accordingly.

**Enhanced Filtering Functionality with Star, Price, and Room Type Filters**

- **Star Rating Filter**: Added the `StarFilter` component, allowing users to filter hotels based on star ratings. Users can choose from options like "4 stars and up," "3 stars and up," and "2 stars and up," or select "All" to see all available hotels regardless of rating.
- **Price Filter**: Integrated a price filter that enables users to define a minimum and maximum price range for hotel rooms, helping them find options within their budget.
- **Room Type Filter**: Added the ability to filter search results by room type (e.g., single, double, suite), providing users with more specific search results based on their accommodation needs.

**Implemented Pagination for Hotel Search Results**

- **Pagination Component**: Added the `Pagination` component to manage navigation through hotel search results. This component dynamically generates page numbers based on the total number of results and results per page.
- **User Interaction**: Users can easily navigate between different pages of search results using the pagination buttons. The current page is highlighted for better user experience.
- **Enhanced Search Experience**: This feature improves the overall usability of the hotel search functionality, allowing users to browse through large sets of results more efficiently.

### Styles

**Enhanced Styling for HotelSearchFilter Component**

- **Filters Container Styling**: Added general styles for the filters container, including padding, a light background color, rounded corners, and shadow effects to create a clean, modern look.
- **Filter Section Styling**: Applied specific styles to each filter section, ensuring consistent spacing between labels and inputs, bold text for labels, and clear text color.
- **Input Fields and Select Styling**: Styled the filter input fields and select dropdowns with full-width sizing, padding, and border-radius for better usability and visual consistency.
- **Apply Filters Button**: Designed the "Apply Filters" button with a prominent blue background, white text, and smooth transition effects on hover to enhance the user interaction experience.
- **Price Input Adjustments**: Made specific adjustments to the price input fields to ensure they are properly sized and aligned, making them easier to use within the filter section.

**Enhanced Styling for HotelSearchPage Layout and Components**

- **HotelSearchPage Container Styling**: Applied styles to the `HotelSearchPage` container, including padding, a clean white background, rounded corners, and subtle shadow effects to enhance the overall visual appeal.
- **Page Layout Adjustments**: Updated the layout for the hotel search page with centered alignment, appropriate margins, and a structured layout for better user experience.
- **Navigation Link Styling**: Styled the home navigation link with hover effects, improving the interactivity and usability of the navigation.
- **Summary Section Styling**: Enhanced the summary section with a centered title and styled list items, providing a clean and organized presentation of summary information.
- **Flexible Layout for Search and Filters**: Implemented a flexible layout for the hotel search results and filter sections, ensuring proper spacing and alignment for a more intuitive user interface.
- **Sorting Options Styling**: Added specific styles for the sorting options container, aligning content to the right and spacing elements for better usability.

**Custom Styling for HotelSearchResultCard Component**

- **Flexible Layout**: Applied a flexible layout to the `HotelSearchResultCard` component, with a well-structured image container and card body to ensure content is displayed clearly and consistently.
- **Visual Enhancements**: Added padding, a white background, rounded corners, and shadow effects to give the result cards a polished, modern look.
- **Text and Amenity Styling**: Styled card elements, including the title, descriptive text, and amenities, with appropriate spacing and color schemes for better readability and aesthetic consistency.
- **Review Rating Colors**: Implemented color coding for review ratings with green for high ratings (success), yellow for moderate ratings (warning), and red for lower ratings (danger).
- **Interactive Details Link**: Added a details link with hover effects to improve user interaction, making it easier for users to view more information about a specific hotel.

**Styling Enhancements for Pagination Component**

- **Centered Layout**: Styled the pagination component with a centered layout, ensuring that the pagination controls are prominently displayed and easy to navigate.
- **Clean Appearance**: Removed default margins and padding, and eliminated list bullet points for a cleaner and more streamlined appearance.
- **Page Link Styling**: Applied background color, padding, and rounded corners to the pagination links, enhancing their visibility and usability. The links now also include hover effects for improved interactivity.
- **Active State Highlighting**: Added a distinct background color to the active page link, clearly indicating the current page to users and improving navigation clarity.

**Modularization of SCSS with Component-Specific Partials**

- **SCSS Partial Imports**: Organized the project's SCSS by importing partial files for various components, including `hotelSearchPage`, `hotelSearchFilter`, `hotelSearchResultCard`, and `pagination`.
- **Improved Maintainability**: This update streamlines the main stylesheet, making the codebase more modular and easier to maintain by keeping styles specific to each component in their respective partial files.
- **Cleaner Code Structure**: By separating styles into component-specific partials, the project's overall code structure has been improved, enhancing readability and facilitating easier updates in the future.
*** Search page ***

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
