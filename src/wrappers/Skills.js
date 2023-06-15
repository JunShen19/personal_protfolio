import styled from "styled-components";

const Wrapper = styled.div`
  .skills-list {
    display: flex;
    flex-wrap: wrap; /* 控制換行行為 */
    gap: 1rem;
  }
  .skill {
    list-style-type: none; /* 取消項目符號 */
    border: 1px solid #ccc;
    border-radius: 10px; /* 圓滑的角度 */
    padding: 10px; /* 可選的內部填充 */
  }
`;

export default Wrapper;
