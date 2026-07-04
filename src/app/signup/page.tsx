'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type userType = 'renter' | 'host' | null;

export default function SignUpPage() {
  const [userType, setUserType] = useState<userType>(null);

  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const items = [
    { label: "Select your medical profession", value: null },
    { label: "Medical Student", value: "medical student"},
    { label: "Nursing Student", value: "nursing student"},
    { label: "Nurse", value: "nurse"},
    { label: "Physician", value: "physician"},
    { label: "Resident Physician", value: "resident physician"},
    { label: "Other", value: "other"},
  ]

  return (
    <main className="relative isolate w-full min-h-screen flex items-center justify-center px-4 pt-16 pb-16">
      <div className="fixed inset-0 w-screen h-screen -z-10">
        <Image src="/600x400_Placeholder_Image.png" alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
      </div>

      <Card className="w-full max-w-md rounded-3xl shadow-2xl border-slate-100 bg-white p-2">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight text-center text-slate-900">Create an account</CardTitle>
          <CardDescription className="text-slate-500 text-sm">
            Select your account type to fill out your registration.
          </CardDescription>
        </CardHeader>
        <form onSubmit={(e) => e.preventDefault()}>
          <CardContent className="space-y-4">

            {/* User selects either renter or host, which highlights currently selected choice and results in a different input fields. */}
            <RadioGroup onValueChange={(val) => setUserType(val as userType)} className="grid grid-cols-2 gap-3">
              <div>
                <RadioGroupItem value="renter" id="renter" className="peer sr-only" />
                <Label
                    htmlFor="renter"
                    className={`flex flex-col h-full items-center text-center justify-center rounded-xl border-2 p-3 cursor-pointer transition-all
                        ${userType === 'renter' 
                        ? 'border-slate-100 bg-slate-900 text-white' 
                        : 'border-slate-100 bg-popover text-slate-900 hover:bg-slate-50'
                        }`}
                >
                  <span className="font-bold text-sm">Renter</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="host" id="host" className="peer sr-only" />
                <Label
                    htmlFor="host"
                    className={`flex flex-col h-full items-center text-center justify-center rounded-xl border-2 p-3 cursor-pointer transition-all
                        ${userType === 'host' 
                        ? 'border-slate-900 bg-slate-900 text-white' 
                        : 'border-slate-100 bg-popover text-slate-900 hover:bg-slate-50'
                        }`}
                >
                  <span className="font-bold text-sm">Host</span>
                </Label>
              </div>
            </RadioGroup>

            {/* If the user signs up as a renter */}
            {userType !== null && (
              <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <p>Email</p>
                <Input type="email" placeholder="jane.doe@example.com" className="h-11 rounded-xl" required />
                <p>First Name</p>
                <Input type="text" placeholder="Jane" className="h-11 rounded-xl" required />
                <p>Last Name</p>
                <Input type="text" placeholder="Doe" className="h-11 rounded-xl" required />
                <p>Display Name</p>
                <Input type="text" placeholder="Jane D" className="h-11 rounded-xl" required />
                <p>Password</p>
                <Input type="password" placeholder="Create Password" className="h-11 rounded-xl" required />
                {userType === 'renter' && (
                  <>
                    <Field className="w-full max-w-xs">
                      <FieldLabel>Renter</FieldLabel>
                      <Select items={items}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {items.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FieldDescription>
                      </FieldDescription>
                    </Field>
                  </>
                )}

                {/* If the user signs up as a host */}
                {userType === 'host' && (
                    <>
                        <Input type="tel" placeholder="Phone Number" className="h-11 rounded-xl" required />
                    </>
                )}
              </div>
            )}
          </CardContent>
          {userType !== null && (
            <CardFooter className="flex flex-col gap-4">
              <div className="flex items-start space-x-2 w-full pb-2">
                  <Checkbox 
                    id="terms" 
                    checked={acceptedTerms}
                    onCheckedChange={(checked) => setAcceptedTerms(!!checked)}
                    className="mt-0.5 border-slate-300 data-[state=checked]:bg-slate-900 data-[state=checked]:text-white"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-xs font-medium text-slate-600 cursor-pointer select-none"
                    >
                      I accept the{" "}
                      <Link href="/terms-of-service" className="text-slate-900 font-semibold underline hover:text-slate-700">
                        Terms of Service
                      </Link>
                      {" "}and{" "}
                      <Link href="/privacy-policy" className="text-slate-900 font-semibold underline hover:text-slate-700">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                </div>
              <Button type="submit" className="w-full h-11 bg-slate-900 hover:bg-slate-800 rounded-xl font-bold text-sm shadow-lg">
                Complete Sign Up
              </Button>
              <p className="text-xs text-center text-slate-500">
                Already have an account? <Link href="/login" className="text-slate-900 font-semibold underline">Log in</Link>
              </p>
            </CardFooter>
          )}
        </form>
      </Card>
    </main>
  );
}