# Clicked Co

Clicked Co Website!!

## Getting Started

### Running The Website

```shell
yarn # Install dependencies
yarn dev # start the development server
```

Open up [localhost:3000](http://localhost:3000)

### Running Storybook

```shell
yarn # Install dependencies
yarn storybook
```

Open up [localhost:6006](http://localhost:6006)

## Tools

Some tools that enhance the dev experience

### Storybook

Add a `<component>.stories.tsx` file to create a Story for each component. With stories, components can be developed and tested individually, which is incredbly powerful for writing modular code.

Read more about Storybook [here](http://storybook.js.org/).

### Plop Generator

```shell
yarn generate # Quickly generate new pages or components
```

### Route Aliases

We've created aliases for common routes, for example, access the `src/Components` directory with `@Components` from anywhere in the app.

These are configured in `.babelrc` and `tsconfig.json`.

### Environment Variables

To run this project, add a .env.local file to the root directory. Inside the file, define the following variables:

- DB_URI (MongoDB database URI)
- JWT_SECRET (secret key to verify JWT from client)
- saltRounds (how intensely we encrypt the password)
