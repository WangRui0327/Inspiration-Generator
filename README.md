# Overview:
This README.md contains:</br>
1. Project Information. </br>
2. Instructions to use the generator. </br>
3. Goals for the next version. </br>
</br>

# Project Information:
-Name: Theme and Inspiration Generator </br>
-Function: Randomly select a color, two words, and one sentence from database (data.json) for inspiration. Allow personalized database through the function "add entry".
-Packet Version: 1.0.0. </br>
-Creator: Rui Wang </br>
-Tips: Feel free to download these files and run them on your server/local host. Detailed instructions and prerequisites are stated below. I hope you enjoy your journey facing the unknown possibilities and inspirations. </br>


# Instructions:
-Platform needed: Your computer as localhost or your personal server. The server type varies, so this instruction willl focus on localhost using VS Code and Python.</br>
</br>
-Steps to set up and use this generator on your computer: </br>
1. Create a folder on your own computer. </br>
2. Download the five files and move them into your new created folder. </br>
3. Open the folder by dragging it into VS Code. </br>
4. Select "index.html" and open the terminal in VS Code. </br>
5. Use this command in the terminal (make sure you've installed python) and press enter: python -m http.server 8000  .</br>
6. Open a browser using this link: http://localhost:8000/  .</br>
7. Now, on your browser, you should be able to see the interface of the generator. Refresh the webpage to try different colors, words, sentences, and inspirations. If you love a specific combination, you can click the upper-right "Print Receipt of Ideas" to save a pdf version of the combination. </br>
8. If you want to stop the localhost, go back to VS Code terminal and press Ctrl+C to kill the process.</br>
<br>
-Steps to personalize your own database (the first way, through the interface): </br>
1. Make sure you've successfully run the code following the "Steps to set up and use this generator" and see the colored interface on your browser.
2. See the part "Add an Entry". Follow the tips displayed to fill in the parts you want to add. Please follow the format of the displayed color/words/sentence for best visual representation.
3. After you type in the parts you want to add, click "Download Updated Data For Substitution". A new data.json would be downloaded automatically.
4. Kill the process. Open the folder where the generator lies. Substitute this new downloaded version into the folder and delete the old one, and restart the localhost. </br>
</br>
-Steps to peronalize your own database (the second way, directly change data.json): </br>
1. Make sure the generator is not running on your localhost/server. Kill the process if it is running. </br>
2. Go to data.json, open it with VS Code or Notepad. </br>
3. Write your own implemented information following the format of the existing information. </br>
4. Remember to save data.json's new version. </br>
5. Run the generator again, and you can expect to see your personalized words appear on the screen. </br>
</br>

# Goals for the next version of the generator:
1. Set a more beautiful version of the "printed receipt".
2. Make the database easier to implement.
