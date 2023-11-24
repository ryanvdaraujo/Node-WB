import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      <form className="example" action="action_page.php" style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <input type="text" placeholder="pesquise aqui" name="search" style={{ marginRight: "5px" }} />
        <button type="submit" style={{ marginLeft: "5px" }}><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
}

export default SearchBar;
