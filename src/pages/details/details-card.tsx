import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { FlagUnique } from '@/api/search-only-flags'
import { Skeleton } from '@/components/ui/skeleton'

export function DetailsCard() {
  const params = useParams()
  const { data: pais, isLoading: loading } = useQuery({
    queryKey: ['flagUnique'],
    queryFn: () => FlagUnique(String(params.param)),
  })
  return (
    <div>
      {loading ? (
        <div className="flex space-x-32 space-y-10">
          <Skeleton className="h-[525px] w-[850px]" />
          <div className="flex flex-col gap-14">
            <Skeleton className="h-5 w-[150px]" />
            <div className="flex gap-14">
              <div>
                <Skeleton className="mb-3 h-3 w-[150px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
                <Skeleton className="mb-3 h-3 w-[100px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
              </div>
              <div>
                <Skeleton className="mb-3 h-3 w-[100px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>deu bom</h1>
      )}
    </div>
  )
}
