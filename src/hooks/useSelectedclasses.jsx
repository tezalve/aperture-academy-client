import { useQuery } from '@tanstack/react-query'

const useSelectedclasses = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            if (email) {
                const response = await fetch(`https://aperture-academy-server.vercel.app/selectedclasses/${email}`);
                return response.json();
            }
        },
    })
    return [data, refetch];
};

export default useSelectedclasses;