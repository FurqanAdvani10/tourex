import React from 'react';
import { Card, Row, Col, Typography, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { blogData } from './data';

const { Title, Paragraph } = Typography;

const Blogs = () => {
  return (
    <div style={{ padding: '30px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        Latest Travel Blogs
      </Title>

      <Row gutter={[24, 24]}>
        {blogData.map((blog, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{ height: '100%' }}
              cover={
                <img
                  alt={blog.title}
                  src={blog.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              }
              actions={[
                <Link to={`/blog/${blog.slug}`} key="read-more">Read More</Link>
              ]}
            >
              <Card.Meta
                title={blog.title}
                description={
                  <Paragraph ellipsis={{ rows: 3 }}>
                    {blog.summary}
                  </Paragraph>
                }
              />
              <div style={{ marginTop: '10px' }}>
                {blog.keywords.slice(0, 3).map((keyword, i) => (
                  <Tag color="blue" key={i}>{keyword}</Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
