# Getting Started

Welcome to the zx documentation! This is a tool for writing better scripts.

## Installation

```bash
npm install zx
```

## Usage

Create a script file with `.mjs` extension:

```javascript
#!/usr/bin/env zx

await $`cat package.json | grep name`

let branch = await $`git branch --show-current`
await $`dep deploy --branch=${branch}`
```
