import {
    BookOpen,
    Bot,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

export const navbarData = {
    user: {
        name: "Murali",
        email: "murali@example.com",
        avatar: 'https://github.com/shadcn.png',
    },
    company:
    {
        name: "Trade Analysis",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: "Charts",
            url: "#",
            icon: Bot,
        },
        {
            title: "Reports",
            url: "#",
            icon: BookOpen,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

export default navbarData;