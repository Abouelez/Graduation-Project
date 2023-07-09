import React, { useState } from 'react'
import "../../css/instructorcss/CreateCourse.css"
import { Link } from 'react-router-dom';
import image from '../../imgs/image.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBell, faEnvelope, faInstitution, faMapMarker,faccVisa, faCcPaypal, faUser, faCreditCard, faLock, faPhone, faHeading, faAudioDescription, faMoneyBill, faIdCard, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons'
import { FaAudioDescription, FaBell, FaHeading, FaMobile, FaMoneyBill, FaIdCard } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { createCourse } from '../../redux/actions/courseAction';
const CreateCourse = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category_id", categoryId);
    formData.append("sub_category_id", subCategoryId);
    formData.append("thumbnail", thumbnailFile);
    console.log(formData);
    const accessToken = localStorage.getItem("token");

fetch("http://localhost:8000/api/courses", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${accessToken}`
  },
  body: formData,
})
      .then((response) => response.json())
      .then((data) => {
        // Handle successful response
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  const handleFileChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [subCategoryId, setSubCategoryId] = useState("");
    const [thumbnailFile, setThumbnailFile] = useState(null);

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
          <div className='input_group'>
            <div className='input_box'>
              <input className='name' type="text" placeholder="Category ID" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
              <FaIdCard className='icons' />
            </div>
          </div>
          <div className='input_group'>
            <div className='input_box'>
              <input className='name' type="text" placeholder="Sub-Category ID" value={subCategoryId} onChange={(e) => setSubCategoryId(e.target.value)} />
              <FaMobile className='icons' />
            </div>
          </div>
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

