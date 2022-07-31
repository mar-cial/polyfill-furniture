import { render, screen } from '@testing-library/react'
import Banner from '../../components/Banner' // @components/Banner import doesnt work for some reason
import '@testing-library/jest-dom'

describe('Banner', () => {
  it('renders the homepage banner', () => {
    render(<Banner />)

    const heading = screen.getByRole('heading', {
      name: /Polyfill Furniture/i,
    })

    expect(heading).toBeInTheDocument()
  })
})