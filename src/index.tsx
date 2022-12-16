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

      const qs = search.toString();
      const params = qs.split("&");

      let paramsObj: Record<string, string> = {};

      params.forEach((value) => {
        const param = value.split("=");
        paramsObj[param[0]] = param[1];
      })

      Object.keys(paramsObj).forEach((key) => {
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