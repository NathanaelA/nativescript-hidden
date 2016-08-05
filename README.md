[![npm](https://img.shields.io/npm/v/nativescript-hidden.svg)](https://www.npmjs.com/package/nativescript-hidden)
[![npm](https://img.shields.io/npm/l/nativescript-hidden.svg)](https://www.npmjs.com/package/nativescript-hidden)
[![npm](https://img.shields.io/npm/dt/nativescript-hidden.svg?label=npm%20d%2fls)](https://www.npmjs.com/package/nativescript-hidden)

# Nativescript-Hidden
A NativeScript plugin to deal with Android hidden (mainly for API 23+/Android 6+)

**WARNING:** The code is NOT "officially" on NPM yet, the code/plugin is only available to Patreon supporters.
THIS is on NPM to be used as a Placeholder so that this plugin does have a home when it is finally released.

## License

The actual code is released under what I call the PATRON License, meaning you are free to include this in any type of program as long as you downloaded this when you were a current patron and/or sponsor, and got the file directly from my patreon post.  It will be released under a proper open source license at a time of my choosing (typically after a couple months of exclusive access by sponsor's).  At that point the product will be re-released under the MIT license. -- However for entities that need a support contract, changes, enhancements and/or a commercial license please contact me at [http://nativescript.tools](http://nativescript.tools).

I also do contract work; so if you have a module you want built for NativeScript (or any other software projects) feel free to contact me [nathan@master-technology.com](mailto://nathan@master-technology.com).

[![Donate](https://img.shields.io/badge/Donate-PayPal-brightgreen.svg?style=plastic)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=HN8DDMWVGBNQL&lc=US&item_name=Nathanael%20Anderson&item_number=nativescript%2dhidden&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3ax%3aNonHosted)
[![Patreon](https://img.shields.io/badge/Pledge-Patreon-brightgreen.svg?style=plastic)](https://www.patreon.com/NathanaelA)


## Sample Snapshot
![Sample](docs/nativescript-hidden.gif)

You can see me do something that requests hidden; then I deny the hidden.  The second time through you will see the **toast** about why I think I need these hidden; then I finally accept them.

## Requirements
This requires NativeScript 2.0 or greater

## Installation 

tns plugin add nativescript-hidden


## Usage

To activate globally in your app.js/app.ts file just add:

```js
require( "nativescript-hidden" );
```


## Why use this?
NativeScript has a built in visibility collapsed; but the collapsed causes the entire display to change.
This plugin adds a new **visibility: hidden** which allows the space to be used by the object; just hidden.



## Example
Example is using the [Nativescript-Dom](http://github.com/NathanaelA/NativeScript-dom) helpers.


Some CSS:
```
.hidden {
   visibility: hidden;
}
```

Some JS:
```
var item = getElementById('someElement');
item.classList.toggle('hidden',true);
```
