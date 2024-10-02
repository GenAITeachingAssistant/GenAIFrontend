import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import restClient from "restClient";
import Sidebar from "components/Sidebar/Sidebar";
import ChatWindow from "components/ChatWindow/ChatWindow";
import CreateConversationModel from "components/Models/CreateConversationModel";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [conversation, setConversation] = useState("");
  const [conversations, setConversations] = useState([]);
  const [studentResponse, setStudentResponse] = useState("");
  const [newConversation, setNewConversation] = useState("");
  const [selectedConversation, setSelectedConversation] = useState("");
  const [isLoadingConversation, setIsLoadingConversation] = useState(false);
  const [isLoadingConversations, setIsLoadingConversations] = useState(false);
  const [isLoadingNewConversation, setIsLoadingNewConversation] =
    useState(false);

  const getConversations = async () => {
    try {
      setIsLoadingConversations(true);

      const { data } = await restClient({
        method: "GET",
        url: "/conversation",
      });

      if (data.success) setConversations(data.conversations);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoadingConversations(false);
    }
  };

  const getConversation = async (id) => {
    try {
      setIsLoadingConversation(true);

      const { data } = await restClient({
        method: "GET",
        url: `/conversation/${id}`,
      });

      if (data.success) setConversation(data.conversation);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoadingConversation(false);
    }
  };

  const createConversation = async () => {
    try {
      setIsLoadingNewConversation(true);

      const { data } = await restClient({
        method: "POST",
        url: "/conversation",
        data: {
          name: newConversation,
        },
      });

      if (data.success) {
        toast.success("Conversation created successfully");

        setOpenModal(false);
        setNewConversation("");
        getConversations();
        setSelectedConversation(data.conversation);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoadingNewConversation(false);
    }
  };

  useEffect(() => {
    getConversations();
  }, []);

  useEffect(() => {
    if (selectedConversation) getConversation(selectedConversation._id);
  }, [selectedConversation]);

  return (
    <div className="flex">
      <Sidebar
        {...{
          setOpenModal,
          selectedConversation,
          setSelectedConversation,
          conversations,
          isLoadingConversations,
        }}
      />
      <ChatWindow
        {...{
          selectedConversation,
          studentResponse,
          setStudentResponse,
          conversation,
          isLoadingConversation,
        }}
      />
      <CreateConversationModel
        {...{
          openModal,
          setOpenModal,
          newConversation,
          setNewConversation,
          createConversation,
          isLoadingNewConversation,
        }}
      />
    </div>
  );
}

export default Dashboard;
