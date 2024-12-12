import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image
                        src="/mascot.svg"
                        height={40}
                        width={40}
                        alt="mascot"
                    />
                    <h1 className="text-2xl text-green-500 font-extrabold tracking-wide">Lingo</h1>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode="modal"
                            afterSignInUrl="/learn"
                            afterSignUpUrl="/learn"
                            {...{} as any}    //Typescript mismatch error workaround
                        >
                            <Button size="lg" variant="ghost">
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    );
};
