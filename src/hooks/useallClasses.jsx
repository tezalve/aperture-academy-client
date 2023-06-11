import { useQuery } from '@tanstack/react-query'

const useallClasses = () => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/classes`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useallClasses;