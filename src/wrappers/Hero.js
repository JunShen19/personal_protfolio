import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  .hero {
    display: flex;
    justify-content: space-between;
  }
  .hero-content {
    width: 100%;
  }
  .hero-title {
    display: flex;
    justify-content: space-between;
  }
  .hero-title h1 {
    font-size: 2rem;
    margin-top: 4rem;
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
  .hero-img {
    position: absolute;
    top: -25px;
    left: -150px;
    margin: auto;
    height: 200px;
    width: 400px;
    /* max-width: 100%; */
    box-shadow: var(--shadow-1);
  }

  @media (max-width: 768px) {
    .container {
      margin-top: 0rem;
      margin-right: 0rem;
      width: 150px;
      height: 150px;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
    }
    .hero-img {
      position: absolute;
      top: -25px;
      left: -150px;
      margin: auto;
      height: 200px;
      width: 400px;
      /* max-width: 100%; */
      box-shadow: var(--shadow-1);
    }
  }
`;

export default Wrapper;
