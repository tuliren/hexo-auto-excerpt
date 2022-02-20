# `hexo-plain-excerpt`

[![npm version](https://badge.fury.io/js/hexo-plain-excerpt.svg)](https://badge.fury.io/js/hexo-plain-excerpt)

[NexT](https://theme-next.js.org/) removes auto excerpt in [`v7.6.0`](https://github.com/theme-next/hexo-theme-next/releases/tag/v7.6.0). None of the existing plugins is as good as the original one. This repo aims to bring back the original NexT excerpt. It is modified from [`ashisherc/hexo-auto-excerpt`](https://github.com/ashisherc/hexo-auto-excerpt).

## Install

```sh
npm install --save hexo-plain-excerpt
```

## Option
`excerpt_length`: 350 (number of characters, default to 150).

## Changes
Here are the differences of this fork from the [original repo](https://github.com/ashisherc/hexo-auto-excerpt).
- Update `html-to-text` to the latest version.
- Replace the default item prefix (`*`) with a space.
- Do nothing if excerpt already exists.
- Add `...` at the end.

## License
The original repo is published under the MIT [license](LICENSE).
