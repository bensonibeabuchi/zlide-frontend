import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

function SearchParamsHandler({ setFormData }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const emailFromQuery = searchParams.get('email');
    if (emailFromQuery) {
      setFormData((prevData) => ({ ...prevData, email: emailFromQuery }));
    }
  }, [searchParams, setFormData]);

  return null;
}

export default SearchParamsHandler;
