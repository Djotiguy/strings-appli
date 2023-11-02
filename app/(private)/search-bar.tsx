import { ChangeEvent, useState, useRef, useEffect, use } from "react";
import * as _ from "lodash";
import User from "../components/user";

export default function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState(true);
  const debouncedSearch = _.debounce(fetcherSearchResults, 500);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // @ts-ignore
      if(ref.current && !ref.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  async function fetcherSearchResults(searchText: string) {
    const res = await fetch("/api/search?q=" + searchText);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
      setVisible(true);
      setSearchResults(json.data);
    } else {
      setSearchResults([]);
      setVisible(false);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("Change", e.target.value);
    debouncedSearch(e.target.value);
  }
  function hanleClick (e: React.MouseEvent<HTMLInputElement>) {
    setVisible(true);
  }
  return (
    <div className="flex flex-row max-w-md w-full justify-end relative">
      <input
        onChange={handleChange}
        onClick={hanleClick}
        type="text"
        className="p-2 rounded-lg bg-white text-black my-2 max-w-xs"
        placeholder="Search"
        ref={ref}
      />
     {visible && searchResults.length > 0 && (
      <ul className="flex flex-col bg-white text-black absolute p-2 rounded-lg top-14 w-full max-w-sm right-2">
        {searchResults.map((res: UserI) => {
          return (
            <li key={res.id} className="my-3" onClick={() => setVisible(false)}>
              <User user={res} />
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
}
