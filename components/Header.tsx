import RellyShipAnchor from "./RellyShipComponents/RellyShipAnchor";
import Image from "next/image";
import Logo from "@public/logo.svg";
import RellyShipInput from "@rellyship/RellyShipInput";
import RellyShipComponents, { joinClass } from "@rellyship/RellyShipComponent";
import {
  faMagnifyingGlass,
  faBell,
  faArrowRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import dynamic from "next/dynamic";
import { SubmitHandler, useForm } from "react-hook-form";
import MyProfile from "@public/me.jpeg";

library.add(faMagnifyingGlass, faBell, faArrowRightToBracket);

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(module => {
      return module.FontAwesomeIcon;
    }),
  { ssr: false }
);

interface IHeaderProps {
  isUserIn: boolean;
}

interface ISearchForm {
  query: string;
}

const Header = ({ isUserIn }: IHeaderProps) => {
  const { register, handleSubmit } = useForm<ISearchForm>();

  const onSearchSubmit: SubmitHandler<ISearchForm> = data => console.log(data);

  return (
    <nav className="w-full m-0 p-0 backdrop-blur-md bg-gradient-to-b from-black to-transparent fixed top-0 left-0 flex items-center justify-between px-24 border-b border-b-gray-700">
      <div className="flex items-center">
        <HeaderElement linkTo={"/"}>
          <Image src={Logo} alt="RellyShipLogo" width={30} height={30} />
        </HeaderElement>
        <HeaderElement>
          <form onSubmit={handleSubmit(onSearchSubmit)} className="relative">
            <RellyShipInput
              placeholder="Search..."
              extraClassName="border-gray-600 w-full"
              id="search"
              formRegister={register("query", {
                required: true
              })}
            />
            <label
              className="absolute top-0 right-1.5 h-full flex items-center justify-center"
              htmlFor="search"
            >
              <FontAwesomeIcon
                icon={"magnifying-glass"}
                size="xs"
                className="border border-gray-600 p-1 rounded-md bg-black"
              />
            </label>
          </form>
        </HeaderElement>
        <HeaderElement linkTo={"/asks/ask"} text="Ask" />
        <HeaderElement linkTo={"/public-votes/open"} text="Public Vote" />
        <HeaderElement linkTo={"/offers/offer"} text="Offer" />
      </div>
      <div>
        {isUserIn ? (
          <div className="flex items-center">
            <HeaderElement linkTo={"/notifications"}>
              <FontAwesomeIcon icon={"bell"} size="1x" />
            </HeaderElement>
            <HeaderElement linkTo={"/profile"} extraClassName="ml-0">
              <div className="rounded-full ring-gray-400 ring-2">
                <Image
                  src={MyProfile}
                  alt={`Seol SO's profile image`}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </HeaderElement>
          </div>
        ) : (
          <div className="flex items-center">
            <HeaderElement linkTo={"/signin"} text="Sign In" />
            <HeaderElement linkTo={"/signup"}>
              <span className="pr-3">Sign Up</span>
              <FontAwesomeIcon icon={"arrow-right-to-bracket"} />
            </HeaderElement>
          </div>
        )}
      </div>
    </nav>
  );
};

interface IHeaderElementProps extends RellyShipComponents {
  text?: string;
  children?: React.ReactNode;
  linkTo?: string;
  backgrounded?: boolean;
}

const HeaderElement = ({
  text,
  children,
  linkTo,
  extraClassName
}: IHeaderElementProps) => {
  return (
    <div
      className={joinClass([
        "flex items-center justify-start mx-4 cursor-pointer hover:-translate-y-0.5 rounded-md h-min text-gray-400 transition-all hover:text-white text-md",
        extraClassName ? extraClassName : ""
      ])}
    >
      {linkTo ? (
        <RellyShipAnchor linkTo={linkTo} extraClassName="px-4 py-3">
          {text ? <span>{text}</span> : children}
        </RellyShipAnchor>
      ) : (
        <>{text ? <span>{text}</span> : children}</>
      )}
    </div>
  );
};

export default Header;