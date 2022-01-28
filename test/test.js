import { Processor } from 'windicss/lib'
import mediaInteractionVariants from '../src/index'

describe('Touch variants', () => {
  it('generate media query variants', () => {
    const processor = new Processor({
      variants: {
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
          'hover-none'
        ],
        opacity: [
          'any-pointer-coarse',
          'any-pointer-fine',
          'any-pointer-none',
          'pointer-coarse',
          'pointer-fine',
          'pointer-none',
          'any-hover',
          'any-hover-none',
          'hover-hover',
          'hover-none'
        ]
      },
      plugins: [mediaInteractionVariants]
    })

    const css = `
      any-pointer-coarse:bg-blue-50
      any-pointer-fine:bg-blue-100
      any-pointer-none:bg-blue-200
      pointer-coarse:bg-blue-300
      pointer-fine:bg-blue-400
      pointer-none:bg-blue-500
      any-hover:bg-blue-600
      any-hover-none:bg-blue-700
      hover-hover:bg-blue-800
      hover-none:bg-blue-900

      any-pointer-coarse:opacity-0
      any-pointer-fine:opacity-10
      any-pointer-none:opacity-20
      pointer-coarse:opacity-30
      pointer-fine:opacity-40
      pointer-none:opacity-50
      any-hover:opacity-60
      any-hover-none:opacity-70
      hover-hover:opacity-80
      hover-none:opacity-90
    `

    const result = processor.interpret(css)

    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toMatchSnapshot('media query variants')
  })

  it('extending media query variants', () => {
    const processor = new Processor({
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
            'hover-none'
          ],
          opacity: [
            'any-pointer-coarse',
            'any-pointer-fine',
            'any-pointer-none',
            'pointer-coarse',
            'pointer-fine',
            'pointer-none',
            'any-hover',
            'any-hover-none',
            'hover-hover',
            'hover-none'
          ]
        }
      },
      plugins: [mediaInteractionVariants]
    })

    const css = `
      any-pointer-coarse:bg-blue-50
      any-pointer-fine:bg-blue-100
      any-pointer-none:bg-blue-200
      pointer-coarse:bg-blue-300
      pointer-fine:bg-blue-400
      pointer-none:bg-blue-500
      any-hover:bg-blue-600
      any-hover-none:bg-blue-700
      hover-hover:bg-blue-800
      hover-none:bg-blue-900

      any-pointer-coarse:opacity-0
      any-pointer-fine:opacity-10
      any-pointer-none:opacity-20
      pointer-coarse:opacity-30
      pointer-fine:opacity-40
      pointer-none:opacity-50
      any-hover:opacity-60
      any-hover-none:opacity-70
      hover-hover:opacity-80
      hover-none:opacity-90
    `

    const result = processor.interpret(css)

    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toMatchSnapshot('extend variants')
  })

  it('generate group media query variants correctly', () => {
    const processor = new Processor({
      variants: {
        textColor: ['group-any-hover', 'group-hover-hover']
      },
      plugins: [mediaInteractionVariants]
    })

    const css = `
      group-any-coarse:bg-blue-50
      group-any-fine:bg-blue-100
      group-any-pnone:bg-blue-200
      group-pointer-coarse:bg-blue-300
      group-pointer-fine:bg-blue-400
      group-pointer-none:bg-blue-500
      group-any-hover:text-blue-600
      group-any-hnone:text-blue-700
      group-hover-hover:text-blue-800
      group-hover-none:text-blue-900
    `

    const result = processor.interpret(css)

    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toMatchSnapshot(
      'group media query variants'
    )
  })
})
