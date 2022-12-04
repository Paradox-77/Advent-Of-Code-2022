# Day 1

There are many elves each with food items, they are looking for some fruit in a jungle and would like to plan their calorie consumption as they have a limited amount of calories!

## Puzzle #1

We were tasked with finding the elf that was carrying the most amount of calories on them. The solution was quite simple.

I began by parsing the input file and splitting it at every blank line. This results in an array that contains strings, each string denotes an elf's inventory. I iterate over each inventory string and split it at a new line again, giving us an array of calorie counts of each item that was in the elf's inventory. This is then added up to give us the total calorie count of a given elf.

Lastly, I find the highest calorie count in the array of all total calorie counts. This gives us the answer, which for me was `74198`

## Puzzle #2

In the second puzzle, we were asked to find the sum of the total calorie count of the top three elves carrying the most calories.

The solution was similar to the first puzzle. I copied the code that gave me an array of the sum of calories of items in a given elf's inventory. Since the array was in no particular order, I first had to sort the array in descending order to get the top 3 elves with the most calories. We then take the first 3 elements in the array and add them up.

This gives us the sum of the total calories of the top three elves, which for me was `209914`

