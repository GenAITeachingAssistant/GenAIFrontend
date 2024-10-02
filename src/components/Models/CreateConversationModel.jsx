import { Modal } from "@mui/material";

import Button from "components/Button/Button";

import styles from "components/Models/CreateConversationModel.module.css";

function CreateConversationModel({
  openModal,
  setOpenModal,
  newConversation,
  setNewConversation,
  createConversation,
  isLoadingNewConversation,
}) {
  return (
    <Modal
      open={openModal}
      onClose={() => {
        setOpenModal(false);
      }}
    >
      <div className={styles.modelContent}>
        <div className="flex flex-col gap-[1rem] w-[90%] h-full justify-between">
          <textarea
            type="text"
            required={true}
            placeholder="Enter the conversation title"
            value={newConversation}
            onChange={(e) => setNewConversation(e.target.value)}
            className="p-4 border border-gray-300 rounded-md h-full resize-none outline-none"
            autoFocus
          />
          <Button
            type="submit"
            onClick={createConversation}
            disabled={isLoadingNewConversation || !newConversation}
            text={"Create Conversation"}
            icon={false}
            isLoading={isLoadingNewConversation}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CreateConversationModel;
