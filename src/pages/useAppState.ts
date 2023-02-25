import { useCallback, useEffect, useRef, useState } from "react";

import { loadStudents } from '@/redux/student/studentReducer';
import { useTypedDispatch, useTypedSelector } from "@/redux/hooks";

export const useAppState = () => {
  const dispatch = useTypedDispatch();

  const [page, setPage] = useState(1);

  const loader = useRef(null);

  const { students, loading } = useTypedSelector(
    (state) => state.studentReducer
  );

  useEffect(() => {
    dispatch(loadStudents({ search: "", page }));
  }, [dispatch, page]);


  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevValue) => prevValue + 1);
    }
  }, [])

  useEffect(() => {
    const option: IntersectionObserverInit = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  return { students, loading, loader };
}