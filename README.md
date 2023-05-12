# JackBlack
![Am I Responsive](/assets/images/readme/index-responsive.png)
![Am I Responsive](/assets/images/readme/jackblack-responsive.png)

Welcome to the game of JackBlack. A game of BlackJack versus Jack Black.

The taget user is aimed at anyone who enjoys the card game, and is suitable to all ages

The site consists of two pages. The first is a Welcome page, where the user must enter a name to move forward onto the main page, the Blackjack page.
From there, the user can play as many games as they desire, with a prompt asking such a question.

This game was created using HTML, CSS and JavaScript and is the second project in a series of five developed for Code Institute. The end goal is a diploma in Full stack development.

I sincerely hope you enjoy the game.

## Design

![Design](/assets/images/readme/design.jpg)
I originally wanted my design to reside on one page. The idea was also to have the user play the game for a flapjack, as I felt the constant interaction of jack led to the novelty of the game. However this didn't transpire, as I struggled to keep the entire content on one page.

![Index page](/assets/images/readme/index-screen.png)
![Game Screen](/assets/images/readme/game-screen.png)

The color of the background closely represents that of a typical casino table. I had originally uploaded an image of an actual casino table, however the image looked distored and stetched over the original design. I opted for this new design for a cleaner look.

### Fonts

![Google Fonts](/assets/images/readme/font-1.png)
![Google Fonts](/assets/images/readme/font-2.png)

For the font, I decided to go for a less-than-formal font and to try and mimmick that seen on a casino table. The fonts chosen were "Londrina Outline" and "Londrina Solid" and I felt the two complemented each other along with the alternating Black and White font colors.

### Images

![Jack Black](/assets/images/jack-black-resize.jpg)
![Joker Card](/assets/images/joker-card-resize.jpeg)

