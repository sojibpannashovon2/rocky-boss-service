import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { authContext } from '../components/provider/AuthProvider';
const useCart = () => {
    const { user } = useContext(authContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:1000/carts?email=${user?.email}`)
            return res.json();
        }


    })
    return [cart, refetch]
}
export default useCart;