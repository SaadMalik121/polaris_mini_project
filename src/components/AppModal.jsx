import { Modal, Text } from "@shopify/polaris";
import { Children, useCallback } from "react";

function AppModal({
  isShowModal,
  setIsShowModal,
  title,
  action,
  ButtonText,
  isSecondaryButtonShow,
  children,
}) {
  const handleChange = useCallback(
    () => setIsShowModal(!isShowModal),
    [isShowModal, setIsShowModal]
  );

  return (
    <div>
      <Modal
        open={isShowModal}
        onClose={handleChange}
        title={title}
        primaryAction={{
          content: ButtonText,
          onAction: action,
        }}
        secondaryActions={
          isSecondaryButtonShow && [
            {
              content: "Cancel",
              onAction: handleChange,
            },
          ]
        }
      >
        <Modal.Section>{children}</Modal.Section>
      </Modal>
    </div>
  );
}
export default AppModal;
