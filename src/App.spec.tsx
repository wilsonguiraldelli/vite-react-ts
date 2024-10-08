import { render, screen } from '@testing-library/react'
import App from './App'

test('Test <App />', () => {
  render(<App />)
  
  expect(screen.getByRole('heading')).toBeDefined()
  expect(screen.getByRole('heading').textContent).toEqual('Hello world!')
})