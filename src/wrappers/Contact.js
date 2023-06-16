import styled from "styled-components";
const Wrapper = styled.div`
  .download-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #f2f2f2;
    color: #333;
    text-decoration: none;
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
