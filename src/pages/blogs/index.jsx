import React from 'react'
import PageWrapper from '../../components/Wrappers/PageWrapper'
import Blogs from '../../components/blogs/Blogs'

const BlogsPage = () => {
    return (
        <div>
            <PageWrapper
                title={'Blogs'}
                className={'blogs-banner'}
            />
            <Blogs />
        </div>
    )
}

export default BlogsPage
