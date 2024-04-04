# QUICKZ GAME

This is a website to test your general knowledge by asking you questions with four possible answers.

![AmIResponsive](https://github.com/onur-CK/pp1reviews/assets/118271710/cfbbedda-bdd3-4314-ab03-f5c8ee1bd506)

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

Quickz is a website that tests a user's general knowledge and creates a fun experience for the user as well.


### User Stories

* As a user, I want to experience a simple design that is easy to understand.
* As a user, I expect to be able to play just after entering a username and clicking submit.
* As a returning user, I expect to experience a variety of difficulty modes with different amounts of time allotted to questions.

## Design

### Color Scheme

I decided to use eye-catching colors that also maintain a high readability that is easy on the user's eyes.

![colors](https://github.com/onur-CK/pp1reviews/assets/118271710/3744b18e-e18b-4d61-b941-bd683f65c92a)

### Typography

I chose this font-family because I found it easy to read and nice to look at.

![font](https://github.com/onur-CK/pp1reviews/assets/118271710/5412945f-4ca3-480b-8ebc-093fa68617f0)

[Google Fonts](https://fonts.google.com/)

### Imagery

For now i dont think about including images.Maybe in the future i can add some questions with images, so user can answer by clicking the images.

### Wireframes

![wireframe](https://github.com/onur-CK/pp1reviews/assets/118271710/a4a8eb07-0732-41e5-8d1b-07487e02a224)

## Features

* This website uses one main page to guide the user through answering questions.
* The main question and answer window is shown once the user clicks on the submit button, after they have entered a username.
* There is a rules window with instructions for the game.

### General features

* There are 10 random questions that are shown during one quiz session out of a possible 40 questions.
* The rules are shown when user clicks the rules button.
* There is a small window, that is used to inform the user of their current question number, out of the total number of questions remaining in their session . (1/10)
* The user's score progress, and username information are used to display a result at the end of the game.


### Future Implementations

* Difficulty options.
* Fix the timer bug.
* Track the number of correctly and incorrectly answered questions and simultaneously display this information to the user.
* Provide a larger selection of questions with choices from a variety of different categories.
* Add question and answer options that include images.

### Accessibility

* User friendly design.
* Intuitive controls.
* One page for easy navigation and to guide the user through the all futures.
* Appropriate colors to make things easier to find and interact with.

### Languages Used

* HTML
* CSS
* JAVASCRIPT

### Frameworks, Libraries & Programs Used

* [Google Drawings](https://docs.google.com/drawings/d/1GtZgh9leBaFN6rgcr1lXoov28yN3d6K94PHb0BjKS6E/edit) to draw the  wireframe.
* [Github](https://github.com/) to save and store the files for the website.
* [Google Fonts](https://fonts.google.com/) to import the font used on the website.
* [Google Dec Tools](https://developer.chrome.com/docs/devtools) to troubleshoot and test features, and to solve issues with responsiveness and styling.
* [Am I Responsive](https://ui.dev/amiresponsive) to show the website image on a range of devices.
* [Diffchecker](https://www.diffchecker.com/) to compare the code during creation.
* [W3C](https://validator.w3.org/) for HTML code validation.
* [Jigsaw](https://jigsaw.w3.org/css-validator/) for CSS validation.
* [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=de) to evaluate user experience, best practices, accessibility, and overall performance.

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

Testing was routinely conducted during the entire project build.  I utilized Chrome Developer Tools, while building, to pinpoint and troubleshoot any issues as I went along. I had a problem with the timer function and I couldn't fix it in time.  It currently, increments too fast, and doesn't refresh just after going to next question.  I decided not to delete this function completely, because I want to be able to fix and use it in the project in the future. I tested all the HTML and CSS files using code validation.  They all were evaluated to have no errors. Initially, I tested my JavaScript file, and the validation detected 40 warnings with the same "These variables and syntax available in ES6".And I fixed it by creating a settings.json file with {"jshint.options": {"esversion": 6}}.

![jshint](https://github.com/onur-CK/pp1reviews/assets/118271710/33197898-a43b-42fd-ab11-241a154c4308)
![end of timer validate](https://github.com/onur-CK/pp1reviews/assets/118271710/4f0507b0-4e86-4bbb-876b-b7301b6693d9)
![index html validate](https://github.com/onur-CK/pp1reviews/assets/118271710/75c8f993-0acc-4582-97e3-70ebf8185cbd)
![result validate](https://github.com/onur-CK/pp1reviews/assets/118271710/02e99c96-b7fe-4d25-b3d1-7a59bfde8b05)
![404 validate](https://github.com/onur-CK/pp1reviews/assets/118271710/851f00cc-6df3-4e7d-8781-51236e8c0b46)
![css validate](https://github.com/onur-CK/pp1reviews/assets/118271710/f9f2d4ab-d736-44d4-9967-0fcdbb9365ff)
![jigsaw css](https://github.com/onur-CK/pp1reviews/assets/118271710/b57626f5-f2c5-4109-b0b3-13f12f1f6595)


For the lighthouse testing at first i got this results;
![Lighthouse mobile](https://github.com/onur-CK/pp1reviews/assets/118271710/6f09691c-892f-4b92-aad6-b4e964c011a2)
![Light house desktop](https://github.com/onur-CK/pp1reviews/assets/118271710/455efa63-1bea-423c-9e5f-b19501ac7074)

And after checking the reason of low level of accesibility i found the solution at this video:
[Aman Jaiswal](https://www.youtube.com/watch?v=pxIlxtV2DbI)
I fixed it by creating a "for" declaration inside my label element with the id of my input.

and these are the end results for my lighthouse testings for both mobile and desktop:
![light house mobile fixed](https://github.com/onur-CK/pp1reviews/assets/118271710/d882efbc-5611-41c3-b91e-baa45d313812)
![Lighthouse desktop fixed](https://github.com/onur-CK/pp1reviews/assets/118271710/4a996495-b5c1-416a-a81b-5f4d3e92db67)



## Credits

[The General Quiz of Everything](https://pdoylec.github.io/PP2-The-General-Quiz-Of-Everything/)

I was inspired by a quiz game idea that was used as an example to me by my cohort facilitator, so that I could have some ideas to complete my own quiz game project. I fixed some of the bugs related to using the functions and syntax more than once. (Timer function, calling the next question function.)


[SuperSimpleDev](https://www.youtube.com/watch?v=SBmSRK3feww&t=41805s)
Using the SuperSimpleDev tutorials in order to have a better understanding of JS, I built:
* To do list
* Youtube clone
* Rock Paper Scissors game

[Kera-Cudmore/Bully-Book-Club](https://github.com/kera-cudmore/Bully-Book-Club/blob/main/README.md)  
I used the Kera-Cudmore/Bully-Book-Club repository's readme template, and adapted it to my own project.


[LiveReacting](https://blog.livereacting.com/100-fun-general-knowledge-quiz-questions-2024/) 
I adopted questions from this website for my quiz game.

### Code Used

[The General Quiz of Everything](https://pdoylec.github.io/PP2-The-General-Quiz-Of-Everything/)
Most of the functions used on my project are adopted from this project and built using that as baseline. I adjusted some of the repeating functions and syntaxes to suit my own purposes.

### Content

[LiveReacting](https://blog.livereacting.com/100-fun-general-knowledge-quiz-questions-2024/) 
I adopted the questions from this website for my quiz game.
All questions and content are adopted from this website for my project.

###  Acknowledgments

Mentor "Daisy Mc Girr" on Slack helped me to display the question and answers section of my project after clicking submit.

My cohort facilitator, "Kay Welfare", helped me with understanding the basics of pp2.  She showed some project examples so that I could have some ideas about how to complete my project.  She also pointed out the important parts of fulfilling the project completion criteria I needed to focus on. We examined some finished projects together so that I would have a better understanding of what kind of project I need to build for my pp2.

HUGE THANKS to: "Vernell Clark" He has literally saved the day for me.  Without him, I couldn't be able to finish the project and submit before the deadline. First of all, he motivated me so that I could fix the problems, and then helped me through all of them.  We fixed the some of the repeating functions and syntaxes on the project by discussing them together. He also provided me with the template of this readme file. Having this kind of support from him, made me understand the power of the teamwork and peer review.