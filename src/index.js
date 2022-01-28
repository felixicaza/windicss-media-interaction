const plugin = require('windicss/plugin')

const mediaInteractionVariants = plugin(({ addVariant }) => {
  /**
   * Function to create variants more simply
   *
   * @param {string} variantName - The name of the variant
   * @param {string} addAtRule - The at rule to add the variant
   * @param {boolean} hasModifySelectors - Check if the selector has modifier, false by default
   */
  function createVariant(variantName, addAtRule) {
    addVariant(variantName, ({ atRule }) => atRule(`@media (${addAtRule})`))
  }

  /**
   * Function to create variants with modify selctor
   *
   * @param {string} variantName - The name of the variant
   * @param {string} addAtRule - The at rule to add the variant
   */
  function createVariantModifySelector(variantName, addAtRule) {
    addVariant(variantName, ({ atRule, modifySelectors }) =>
      Object.assign(
        atRule(`@media (${addAtRule})`),
        modifySelectors(({ className }) => `.${className}:hover`)
      )
    )
  }

  /**
   * Function to create groups variants
   *
   * @param {string} variantName - The name of the variant
   * @param {string} addAtRule - The at rule to add the variant
   * @param {boolean} hasParentHover - Check if it's necessary to add the pseudo-class :hover to parent, false by default
   */
  function createVariantGroup(variantName, addAtRule, hasParentHover = false) {
    addVariant(variantName, ({ atRule, parent }) =>
      Object.assign(
        atRule(`@media (${addAtRule})`),
        parent(hasParentHover ? '.group:hover' : '.group')
      )
    )
  }

  createVariant('any-pointer-coarse', 'any-pointer: coarse')
  createVariant('any-pointer-fine', 'any-pointer: fine')
  createVariant('any-pointer-none', 'any-pointer: none')

  createVariant('pointer-coarse', 'pointer: coarse')
  createVariant('pointer-fine', 'pointer: fine')
  createVariant('pointer-none', 'pointer: none')

  createVariantModifySelector('any-hover', 'any-hover: hover')
  createVariant('any-hover-none', 'any-hover: none')

  createVariantModifySelector('hover-hover', 'hover: hover')
  createVariant('hover-none', 'hover: none')

  createVariantGroup('group-any-hover', 'any-hover: hover', true)
  createVariantGroup('group-hover-hover', 'hover: hover', true)
})

module.exports = mediaInteractionVariants
