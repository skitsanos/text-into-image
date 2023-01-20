# Morse Code Image Encoder

This example demonstrates how to encode text into an image using morse code. The text is first converted to morse code, and then each morse character is represented as a set of dots and dashes, where the dot is represented as 0 and the dash as 1. This allows us to have a binary, 8-bit, value for each morse character representation.

## How it works

1. The text is passed to the `morseEncode` function, which converts the text to morse code using the `morseCode` object.
2. The resulting morse code is then converted to a hex string representation, where each morse character is represented as two hex digits (e.g. '.' = '2e', '-' = '2d', ' ' = '20').
3. An image is loaded into a canvas, and the image data is retrieved using the `getImageData` method of the canvas 2D context.
4. The hex string is split into an array of hex values, and the alpha channel of the image data is updated with these values using a for loop.
5. The encoded image data is then drawn on a new canvas element using the `putImageData` method of the canvas 2D context.

## Usage

1. Import the `morseEncode` and `stringToHexArray` functions, and the `morseCode` object from the `encoder.js` file.
2. Call the `morseEncode` function with the text you want to encode.
3. Convert the morse code to hex string representation using `stringToHexArray` function.
4. Create an instance of an image, set the `src` to the image you want to encode, and attach an `onload` event listener to the image.
5. In the `onload` event, retrieve the image data using the `getImageData` method of the canvas 2D context, and update the alpha channel of the image data with the hex values.
6. Draw the encoded image data on a new canvas element using the `putImageData` method of the canvas 2D context.

## Note

Please note that the image must be loaded from the same domain as the script, otherwise the browser will throw a security error.