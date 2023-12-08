import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import styled from 'styled-components';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

const Content = styled.div`
  padding: 120px 0;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Footer = () => <div>Footer</div>

function Blog() {
  return (
    <AppColumn>
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
    </AppColumn>

  );
}

export default Blog;
