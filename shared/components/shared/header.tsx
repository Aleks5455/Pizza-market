import { cn } from "../../lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./searchInput";
import { CartButton } from "./cartButton";

type Props = {
  className?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
};

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart=true, className }) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl font-black">Aleks5455 Pizza!</h1>
              <p className="text-sm text-gray-400 leading-3">
                Taste Beyond Compare!
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && <div className="mx-10 flex-1">
          <SearchInput />
        </div>}

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Log In
          </Button>
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
