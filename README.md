# transform-svg-to-native [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
> A tool to convert SVGs to react-native-svg compatible SVGs.

## Installation
npm i transform-svg-to-native

## Usage
It takes a basic svg and returns a code that can be used with [react-native-svg](https://github.com/react-native-community/react-native-svg)

```js
import { convertSvgString } from "transform-svg-to-native"

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <path fill="#1FC055" fill-rule="evenodd" d="M12.648 11.583c.382-.202.778-.253 1.018-.107.363.223 3.417 2.255 3.674 2.435.258.18.382.694.028 1.199-.352.504-1.977 2.497-2.665 2.477-.69-.023-3.557-.086-8.962-5.493C.336 6.688.272 3.821.251 3.132.227 2.442 2.22.817 2.725.465c.505-.352 1.02-.22 1.2.028.203.282 2.211 3.326 2.432 3.675.152.239.096.636-.106 1.019-.2.383-1.037 1.845-1.037 1.845s.59 1.007 2.585 3.002c1.997 1.996 3.003 2.587 3.003 2.587s1.462-.837 1.845-1.038z"/>
</svg>
`

convertSvgString(svg, (code) => {
  console.log(code)
})
```

will generate code like

```jsx
import { Svg, Path } from "react-native-svg";

export default function() {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18">
      <Path
        fill="#1FC055"
        fillRule="evenodd"
        d="M12.648 11.583c.382-.202.778-.253 1.018-.107.363.223 3.417 2.255 3.674 2.435.258.18.382.694.028 1.199-.352.504-1.977 2.497-2.665 2.477-.69-.023-3.557-.086-8.962-5.493C.336 6.688.272 3.821.251 3.132.227 2.442 2.22.817 2.725.465c.505-.352 1.02-.22 1.2.028a294.69 294.69 0 0 1 2.432 3.675c.152.239.096.636-.106 1.019-.2.383-1.037 1.845-1.037 1.845s.59 1.007 2.585 3.002c1.997 1.996 3.003 2.587 3.003 2.587s1.462-.837 1.845-1.038z"
      />
    </Svg>
  );
}
```

## CLI

```
svg-to-native 'svgs/*.svg'
```

Commands
```
  --out   Specify the output folder.Defaults: `out`
  --ext   Specify the extension of output javascript files. 
```

## License

MIT © [Ritesh Kumar](riteshkr.com)


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/5389035?v=4" width="100px;"/><br /><sub>Ritesh Kumar</sub>](http://riteshkr.com)<br />[💻](https://github.com/Ritesh Kumar/transform-svg-to-native/commits?author=ritz078 "Code") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!