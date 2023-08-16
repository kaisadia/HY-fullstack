import { createSlice } from '@reduxjs/toolkit';
import blogService from '../services/blogs';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    addBlog(state, action) {
      state.push(action.payload);
    },
    likeBlog(state, action) {
      const blogToChange = action.payload;
      const updatedBlog = {
        ...blogToChange,
        likes: blogToChange.likes + 1,
      };
      return state.map((blog) =>
        blog.id === blogToChange.id ? updatedBlog : blog
      );
    },
    deleteBlog(state, action) {
      const blogToDelete = action.payload;
      const blogs = state.filter((blog) => blog.id !== blogToDelete.id);
      return blogs;
    },
  },
});

export const { setBlogs, addBlog, likeBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const createBlogpost = (content) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(content);
    dispatch(addBlog(newBlog));
  };
};

export const updateLikes = (id, blog) => {
  return async (dispatch) => {
    const updatedBlog = await blogService.update(id, blog);
    dispatch(likeBlog(updatedBlog));
  };
};

export const removeBlog = (id) => {
  return async (dispatch) => {
    const blog = await blogService.remove(id);
    dispatch(deleteBlog(blog));
  };
};
