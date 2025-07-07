import { Database, Code2, Zap, ArrowRightLeft, Palette, Terminal, Container } from "lucide-react"

const technologies = [
    { name: "Laravel", icon: Database },
    { name: "React", icon: Code2 },
    { name: "Livewire", icon: Zap },
    { name: "Inertia.js", icon: ArrowRightLeft },
    { name: "Tailwind", icon: Palette },
    { name: "Linux", icon: Terminal },
    { name: "Docker", icon: Container },
]

export default function TechStack() {
    return (
        <div className="flex flex-wrap gap-4 justify-center sm:gap-6">
            {technologies.map(({ name, icon: Icon }) => (
                <div
                    key={name}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-default group"
                >
                    <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{name}</span>
                </div>
            ))}
        </div>
    )
}
