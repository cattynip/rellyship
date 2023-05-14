import { useEffect, useState } from "react";
import RellyShipInput from "./RellyShipComponents/RellyShipInput";
import Image from "next/image";
import UserAt from "./UserAt";
import { IRellyShipInputTypeComponent } from "./RellyShipComponents/RellyShipComponent";
import DescriptionSet from "./RellyShipComponents/RellyShipDescription";

interface IUserSearcherProps {}

type UserSearcherMode = "blank" | "searching_users" | "showing_user";

interface SearchingUsersProps {
  username: string;
  users: {
    name: string;
    nickname: string;
    avatar: string;
    bio?: string;
  }[];
}

interface ShowingUserProps {
  username: string;
  nickname: string;
  avatar: string;
  bio?: string;
}

interface IUserSearcherModeProps {
  mode: UserSearcherMode;
  data: SearchingUsersProps;
}

const UserSearcher = ({
  ...props
}: IUserSearcherProps & IRellyShipInputTypeComponent) => {
  const [mode, setMode] = useState<UserSearcherMode>("blank");

  useEffect(() => {
    // TODO: Send an API that checks whether the user exists or not.
  }, [mode]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-96">
      <div className="w-full h-full flex flex-col p-4 items-center justify-center border border-gray-700 rounded-t-lg md:rounded-l-lg md:rounded-tr-none sm:flex-row md:flex-col">
        <Image
          src={"/me.jpeg"}
          alt="The avatar of the user"
          width={200}
          height={200}
          priority
          className="rounded-full w-32 h-32 m-0 mb-4 sm:mb-0 sm:mr-4 md:mr-0 md:mb-4 md:w-56 md:h-56"
        />
        <div className="flex items-center justify-center">
          <UserAt extraClassName="hidden sm:block" />
          <RellyShipInput
            extraClassName="sm:ml-2"
            placeholder="@username"
            id="who"
            removeHoverAnimation
            wider
            {...props}
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center p-4 border border-gray-700 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
        {mode === "blank" ? (
          <p className={DescriptionSet.className}>Entter the username</p>
        ) : (
          <div>
            <span>sdlfjlask</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSearcher;
