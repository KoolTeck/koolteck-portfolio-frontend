import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import blogs from "../data/BlogsData";
import { MainLayout, InnerLayout } from "../styles/Layouts";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <div className="image">
                  <img src={blog.Img} alt="" />
                </div>
                <div className="title">
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 3rem;
    @media screen and (max-width: 850px) {
      padding: 2rem;
      .title a {
        font-size: 0.9rem;
      }
    }
    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
      .image {
        width: 100%;
        overflow: hidden;
        padding-bottom: 0.5rem;
        aspect-ratio: inherit;
        img {
          width: 100%;

          object-fit: cover;
          transition: all 0.4s ease-in-out;
          &:hover {
            cursor: pointer;
            transform: rotate(-2deg) scale(1.1);
            @media screen and (max-width: 550px) {
              transform: rotate(0deg) scale(1.1);
            }
          }
        }
      }
    }

    .title {
      a {
        font-size: 1.2rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        @media screen and (max-width: 850px) {
          font-size: 1.1rem;
        }
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage;
