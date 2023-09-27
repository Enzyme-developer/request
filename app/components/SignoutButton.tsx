"use client";
import React, { FC, useState } from "react";
import { Button } from "./reusables/Button";
import { signOut } from "next-auth/react";
import { toast } from "./reusables/Toast";

interface SignOutButtonProps {}

const SignoutButton: FC<SignOutButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutUser = async () => {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
        toast({
          title: 'Error signing in',
          message: 'Please try again later.',
          type: 'error',
        })
    }
  };

  return (
    <Button isLoading={isLoading} onClick={signOutUser}>
      Sign out
    </Button>
  );
};

export default SignoutButton;
