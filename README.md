npm install - installs dependencies

npm start - starts web app on port 3000

Bootstrapped with Create React App. Used Jest for testing, and Router to travel between Form and Result pages.

Assumptions:
- 1GB for every additional hour above 8 hours
- Anything above 2 devices is considered additional
- You can only choose one option in the international plans(I reversed back on our earlier call where I said I would include multi selects, I kind of realized it doesn't make sense to pick all 3 Asia, Europe, and Rest of the World and have it cost more than the actual World plan)
- *Assuming that simultaneous play is only for additional devices
i.e. If you have 2 devices, and want simultaneous play on 2 devices, then there are no additional charges.
     If you have 3 devices, and want simultaneous play on 2 devices, then there will be 1GB additional recommendation.
- $1 for every additional 2GB above 8GB


This app's architecture is pretty straight forward. App.js contains the state. Its child component Form.js modifies the state and sends it back. Its other child component Result.js receives the updated state and displays the corresponding package with cost. You can uncomment line 90 in App.js to see the state change as you input information. This is all assuming valid inputs as well. 


As for things I could improve on, I could probably do form validation. I could also align the questions and answer boxes better. I was able to do toggle lighting when you hover over the NavBar, but I couldn't figure out how to do that as well for icon images like here on http://www.nbcuniversal.com/. You can see that in the upper right corner, when you hover over that twitter and facebook icon, it lights up as well. 

Overall, it was a fine challenge. But when I was uploading this to Github, there were some merge conflicts??? and I somehow lost the original README...

