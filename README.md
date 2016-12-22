# automatic-direction
A lightweight jquery plugin for automatic direction change of input between rtl and ltr based on character count.

dir="auto" attribution is good, but it just depend on first character in most browsers ,that is not functional on most arabic and persian web applications.

[Demo link](https://miladd3.github.io/automatic-direction/)

## How to use


Include automatic-direction.js after including jquery in bottom of the page before body close tag

```html
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/automatic-direction.js"></script>
```

add .dir-auto class to input that you wanna automate direction on it

```html
<textarea class="dir-auto" ></textarea>
```
## License

The code and the documentation are released under the MIT License