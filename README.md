# NurJS (DOM Library)

NurJS is a lightweight JavaScript library that simplifies creating and manipulating HTML elements — a faster, cleaner alternative to writing raw DOM code.

## About the Project

Instead of writing long `document.createElement` chains, NurJS lets you build and style HTML elements with one clean, chainable syntax. It covers everything from basic elements to animations, events, and styling.

## Features

- 🔹 Quick element creation (`create`, `createMany`, `putIt`)
- 🔹 Headings, paragraphs, images, inputs, and more (`h1`–`h6`, `p`, `img`, `input`)
- 🔹 Style helpers (`bgColor`, `setColor`, `setFont`, `setMargin`, `setPadding`)
- 🔹 Event handling (`click`, `mouseover`, `keyPress`, `focus`, and more)
- 🔹 Built-in animations and effects (`hoverMove`, `hoverSound`, `showErrorPanel`)
- 🔹 Sound playback helper (`playSound`)
- 🔹 Icon generation helper (`N.icons`)

## Usage

Include the script in your HTML page:

```html
<script src="nurjs.js"></script>
```

Then use the `N()` function to select and build elements:

```javascript
// Create a heading inside the body
N('body').h1('Hello World!', 'main-title');

// Create a styled paragraph
N('body').p('Welcome to NurJS', 'intro-text');

// Add a hover animation to a button
N('#myButton').hoverMove('15px', '0.2s');

// Handle a click event
N('#myButton').click(() => {
  console.log('Button clicked!');
});
```

## Why NurJS?

- No dependencies — pure vanilla JavaScript
- Simple, readable syntax
- Small footprint, easy to drop into any project
- Great for quickly prototyping UI without a full framework

## License

Free to use and modify.
