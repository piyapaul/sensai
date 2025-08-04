
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {  LayoutDashboard, Star, ChevronDown, FileText, GraduationCap, PenBox } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";
const Header = async() => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
  <nav className="w-full px-4 h-16 flex items-center justify-between">
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Sensei Logo"
        width={200}
        height={70}
        className="h-12 py-1 w-auto object-contain"
      />
    </Link>

    <div className="flex items-center gap-2">
      {/* ✅ Signed-in block */}
      <SignedIn>
        <Link href="/dashboard">
          <Button variant="outline">
            <LayoutDashboard className="h-4 w-4" />
            <span className="hidden md:block">Industry Insights</span>
          </Button>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
  <Button>
    <Star className="h-4 w-4" />
    <span className="hidden md:block">Growth Tools</span>
    <ChevronDown className="h-4 w-4" />
  </Button>
</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/resume" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Build Resume</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/ai-cover-letter" className="flex items-center gap-2">
                <PenBox className="h-4 w-4" />
                <span>Cover Letter</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/interview" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Interview Prep</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <UserButton
        appearance={{
          elements: {
            avatarBox: "w-10 h-10",
            userButton: "shadow=xl",
            userPreviewMainIdentifier: "font-semibold",
          },
        }}
        />
      </SignedIn>

      {/* ✅ Signed-out block */}
      <SignedOut>
  <SignInButton>
    <Button variant="outline">Sign In</Button>
  </SignInButton>

  <SignUpButton>
    <Button variant="outline">Sign Up</Button>
  </SignUpButton>
</SignedOut>
    </div>
  </nav>
</header>
  );
};

export default Header;
