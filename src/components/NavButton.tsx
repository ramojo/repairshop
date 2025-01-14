import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";

type Props = {
    href?: string;
    icon: LucideIcon;
    label: string;
};

export function NavButton({
    href,
    icon: Icon,
    label
}: Props) {
    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label={label}
            title={label}
            className="rounded-full"
            asChild
        >
            {href ? (
                <Link href={href}>
                    <Icon />
                    {label}
                </Link>
            ) : (
                <Icon />
            )}
        </Button>
    );
}