//identify the element
var linkedInIcon = document.querySelector('.linkedin-icon');
var stackOverflowIcon = document.querySelector('.stackoverflow-icon');
var githubIcon = document.querySelector('.github-icon');

var headText = document.getElementById('headText');
headTween = KUTE.to(headText, {text: "Iain Hunter"}, {repeat: 0, delay: 0, yoyo: false, duration: 5000, easing: 'easingBounceOut'});
headTween.start();

//built the tween object
var tween1 = KUTE.fromTo(linkedInIcon,{rotateY:0},{rotateY:720}, {duration: 1250, delay: 0, repeatDelay: 15000, repeat: Infinity, yoyo: true});
var tween2 = KUTE.fromTo(stackOverflowIcon,{rotateY:0},{rotateY:720},{duration: 1250, delay: 4000, repeatDelay: 15000, repeat: Infinity, yoyo: true});
var tween3 = KUTE.fromTo(githubIcon,{rotateY:0},{rotateY:720},{duration: 1250,  delay: 8000, repeatDelay: 15000, repeat: Infinity, yoyo: true});

//start the animation
tween1.start();
tween2.start();
tween3.start();
