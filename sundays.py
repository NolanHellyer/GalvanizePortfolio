# List, in order, of how many days each month has.
year = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
leap = 29 # Leap year February has 29 days.
week = 7 # Number of days in the week.
starting_year = 1900 # This is the first year we have information about.
start_counting = 1901 # This is the first year we actually care about.
ending_year = 2000 # This is the last year we care about.
current_year = starting_year # This will be the year that we increment as we go.
remainder = 6 # In Jan of 1900 we know there are 6 days before the first Sunday.
sundays = 0 # This will store a sum of first Sundays as we hit them.


while(current_year <= ending_year): # Loop to ending year.
    for month in year:
        # We should think of 7 days before Sunday as 0 days instead.
        if (remainder == week):
            remainder = 0
        # In the case where we have 0 days before Sunday, add to our counter!
        if(current_year >= start_counting and remainder == 0):
            sundays = sundays + 1
        # In the case where we are in February,
        # AND the year is divisible by four,
        # AND it is EITHER NOT a century OR IS a century that's divisible by 400
        # then it's a leap year and should be 29 days, not 28!
        if(month == 28
        and current_year % 4 == 0
        and (current_year % 100 != 0 or current_year % 400 == 0)):
            remainder = week - ((leap - remainder) % week)
        # Otherwise it's just a boring, normal month.
        else:
            remainder = week - ((month - remainder) % week)
    # We checked each month of this year, time to increment!
    current_year = current_year + 1

# We are done, print that sum!
print(sundays)
