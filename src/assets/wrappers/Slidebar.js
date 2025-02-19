import styled from "styled-components";

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(109, 72, 72);
  z-index: 1000;
  display: grid;
  place-items: center;
  transition: var(--transition);

  /* Initially hidden */
  transform: translateX(-100%);

  &.show-sidebar {
    transform: translateX(0);
  }

  .sidebar-links {
    text-align: center;
  }

  .sidebar-links a {
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
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
    color: white;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
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