Both images were found using a google search for their respective names. I resized the images using [Image Resizer](https://imageresizer.com/). The joker card was not my initial idea, however as will be discussed later, I settled on this.
The image of Jack Black I felt help lend an allure to the game. 

![Card Image](/assets/images/readme/card-image.png)

The images of the cards came from a repository by the developer [ImKennyYip](https://github.com/ImKennyYip/black-jack). I took inspiration for this game from this repository and hopefully made it my own. 

### Audio

The sound effects came from a google search of 'Jack black sounds mp3', which led me to the site [101Soundboards](https://www.101soundboards.com/boards/10168-jack-black-soundboard). There were plenty of sounds to choose from, and I felt the game required sound effect give it more interest. There could have been room for perhaps some background music, however I would not have liked it to detract from the result sounds, and I don't think there would have been too much time inbetween games for the user to enjoy any background music.

## Testing

### HTML

![HTML Validator](/assets/images/readme/html-validator.png)

A test of the HTML code came back positive, with no visible errors

### CSS

![CSS Validator](/assets/images/readme/jackblack-css-validator.png)

Similarly with CSS, no errors were detected.

### WAVE

![Index WAVE test](/assets/images/readme/index-wave.png)
![JackBlack WAVE test](/assets/images/readme/jackblack-page-wave.png)

Using [WAVE](https://wave.webaim.org/) to analyse the specific pages. A couple of errors were thrown up. Firstly on the index page, the input element is missing its label tag. Upon reflection, I feel there would have been a better way to allow the user to input their name, and something I wish to explore in the future.

On the main game page, errors were thrown up regarding the alt tags on the card images. As they are randomly generated with JavaScript, perhaps a JS code would have attached an alt tag to all these images. Again, this is something to look at in the future.

### Lighthouse

![Index Lighthouse](/assets/images/readme/index-lighthouse.png)
![JackBlack Lighthouse](/assets/images/readme/jackblack-lighthouse.png)

[Lightouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) testing threw up some issues that I was able to rectify, to an extent. On original production, scrores threw up some poor performance. This was mainly to do with the size of the images, and the time it took for the site to be able to load. Obviously this would have led to a poor user experience, so I managed to resize two of the images to help improve scores.

![Main page lighthouse information](/assets/images/readme/jackblack-lighthouse-2.png)

As seen in the image above, the card images let to the poor load times of the page. As there are a lot of images here to be resized, practically this task would not be ideal but is something for future thought. 

### Browser testing

![Chrome](/assets/images/readme/chrome-test.png)
Chrome Test

![Firefox](/assets/images/readme/firefox-test.png)
FireFox Test

![Safari](/assets/images/readme/safari-test.png)
Safari Test

As you can see, there is a real differece in visuals depending on which browser you use. I'm currently unsure as to what is causing this, but it really hampers the experience for the user in my opinion. On all three main game pages, the browsers work and look as I expect them to. As with Safari, Apple's iOS visualization of the home page is distorted. 

Looking closer into things, it appears that without a CSS property, the image behaves in this way. I endeavour to rectify this issue, to avoid a poor visual experience for the user.

### Gameplay testing

The gameplay through the majority of testing has performed how I would like it to. Jack Black's card remains hidden until the final outcome of the game, when it is revealed followed by an audio clip, depending on the outcome. I have come across a couple of errors though.

![Jack Ace count](/assets/images/readme/gameplay-test.png)

I found out that as I played the game, the dealers hand here held on one hidden card, and one ace card. My assumption was that the hidden card would be a face card, meaning the dealer would have 21. Upon reveal, there was another Ace, which technically under the rules of the game would mean a score of 2 / 22. The idea is that if you have an Ace and are not bust, you can still draw a card, which did not happen here. This meant the dealer had to stick on 12, as supposed to the original description of 17. A frustrating bug.

Further to this, I come across the following issue, once again to do with the Ace card/value.

![First Draw](/assets/images/readme/gameplay-ace-test.png)
To begin with I would like to have two potential scores when drawing an Ace. As mentioned, an Ace is worth the value of 1 or 11, so this initial score could be 9 or 19.

![Second Draw](/assets/images/readme/gameplay-ace-test2.png)
Drawing a second card here visually makes the user bust on 29. However the total in all likelihood reflects 19.

![Stick](/assets/images/readme/gameplay-ace-test3.png)
I decided here to stay on 19(29). I'm happy that my alerts work, and here I can see that the game is tied.

![Result](/assets/images/readme/gameplay-ace-test4.png)
As can be seen here in the results, the users score returns the value of 19 rather than 29. As well, the dealer here did not have blackjack like I expected, so was allowed to stick on 19. For future reference, I would like to be able to display two possible scores the user could have when drawing an Ace, to enhance gameplay and be visually correct. 

## Deployment Stages

The following Depoloyment stages were taken. When working on my project I would have to stage regular commits in Code Anywhere.

* `git add .` - Adds saved files to Git's staging area
* `git commit -m ""` - Commits the saved files to the local repository
* `git push` - Pushes the commits

After pushing the commits, it is imperitive to deploy the site, and make it live. To do this:-

* Open Github and find the repository we are looking to deploy.
* Click on settings on the right hand side of the repository.
* Under code and automation, find the option pages.
* Under Build and Depoloyment -Source- select deploy from branch.
* The site is now live.

## Issues

When developing my game, one of the issues mentioned was not having one page for the game. I feel having one page for the game would have made writing some of the JavaScript code a lot easier.

One Particular issue I couldn't quite rectify was being able to show the user name on the game screen. Whilst the alert message welcomes the user specifically by name, having the name carried over onto the main game page would have made for better viewing. I think exporting a name from one page onto another isn't quite in my JavaScript arsenal yet, but in time I hope to be able to achieve this.

As mentioned, the visual issues with different Web browsers really let things down. My knowledge of flex-box still remains sketchy and whilst visually I would like the game to be perfect, it was the back-end development that was the focus of the project.

## Future scope

There is a significant amount of potential with this game in the future. Among fixing the issues that I have mentioned:-

* Animation - I would quite like the site to have more animation. At present it feels very static and maybe a little lackluster. The index page would benefit from something a little more eye-popping, maybe some spinning cards or something to that effect.
  
![Central Animation](/assets/images/readme/animation-wanted-2.png)

* I really endeavoured to have this animation above from [Tenor](https://tenor.com/en-GB/view/jack-black-animutation-gif-24625354) displayed in the middle of the game page, instead of the joker card. Whilst I was able to embed the code into my project, it came with a lot of baggage code which I was unable to filter out. This included a link to the animation, as well as unneccesary headers and sizing.
* The background could more closely resemble that of an actuall blackjack table.
* I would like the cards to travel to the user/comp as if there was an actual dealer. This would have really helped the authenticity of the game.