# Drawerr
[![npm version](https://badge.fury.io/js/drawerr.svg)](https://badge.fury.io/js/drawerr)

Drawerr is a mobile menu component that's simple and has no dependency on jQuery.
It easily slides in with css animations(good for performance) when the hamburger button is clicked.
Drawerr supports multi-level navigation so it's not hiding menu items( good for UX ).

![image](https://user-images.githubusercontent.com/6705443/28580060-b993c7c8-715e-11e7-81de-e5235a979e55.png)

## Features
- Multilevel support
- Slide direction( left or right )
- CSS animations( good for performance )
- Hamburger included
- Vanilla js, no jQuery
- Overridable sass variables
- [browser support](http://browserl.ist/defaults)

## Browser support
 Tested on real browsers with [BrowserStack](https://www.browserstack.com).

### IE11 and below
Use a service like [polyfill.io](https://polyfill.io/v2/docs/examples) 
 
![logo-01 1](https://user-images.githubusercontent.com/6705443/28997491-4a171510-7a16-11e7-88b7-d34f4477a1b3.png)

## Install via yarn & npm
`npm install drawerr --save`

`yarn add drawerr`

## Usage

### Required files

```
drawerr/
└── dist/
    └── drawerr.css
    └── drawerr.js
```

Include CSS file inside the <head>
```html
<link rel="stylesheet" href="dist/drawerr.css">
```

Include JS file before the closing body tag
```html
<script src="dist/drawerr.js"></script>
```

## Hamburger HTML
```
<button class="toggleDrawer">
    <span></span>
    <span></span>
    <span></span>
</button>
```

## Drawerr HTML
Basic html is as follows:
``` html
<nav id="drawer" class="drawerr--init">
    <ul>
        <li>
            <span class="section-title active">Gezus</span>
            <ul>
                <li>
                    <a class="active" href="#">rebum</a>
                    <ul>
                        <li><a class="active" href="#">case novum</a></li>
                        <li><a href="#">iisque</a></li>
                    </ul>
                </li>
                <li><a href="#">vix purto</a></li>
            </ul>
        </li>

        <li>
            <span class="section-title">quodsi</span>
            <ul>
                <li><a href="#">nullam</a></li>
                <li>
                    <a href="#">corpora philosophia</a>
                    <ul>
                        <li>
                            <a href="#">mallan</a>
                        </li>
                        <li>
                            <a href="#">rebum</a>
                            <ul>
                                <li><a href="#">case novum</a></li>
                                <li>
                                    <a href="#">iqtario</a>
                                    <ul>
                                        <li><a href="#">faari</a></li>
                                        <li><a href="#">elissee</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
<nav>
```

## Drawerr JS
```js

new drawerr().init(args);

```

### Options

#### drawerr <string>
Drawerr container selector

default: #drawerr

#### toggleBtn <string>
Btn selector which contains the hamburger

default: .toggleBtn

#### btnText <string>
Menu text under the hamburger

default MENU

#### navbar <string>
Navbar selector to determine the offset height for drawerr to slide in

default: header

#### slideFrom <string>
Direction where drawerr comes from

default:left

### Events

Drawerr fires off events when it opens (`drawerr-open`) or closes (`drawerr-close`) the menu.

```js
document.addEventListener('drawerr-open', function(){
    // do something
});
```

NOTE: the active class should be rendered or set via backend

## Plans for the future
- Testing with browserstack
- More options based on the needs
