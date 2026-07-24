'use client';

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export default function SearchInput({ onSubmit}: SearchInputProps) {
    return (
        <form onSubmit={onSubmit} className="mt-10 flex w-full max-w-md gap-2">
            <div className="relative w-full">
                <Field orientation="horizontal">
                    <Input
                        type="search"
                        name="searchQuery"
                        placeholder="Search by city or zip code..."
                        className="bg-white text-[#2E2E2E] pl-4 pr-10 py-6 rounded-xl border-transparent placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-slate-400"
                        />
                    <Button
                        type="submit"
                        className="bg-white absolute right-3 top-1/2 -translate-y-1/2 text-black"
                        aria-label="Submit Search">
                        <Search/>
                    </Button>
                </Field>
            </div>
        </form>
    )
}