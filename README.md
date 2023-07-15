# 05 Third-Party APIs: Work Day Scheduler

## Changes made
I created more hour sections in the HTML so that the timeframe resembles a regular 9-5 schedule, and also added code to the JS file to include the following:

A function that gets the current date and formats it (military time)

A save button that gets the associated hour and user input, then saves to local storage

A for loop that loads the events from local storage and displays them

A if statement that checks if there is a saved event for the hour

A function that updates the past, present, future classes based on the current hour

## How it works

When loading the page you are presented with a list of time sections that you are able to type in. The time sections are formatted like a regular 9-5 schedule, when typing into a block; if the save button is pressed the data typed into the block is saved into local storage. After pressing save if you attempt to reload the page the data that was typed will still appear unless deleted/changed and saved again. The color of the sections will change depending on the current time compared to the 9-5 time. Green = future, Grey = past, Red = present. 

## Links and comments

Here is a link to the working code: https://trouterwen.github.io/schedule-js/

Here is a link to the github repo: https://github.com/Trouterwen/schedule-js

Here is a link to this READ.Me file: https://github.com/Trouterwen/schedule-js/blob/main/README.md

