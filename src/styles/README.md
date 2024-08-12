# styles -> Base

## SCSS Variables for Colors, Fonts, and Spacing

To maintain consistency across the application, we've defined a set of SCSS variables for colors, fonts, and spacing. These variables standardize the styling and make it easier to manage and update the design system.

### Key Variables:

- **Colors:**
    - `$primary-color`: `#007bff` - Used as the primary color throughout the application.
    - `$secondary-color`: `#6c757d` - A secondary color for less prominent elements.
    - `$background-color`: `#f4f4f4` - A light background color for overall page design.
    - `$text-color`: `#333` - The default color for text content.
- **Fonts:**
    - `$font-family-base`: `'Arial, sans-serif'` - The base font family for all text.
    - `$font-size-base`: `16px` - The standard font size for body text.
    - `$font-size-lg`: `1.25rem` - A larger font size for headings or emphasized text.
    - `$font-size-sm`: `0.875rem` - A smaller font size for secondary or less important text.
- **Spacing:**
    - `$spacing-unit`: `1rem` - The base unit for spacing, used for margins, padding, etc.
    - `$border-radius`: `0.25rem` - A standard border radius for rounded elements.

These variables help ensure a cohesive and flexible design system, making it easy to apply consistent styling throughout the application.

## SCSS Utility Classes and Mixins

We have introduced a set of SCSS variables, mixins, and utility classes to simplify and standardize the styling process across the application.

### Key Features:

- **Variables for Spacing and Colors:**
    - `$spacing-unit`: `8px` - A base unit for spacing to maintain consistent margins and padding.
    - `$primary-color` and `$secondary-color`: Primary and secondary background colors used throughout the application.
- **Mixins:**
    - **Margin Mixin:** `@mixin margin($top, $right, $bottom, $left)` for setting margins with optional arguments.
    - **Text Alignment Mixin:** `@mixin text-align($alignment)` for setting text alignment (left, center, right).
    - **Background Color Mixin:** `@mixin background-color($bg-color, $text-color: #fff)` for setting background and text colors.
    - **Display Mixin:** `@mixin display($display-type)` for setting the display type (flex, block, etc.).
- **Utility Classes:**
    - **Margin Classes:** `.m-0`, `.mt-1`, `.mb-1` for setting specific margins based on the spacing unit.
    - **Padding Classes:** `.p-0`, `.px-1` for controlling padding, including horizontal padding.
    - **Text Alignment Classes:** `.text-left`, `.text-center`, `.text-right` for aligning text.
    - **Background Color Classes:** `.bg-primary`, `.bg-secondary` for applying primary and secondary background colors with white text.
    - **Display Classes:** `.d-flex`, `.d-block` for setting elements to flex or block display types.

These utility classes and mixins allow for quick and consistent styling, making it easier to apply common CSS properties throughout the project.

## Typography Styles

We have established base typography styles using SCSS variables to ensure consistency across the application.

### Key Features:

- **Font Variables:** Defined `$font-family-base`, `$font-size-base`, and `$text-color` to standardize the font family, base font size, and text color.
- **Body Styling:** Applied consistent font settings to the body with a line-height of `1.5` for readability.
- **Heading Styles:** Set bold font weight for all headings (`h1` to `h6`) with specific font sizes for each level to create a clear hierarchy.
- **Paragraph Styling:** Standardized paragraph spacing with a margin-bottom and adjusted the text color for better contrast.

These typography styles help create a visually consistent and readable design across the entire application.

## Global SCSS Reset and Base Styles

We have implemented a global SCSS reset to ensure consistency across all elements by removing default margins and padding, and applying box-sizing settings globally.

### Key Features:

- **Global Reset:** Margins and padding are reset to zero for common elements such as the body, headings, paragraphs, and lists.
- **Box-Sizing:** All elements, including pseudo-elements, inherit `box-sizing: border-box` to simplify layout calculations.
- **List Styling:** Removed default list styles and padding for a clean slate.
- **Responsive Images:** Ensured that images do not exceed their container width and maintain aspect ratio.

