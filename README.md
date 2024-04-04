# QUICKZ GAME

This is a website to test your general knowledge by asking you questions with 4 possible answers.

![Unbenannt](https://github.com/onur-CK/quiz-game/assets/118271710/2d355e0b-e3c3-490d-9469-e54a5203ef86)

[You can check the live website on github.](https://onur-ck.github.io/quiz-game/)



## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

Quickz is a website that tests user's general knowledge and create some fun time for the user at the same time.

### User Stories

I wanted to use a simple design to make it user friendly.It is ready to go just after entering a username and clicking submit.I think about creating difficulty modes with different timebounds to questions.

## Design

### Colour Scheme

I decided to use eye catching colors and also keep the readability high at the same time to not cause it to tire the user's eyes.

![colors](https://github.com/onur-CK/pp1reviews/assets/118271710/3744b18e-e18b-4d61-b941-bd683f65c92a)

### Typography

I chose this font-family beacuse i found it easy to read and have a nice look at the same time.

![font](https://github.com/onur-CK/pp1reviews/assets/118271710/5412945f-4ca3-480b-8ebc-093fa68617f0)

[Google Fonts](https://fonts.google.com/) 

### Imagery

For now i dont think about including images.Maybe in the future i can add some questions with images, so user can answer by clicking the images.

### Wireframes

![wireframe](https://github.com/onur-CK/pp1reviews/assets/118271710/a4a8eb07-0732-41e5-8d1b-07487e02a224)

## Features

* This website only one main page guides you through answering questions.
* Question and answers window shown once user submits after entering a username.
* Rules window is shown when rules button is clicked.

### General features

* There are 10 random questions shown along the game out of 40 questions.
* Rules are shown when user clicks the rules button.
* We have a little window to track the current questions number.(1/10)
* We save the progress and username to display a result information at the end of the game.


### Future Implementations

* Difficulties options.
* To fix the present timer bug.
* To track answered correct and incorrect answers simultaneously.
* To add more questions with different categories.
* To add questions and answer options with images.

### Accessibility

* Tried to keep the design user friendly.
* Targeted to not have anything complex.
* Used only one page to guide the user through the all futures.
* Used different colors to make everything easier for user.

## Technologies Used

### Languages Used

* HTML
* CSS
* JAVASCRIPT

### Frameworks, Libraries & Programs Used

* [Google Drawings](https://docs.google.com/drawings/d/1GtZgh9leBaFN6rgcr1lXoov28yN3d6K94PHb0BjKS6E/edit) to draw the  wireframe.
* [Github](https://github.com/) to save and store the files for the website.
* [Google Fonts](https://fonts.google.com/) to import the font used on the website.
* [Google Dec Tools](https://developer.chrome.com/docs/devtools) to troubleshoot and test the features, solve issues with responsiveness and styling.
* [Am I Responsive](https://ui.dev/amiresponsive) to show the website image on a range of devices.

## Deployment & Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project.
3. Click on the Settings section.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

The local development section gives instructions on how someone else could make a copy of your project to play with on their local machine. This section will get more complex in the later projects, and can be a great reference to yourself if you forget how to do this.

#### How to Fork

Place instructions on how to fork your project here.

#### How to Clone

To clone the Quickz game repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Testing was always there along the entire project build.I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along. 
I had problem with the timer function and i couldnt fix it.It goes too fast and doesnt refresh just after going to next question.But i didnt delete this function completely to be able to fix and use in the future.
I tested all the html and css files.They all work fine.
I tested my js file and i had 40 warnings with the same "These variables and syntaxs available in ES6".And i fixed it by creating a settins.json file with {"jshint.options": {"esversion": 6}}.  

![end of timer validate](https://github.com/onur-CK/pp1reviews/assets/118271710/4f0507b0-4e86-4bbb-876b-b7301b6693d9)
![index html validate](https://github.com/onur-CK/pp1reviews/assets/118271710/75c8f993-0acc-4582-97e3-70ebf8185cbd)
![result validate](https://github.com/onur-CK/pp1reviews/assets/118271710/02e99c96-b7fe-4d25-b3d1-7a59bfde8b05)
![jshint](https://github.com/onur-CK/pp1reviews/assets/118271710/33197898-a43b-42fd-ab11-241a154c4308)
![404 validate](https://github.com/onur-CK/pp1reviews/assets/118271710/851f00cc-6df3-4e7d-8781-51236e8c0b46)
![css validate](https://github.com/onur-CK/pp1reviews/assets/118271710/f9f2d4ab-d736-44d4-9967-0fcdbb9365ff)



## Credits

👩🏻‍💻 View an example of a completed Credits section [here](https://github.com/kera-cudmore/BookWorm#Credits)

The Credits section is where you can credit all the people and sources you used throughout your project.

### Code Used

If you have used some code in your project that you didn't write, this is the place to make note of it. Credit the author of the code and if possible a link to where you found the code. You could also add in a brief description of what the code does, or what you are using it for here.

### Content

Who wrote the content for the website? Was it yourself - or have you made the site for someone and they specified what the site was to say? This is the best place to put this information.

###  Media

If you have used any media on your site (images, audio, video etc) you can credit them here. I like to link back to the source where I found the media, and include where on the site the image is used.
  
###  Acknowledgments

If someone helped you out during your project, you can acknowledge them here! For example someone may have taken the time to help you on slack with a problem. Pop a little thank you here with a note of what they helped you with (I like to try and link back to their GitHub or Linked In account too). This is also a great place to thank your mentor and tutor support if you used them.