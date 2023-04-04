import axios from "axios"

export async function calShabu(p: number) {
  let discount = 0;
  const priceShabu = await axios.get('/price')
  if (p % 4 === 0) {
    discount = p / 4
  }
  const result = ((p - discount) * priceShabu.data.data.price) + ((p - discount) * (priceShabu.data.data.price * (priceShabu.data.data.serviceChange / 100)))
  return result
}
