import styled from "styled-components";

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(12, 44, 60);
  z-index: 1000;
  align-items: center;
  justify-content: left;
  display: flex;
  transition: var(--transition);
  color: white;
  transform: translateX(100%);

  &.show-sidebar {
    transform: translateX(0);
  }

  .slidebar-solutions-btn {
    padding: 20px;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    color: orange;
    cursor: pointer;
    text-align: left;
  }

  .sidebar-links {
    display: flex;
    flex-direction: column;
  }

  .sidebar-solutions {
    height: 15vh;
    width: 300px;
    background-color: aliceblue;
    color: aqua;
    display: flex;
    flex-direction: column;
    line-height: 30px;
    justify-content: center;
    display: none;
  }
  .sidebar-solutions-show {
    display: block;
    transition: all;
  }
  .sidebar-links a {
    font-size: 2rem;
    color: rgba(255, 145, 76);
    text-transform: capitalize;
    transition: var(--transition);
    letter-spacing: var(--spacing);
    margin-bottom: 1.5rem;
    line-height: 3rem;
  }

  .sidebar-links a:hover {
    color: white;
  }

  .social-icons {
    display: grid;
    margin-top: 3rem;
    width: 100%;
    max-width: 20rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .social-icons a {
    font-size: 1.5rem;
    color: var(--clr-grey-10);
    transition: var(--transition);
  }

  .social-icons a:hover {
    color: rgb(255, 145, 76);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.3rem;
    background: transparent;
    border: none;
    color: red;
    cursor: pointer;
  }

  .close-btn:hover {
    color: white;
  }
`;

export default Wrapper;
