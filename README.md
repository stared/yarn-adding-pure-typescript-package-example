# yarn-adding-pure-typescript-package-example

Use as an example https://github.com/stared/quantum-tensors I just created.

I've found one way to go:
```
yarn add stared/quantum-tensors#master
```

I changed a few things in build paths, and now it is fine.

Then, each time you want to upgrade quantum-tensors
```
yarn upgrade quantum-tensors && cd node_modules/quantum-tensors && tsc --outDir ./build
```
It downloads new source files, builds JS and type definition files. So it both works AND gives correct VCS support for types.

In fact, you can add a script in `package.json`

```
  "scripts": {
    "start": "tsc --outDir ./build && node ./build/main.js",
    "upgrade-quantum-tensors": "yarn upgrade quantum-tensors && cd node_modules/quantum-tensors && tsc --outDir ./build"
  }
  ```
