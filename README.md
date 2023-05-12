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

As you can see, there is a real differece in visuals depending on which browser you use. I'm currently unsure as to what is causing this, but it really hampers the experience for the user in my opinion. On all three main game pages, the browsers work and look as I expect them to.