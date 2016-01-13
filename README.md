# Nork

This module is a simple-text-based game called Nork, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!

##### 1. Explain how you organized the _data_ and _behaviors_ of your program. Did you break up your work into different _objects_, _functions_, or _files_? Reflect on why you chose to organize it the way that you did. #####
> I decided to organize my program by functions. I knew that the game would have 4 commands: GO, TAKE, USE, INVENTORY. So I created a recursive function first for the progam to keep asking what the user would like to do. Then I created methods for each of the four actions. I also created a process function that would call either of the 4 command's methods based on what the user typed in 


##### 2. Does your application demonstrate good *coupling*? Explain your answer either way. #####
> Yes my application demonstrates good coupling because my code pulls from the json file and they work together for the game to work. 


##### 3. Would your application be easy to update in the future (e.g., to add more rooms, items, actions)? Why or why not? #####
> Yes it would be pretty easy to update in the future, the rooms and items would have to follow the same format, and for creaing new actions, new methods need to be made. But I dont think it would be too complicated to adjust in the future.


##### 4. Approximately how many hours did it take you to complete this assignment? #####
> This was the first assignment working with Java Script, Git and the command line, so I had to spend a lot of time reseraching JavaScript syntax online. I think the assigment including research probably took me over 24 hours. I also had a bit of trouble commiting my files to Git Hub, I followed the instructions on the specs but I kept getting errors saying that it couldnt commit. I'm not sure what I was doing wrong. Also I spent most of my sunday night working on the assignment so I didnt commit each step of the way. I just commited at the end when I was done working on the assignment that day. 

##### 5. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> Sally Li helped me with setting up git hub, downloading git, teaching me some git commands. Joel Ross helped me with structuring my code, by adivising me to create a recursive function and functions for each of the commands. 


##### 6. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> I didnt' encounter any problems through out the assigments besides having to do a lot of research. I just had a lot of trouble throughout the entire assignment because I am still not comfortable with javascript, git and the command line and incorporating json files. 
