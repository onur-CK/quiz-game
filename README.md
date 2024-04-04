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
I had problem with the timer function and i couldnt fix it.It goes too fast and doesn't refresh just after going to next question.But i didn't delete this function completely to be able to fix and use in the future.
I tested all the html and css files.They all work fine.
I tested my js file and i had 40 warnings with the same "These variables and syntaxs available in ES6".And i fixed it by creating a settins.json file with {"jshint.options": {"esversion": 6}}.  

![end of timer validate](https://github.com/onur-CK/pp1reviews/assets/118271710/4f0507b0-4e86-4bbb-876b-b7301b6693d9)
![index html validate](https://github.com/onur-CK/pp1reviews/assets/118271710/75c8f993-0acc-4582-97e3-70ebf8185cbd)
![result validate](https://github.com/onur-CK/pp1reviews/assets/118271710/02e99c96-b7fe-4d25-b3d1-7a59bfde8b05)
![jshint](https://github.com/onur-CK/pp1reviews/assets/118271710/33197898-a43b-42fd-ab11-241a154c4308)
![404 validate](https://github.com/onur-CK/pp1reviews/assets/118271710/851f00cc-6df3-4e7d-8781-51236e8c0b46)
![css validate](https://github.com/onur-CK/pp1reviews/assets/118271710/f9f2d4ab-d736-44d4-9967-0fcdbb9365ff)



## Credits

[The General Quiz of Everything](https://pdoylec.github.io/PP2-The-General-Quiz-Of-Everything/)

I got inspired by this quiz game idea which is provided me by my facilitator to have some ideas about my quiz game project.
I fixed some of the bugs related using the functions and syntax more than once.(Timer function, calling the next question function.)


[SuperSimpleDev](https://www.youtube.com/watch?v=SBmSRK3feww&t=41805s)
I completed this tutorial completely and built:
* To do list
* Youtube clone
* Rock Paper Scissors game
to have better understanding of javascript.

[Kera-Cudmore/Bully-Book-Club](https://github.com/kera-cudmore/Bully-Book-Club/blob/main/README.md) I used this project's readme template and adapted it to my own project.


[LiveReacting](https://blog.livereacting.com/100-fun-general-knowledge-quiz-questions-2024/) I took the questions from this website for my quiz game.


### Code Used

[The General Quiz of Everything](https://pdoylec.github.io/PP2-The-General-Quiz-Of-Everything/)
Most of the functions i used on my project is taken from this project and built on that.Also i fixed some of the repating functions and syntaxes.

### Content

[LiveReacting](https://blog.livereacting.com/100-fun-general-knowledge-quiz-questions-2024/) I took the questions from this website for my quiz game.
All questions content is taken from this website to be used on my project.

###  Media

I didnt use any kind of media on this project.
  
###  Acknowledgments

Mentor "Daisy Mc Girr" on Slack she helped me through displaying the question and answers section of my project after clicking submit.

"Kay Welfare" helped me for understanding the basics of pp2.She showed me projects to have some ideas.Pointed out the important parts i need to focus on.
We checked some finished projects together to have better understanding of what kind of project i need to build for my pp2.


"Vernell Clark" is literally saved the day for me.Without him, i couldn't be able to finish the project and submit before the deadline.First of all he motivated me that i can fix the problems and than help me through all of them.We fixed the decent repating functions and syntaxes on the project together.
And he also provided me the template of this readme file.

