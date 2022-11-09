import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

interface UseFiltersReturn {
  search: URLSearchParams,
  setSearch: SetSearch
}

type NavigateOptions = { replace?: boolean; state?: any; };

export type SetSearch = (nextInit: URLSearchParamsInit, overwrite?: boolean, navigateOptions?: NavigateOptions) => void

export const useReactSearchParams = (): UseFiltersReturn => {

  const [search, setQuerySearch] = useSearchParams();

  const setSearch: SetSearch = (nextInit: any, overwrite?: boolean, navigateOptions?: NavigateOptions) => {

    if (overwrite) {
      search.forEach((_value, key) => {
        search.delete(key);
      });
    }

    Object.keys(nextInit).forEach((k) => {
      if (nextInit[k]) search.set(k, nextInit[k]); else search.delete(k);
    });

    setQuerySearch(search, navigateOptions);

  };

  return { search, setSearch };

};

