import { render } from '@redwoodjs/testing'

import AfterAuthPage from './AfterAuthPage'

describe('AfterAuthPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AfterAuthPage />)
    }).not.toThrow()
  })
})