This reset and base style setup is essential for maintaining visual consistency across different browsers and making future styling easier to manage.

# SCSS Styles Overview

This document describes the structure and design decisions related to the SCSS styles in the application.

## Style -> Components and Layout

This section includes SCSS styling for various key components of the application, ensuring a cohesive and responsive design throughout.

### Components Styled:
- **Layout:** 
    - General layout styling to structure the overall page, including padding, margins, and responsive design considerations.
- **Footer:** 
    - Styled the footer section with consistent background colors, text alignment, and padding for a polished bottom section of the site.
- **Grid System:** 
    - Implemented a grid system for flexible and responsive layouts, allowing easy arrangement of content across different screen sizes.
- **Header:** 
    - Added styles for the header, including navigation, logo placement, and responsiveness, ensuring a consistent top section across pages.
- **Slider:** 
    - Styled the slider component for showcasing featured content or images, with smooth transitions and responsive behavior.
- **Section:** 
    - General section styling, including padding, background colors, and text alignment, to standardize the appearance of various content blocks throughout the site.

## Form Styling with SCSS Variables and Components

We have implemented a comprehensive set of SCSS variables and styles to standardize the appearance and functionality of forms across the application. These styles ensure consistency and reusability, particularly for different types of forms such as travel, login, and registration forms.

### Key Variables:
- **$background-color:** `#fff` - The background color used for form containers.
- **$padding:** `20px` - Standard padding applied to form containers for consistent spacing.
- **$border-radius:** `8px` - The radius for rounded corners, providing a smooth and modern look.
- **$box-shadow:** `0 0 10px rgba(0, 0, 0, 0.1)` - A subtle shadow to give form containers depth.
- **$input-border-color:** `#ccc` - The border color for input fields.
- **$input-text-color:** `#333` - The color of the text inside input fields.
- **$placeholder-color:** `#aaa` - The color of placeholder text in input fields.
- **$icon-color:** `#393838` - The color used for icons within forms.
- **$button-bg-color:** `#007BFF` - The background color for submit buttons.
- **$button-text-color:** `#fff` - The text color for submit buttons.

### General Form Styles:
- **.form-container:** A container style applied to forms, featuring consistent background color, padding, border radius, and shadow to create a unified look.
- **.travel-form, .login-form, .register-form:**
    - **.form-group:** A grid layout for form elements, ensuring proper alignment between labels, inputs, and icons.
    - **Input Fields:** Styled with a focus on usability, including padding, border radius, and consistent text colors.
    - **Labels:** Positioned alongside inputs with appropriate font sizing and color matching the form's text.
- **.icon:** Styles for icons used within forms, ensuring they are appropriately sized and colored for visibility.

### Specific Form Types:
- **.login-form, .register-form:** Placeholder classes for additional specific styles that may be needed for login and registration forms, ensuring easy customization.

### Submit Button:
- **.submit-btn:** A fully styled button for form submission, with consistent padding, background color, and text color. The button also has a dynamic cursor style based on whether it is enabled or disabled.

## Card Component Styling

The `Card` component is designed with reusable SCSS variables and styles that allow for consistent and customizable UI elements across the application.

### Key Variables:
- **$border-radius:** `0.5rem` - Defines the border radius for rounded corners on the card.
- **$box-shadow-color:** `rgba(0, 0, 0, 0.1)` - Sets the color and opacity for the card's shadow, creating a subtle depth effect.
- **$font-size-lg:** `1.25rem` - Used for larger text, such as headers within the card.
- **$font-size-base:** `1rem` - Standard font size for the card's body text.
- **$text-color:** `#333` - Default color for the text inside the card.
- **$background-color:** `#fff` - Background color of the card, typically white.
- **$border-color:** `#ddd` - Border color for the card, providing a light outline.

### Card Component Structure:
- **.card:** The main container for the card, featuring a border, rounded corners, padding, and a subtle shadow for a clean, modern appearance.
- **.card-header:** A section inside the card for the header, styled with a larger font size and bold text to distinguish it from the rest of the content.
- **.card-body:** The main content area of the card, using the base font size and text color for readability.

