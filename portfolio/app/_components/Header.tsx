import { Section } from "./Section";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <section className="flex item-baseline">
                <h1 className="text-lg font-bold text-primary">Chaima Merazi</h1>
                
                <p className="text-lg text-muted">
                  <br/> Developpeuse web full stack
                </p>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link
                    href="#"
                      className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} >
                      <GithubIcon size={16} className="text-foreground"/>
                    </Link>
                    <Link
                    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                      className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} >
                      <LinkedinIcon size={16} className="text-foreground"/>
                    </Link>
                </ul>
            </section>
        </header>
    )
}