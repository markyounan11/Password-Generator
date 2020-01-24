# Password-Generator

This application generates a random password from an array of characters and prints the password to the screen.

Users are prompted to select how long they'd like their password to be. The number they enter must be between 8 and 128. If a number is chosen outside of this range, the user will be alerted that they haven't met the criteria and will then be prompted to enter a different number.

After the user has entered a valid number for the length of their password, the user will then be prompted to select whether they'd like to include or exclude characters in their password from 3 different categories. The categories are numbers, lowercase letters, and uppercase letters.

Based on the user's input, the characters they've selected to include in the generated password are then pushed to a master array that contains the arrays of character categories they have chosen. From there, a function randomly chooses the correct number of characters that will make up the random password.

The generated password is then printed to the screen for the user to see. After the password has been printed, the user can then click the copy button on the screen which will trigger a function that will copy the generated password to the local clipboard. The user has the option to paste this copied password anywhere on their machine.