import React, { useState } from "react";

const ModalContext = React.createContext({
  isModalShowing: false,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalContextProvider = (props) => {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [isModalShowingClass, setIsModalShowingClass] = useState(false);

  const showModal = () => {
    setIsModalShowing(true);
    setTimeout(() => setIsModalShowingClass(true), 1);
  };
  const hideModal = () => {
    setIsModalShowingClass(false);
    setTimeout(() => setIsModalShowing(false), 200);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalShowing,
        isModalShowingClass,
        showModal,
        hideModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
