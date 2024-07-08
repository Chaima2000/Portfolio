import { Card } from "@nextui-org/card";
import { Section } from "./Section";
import { LucideIcon, MessageCircle, Rss, StickyNote, Weight } from "lucide-react";
import { code } from "@nextui-org/theme";
import React from 'react';

/*eslint-env node*/

export const Status = () => {
    return (
        <Section className="flex max-lg:flex-col space-between gap-4">
            <Card className="flex-[3] p-4 flex flex-col gap-2 w-full">
                <p className="text-lg text-muted-foreground">À propos de mes projets</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {propo_projet.map((projet, index) => (
                        <ProjetCard key={index} {...projet} />
                    ))}
                </div>
            </Card>
            
            <div className="flex-[2] flex flex-col gap-4">
                <Card className="p-4 flex-1 ">Projets
                <ul className="text-primary  mt-2">
                    <li>My cinema</li>
                    <li>My meetic</li>
                    <li>Snapchat</li>
                    <li>Puissance 4</li>
                    </ul></Card>
                <Card className="p-4 flex-1">Contact
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="text-primary hover:underline mt-2">Linkedin</a>
                <a href="#" className="text-primary hover:underline mt-2">Chaimamerazi29@gmail.com</a>

                </Card>
            </div>
        </Section>
    );
};

const propo_projet = [
    // {
    //     logo: code,
    //     title: "Puissance 4",
    //     description: "Un site de jeu",
    //     url: "#"
    // },
    {
        logo: StickyNote,
        title: "My meetic",
        description: "Un site de rencontre.",
        url: "#"
    },
    {
        logo: Rss,
        title: "Snapchat",
        description: "Une application",
        url: "#"
    },
    {
        logo: MessageCircle,
        title: "My cinema",
        description: "Un site de reservation cinema.",
        url: "#"
    },
    {
        logo: Weight,
        title: "Puissance 4",
        description: "Un site de jeu.",
        url: "#"
    },
];

type projetProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const ProjetCard = ({ logo: Logo, title, description, url }: projetProps) => {
    return (
        <Card className="p-4 flex flex-col gap-2 w-full hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
                <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                    <Logo />
                </span>
                <div>
                    <p className="text-primary font-semibold ">{title}</p>
                    <p className="text-lg text-muted-foreground">{description}</p>
                </div>
            </div>
            <a href={url} className="text-primary hover:underline mt-2">En savoir plus</a>
        </Card>
    );
};
