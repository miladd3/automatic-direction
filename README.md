# automatic-direction
A lightweight Javascript Library for automatic direction change of input between rtl and ltr based on character count.

HTML5 dir="auto" attribution is good, but it just depends on first character in most browsers ,that is not functional on most arabic and persian web applications.

[Demo link](https://miladd3.github.io/automatic-direction/)

## How to use


Include automatic-direction.js in bottom of the page before body close tag

```html
<script src="js/automatic-direction.js"></script>
```

add .dir-auto class to input that you want to automate direction on it

```html
<textarea class="dir-auto" ></textarea>
```
## JQuery
This Library is **Plain Javascript** with no need of JQuery.
but if you need jquery version of this library for any reason there is a **jquery.automatic-direction.js** with the same functionality with jquery selectors and functions.

## Licence and Credits

The code and the documentation are released under the MIT License

By [Milad Dehghan](https://github.com/miladd3)

Thanks to @sallar for converting it to Vanilla js