## Button Styling with SCSS Variables and Mixins

We have introduced SCSS variables and a mixin to standardize button styles across the application. This setup ensures consistent design and simplifies the process of creating new button styles.

### Key Components:
- **Variables:**
    - `$primary-color`: `#007bff` - The primary color used for the main buttons.
    - `$secondary-color`: `#6c757d` - The secondary color used for alternative buttons.
    - `$font-size-base`: `1rem` - Base font size applied to the button text.
    - `$border-radius`: `0.25rem` - Standard border radius for buttons, providing a consistent rounded appearance.
- **Mixin for Button Attributes:**
    - `@mixin button-attributes($background-color, $border-color)`: A mixin that defines the common styles for buttons, including background color, border, padding, font size, and transition effects.
- **Button Classes:**
    - `.btn`: A class for primary buttons, using the primary color defined by `$primary-color`. Includes hover effects that darken the button's background and border.
    - `.btn-secondary`: A class for secondary buttons, using the secondary color defined by `$secondary-color`. Similarly, includes hover effects for visual feedback.

### Usage Example:

```scss
.btn {
  @include button-attributes($primary-color, $primary-color);

  &:hover {
    background-color: darken($primary-color, 10%);
    border-color: darken($primary-color, 10%);
  }
}

.btn-secondary {
  @include button-attributes($secondary-color, $secondary-color);

  &:hover {
    background-color: darken($secondary-color, 10%);
    border-color: darken($secondary-color, 10%);
  }
}
```
*** main.scss *** 

## SCSS File Structure and Imports

The SCSS file structure has been carefully organized to ensure modular and maintainable styling across the entire application. The imports are categorized into base modules, components, layouts, and page-specific styles.

### Import Structure:

- **Base Modules:**
    - **`variables`:** Contains global variables for colors, typography, spacing, and other design elements.
    - **`reset`:** Includes styles to reset and normalize browser default styles, ensuring consistency across different browsers.
    - **`typography`:** Defines global typography styles, such as font sizes, line heights, and text alignment.
    - **`utilities`:** Provides utility classes for common styling needs like margins, padding, and text alignment.

- **Components:**
    - **`buttons`:** Styles for various types of buttons used across the application.
    - **`forms`:** Styles for form elements, including inputs, labels, and validation messages.
    - **`modals`:** Styles for modal dialogs, ensuring a consistent appearance and behavior across different modals.
    - **`cards`:** Styles for card components used to display grouped content.
    - **`navbar`:** Styles for the navigation bar, including responsiveness and dropdowns.

- **Layouts:**
    - **`grid`:** Defines the grid system used to create flexible and responsive layouts.
    - **`header`:** Styles for the header, which is used consistently across all pages.
    - **`footer`:** Styles for the footer, ensuring a uniform look and feel across the site.
    - **`sidebar`:** Styles for side navigation or additional content areas.
    - **`slider`:** Styles for the homepage slider, used to showcase featured content.
    - **`section`:** Styles applied to sections within the main content area of the homepage or other pages.

- **Page-Specific Styles:**
    - **`home`:** Styles specific to the homepage layout and elements.
    - **`search`:** Styles for the search page, including filters and result displays.
    - **`booking`:** Styles for the booking page, covering forms and booking details.
    - **`discover`:** Styles for the discovery page, highlighting new and popular destinations.
    - **`reviews`:** Styles for the reviews page, displaying user feedback and ratings.
    - **`profile`:** Styles for user profile pages, including account details and settings.
    - **`notifications`:** Styles for the notifications page, managing alerts and updates.
    - **`trips`:** Styles for the trips page, displaying upcoming and past trips.
    - **`support`:** Styles for the support page, providing help and contact options.
    - **`travel`:** Styles for travel-related content pages.
    - **`auth`:** Styles for authentication pages, including login and registration forms.

### Purpose

This structure is designed to maintain a clean, organized codebase where styles are modular and can be easily updated or extended. Each section of the application has its own dedicated SCSS file, making it easier to manage and ensuring that styles do not conflict or overlap unnecessarily.

