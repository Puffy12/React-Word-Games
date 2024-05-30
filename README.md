# React Word Games

Experience an engaging collection of word games and puzzles with our web app built using React, Vite, and TypeScript. Navigate seamlessly through Hangman, Wordle, and Crossword puzzles, or learn more about the app in the About section. Get ready to challenge your mind and have fun with words!

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
  - [React + TypeScript + Vite](#react--typescript--vite)
  - [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

React Word Games is a web application that brings together a variety of word games, including Hangman, Wordle, and Crossword puzzles. Built with React, Vite, and TypeScript, this app provides a seamless and enjoyable user experience.

## Setup

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}

Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`

Optionally add `plugin:@typescript-eslint/stylistic-type-checked`

Install `eslint-plugin-react` and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Usage

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:3000` to start playing the games

## Contributing

We welcome contributions to the React Word Games project! Here’s how you can contribute:

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes and commit them with clear and concise messages
4. Push your changes to your fork
5. Open a pull request to the main repository

Please make sure your code follows the project's coding standards and passes all tests before submitting your pull request.

Thank you for contributing!
