import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecoverPasswordPage() {
    return (
        <main className="relative isolate w-full h-screen flex items-center justify-center px-4 overflow-hidden">
            <div className="fixed inset-0 w-screen h-screen -z-10">
                <Image src="/600x400_Placeholder_Image.png" alt="Background" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            </div>

            <Card className="w-full max-w-md rounded-3xl shadow-2xl border-slate-100 bg-white p-2 max-h-[85vh] overflow-y-auto">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 text-center ">
                        Forgot your password?
                    </CardTitle>
                    <CardDescription className="text-slate-500 text-lg">
                        No worries! Please enter the email address you used to sign up and we'll send you instructions to set a new password.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Email</p>
                    <Input type="email" placeholder="Email Address" className="h-11 rounded-xl" required />
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <p>
                        Suddenly rememebered your password? <Link href="/login" className="text-slate-900 font-semibold underline">
                        Log in
                    </Link>
                    </p>
                    <Button type="submit" className="w-full h-11 bg-red-400 hover:bg-slate-800 rounded-xl font-bold text-sm shadow-lg">
                        Send Instructions
                    </Button>
                </CardFooter>
            </Card>
        </main>
    );
}