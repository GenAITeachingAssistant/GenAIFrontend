import { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import restClient from "restClient";
import { capitalize } from "utils/capitalize";
import robot from "assets/animations/robot.gif";
import ChatInput from "components/Input/ChatInput";

function ChatWindow({
  conversation,
  setConversation,
  studentResponse,
  setStudentResponse,
  selectedConversation,
  isLoadingConversation,
}) {
  const bottomRef = useRef(null);
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);

  const getResponse = async (studentResponse) => {
    try {
      setIsLoadingResponse(true);

      const { data } = await restClient({
        method: "POST",
        url: `/genai/${conversation._id}`,
        data: {
          studentResponse,
        },
      });

      if (data.success) {
        setConversation((prev) => ({
          ...prev,
          messages: [
            ...prev.messages,
            { content: data.response, role: "model" },
          ],
        }));
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoadingResponse(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  if (!selectedConversation) {
    return (
      <div className="flex flex-col h-[100vh] w-full items-center justify-center">
        <img src={robot} className="w-100" alt="robot" />
        <span className="text-[1.6rem]">
          Select or create a new conversation.
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full pb-16 h-[100vh] flex flex-col">
      <div className="flex items-center justify-between px-24 py-8 gap-8">
        <p className="text-primary-teal text-[2rem] line-clamp-1">
          {capitalize(selectedConversation.name)}
        </p>
      </div>

      {isLoadingConversation && (
        <div className="flex justify-center pt-6">
          <ClipLoader color="#1dbbc3" size={40} />
        </div>
      )}

      {!isLoadingConversation && (
        <div className="overflow-auto pb-8 px-24 flex flex-col gap-4">
          {conversation?.messages?.map((message, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-md max-w-[60%] ${
                message.role === "user"
                  ? "bg-primary-teal text-primary-white ml-auto"
                  : "bg-secondary-white text-secondary-black mr-auto"
              }`}
            >
              <p>{message.content}</p>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      )}

      {isLoadingResponse && (
        <div className="flex justify-center pb-6">
          <ClipLoader color="#1dbbc3" size={40} />
        </div>
      )}

      <div className="absolute left-24 right-24 bottom-8">
        <ChatInput
          name="studentResponse"
          type="text"
          placeholder="Type your message here"
          value={studentResponse}
          onChange={(e) => setStudentResponse(e.target.value)}
          addStudentResponse={() => {
            getResponse(studentResponse);
            setConversation((prev) => ({
              ...prev,
              messages: [
                ...prev.messages,
                { content: studentResponse, role: "user" },
              ],
            }));
            setStudentResponse("");
          }}
        />
      </div>
    </div>
  );
}

export default ChatWindow;
