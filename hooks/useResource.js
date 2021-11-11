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
      // console.log('🚀 ~ response.data line 22: ', response.data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  async function createResource(info) {
    try {
      console.log('line 28');
      const response = await axios.post(apiUrl, info, config());
      console.log('🚀 ~ response line 29: ', response);

      mutate(); // mutate causes complete collection to be refetched
    } catch (error) {
      handleError(error);
    }
  }

  async function deleteResource(id) {
    try {
      const url = apiUrl + id;
      await axios.delete(url, config());
      mutate(); // mutate causes complete collection to be refetched
    } catch (error) {
      handleError(error);
    }
  }

  async function updateResource(resource) {
    // STRETCH
    // Add ability for user to update an existing resource
  }

  // helper function to handle getting Authorization headers EXACTLY right
  function config() {
    // console.log('we got to line 55');
    return {
      headers: {
        Authorization: 'Bearer ' + tokens.access,
      },
    };
  }

  function handleError(error) {
    console.error(error);
    // currently just log out on error
    // but a common error will be short lived token expiring
    // STRETCH: refresh the access token when it has expired
    logout();
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
