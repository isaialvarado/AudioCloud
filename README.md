# AudioCloud

## Description
- Users can search for audio files. Users can also upload and play music on the website.

## Team Members
- Joel Alvarado
- Ujwala Aaduru
- Zidian Lyu

## Functionality & MVP
- Hosting on Heroku
- Guest demo account
- Audio files (Create and Read only)
- Search for audio file
- Production Read Me

## Technology
- backend: Python Django(there is no view on it)
- database: postgreSQL
- frontend: React/ Redux(pages will be displayed on React)

#### Bonus
- Progress bar for audio playback
- Guest authentication

## Docs

* [Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Group Members & Work Breakdown

### Joel's primary responsibilities will be:
- Research and understand Django REST framework
- Setup database tables with accurate column naming
- Guest demo account to ensure user can successfully signup, login and logout
- CSS Styling with attractive and smooth UX design and colorful page

### Ujwala's primary responsibilities will be:
- Research and understand Django REST framework
- Initialize framework with router construction
- Audio file creation with upload function
- Home page that shows all the audio albums from the database
- CSS Styling with attractive and smooth UX design and colorful page

### Zidian's primary responsibilities will be:
- Research and understand Django REST framework
- Setup GitHub repo and make sure each teammate has collaborator access to repo
- Audio file show page which contains a cover picture and audio file
- Search function can filter the albums’ titles correctly
- Creating enough seed data to demo the website

## Implementation Timeline

Day 1: Get started on the infrastructure of the Django framework, following this guide from [seedstars](https://github.com/Seedstars/django-react-redux-base). By the end of the day, we will have:
- A completed REST framework inside an AudioCloud folder
- Completed routers
- Completed demo account

Day 2: Setup the audio file backend. Create the homepage for storing all the audio files. By the end of the day, we will have:
- A homepage that hosts some audio files on it
- Homepage includes a cover picture of each audio file

Day 3: By the end of the day:
- Show page for each audio file with playable button

Day 4: Have a audio file upload feature:
- User will be able to upload the audio file through a form
- Setup Cloudinary for user uploads

Day 5: Create the search filter for the audio files. By the end of the day:
- The search bar will be shown at the index page
- User will be able to search the audio files by title
