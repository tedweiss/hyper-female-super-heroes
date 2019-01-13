# To develop in this repo
## ***You need to have first installed the Hyper terminal application*** 

Clone repo into  `~/.hyper_plugins/local`  

Run `npm i`  

To have it display, open the `~/.hyper.js` file, edit the `plugins` and `localPlugins`  

* `plugins` needs to be an empty array  
* `localPLugins` needs to have this plugin 

``` javascript
{
  /* other cofig optios */
  plugins: [],
  localPlugins: ['hyper-female-super-heroes'],
  /* more config options */
}
```

It allows you to load the project without and avoid it being `npm install`ed  

To build a dev, run `npm run dev`

*It outputs it as `index.js`*

To see changes, Quit Hyper and start a new terminal

### Need more info, look at the [hyperjs](https://hyper.is/)  site