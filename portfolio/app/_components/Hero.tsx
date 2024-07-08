import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactIcon } from "./icons/ReactIcon";
import { buttonVariants } from "@/components/ui/button";
import { LaravelIcon } from "./icons/laravel";
import { SymfonyIcon } from "./icons/Symfony";
import { SassIcon } from "./icons/Sass";

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
    return (
         <span 
         className={cn(
            "bg-accent/30 font-mono border hover:bg-accent/50 bord-accent p-1 text-primary rounded-sm",
            className
        )} 
        {...props}
      />
     );
   };
export const Hero = () => {
    return <Section className="flex max-lg:flex-col items-start gap-4">
        <div className="flex-[3] flex w-full flex-col gap-2">
            <h2 className="font-caption text-4xl text-primary">Chaima Merazi</h2>
            <h3 className="text-2xl font-caption">Developpeuse web Full stack</h3>
            <p>
                Étudiante chez Epitech webacademie, ma formation ma permis de maitriser des langages de developpement web full stack comme :<br></br> 
                
                    <Link href="#">
                    <Code className="inline-flex items-center gap-1">
                    <img src="HTML5.png" style={{width: 30, height:"auto"}} alt="image HTML"/>
                    HTML
                    </Code></Link> 
                    {/* autre */}
                    <Link href="#">
                    <Code className="inline-flex items-center gap-1">
                    <img src="css-3.svg" style={{width: 15, height:"auto"}} alt="image css"/>
                    CSS
                    </Code></Link> 
                    {/* autre */}
                    <Link href="#">
                    <Code className="inline-flex items-center gap-1">
                    <img src="Javascript.png" style={{width: 26, height:"auto"}} alt="image Javascript"/>
                    JavaScript
                    </Code>
                    </Link> 
                    {/* autre */}
                    <Link href="#">
                    <Code className="inline-flex items-center gap-1">
                    <img src="PHP-logo.svg.png" style={{width: 30, height:"auto"}} alt="image php"/>
                    php
                    </Code></Link> <br></br>

                    {/* autre */}
                    ainssi que des Framwork comme : <br></br>
                    <Code className="inline-flex items-center gap-1">
                    <Link
                    href="#"
                      className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} >
                      <ReactIcon size={16} className="text-foreground"></ReactIcon>
                    </Link>
                    React
                    </Code>  
                    {/* autre */}
                    <Code className="inline-flex items-center gap-1">
                    <Link
                    href="#"
                      className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} >
                      <LaravelIcon size={16} className="text-foreground"/>
                    </Link>
                    Laravel
                    </Code>
                    {/* autre */}
                    <Code className="inline-flex items-center gap-1">
                    <Link
                    href="#"
                      className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} >
                      <SymfonyIcon size={16} className="text-foreground"/>
                    </Link>
                    Symfony
                    </Code>
                    {/* autre */}
                    <Code className="inline-flex items-center gap-1">
                    <Link
                    href="#"
                      className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} >
                      <SassIcon size={16} className="text-foreground"/>
                    </Link>
                    Sass
                    </Code>

                    
            </p>
        </div>
        <div className="flex-[1] max-md:m-auto ml-auto">
        <img 
        src="/planet.jpg" 
        className="w-60  h-60 max-w-xs rounded-full max-md:w-56" 
        alt="chaima's picture"/>
        </div>

        
    </Section>
}
