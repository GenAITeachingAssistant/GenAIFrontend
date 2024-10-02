import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import {
  ArrowTopRightOnSquareIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";

import { avatars } from "constants/avatars";
import styles from "components/Sidebar/Sidebar.module.css";
import { capitalize } from "utils/capitalize";

function Sidebar({
  selectedConversation,
  setSelectedConversation,
  setOpenModal,
  conversations,
  isLoadingConversations,
}) {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const logout = () => {
    localStorage.clear();

    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div
      className={`w-1/4 pt-8 h-[100vh] flex flex-col gap-8 ${styles.sidebarGradient} shadow-2xl`}
    >
      <div className="flex gap-4 items-center px-4">
        <img
          src={
            avatars[
              userData.avatarImage.charAt(userData.avatarImage.length - 1) - 1
            ]
          }
          alt="avatar"
          className="w-16 h-16 rounded-full"
        />
        <span className="text-primary-white text-[1.6rem] font-semibold">
          {userData.firstName} {userData.lastName}
        </span>
      </div>

      <div
        className={`py-2 px-4 flex gap-4 items-center cursor-pointer font-semibold bg-primary-teal text-primary-white`}
        onClick={() => setOpenModal(true)}
      >
        <ArrowTopRightOnSquareIcon className="w-6 h-6 " />
        <span>Create a New Conversation</span>
      </div>

      <div className="text-primary-white flex flex-col gap-4 overflow-auto w-full hiddenScroll flex-grow">
        {isLoadingConversations && (
          <div className="flex justify-center pt-6">
            <ClipLoader color="#ffffff" size={40} />
          </div>
        )}

        {!isLoadingConversations && (
          <>
            {conversations.map((conversation) => (
              <div
                key={conversation._id}
                className={`py-2 px-4 rounded-[4px] ${styles.chatLink} ${
                  selectedConversation._id === conversation._id
                    ? styles.active
                    : ""
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <p className="line-clamp-1">{capitalize(conversation.name)}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <div
        className={`py-2 px-4 mt-auto flex gap-4 items-center font-semibold bg-secondary-red text-primary-red cursor-pointer`}
        onClick={logout}
      >
        <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;
