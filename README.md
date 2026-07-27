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
// Create multiple elements at once
N('body').createMany({
  tag: { div: 5 },
  className: 'card',
  style: 'padding:10px; margin:5px;',
  text: 'Card item'
});

// Load a custom font dynamically
N().fontFace('Poppins', 'https://fonts.gstatic.com/s/poppins/v20/poppins.woff2');

// Build a styled image with alt text, id and class in one call
N('body').img('logo.png', 'Site Logo', 'logo-img', 'rounded-logo', 'width:120px;');

// Smooth hover-move animation on any element
N('#card1').hoverMove('20px', '0.25s');

// Play a sound effect on hover
N('#card1').hoverSound('click-sound.mp3');

// Show an animated error/notification panel
N('#errorBox').showErrorPanel(3000, 'block');

// Generate custom icons with size and color in one line
N.icons({
  home: ['24px', '#4CAF50'],
  settings: ['20px', '#333']
});

// Style text in separate clean calls
N('#title').setFont('Poppins', '28px', 'bold');
N('#title').setColor('#222');
N('#title').centerT();
```

## Why NurJS?

- No dependencies — pure vanilla JavaScript
- Simple, readable syntax
- Small footprint, easy to drop into any project
- Great for quickly prototyping UI without a full framework

## License

Free to use and modify.
