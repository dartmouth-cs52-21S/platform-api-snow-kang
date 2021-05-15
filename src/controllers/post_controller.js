import Post from '../models/post_model';

export const createPost = async (postFields) => {
  const post = new Post();
  post.title = postFields.title;
  post.tags = postFields.tags;
  post.content = postFields.content;
  post.coverUrl = postFields.coverUrl;
  post.comments = postFields.comments;
  post.parents = postFields.parents;
  try {
    const savedPost = await post.save();
    return savedPost;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
};

export const getPosts = async () => {
  try {
    const allPosts = await Post.find({}, 'title tags coverUrl').sort({ createdAt: -1 });
    return allPosts;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }
};

export const getPost = async (id) => {
  try {
    const singlePost = await Post.findById(id);
    return singlePost;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
};

export const deletePost = async (id) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  } catch (error) {
    throw new Error(`delete post error: ${error}`);
  }
};

export const updatePost = async (id, postFields) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, postFields, { new: true });
    return updatedPost;
  } catch (error) {
    throw new Error(`update post error: ${error}`);
  }
};
