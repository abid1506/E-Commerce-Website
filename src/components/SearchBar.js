import React from "react";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SearchBar() {
  let navigate = useNavigate();

  const [searchItem, setSearchItem] = useState("");

  const sendText = () => {
    if (searchItem.length === 0) {
      return false;
    } else {
      navigate(`/search-result/${searchItem}`);
      return true;
    }
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <>
     
      <div>
        <form onClick={sendText}>
          <table cellSpacing="0" cellPadding="0">
            <thead>
              <tr>

                <td>
                  <input type="text" className="form-control" id="searchItem"
                    placeholder="Type to search" value={searchItem}  onChange={handleInputChange} />
                </td>

                <td>
                  <button className="btn p-2">
                    <FiSearch />
                  </button>
                </td>

              </tr>
            </thead>
          </table>
        </form>
      </div>
      
    </>
  );
}
