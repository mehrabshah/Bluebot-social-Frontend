// CreatePostModal.js

import React, { useState } from 'react';
import './popup.css'
const CreatePostModal = ({ onClose }) => {
  const [postContent, setPostContent] = useState('');

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleCreatePost = () => {
    // Add logic to submit the post content to the server
    // You can use an API call here

    // Close the modal after creating the post
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Create New Post</h3>
        <textarea
          value={postContent}
          onChange={handlePostContentChange}
          placeholder="Enter your post content..."
        />
        <button onClick={handleCreatePost}>Create Post</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CreatePostModal;
