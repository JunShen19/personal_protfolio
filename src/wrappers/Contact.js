import styled from "styled-components";
const Wrapper = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  .logo {
    width: 75px;
    height: 75px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }
  .img {
    position: absolute;
    margin: auto;
    height: 150px;
    width: 150px;
    left: -37.5px;
    top: -37.5px;
    /* max-width: 100%; */
    box-shadow: var(--shadow-1);
  }
  .download-button {
    display: block;
    padding: 10px 20px;
    width: 8rem;
    background-color: #f2f2f2;
    color: #333;
    text-decoration: none;
    margin-top: 1rem;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .download-button:hover {
    background-color: #ddd;
  }

  .download-button:active {
    background-color: #bbb;
  }
`;

export default Wrapper;
