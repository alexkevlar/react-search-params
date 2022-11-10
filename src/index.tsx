import { useSearchParams } from 'react-router-dom';

type Search = Record<string, string>

type SetSearch = (nextInit: Search, overwrite?: boolean, navigateOptions?: NavigateOptions) => void

interface UseFiltersReturn {
  search: URLSearchParams,
  setSearch: SetSearch
}

type NavigateOptions = { replace?: boolean; state?: any; };

export const useReactSearchParams = (): UseFiltersReturn => {

  const [search, setQuerySearch] = useSearchParams();

  const setSearch: SetSearch = (nextInit, overwrite, navigateOptions) => {

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