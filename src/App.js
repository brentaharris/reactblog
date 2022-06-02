import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, 
    {
      id: 2,
      title: "My second post",
      datetime: "July 02, 2021 12:17:45 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, 
    {
      id: 3,
      title: "My third post",
      datetime: "July 05, 2021 10:16:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 4,
      title: "My fourth post",
      datetime: "July 10, 2021 1:18:36 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
]);
  const [ search, setSearch ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);
  const [ postTitle, setPostTitle ] = useState('');
  const [ postBody, setPostBody ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {

  };


  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate.push('/');
  };

  return (
      <Routes>
        <Route path="/" element={<Layout 
          search={search} setSearch={setSearch}
        />}>
          <Route index element={<Home posts={posts} />} />
            <Route path="post">
              <Route index element={<NewPost 
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />} />
              <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
            </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  );
}

export default App;
