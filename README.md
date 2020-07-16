# uicheckker 
Check responsive of your website on very easy way.

uicheckker is addition for your website who will help you to check your website responsiveness on easy way, just declare test, as result you will got response from uichekker.

**Note:** uicheckker is not stable yet, but you can follow progress.

## How is everything conceived?
Include little JS file in your website where you will have abilites to check ``overflow`` & ``margins`` & ``paddings`` of your website on defined resolution.

*Note: For now overflow, margins and padding, later we will add more addition like font check. etc.*

Here is example: 
You have any id on your website who need be tracked by uicheckker, to check is any overflowing in any resolution resolution.
**Only what you need to do is to target that element and just resize your browser!**

Here is little bit of code:

`import  {  UiCheckker  }  from  "./uicheckker"; // ES6+`

`new UiCheckker({`

`	el: "app", // id attribude of element to be checked.`

`	overFlowCheck: true, // run overflow check, later margin and padding example.`

`});`

Your next step is only to just resize your screen resolution with your mouse click. 
As result you will get error information about overflowing.
Which element, specifically which children element make that overflow on which resolution. Then open your css and target element in css to fix that on `@media` point. You have all informations. 🙆‍♀️

# Soon more. 👦

*Note: If you like this idea, please press ⭐ as a sign to move on with project. Thanks. Have a nice day.*
