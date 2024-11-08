"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(8).max(20),
    cnfrmPass: z.string().min(8).max(20)
})


type FormType = 'sign-in' | 'sign-up'
const AuthForm = ({ type }: { type: FormType }) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            cnfrmPass: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="border-2 rounded-xl p-12 flex flex-col gap-4">
                <div className="space-y-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {
                        type === 'sign-up' &&
                        <FormField
                            control={form.control}
                            name="cnfrmPass"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Confirm Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    }
                </div>
                <Button type="submit">{type === 'sign-in' ? 'Sign In' : 'Sign Up'}</Button>
                <FormDescription>
                    {
                        type === 'sign-in' ? 'Dont have an account ? ' : 'Already have an account ? '
                    }

                    <Link href={type === 'sign-in' ? '/sign-up' : 'sign-in'} className="underline font-semibold hover:text-black">
                        {
                            type === 'sign-in' ? 'Sign in' : 'Sign up'
                        }
                    </Link>
                </FormDescription>
            </form>
        </Form>
    )
}

export default AuthForm