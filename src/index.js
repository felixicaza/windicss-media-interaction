const plugin = require('windicss/plugin')

const mediaInteractionVariants = plugin(({ addVariant }) => {
  addVariant('any-pointer-coarse', ({ atRule }) =>
    atRule('@media (any-pointer: coarse)')
  )

  addVariant('any-pointer-fine', ({ atRule }) =>
    atRule('@media (any-pointer: fine)')
  )

  addVariant('any-pointer-none', ({ atRule }) =>
    atRule('@media (any-pointer: none)')
  )

  addVariant('pointer-coarse', ({ atRule }) =>
    atRule('@media (pointer: coarse)')
  )

  addVariant('pointer-fine', ({ atRule }) => atRule('@media (pointer: fine)'))

  addVariant('pointer-none', ({ atRule }) => atRule('@media (pointer: none)'))

  addVariant('any-hover', ({ atRule, modifySelectors }) =>
    Object.assign(
      atRule('@media (any-hover: hover)'),
      modifySelectors(({ className }) => `.${className}:hover`)
    )
  )

  addVariant('any-hover-none', ({ atRule }) =>
    atRule('@media (any-hover: none)')
  )

  addVariant('hover-hover', ({ atRule, modifySelectors }) =>
    Object.assign(
      atRule('@media (hover: hover)'),
      modifySelectors(({ className }) => `.${className}:hover`)
    )
  )

  addVariant('hover-none', ({ atRule }) => atRule('@media (hover: none)'))

  addVariant('group-any-hover', ({ atRule, parent }) =>
    Object.assign(atRule('@media (any-hover: hover)'), parent('.group:hover'))
  )

  addVariant('group-hover-hover', ({ atRule, parent }) =>
    Object.assign(atRule('@media (hover: hover)'), parent('.group:hover'))
  )
})

module.exports = mediaInteractionVariants
