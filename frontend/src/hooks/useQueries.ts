import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }
      await actor.submitContactForm(name, email, message);
    },
    onSuccess: () => {
      // Invalidate submissions query if we add a view for them later
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<Array<[string, string, string]>>({
    queryKey: ['submissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
