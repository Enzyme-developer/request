"use client"
import React, { FC, useState } from 'react'
import { Button } from './reusables/Button'
import { signIn } from 'next-auth/react'
import { toast } from './reusables/Toast'

interface SigninButtonProps {}


const SigninButton: FC<SigninButtonProps> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signInWithGoogle = async () => {
        try {
          setIsLoading(true)
          await signIn('google')
        } catch (error) {
          toast({
            title: 'Error signing in',
            message: 'Please try again later.',
            type: 'error',
          })
        }
    }
    
  return (
      <Button isLoading={isLoading} onClick={signInWithGoogle} >Sign in</Button> 
  )
}

export default SigninButton