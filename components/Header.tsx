import Image from "next/image";
import Logo from "@public/logo.svg";
import {
  faMagnifyingGlass,
  faBell,
  faArrowRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import MyProfile from "@public/me.jpeg";
import InputSet from "@rellyship/RellyShipInput";
import { useForm } from "react-hook-form";
import HeaderElementSet from "./HeaderElement";

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
  const { register, handleSubmit } = useForm<ISearchForm>({});
  const router = useRouter();

  const onSearchSubmit = (handedForm: ISearchForm) => {
    router.push(`/search?q=${handedForm.query}`);
  };

  return (
    <nav className="w-full m-0 p-0 backdrop-blur-sm bg-gradient-to-b from-black to-transparent fixed top-0 left-0 z-10 flex items-center justify-around px-24 border-b border-b-gray-700 lg:justify-between py-4">
      <div className="flex items-center justify-around">
        <div>
          <HeaderElementSet.jsxFunction linkTo={"/"}>
            <Image src={Logo} alt="RellyShipLogo" width={30} height={30} />
          </HeaderElementSet.jsxFunction>
        </div>
        <div className="flex items-center">
          <div className="hidden items-center sm:flex">
            <HeaderElementSet.jsxFunction linkTo={"/asks/ask"} text="Ask" />
            <HeaderElementSet.jsxFunction
              linkTo={"/public-votes/open"}
              text="Vote"
            />
            <HeaderElementSet.jsxFunction
              linkTo={"/offers/offer"}
              text="Offer"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <HeaderElementSet.jsxFunction extraClassName="hidden lg:flex">
          <form onSubmit={handleSubmit(onSearchSubmit)} className="relative">
            {/* NOTE: The placeholder should be suggested by the server, depending on the trend */}
            <InputSet.jsxFunction
              placeholder="Search..."
              isSearchInput
              id="search"
              register={register("query", {
                minLength: 3,
                maxLength: 40
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
        </HeaderElementSet.jsxFunction>
        {isUserIn ? (
          <div className="flex items-center">
            <HeaderElementSet.jsxFunction
              linkTo={"/notifications"}
              extraClassName="hidden sm:block"
            >
              <FontAwesomeIcon icon={"bell"} size="1x" />
            </HeaderElementSet.jsxFunction>
            <HeaderElementSet.jsxFunction
              linkTo={"/profile"}
              extraClassName="ml-0"
            >
              <div className="rounded-full ring-gray-400 ring-2">
                <Image
                  src={MyProfile}
                  alt={`Seol SO's profile image`}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </HeaderElementSet.jsxFunction>
          </div>
        ) : (
          <div className="flex items-center">
            <HeaderElementSet.jsxFunction linkTo={"/signin"} text="Sign In" />
            <HeaderElementSet.jsxFunction linkTo={"/signup"}>
              <span className="pr-3">Sign Up</span>
              <FontAwesomeIcon icon={"arrow-right-to-bracket"} />
            </HeaderElementSet.jsxFunction>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
