# GalvanizePortfolio

This repository has been setup so that I can apply to Galvanize!

## Standard One

I chose to create a project using HTML, CSS, and JavaScript/jQuery. I couldn’t help folding all of the other standards into it and creating a website that presents them all. Luckily, I already had a domain and had already setup a web server to host it. The code has all been uploaded here, but you can view the deployed website at [nolanhellyer.com/GalvanizePortfolio](http://nolanhellyer.com/GalvanizePortfolio).

I used this project as an opportunity to use CSS Grid. Although I did learn some Grid, I did not use it as heavily on this site as I thought I would.

I admit that the note boxes serve to add color, and aren’t useful. They were intended as a use CSS Grid, but that was foiled when I realized I have to float them. Still, I couldn’t resist.

I also created a jQuery slider. It’s a little funny in that is slides back to the first slide. I kind of liked the idea when I created it, and it’s a little easier than making it slide one way forever. If I was going to make it slide in one direction forever, I would copy the first slide to the end and then add a function that quickly switches the current slide to the first slide when the end of the slider was reached.

I could also add back and forward buttons that would call the ```slide_elements``` function—as well as a reverse function—when pressed. Like, it seems, all projects I embark on, there are an endless number of ways I could improve and enhance, but if I had more time to devote to this those buttons would be at the top of the list, along with using CSS to collapse the menu when the screen is narrow (or is a mobile device).

Finally, while I’m sure I’m not the first person to think of section headers that slide down with the viewport, I’m pretty proud of those.

## Standard Two

I chose to solve a Project Euler problem. My code has been uploaded and contains comments. The problem was number 19, [Counting Sundays](https://projecteuler.net/problem=19).

> You are given the following information, but you may prefer to do some research for yourself.

> * 1 Jan 1900 was a Monday.
> * Thirty days has September,\
> April, June and November.\
> All the rest have thirty-one,\
> Saving February alone,\
> Which has twenty-eight, rain or shine.\
> And on leap years, twenty-nine.
> * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

> How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

My solution was written in Python. It is the file `sundays.py`.

### A quick break down of how I solved it

It tells me what Jan 1 1900 is, but wants the actual century starting in 1901. Although it allows me to do some research on my own, I decided that my code would roll with the weird start date. Also, I am aware that Python (like many other languages) has a date object that would be very helpful in solving this. It felt like cheating, though, so I went without.

The first thing I did was devise a plan in my mind for how I could solve the problem. The first thing that came to mind was something involving lots of nested loops, but I try to avoid those if possible. 

So instead I figured out a little way that a program might figure out how many days between Sunday (as the first day of the week) and Saturday had to roll over to the next month without excessive looping. If you chop off whatever days rolled over into the month you are looking at (essentially, the days until the first Sunday of the month), find the modulo of the remaining days and seven, then subtract that number from seven, you know how many days roll over. If no days rolled over, then you have hit a Sunday on the first of the month and you should increment some kind of counter.

Although I do have one nested loop going on, I forgave myself because it was a natural way of looking at each month over a century, given that months are looping from year to year.

The next step was to figure out all the variables I would need to accomplish this. I like naming everything so that it’s clear in my code what each number is for, which is why there are a lot of variables.

`year = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]` List, in order, of how many days each month has.\
`leap = 29` Leap year February has 29 days.\
`week = 7` Number of days in the week.\
`starting_year = 1900` This is the first year we have information about.\
`start_counting = 1901` This is the first year we actually care about.\
`ending_year = 2000` This is the last year we care about.\
`current_year = starting_year` This will be the year that we increment as we go.\
`remainder = 6` In Jan of 1900 we know there are 6 days before the first Sunday.\
`sundays = 0` This will store a sum of first Sundays as we hit them.

Then, I wrote out the code based on the idea I had had originally. 

And finally, I spent the last 80 percent of my time chasing down all the little bugs and problems that I had created.

The magic lines of code are `remainder = week - ((month - remainder) % week)` and `remainder = week - ((leap - remainder) % week)`. Those lines of code represent the idea I first had about how to solve the problem without nested loops.

The loops:

```python
while(current_year <= ending_year): # Loop to ending year.
    for month in year:
```

We should think of 7 days before Sunday as 0 days instead.

```python
        if (remainder == week):
            remainder = 0
```

In the case where we have 0 days before Sunday, add to our counter!

```python
        if(current_year >= start_counting and remainder == 0):
            sundays = sundays + 1
```

In the case where:

* We ARE in February,
* AND the year IS divisible by four,
* AND it IS EITHER NOT a century OR IS a century that IS divisible by 400

then it's a leap year and should be 29 days, not 28!

```python
        if(month == 28
        and current_year % 4 == 0
        and (current_year % 100 != 0 or current_year % 400 == 0)):
            remainder = week - ((leap - remainder) % week)
```

Otherwise it's just a boring, normal month.
        
```python
        else:
            remainder = week - ((month - remainder) % week)
```

We checked each month of this year, time to increment!

```python
    current_year = current_year + 1
```

We are done, print that sum!

```python
print(sundays)
```

## Standard Three

I chose to submit a previously created project that I completed purely for fun. I bought a program called Affinity Designer for work, it’s a robust alternative to Adobe Illustrator. I bought it because I was doing work on our website and needed it, but I have since found that using it is a lot of fun.

My graphic design skills are a bit simplistic and it is not my normal creative outlet, but I often find myself engrossed in projects like this after work.

One evening I was taking out the trash, and decided to exit my apartment building from the alley. To my horror, the alley had been overrun by a sea of rats. The whole alley seemed to be moving and shifting as the rats scurried under piles of garbage to hide from me. 

The rats had completely disgusted me, so naturally I had to create some kind of tribute to them. It was only supposed to be a quick little representation of the very silly parody of the preamble of the US Constitution, but I found myself glued to this poster project for quite a long time. I could not help but decorate it with the cheesy and over-the-top stars and stripes iconography that is commonly found on campaign signs.

I don’t want to admit how much time I spent on this, but it was certainly more than two hours (drawing even simplistic blue rats is a challenge for me!) I have uploaded both a PNG and the original Affinity Designer file.