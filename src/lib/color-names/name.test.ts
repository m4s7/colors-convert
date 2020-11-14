import { name } from '../../index'

////////////////////////////////////////////////////////
// name
////////////////////////////////////////////////////////

test(`name`, () => {
  expect(name('#000000')).toStrictEqual('Black')
  expect(name('#ffffff')).toStrictEqual('White')

  expect(() => name('#')).toThrowError()
})
