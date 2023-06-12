import { useQuery } from '@tanstack/react-query'

const useSelectedclasses = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            if (email) {
                const response = await fetch(`http://localhost:5000/selectedclasses/${email}`);
                return response.json();
            }
        },
    })
    return [data, refetch];
};

export default useSelectedclasses;