import { useQuery } from '@tanstack/react-query'

import { flags } from '@/api/search-all-flags'

export function Home() {
  const { data: orders, isLoading: Loading } = useQuery({
    queryKey: ['orders'],
    queryFn: flags,
  })
  console.log(orders)

  return (
    <div>
      {Loading ? (
        <p>carregando...</p>
      ) : (
        orders.map((order) => (
          <>
            <img src={order?.flags.png} alt="" />
            <h1 key={order.name.common}>{order.name.common}</h1>
            <p>{order.area}</p>
          </>
        ))
      )}
    </div>
  )
}
