<br />
<h1 align="center">
  Hyper Female Super Heroes
  <span style="display: block; margin-bottom: 10px;"></span>
</h1>

<h4 align="center">
  Hyper female super heroes are here to save your boring terminal.
</h4>

<div align="center">
  <a href="https://github.com/tedweiss/hyper-female-super-heroes">
    <img src="src/images/screen-shots/screen-shot-x-23-intro.png" alt="Screen Shot Hyper X-23" width="80%">
  </a>
</div>
<br />

## Install

### Using the plugin manager - `hyper`

Firstly, ensure you have [Hyper](https://github.com/zeit/hyper/releases) installed in your system.

Once done with that, it's time to install the `hyper-female-super-heroes` theme.

```bash
# fire up a terminal and type
$ hyper i hyper-female-super-heroes
```

### Manually through `.hyper.js`

Add `hyper-female-super-heroes` to the plugins list in your `~/.hyper.js` config file and restart Hyper.

```js
plugins: ['hyper-female-super-heroes']
```

## Usage

Once you have installed `hyper-female-super-heroes`, it's time to set your favorite theme.

Go to your `~/.hyper.js` and add the `FemaleSuperHeroes` settings object below the `colors` object, and define there your theme of choice.

Here is a quick example, where we choose the `x-23` theme displaying the avatar.

```js
config: {
  //...
  colors: {
    //...
  },
  FemaleSuperHeroes: {
    character: 'x-23', // Define your favorite female super hero or villian
    avatar: true  // Activate your theme's background avatar
  },
  //...
}
```
