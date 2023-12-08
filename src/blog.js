import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  padding: 120px 0;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Header = () => <div>Header</div>
const Footer = () => <div>Footer</div>

function Blog() {
  return (
    <>
      <Header />
      <Content>
        <H2>Content</H2>
        <Routes>
          <Route path='/' element={<div>Main Page</div>} />
          <Route path='/login' element={<div>Login Page</div>} />
          <Route path='/register' element={<div>Register Page</div>} />
          <Route path='/users' element={<div>Users Page</div>} />
          <Route path='/post' element={<div>New Article Page</div>} />
          <Route path='/post/:postId' element={<div>Article Page</div>} />
          <Route path='*' element={<div>Error Page</div>} />
        </Routes>
      </Content>
      <Footer />
    </>

  );
}

export default Blog;
