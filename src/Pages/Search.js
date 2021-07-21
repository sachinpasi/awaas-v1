import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Filter from "../Components/PagesComponents/Search/Filter";
import Result from "../Components/PagesComponents/Search/Result";
import SearchNav from "../Components/PagesComponents/Search/SearchNav";

const Search = () => {
  return (
    <Layout>
      <SearchNav />
      <main className="bg-textbg">
        <div className="customContainer flex justify-between items-start ">
          <Filter />
          <Result />
        </div>
      </main>
    </Layout>
  );
};

export default Search;