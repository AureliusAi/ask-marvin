import { open_sans } from "@/app/ui/fonts";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MarvinLogo() {
  return (
    <div className={`${open_sans.className} flex flex-row items-center leading-none text-white w-64 md:w-32`}>
      <div>
        <FontAwesomeIcon className="h-9 w-9 md:h-16 md:w-16" icon={faUserAstronaut} />
      </div>
      <div className="text-[36px] pl-4">Ask Marvin</div>
    </div>
  );
}