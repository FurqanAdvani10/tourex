import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Tag, Button, Image, Layout, Card, Space, Divider, Row, Col, Spin } from 'antd';
import { blogData } from '../../components/blogs/data';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const BlogDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const blog = blogData.find(b => b.slug === slug);

    if (!blog) {
        return (
            <Content style={{ padding: '40px', textAlign: 'center' }}>
                <Title level={3}>Blog not found</Title>
                <Button type="primary" onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
                    Go Back
                </Button>
            </Content>
        );
    }

    return (
        <Content style={{ padding: '50px 20px', maxWidth: '1200px', margin: 'auto' }}>
            <Card
                bordered={false}
                style={{
                    background: '#f9f9f9',
                    borderRadius: '10px',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                }}
                hoverable
            >
                <Button
                    type="link"
                    onClick={() => navigate(-1)}
                    style={{
                        marginBottom: '20px',
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#1890ff',
                    }}
                >
                    ← Back to Blogs
                </Button>

                <Image
                    src={blog.image}
                    alt={blog.title}
                    style={{
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        marginBottom: '24px',
                    }}
                    width="100%"
                    preview
                />

                <Title level={1} style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
                    {blog.title}
                </Title>

                <Paragraph
                    style={{
                        fontSize: '18px',
                        color: '#777',
                        lineHeight: '1.8',
                        fontWeight: '400',
                        marginBottom: '16px',
                        textAlign: 'justify',
                    }}
                >
                    {blog.summary}
                </Paragraph>

                <div style={{ marginBottom: '24px' }}>
                    {blog.keywords.map((keyword, index) => (
                        <Tag color="blue" key={index} style={{ marginBottom: '10px' }}>
                            {keyword}
                        </Tag>
                    ))}
                </div>

                <Divider />

                <Paragraph
                    style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: '#333',
                        fontWeight: '400',
                        marginBottom: '20px',
                        textAlign: 'justify',
                    }}
                >
                    {blog.content}
                </Paragraph>

                <Divider />

                <Space style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            borderRadius: '12px',
                            padding: '15px 25px',
                            fontSize: '16px',
                            fontWeight: '600',
                            backgroundColor: '#bb9166',
                            transition: 'background-color 0.3s ease',
                        }}
                        onClick={() => navigate(-1)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#9c7a47'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#bb9166'}
                    >
                        Explore More Blogs
                    </Button>
                </Space>
            </Card>
        </Content>
    );
};

export default BlogDetails;
