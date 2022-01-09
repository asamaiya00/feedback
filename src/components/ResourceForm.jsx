import { useEffect, useState } from "react";

const ResourceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    url: "",
  });
  useEffect(() => {
    clearForm();
  }, []);

  const clearForm = () => {
    setFormData({
      name: "",
      description: "",
      type: "",
      url: "",
    });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div id="form-container">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleFormChange}
          style={{ width: "30%" }}
        />
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="Video"
              onChange={handleFormChange}
            />
            Video
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Blog"
              onChange={handleFormChange}
            />
            Blog
          </label>
        </div>
      </div>
      <textarea
        id="description"
        type="text"
        name="description"
        placeholder="Description"
        rows="3"
        cols="100"
        value={formData.description}
        onChange={handleFormChange}
      />
      <input
        id="url"
        type="text"
        name="url"
        placeholder="Enter Resource Url"
        value={formData.url}
        onChange={handleFormChange}
      />
      <button id="submit" type="submit">Add Resource</button>
    </form>
  );
};

export default ResourceForm;