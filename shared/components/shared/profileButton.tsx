import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui";
import { CircleUser, User } from "lucide-react";
import Link from "next/link";

type Props = {
  onLogInClick?: () => void;
  className?: string;
};

export const ProfileButton: React.FC<Props> = ({ className, onLogInClick }) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {!session ? (
        <Button onClick={onLogInClick} variant="outline" className="flex items-center gap-1">
          <User size={16} />
          Log In
        </Button>
      ) : (
        <Link href={"/profile"}>
          <Button variant="secondary" className="flex items-center gap-2">
            <CircleUser size={18} />
            Profile
          </Button>
        </Link>
      )}
    </div>
  );
};
