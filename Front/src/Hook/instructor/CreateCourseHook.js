import React from 'react'
import image from '../../imgs/2.jpeg'
const CreateCourseHook = () => {
  
    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)

    //to change name state
    const onChangeName = (event) => {
        event.persist();
        setName(event.target.value)
    }

    //when image change save it 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }
    const res = useSelector(state => state.allCategory.category)

    //save data in database
    const handelSubmit = async (event) => {
        event.preventDefault();
        if (name === "" || selectedFile === null) {
            console.log('من فضلك اكمل البيانات')
            notify('من فضلك اكمل البيانات', "warn");
            return;
        }
        const formData = new FormData();
        formData.append("name", name)
        formData.append("image", selectedFile)
        setLoading(true)
        setIsPress(true)
        await dispatch(createCategory(formData))
        setLoading(false)
    }

    useEffect(() => {
        if (loading === false) {
            setImg(avatar)
            setName("")
            setSelectedFile(null)
            console.log('تم الانتهاء')
            setLoading(true)
            setTimeout(() => setIsPress(false), 1000)

            if (res.status === 201) {
                notify('تمت عملية الاضافة بنجاح', "success");
            }
            else {
                notify('هناك مشكله فى عملية الاضافة', "error");
            }
        }
    }, [loading])

    /* 
    
const formData = new FormData();
formData.append('title', 'loklisvr');
formData.append('description', 'Sit odio nisi et sed.');
formData.append('price', '12');
formData.append('category_id', '20');
formData.append('sub_category_id', '5');
formData.append('thumbnail', thumbnailFile);

const config = {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data'
  }
};

dispatch(createCourse(formData, config));
    
    */
    return [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName]
};


export default CreateCourseHook
