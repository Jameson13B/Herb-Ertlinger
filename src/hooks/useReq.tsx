import { useEffect, useState } from "react"

type useReqProps = {
  url: string
  method?: string
  headers?: Record<string, string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thenCB: (data: Record<any, any>) => void
  catchCB: (error: Error) => void
}

export const useReq = (props: useReqProps) => {
  const { url, method = "GET", headers, thenCB, catchCB } = props
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
        })
        const data = await response.json()
        thenCB(data)
      } catch (error) {
        catchCB(error as unknown as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, method, headers, thenCB, catchCB])

  return isLoading
}
