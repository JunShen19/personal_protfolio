import styled from "styled-components";

const Wrapper = styled.nav`
  /* background: var(--white); */
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-links-show {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--textColor);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 1px;
    position: relative;
    text-decoration: none;
  }
  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    height: 1px;
    background-color: var(--textColor);
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out; /* 底線的動畫過渡效果 */
  }
  .nav-img {
    border-radius: 50%;
    position: absolute;
    top: -25px;
    left: -25px;
    margin: auto;
    height: 100px;
    width: 100px;
    /* max-width: 100%; */
    box-shadow: var(--shadow-1);
  }
  .nav-link:hover::after {
    transform: scaleX(1); /* 在 :hover 狀態下顯示底線 */
  }
  .menu-btn {
    display: none;
    background-color: transparent;
    border: none;
    padding: 0;
    font-size: 1.5rem;
    color: var(--textColor);
  }
  .active {
    margin-top: 10px;
  }
  .dark-toggle {
    background: transparent;
    border-color: transparent;
    width: 5rem;
    height: 2rem;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .toggle-icon {
    font-size: 1.5rem;
    color: var(--textColor);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }

  @media (max-width: 768px) {
    .nav-link {
      text-align: center;
    }
    .nav-links {
      display: none;
    }
    .nav-links-show {
      /* display: block; */
      columns: 1;
      -webkit-columns: 1;
      -moz-columns: 1;
    }
    .btn-container {
      display: flex;
      justify-content: flex-end;
    }
    .menu-btn {
      display: inline-block;
      margin-right: 1rem;
    }
  }
`;

export default Wrapper;
