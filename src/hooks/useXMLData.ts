import useSWR from "swr";
import { API_RETRY_TIMEOUT_MS } from "../api/config";

export type XmlFetcher = <T>() => Promise<T>;

interface UseXmlDataOptions {
  key: string;
  xmlFetcher: XmlFetcher;
}

export function useXmlData<T>({ key, xmlFetcher }: UseXmlDataOptions) {
  const { data, error, isLoading, mutate } = useSWR<T>(key, xmlFetcher, {
    errorRetryInterval: API_RETRY_TIMEOUT_MS,
    errorRetryCount: API_RETRY_TIMEOUT_MS,
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
