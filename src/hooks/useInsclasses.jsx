import { useQuery } from '@tanstack/react-query'

const useInsclasses = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/insclasses/${email}`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useInsclasses;