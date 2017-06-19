# Drawerr
[![npm version](https://badge.fury.io/js/drawerr.svg)](https://badge.fury.io/js/drawerr)

Drawerr is a mobile menu component that's simple and has no dependency on jQuery.
It easily slides in with css animations(good for performance) when the hamburger button is clicked.
Drawerr supports multi-level navigation so it's not hiding menu items( good for UX ).

![image](https://user-images.githubusercontent.com/6705443/27301841-fe196dda-5534-11e7-8648-95017925248e.png)

## Features
- Multilevel support
- CSS animations( good for performance )
- Hamburger included
- Vanilla js, no jQuery
- Overridable sass variables
- [browser support](http://browserl.ist/defaults)

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
const args = {
    drawerr: '#drawer',
    toggleBtn: '.toggleDrawer',
    navbar: 'header'
};

new drawerr().init(args);

```

NOTE: the active class should be rendered or set via backend

## Plans for the future
- Integrate with WordPress
- Testing with browserstack
- More options based on the needs
