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

# Startup CSS
- Added new elements across pages, then iterated on layout, spacing, and class names.
- Completed CSS styling for login/register, home, and builds pages; added responsive stacking for smaller viewports.
- Adjusted nav colors, button colors, and other build section styling; added pagination color changes.
- Added UI components like gallery rows and a notification box in the other builds section.
- Added translucent card effects for future description areas.
- Migrated simon-css from a submodule to a regular folder, and added assets and full site files

# Startup React P1
- Converted static HTML pages into React components (JSX), enabling dynamic rendering and component reuse.
- Replaced all class attributes with className for React compatibility.
- Changed inline styles from string format to JavaScript object format (e.g., style={{margin: 0}}).
- Updated label for attributes to htmlFor for React.
- Self-closed input tags and other empty elements as required by JSX.
- Modularized your code by splitting each page into its own component file, making your project more maintainable and scalable.
- Set up a React project structure with src/ and public/ folders, and used ES6 imports.

# Startup React P2: Reactivity
- Fixed login page layout so columns display side by side and stack responsively on smaller screens.
- Finished card rows for the build component, added hardcoded options for now, and improved selection logic.
- Made card gallery a general component for use in home, build, and other builds; moved buildsGallery to shared for reuse.
- Fixed notification box positioning and updated build gallery layout for better UI.
- Enabled dynamic loading of build cards, with placeholder loading cards and support for fetching from an endpoint.
- Added hover descriptions to build cards for improved UX.
- Implemented notification box in other builds component with live message display and aesthetics.
- Added live notifications functionality to the other builds page.
- Combined login and register pages into a single, modular authentication component.
- Improved authentication page modularity, placing login and register boxes within the same component.

# Startup Database
- Created a dedicated startup-db service and integrated backend service files into the startup project.
- Migrated character builds from in-memory arrays to persistent MongoDB storage.
- Added database-backed authentication with stored users, hashed passwords, and token-based sessions.
- Implemented authenticated build endpoints for all builds, single build lookup, and user-specific build retrieval.
- Added a token-scoped route for personal builds and fixed route ordering so specific routes match before dynamic ID routes.
- Improved credential handling to support login by email or username while keeping account creation validation focused on username uniqueness.
- Added stronger frontend API error handling for build loading, including unauthorized/server messaging and retry without page refresh.
- Updated build gallery rendering to map real stored build fields (class, race, background, feat) instead of placeholder name/description fields.
- Added deployment support for startup-db and fixed server runtime dependency issues so database-enabled startup deploys cleanly.
