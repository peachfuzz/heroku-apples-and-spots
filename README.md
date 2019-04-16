# Apples and Spots

This project allows users to search for songs using the Spotify API and doesn't require login.

Read the blog post: [Create React App with Express in
Production](https://daveceddia.com/create-react-app-express-production/)

## Prerequisites

You need to [sign up](https://heroku.com/) for a Heroku account if you don't already have one, and install the [Heroku toolbelt](https://devcenter.heroku.com/articles/heroku-cli). (On a Mac with Homebrew, just run `brew install heroku`).

## Deploy to Heroku

To deploy:

1. Clone this repo.
2. Inside the repo directory, run `heroku create` (requires [Heroku toolbelt](https://devcenter.heroku.com/articles/heroku-cli)).
3. Run `git push heroku master` to simultaneously deploy the frontend + backend to Heroku.

### Using NPM

Check out the `npm` branch if you're not using Yarn:

`git checkout npm`

And then once on that branch, the deploy command is:

`git push heroku npm:master`
