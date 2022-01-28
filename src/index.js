const plugin = require('windicss/plugin')

const mediaInteractionVariants = plugin(({ addVariant }) => {
  /**
   * Function to create variants more simply
   *
   * @param {string} variantName - The name of the variant
   * @param {string} addAtRule - The at rule to add the variant
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

  createVariantGroup('group-any-coarse', 'any-pointer: coarse')
  createVariantGroup('group-any-fine', 'any-pointer: fine')
  createVariantGroup('group-any-pnone', 'any-pointer: none')

  createVariantGroup('group-pointer-coarse', 'pointer: coarse')
  createVariantGroup('group-pointer-fine', 'pointer: fine')
  createVariantGroup('group-pointer-none', 'pointer: none')

  createVariantGroup('group-any-hover', 'any-hover: hover', true)
  createVariantGroup('group-any-hnone', 'any-hover: none')

  createVariantGroup('group-hover-hover', 'hover: hover', true)
  createVariantGroup('group-hover-none', 'hover: none')
})

module.exports = mediaInteractionVariants
