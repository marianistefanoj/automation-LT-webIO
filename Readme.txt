
- To run : 
> is necessary node installed at the machine
> needs to run npm install (console/gitbash) download node_modules
> to execute, needs to type npx wdio at the console (gitbash)
> at line 4 you can change the item, if the string is "" or an item that does not exists it will give an assertion error at test 3 validating that the button add to cart hasn't changed because there's no item with the name that has been used, if you use with the text 'sauce' pore example will add al item who has Sauce on it's name, if you use backpack for example will work perfectly just for backpack item

Hello,
Thanks for read.
As the intention is understand more about my skills on automation
I tryied to do the same exercise using webdriverIO without a previous contact with it.
I only recent bought the course : https://www.udemy.com/course/webdriverio-complete-beginner-course/
It has 9h hours of classes and this is my first time trying to automate anything with webdriverIO
There are some relevant points about the project:

- Skills:
> as i mentioned, i have no previous skills basically with webdriverIO and basic skills/contact with javascript (but i understand that it was desirable)
because of this i did my best trying to do it as much as i can considering that i watched 9 hours of classes
and spent like ~12h coding by myself all.

- Design Pattern:
> at the course classes the teacher uses page objects, and is really nice, but i had some 'problems' on my project,
that i think, that a person with maybe more knowledge could spend less time trying to solve than me.
> when i was coding page objects for testing following exactly what the course teaches, i did the export at the class that i would use at my test script.js
but when i went run the project, i got errors like:
>> 'Unable to load spec files quite likely because they rely on `browser` object that is not fully initialised.'
>> 'SyntaxError: Cannot use import statement outside a module'
> telling me that there was an error at the import of the class file.
>> but my choose on this way would be use PageObjects/PageComponent pattern as i did using at my selenide project.

- Other details:
> When i added the product at the cart i did a list of products that have been added to the cart, to compare later.
> assuming the fact of my non previous too much knowledge of javascript, and less with webdriverIO, i created a variable outside the it block
that receives the value from the list, when i get the values from cart > checkout it always list at the same order, when i get the elements the order is the same, 
on this way i'm able to compare if the items that i had added to the cart are the same from cart page and checkout
> Other thing that i did (include selenide) is, the name of the product that i want for my test is a string (partial),
here ate webdriverIO is 'searchText = "Backpack" for example, and it will first do an element collection from all elements (with the titles) and see if any name matches with the partial string.
if the name matches it will get the full name from the item, click at add to cart, e verify if the 'add to cart' button has been changed to 'remove' (that means that the item has been added to the cart)

- Considerations: 
> Was a nice experience do this using wdIO, doesn't matter if i didn't had previous experience.
> I know that probably with a bit more techincal skills i could solve the problem that i got while i was doing my design pattern.
> I still need to improve my javascript skills but, a bit still more than nothing
> and thank you for the opportunity to do the test.