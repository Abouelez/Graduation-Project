import React, { useState } from 'react'
import "../../css/instructorcss/CreateCourse.css"
import { Link } from 'react-router-dom';
import image from '../../imgs/image.jpeg'
import { FaAudioDescription, FaBell, FaHeading, FaMobile, FaMoneyBill, FaIdCard } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse, createCourseInfo } from '../../redux/actions/courseAction';
import { useEffect } from 'react';
import { getAllCategory } from '../../redux/actions/categoryAction';

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  //console.log(categoryId);
  let formData = new FormData();
  const accessToken = localStorage.getItem("token");
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category_id", categoryId);
    formData.append("thumbnail", thumbnailFile);
    dispatch(createCourseInfo(formData, accessToken));

  }
  const handleFileChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };
  const dispatchCat = useDispatch();
  useEffect(() => {
    dispatchCat(getAllCategory());
  }, [dispatchCat]);
  const { category, loading } = useSelector(state => state.allCategories);
  console.log(category.data);
  const state = useSelector(state => state);

  console.log(state);
  return (
    <div>
      <div className='head-titlt'>
        <h4>Student</h4>
        <p>Switch to the student view here - get back to the courses you’re taking.</p>
        <FaBell className='i' />
        <div className='name'>AG</div>
      </div>
      <form className='F' onSubmit={handleSubmit}>
        <h1 className=' h T' style={{ textAlign: "center" }}>Create Your Course</h1>
        <div className='input_group'>
          <div className='input_box'>
            <input className='name' type="text" placeholder="Title" value={title}
              onChange={(e) => setTitle(e.target.value)} />
            <FaHeading className='icons' />
          </div>
        </div>
        <div className='input_group'>
          <div className='input_box'>
            <input className='name' type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <FaAudioDescription className='icons' />
          </div>
        </div>
        <div className='input_group'>
          <div className='input_box'>
            <input className='name' type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <FaMoneyBill className='icons' />
          </div>
        </div>
        <select
          name="cat"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="form-select mt-3 px-2"
          aria-label="Select category"
        >
          <option value="">Select a category</option>
          {category?.data &&
            category.data.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        <div>
          <label htmlFor="upload-photo">
            <img
              src={thumbnailFile ? URL.createObjectURL(thumbnailFile) : image}
              alt="Thumbnail"
              height="100px"
              width="120px"
              style={{ cursor: "pointer" }}
            />
          </label>
          <input
            type="file"
            name="photo"
            id="upload-photo"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button className=' button AK' type="submit">Create</button>
        </div>
      </form>
    </div>
  );

}

export default CreateCourse

