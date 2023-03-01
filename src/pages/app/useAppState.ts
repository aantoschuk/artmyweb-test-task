import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import { useTypedDispatch, useTypedSelector } from "@/redux/hooks";
import { loadStudents, searchStudents } from '@/redux/student/studentReducer';

const option: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}

export const useAppState = () => {
  const dispatch = useTypedDispatch();

  const [page, setPage] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [query, setQuery] = useState('');

  const loader = useRef(null);

  const { students, loading } = useTypedSelector(
    (state) => state.studentReducer
  );

  /**
   * fires on every intersection change
   * and check it, if we reach bottom of the table 
   */
  useEffect(() => {
    if (isIntersecting) {
      dispatch(loadStudents({ search: query, page }));
    }
  }, [isIntersecting])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value)
    //  check if string has atleast 2 characters
    if (value.length > 2) {
      // reset page to fetch from the start
      setPage(1);
      dispatch(searchStudents({ search: value, page: 1 }));
      // if input cleared
    } else if (value.length === 0) {
      setPage(1);
      dispatch(searchStudents({ search: '', page: 1 }));
    }

  };

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    // update instersection state
    setIsIntersecting(target.isIntersecting);
    /**
     * We reach bottom of the page when data is fetching and there is no array
     * so we made initial fetch, from the first page
     *  */
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, [])


  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  return { students, loading, loader, handleSearch, query };
}