import { api } from '@/lib/axios'

export async function FlagUnique(name: string) {
  const response = await api.get(`name/${name}`)
  console.log(response.data)
  return response.data
}
