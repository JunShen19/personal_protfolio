import styled from "styled-components";

const Wrapper = styled.div`
  .projects {
    padding: 1.5rem;
  }
  .projects-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .project {
    background: var(--white);
    display: inline-block;
    width: 100%; /* 填滿父元素的寬度 */
    height: 30rem; /* 填滿父元素的高度 */
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    overflow: hidden;
    display: flex;
    border-top-right-radius: 5rem;
    flex-direction: column;
    align-items: flex-start;
  }
  .project:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-4);
  }

  .project .img {
    width: 400px;
    object-fit: contain; /* 將圖片縮放以適應父元素，但不超出 */
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }

  .project h4 {
    text-align: center;
    margin-left: 1rem;
    color: var(--textColor);
  }

  @media (min-width: 768px) {
    .projects-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .projects-center {
      /* grid-template-columns: 1fr 1fr 1fr; */
    }
  }
`;

export default Wrapper;
