import axios from 'axios';
import useSWR from 'swr';

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
import { useAuth } from '../contexts/auth';

export default function useResource() {
  const { tokens, logout } = useAuth();

  const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

  async function fetchResource(url) {
    if (!tokens) {
      return;
    }

    try {
      const response = await axios.get(url, config());
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  async function createResource(info) {
    try {
      const response = await axios.post(apiUrl, info, config());

      mutate();
    } catch (error) {
      handleError(error);
    }
  }

  async function deleteResource(id) {
    try {
      const url = apiUrl + id;
      await axios.delete(url, config());
      mutate();
    } catch (error) {
      handleError(error);
    }
  }

  async function updateResource(resource) {}

  function config() {
    return {
      headers: {
        Authorization: 'Bearer ' + tokens.access,
      },
    };
  }

  function handleError(error) {
    console.error("There's an error in userResource:", error);
  }

  return {
    resources: data,
    error,
    loading: tokens && !error && !data,
    createResource,
    deleteResource,
    updateResource,
  };
}
