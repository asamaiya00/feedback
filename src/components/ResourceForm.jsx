import { useContext, useEffect, useState } from "react";
import ResourceContext from "../ResourceContext";

const ResourceForm = () => {
  const { addResource } = useContext(ResourceContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "Video",
    url: "",
  });
  useEffect(() => {
    clearForm();
  }, []);

  const clearForm = () => {
    setFormData({
      name: "",
      description: "",
      type: "Video",
      url: "",
    });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addResource(formData);
    clearForm();
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
          minLength={4}
          maxLength={32}
          required
        />
        <div>
          <label>
            <input
              checked={formData.type === "Video"}
              type="radio"
              name="type"
              value="Video"
              onChange={handleFormChange}
            />
            Video
          </label>
          <label>
            <input
              checked={formData.type === "Blog"}
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
        type="url"
        name="url"
        required
        placeholder="Enter Resource Url"
        value={formData.url}
        onChange={handleFormChange}
      />
      <button id="submit" type="submit">
        Add Resource
      </button>
    </form>
  );
};

export default ResourceForm;
