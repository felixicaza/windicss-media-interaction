# Windi CSS Plugin for Interaction Media Features

[![GitHub Actions](https://github.com/Felix-Icaza/windicss-media-interaction/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/Felix-Icaza/windicss-media-interaction/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/Felix-Icaza/windicss-media-interaction/badge.svg?branch=main)](https://coveralls.io/github/Felix-Icaza/windicss-media-interaction?branch=main)
[![Version](https://img.shields.io/github/package-json/v/Felix-Icaza/windicss-media-interaction)](https://github.com/Felix-Icaza/windicss-media-interaction/releases)

This plugin adds support for [`Interaction Media Features`](https://www.w3.org/TR/mediaqueries-4/#mf-interaction) for any property in your Windi CSS project and an enhanced `group-hover`.

## Installation

Using NPM:

```bash
npm i -D windicss-media-interaction
```

Using PNPM:

```bash
pnpm add -D windicss-media-interaction
```

Add the plugin to your Windi config file.

```js
plugins: [require('windicss-media-interaction')]
```

## Usage

Available variants:

| Variant name           | CSS Media Query                |
| ---------------------- | ------------------------------ |
| `any-pointer-coarse`   | `@media (any-pointer: coarse)` |
| `any-pointer-fine`     | `@media (any-pointer: fine)`   |
| `any-pointer-none`     | `@media (any-pointer: none)`   |
| `pointer-coarse`       | `@media (pointer: coarse)`     |
| `pointer-fine`         | `@media (pointer: fine)`       |
| `pointer-none`         | `@media (pointer: none)`       |
| `any-hover`            | `@media (any-hover: hover)`    |
| `any-hover-none`       | `@media (any-hover: none)`     |
| `hover-hover`          | `@media (hover: hover)`        |
| `hover-none`           | `@media (hover: none)`         |
| `group-any-coarse`     | `@media (any-pointer: coarse)` |
| `group-any-fine`       | `@media (any-pointer: fine)`   |
| `group-any-pnone`      | `@media (any-pointer: none)`   |
| `group-pointer-coarse` | `@media (pointer: coarse)`     |
| `group-pointer-fine`   | `@media (pointer: fine)`       |
| `group-pointer-none`   | `@media (pointer: none)`       |
| `group-any-hover`      | `@media (any-hover: hover)`    |
| `group-any-hnone`      | `@media (any-hover: none)`     |
| `group-hover-hover`    | `@media (hover: hover)`        |
| `group-hover-none`     | `@media (hover: none)`         |

### Adding variants:

You can add or extend many variants as you need to any property on your Windi config.

```js
theme: {
  variants: {
    extend: {
      backgroundColor: [
        'any-pointer-coarse',
        'any-pointer-fine',
        'any-pointer-none',
        'pointer-coarse',
        'pointer-fine',
        'pointer-none',
        'any-hover',
        'any-hover-none',
        'hover-hover',
        'hover-none',
        'group-any-coarse',
        'group-any-fine',
        'group-any-pnone',
        'group-pointer-coarse',
        'group-pointer-fine',
        'group-pointer-none',
        'group-any-hover',
        'group-any-hnone',
        'group-hover-hover',
        'group-hover-none'
      ],
      textColor: [
        'any-hover',
        'hover-hover',
        'group-any-coarse',
        'group-pointer-fine',
        'group-any-hover',
        'group-hover-hover'
      ]
    }
  }
}
```

Or overriding default variants:

```js
theme: {
  variants: {
    // Only these variants will be generated for backgroundColor
    backgroundColor: [
      'any-pointer-coarse',
      'any-pointer-fine',
      'any-pointer-none',
      'pointer-coarse',
      'pointer-fine',
      'pointer-none',
      'any-hover',
      'any-hover-none',
      'hover-hover',
      'hover-none',
      'group-any-coarse',
      'group-any-fine',
      'group-any-pnone',
      'group-pointer-coarse',
      'group-pointer-fine',
      'group-pointer-none',
      'group-any-hover',
      'group-any-hnone',
      'group-hover-hover',
      'group-hover-none'
    ],
    // Only these variants will be generated for textColor
    textColor: [
      'any-hover',
      'hover-hover',
      'group-any-coarse',
      'group-pointer-fine',
      'group-any-hover',
      'group-hover-hover'
    ]
  }
}
```

### Examples

**Basic:**

```html
<p class="text-blue-900 hover-hover:text-blue-500">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</p>
```

Generated CSS

```css
.text-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgba(30, 58, 138, var(--tw-bg-opacity));
}

@media (hover: hover) {
  .hover-hover\:text-blue-500:hover {
    --tw-text-opacity: 1;
    color: rgba(59, 130, 246, var(--tw-text-opacity));
  }
}
```

**With parent state:**

```html
<section class="group">
  <p class="group-hover-hover:text-blue-500">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </p>
</section>
```

Generated CSS

```css
@media (hover: hover) {
  .group:hover .group-hover-hover\:text-blue-500 {
    --tw-text-opacit: 1;
    color: rgba(59, 130, 246, var(--tw-text-opacity));
  }
}
```

## Resources

If you are looking to use other variants see [@windicss/plugin-interaction-variants](https://github.com/windicss/plugins/tree/main/packages/interaction-variants).

## Knowledge

Awesome article about **Interaction Media Features**:

[https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/](https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/)

Documentation about each media feature:

- [media any-hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover)
- [media any-pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer)
- [media hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover)
- [media pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer)

## Credits

This plugin was inspired by [tailwindcss-touch](https://github.com/steadfast-collective/tailwindcss-touch).

## License

This project use the MIT License. Please see [License File](LICENSE) for more information.
