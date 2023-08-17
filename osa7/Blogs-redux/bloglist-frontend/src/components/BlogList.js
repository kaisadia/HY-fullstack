import React from 'react';
import BlogPost from './BlogPost';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function BlogList({ login }) {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div>
      {blogs
        .filter((blog) => blog.user.username === login.username)
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <BlogPost key={blog.id} blog={blog} blogs={blogs} />
        ))}
    </div>
  );
}

export default BlogList;
