import { useQuery } from '@tanstack/react-query'

const useInsclasses = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`https://aperture-academy-server.vercel.app/insclasses/${email}`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useInsclasses;