# Personalized_Bake_Maker
Personalized Bake Maker Web  

Setup & Run Project

Install NodeJs ( Ignore If Already Installed)
1. Visit the official Node.js website ---> https://nodejs.org/en/download/
2. Download the Node.js installer 
3. Run the installer.
4. Follow the prompts in the installer.

Setup Backend
1.Open Project Folder In VS Code
2. Open Integrated Terminal
- Right Click on ‘backend’ > Select “Open In Integrated Terminal”
3. “npm install” and press Enter and Wait for Installation to be completed
(requires Internet)
4.Setup Cloudinary for file storage.
- Create account and login to: https://cloudinary.com/
- Copy and paste the Cloud Name, API Key, And Secret Key in the
backend / .env file:
5. Setup The MongoDB
- Visit website ----->  https://www.mongodb.com/cloud/atlas 
-  After that Sign Up on the website.
- Click on New Project Option
- After Creating Project go to Database Section & Build a database
-  Select M0(For Free) & Your Region & Create Database
- Setup Username & Password & Create User
- Click on Finish & Close
- Whitelist IP 0.0.0.0 & Click on Add Entry
-  Click on Connect
- Select Compass Option
- And Copy the Connection String
- And Paste It in the backend / .env file and replace the <password> with
the password you set previously & save changes.
6. Setup Stripe
- Create a stripe account ------> https://stripe.com/en-th
- After creating account get the Stripe Secret Key from dashboard
- Paste the Secret Key in backend / .env file and save file

Setup Frontend and Admin
1. Open Project Folder In VS Code
2. Right Click on ‘frontend’ folder > Select “Open In Integrated Terminal”
3. “npm install” and press Enter and Wait for Installation to be completed
(requires Internet)

 Run Project
- Run Backend use “npm run server” command in Integrated Terminal
- Run  Frontend and Admin  use “npm run dev” command in Integrated Terminal
