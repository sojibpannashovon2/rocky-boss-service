import { useQuery } from '@tanstack/react-query'
const useCart = email => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodoList,
    })
}
export default useCart;