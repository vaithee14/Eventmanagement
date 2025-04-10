import { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch Categories (GET)
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4050/user/get/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategory();
  }, []);

  // Add Category (POST)
  const addCategory = async (categoryName) => {
    try {
      const response = await axios.post(
        "http://localhost:4050/user/add/categories",
        { name: categoryName },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCategories((prevCategories) => [...prevCategories, response.data]);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <section className="main" id="categories">
      <article className="background-color">
        <div className="events-intro">
          <h3>OUR EVENTS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="categories">
          <h2 className="categories-heading">CATEGORIES</h2>
          <hr className="heading-line" />
          <ul className="categories-list select-none ...">
            {categories.map((data) => (
              <li
                key={data._id}
                className="category-btn"
                onClick={() => navigate(`/category/${data.name.toLowerCase()}`)}
              >
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
