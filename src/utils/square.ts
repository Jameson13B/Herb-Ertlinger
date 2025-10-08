import { SquareClient } from "square"

export const client = new SquareClient({
  token: import.meta.env.VITE_SQUARE_ACCESS_TOKEN,
})

export const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID

export default client
