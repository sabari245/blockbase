import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link";
import { Wallet2, ArrowRight } from "lucide-react";
import { Separator } from "./ui/separator"

export function LoginCard() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
        <CardDescription>
          Please, connect your wallet to proceed further
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full">
          <Wallet2 className="w-4 h-4 mr-2" />
          Connect Your Wallet
        </Button>
        <Separator className="my-4" />
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Link href="/dashboard" className="flex items-center w-full">
          <Button variant="default" className="w-full">
            Citizen Login
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
        <Link href="/govt" className="flex items-center w-full">
          <Button variant="outline" className="w-full">
            Official Login
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
        <div>
          <p className="px-8 mt-2 text-sm text-right text-muted-foreground">
            verify a certificate?{" "}
            <Link href="/verify">
              <Button
                variant="link"
                className="p-0 m-0 underline underline-offset-4 hover:text-primary"
              >
                verity
              </Button>
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
