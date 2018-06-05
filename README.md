# GalvanizePortfolio

This repository has been setup so that I can apply to Galvanize!

## Standard One

I chose to create a project using HTML, CSS, and JavaScript/jQuery. I couldn’t help folding all of the other standards into it and creating a website that presents them all. Luckily, I already had a domain and had already setup a web server to host it. The code has all been uploaded here, but you can view the deployed website at galvanize.nolanhellyer.com.

## Standard Two

I chose to solve a Project Euler problem. My code has been uploaded and contains comments. The problem was number 19, Counting Sundays.

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

It tells me what Jan 1 1900 is, but wants the actual century starting in 1901. Although it allows me to do some research on my own, I decided that my code would roll with the weird start date.

The first thing I did was devise a little scheme in my mind for how I might get python to do all the work for me. The first thing that came to mind was something involving lots of nested loops, but I try to avoid those if possible. 

So instead I figured out a little way that a program might figure out how many days between Sunday (as the first day of the week) and Saturday had to roll over to the next month without excessive looping. If you lop off whatever days rolled over into the month you are looking at, find the modulo of the remaining days and seven, then subtract that number from seven you know how many days rolled over. If no days rolled over, then you have hit a Sunday on the first of the month and you should increment some kind of counter.

Although I do have one nested loop going on, I forgave myself because it was a natural way of looking at each month over a century, given that months are looping from year to year.

Next, I figured out all the variables I would need to accomplish this. I like naming everything so that it’s clear in my code what each number is for.

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

And finally, I spent the last %80 of my time chasing down all the little bugs and problems that I had created. 

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