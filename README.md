# Startup Application Specification

## Elevator Pitch
<!-- Add a compelling 1-paragraph description of your application idea here -->
I am going to create an application for Dungeon and Dragons character creation. The problem is that traditional character sheets are easily destructable and the ability to access all information quickly is finicky. A streamlined digital UI would make it so information is readily available and reduces some of the costs that come with the hobby but not impeding upon the engagement/entertainment.

## Key Features
<!-- List the main features of your application -->
- D&D character creation
- Organized UI for stat/inventory/ability access
- Compliance with most recent editions and rulesets
- Home-brewed rules/features compatible
- Vote on other user-created characters

## Design
<!-- Include sketches or mockups of your application layout -->
**Login Page**
![Login Page Mockup](./Screenshot%202026-01-13%20171733.png)
**Account Page**
![Character Sheet Display](./Screenshot%202026-01-13%20171758.png)
**Character Builder**
![Character Creation UI](./Screenshot%202026-01-13%20171805.png)

## Technology Usage

### HTML
<!-- How will you use HTML in your application? -->
Three HTML pages. One for login, one for character creation, and one for character sheet UI. Hyperlinks to character creation details.

### CSS
<!-- How will you use CSS for styling and animations? -->
Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast. Smooth transitioning of detail information with dropdowns. Design for UI for a clean and organized look to access stats/inventory/abilities

### React
<!-- How will you use React for frontend functionality and routing? -->
Provides login, character creating choice display, display other users characters, backend endpoint calls. Multi-page application while reactive to user's actions.

### Service (Backend)
<!-- Describe your backend server functionality -->
- **Endpoints**: 
    - retrieving other character
    - storing created characters
    - submitting votes on characters
    - retrieving vote status on characters
    - Register, login, and logout users. Credentials securely stored in database. Can't create unless authenticated.
- **User Support**: Login, logout, and registration
- **Third-party Service**: Data scrapping from D&Dwikidot

### Database
<!-- What data will you store persistently? -->
Store authentication information, users, votes, and created characters in database.

### WebSocket
<!-- How will you use WebSocket for real-time data? -->
 When characters are created, they will show up in a section where others can see them as well. As each user votes, their votes are updated to all other users and their accounts.

# Startup HTML
- Built out the Startup and Simon application with HTML files
- Setup files for login, register, home, build, and other builds pages
- Setup live notifications box for build gallery
- Added a character building feature with a button and captions
- Dropdown menus for home and building pages were created and a profile image was added for the gallery
- Restructured the login flow to route to the home page first
