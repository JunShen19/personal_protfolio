import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  .hero {
    display: flex;
    justify-content: space-between;
  }
  .hero-link {
    color: var(--textColor);
    transition: var(--transition);
  }
  .container {
    margin-top: 2rem;
    margin-right: 2rem;
    width: 150px;
    height: 150px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }
  img {
    position: absolute;
    top: -25px;
    left: -25px;
    margin: auto;
    height: 200px;
    width: 200px;
    /* max-width: 100%; */
    box-shadow: var(--shadow-1);
  }
`;

export default Wrapper;
