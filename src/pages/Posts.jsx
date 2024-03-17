import React from "react";
import { useState } from "react";

import PostList from "../components/PostList";
import "../styles/App.css";
import PostForm2 from "../components/PostForm2";
import { usePosts } from "../hooks/usePost";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Greeting from "../components/Greeting";
import { useRef } from "react";
import { useEffect } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFatching";
import { getPageCount } from "../utils.js/pages";
import Pagination from "../components/UI/Pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  console.log(setLimit);

  const [fetchPosts] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  // console.log(totalPages);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [limit, page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <Greeting name=", my friend!" />

      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create user
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm2 create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      <div style={{ margin: "20px", fontSize: "20px", color: "red" }}>
        <h3> Best to change selection from the first page state!</h3>
      </div>
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="quantity of elements per page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 15, name: "15" },
          { value: -1, name: "Show all posts" },
        ]}
      />
      {/* {postError && <h1>The mistake happened ${postError}</h1>} */}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="List of items  1"
      />
      <div ref={lastElement} style={{ height: 20, background: "red" }}></div>
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}
export default Posts;
