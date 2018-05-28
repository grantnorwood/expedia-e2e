# Exercise 1: Setup the example application

For our first exercise, we want to make sure we can run the subsequent exercises without problems.  This means ensuring we have a working app against which to test.

It was created using Facebook's [Create React App](https://github.com/facebook/create-react-app), so if you have any problems starting up, you can consult their [extensive documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

**Pro tip:** This is another good exercise you can do before you get to the workshop  😀

**Overview**

<!-- TOC -->

1. [Install app dependencies](#install-app-dependencies)
2. [Start the app](#start-the-app)

<!-- /TOC -->

---

## Success Criteria

- Our webserver should serve the example website (VeRBO)

## Instructions

### Install app dependencies

In each exercise, there is a `verbo` directory where we will run our app.

1. In your terminal, `cd` to the `verbo` directory.

```bash
cd verbo
```

2. Install the dependencies.

```bash
npm i
```

**Note:** `npm i` is a shorter alias for `npm install` _(two carpal tunnel surgeries and you'd want to type less, too.)_

### Start the app

```bash
npm start
```

_(**to-do:** explain special npm "run" commands)_

Open the app in your browser at [http://localhost:3000](http://localhost:3000). _You should now have a working web application to test against with the next exercises!_

![Verbo app running on localhost port 3000](https://content.screencast.com/users/gnorwood_homeaway/folders/Snagit/media/956c3a3f-5baf-428f-abd1-6ca2f6e2a345/2018-05-27_16-02-55.png)