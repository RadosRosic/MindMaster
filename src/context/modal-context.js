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
    setTimeout(() => setIsModalShowingClass(true));
  };
  const hideModal = () => {
    setIsModalShowingClass(false);
    setTimeout(() => setIsModalShowing(false), 500);
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
