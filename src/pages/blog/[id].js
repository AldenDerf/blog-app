import React, {
    useEffect,
    useState
} from 'react';
import {useRouter} from 'next/router';
import Navbar from '@/src/Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogDetails = () => {
    const [blogDetail, setBlogDetail] = useState([]);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem('myData'));
        const selectedBlog = blogs.find(blog => blog.id === parseInt(id));
        setBlogDetail(selectedBlog);
    }, [id]);

    if (!blogDetail) {
        return <div>Loading...</div>;
    }
    console.log(blogDetail);
    return (
        <div 
            className="container bg-light"
            style={{ marginTop: '5rem'}}
        >
            <Navbar />
            <div className='card mt-5'>
                {blogDetail.imageUrl && (<img 
                    src={blogDetail.imageUrl}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '300px',
                    }}
                    className='card-imt-top'
                    alt="Blog"
                />)}

                <div className='card-body'>
                    <h1 className='card-title'>{blogDetail.title}</h1>
                    
                    <p className='card-text'>
                        {blogDetail.description}
                    </p>

                    <p className='card-text'>
                        Author: {blogDetail.author}
                    </p>
                    <p className='card-text'>Date: {blogDetail.description}</p>
                </div>
            </div>
        </div>
    );
}
export default BlogDetails;