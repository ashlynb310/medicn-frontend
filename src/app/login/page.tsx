'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="relative w-full h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="fixed inset-0 w-screen h-screen -z-10">
        <Image src="/600x400_Placeholder_Image.png" alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
      </div>

      <Card className="w-full max-w-md rounded-3xl shadow-2xl border-slate-100 bg-white p-2">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold tracking-tight text-slate-900">Welcome back</CardTitle>
          <CardDescription className="text-slate-500 text-sm">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={(e) => e.preventDefault()}>
          <CardContent className="space-y-4">
            <p className="text-left text-slate-900">Email</p>
            <Input type="email" placeholder="jane.doe@example.com" className="h-11 rounded-xl" required />
            <p className="text-left text-slate-900">Password</p>
            <Input type="password" placeholder="Enter your password..." className="h-11 rounded-xl" required />
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <p className="text-sm text-center text-slate-500">
                Forgot your password? <Link href="/recover-password" className="text-slate-900 font-semibold underline">Reset Password</Link>
            </p>
            <Button type="submit" className="w-full h-11 bg-slate-900 hover:bg-slate-800 rounded-xl font-bold text-sm shadow-lg">
              Log In
            </Button>
            <p className="text-sm text-center text-slate-500">
              Don't have an account? <Link href="/signup" className="text-slate-900 font-semibold underline">Sign up</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}