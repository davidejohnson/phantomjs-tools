# Get Site Cookies
The fetch-data script allows us to grab all of the cookies on a specified website, and to store the list of cookies within a text file.

I found this particularly useful whilst working on the GDPR project for Marie Curie, as it allowed us to scan all of the script files and cookies that were being utilised by each of our web applications, in order to list these within a Cookie Preferences page.

In order to execute the script, you need to run the following in the command line:

```
phantomjs --ignore-ssl-errors=true --disk-cache=true fetch_data.js http://yoursite.com
```
The command is broken down as follows:
* ignore-ssl-errors=true: This option avoids errors related to the SSL certificate being considered;
* disk-cache= true: The process will save the resources on the disk;
* fetch-data.js: This is the file that processes the request to the site and displays it on the shell (fetch-data.js is in this folder); this file must be in the same folder from where you launched the command, otherwise you will have to indicate “~/path/of/fetch/data”
* http://yoursite.com: The website you want to analyze.

Once this command has been run, the terminal will return a list of the resources and cookies used by the relative site. It will also save it to a text file called cookie-list.txt in the same folder as where you are running phantomjs. 

You can change the name of the file, and the location, by amending line 29 of *fetch-data.js*.