[//]: # (# Create-react-app with AWS Amplify Auth )

[//]: # ()
[//]: # (This auth starter implements withAuthenticator HOC to provide a basic authentication flow for signing up signing in users as well as protected client side routing using AWS Amplify. Auth features: User sign up, User sign in, Multi-factor Authentication, User sign-out.)

[//]: # ()
[//]: # ([View Demo]&#40;https://master.d2ka7y7551sk8n.amplifyapp.com/&#41;)

[//]: # ()
[//]: # (![Amplify Auth]&#40;src/images/auth.gif&#41;)

[//]: # ()
[//]: # (## Deploy with the AWS Amplify Console)

[//]: # ()
[//]: # (The AWS Amplify Console provides hosting for fullstack serverless web apps. [Learn more]&#40;https://console.amplify.aws&#41;. Deploy this app to your AWS account with a single click:)

[//]: # ()
[//]: # ([![amplifybutton]&#40;https://oneclick.amplifyapp.com/button.svg&#41;]&#40;https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/aws-samples/create-react-app-auth-amplify&#41;)

[//]: # ()
[//]: # (The Amplify Console will fork this repo in your GitHub account, and then build and deploy your backend and frontend in a single workflow. Your app will be available at `https://master.appid.amplifyapp.com`.)

[//]: # ()
[//]: # (## Run locally with the Amplify CLI)

[//]: # ()
[//]: # (1. Clone the repo that was just forked in your account)

[//]: # ()
[//]: # (  ```)

[//]: # (  git clone git@github.com:<username>/create-react-app-auth-amplify.git)

[//]: # ()
[//]: # (  cd create-react-app-auth-amplify && npm install)

[//]: # (  ```)

[//]: # ()
[//]: # (2. Import the backend environment deployed by the Amplify Console to your repo &#40;the `amplify/team-provider.json` file contains information on all backend environments in your AWS account&#41;. The GIF below shows how you to copy the `amplify env import` command from the Amplify Console. )

[//]: # ()
[//]: # (<img src="https://github.com/aws-samples/create-react-app-auth-amplify/blob/master/src/images/import-backend.gif" width="800"/>)

[//]: # ()
[//]: # (3. Paste this command into your terminal at the root of your repo. You should see the `amplify/team-provider.json` updated with a backend named `amplify`.)

[//]: # ()
[//]: # (  ```)

[//]: # (  amplify pull)

[//]: # (  ```)

[//]: # ()
[//]: # (![img]&#40;src/images/amplify-pull.mov&#41;)

[//]: # ()
[//]: # (4. Run locally)

[//]: # ()
[//]: # (  ```)

[//]: # (  npm start)

[//]: # (  ```)

[//]: # ()
[//]: # (Checkout Nader Dabit's [Complete Guide to User Authentication]&#40;https://dev.to/dabit3/the-complete-guide-to-user-authentication-with-the-amplify-framework-2inh&#41;.)
