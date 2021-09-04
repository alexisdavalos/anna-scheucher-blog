import Link from "next/link";
import Container from "./container";
import cn from "classnames";
import { ALERT_PATH } from "../lib/constants";

export default function Alert() {
    return (
        <div
            className={cn(
                "fixed top-0 z-50 mb-16 border-b w-full bg-accent-7 border-accent-7 text-white"
            )}
        >
            <Container>
                <div className="py-2 text-center text-sm flex justify-center items-center space-x-2">
                    <span className="mx-2">🌻</span>
                    <span>{`Free Mindful Eating E-Book:`}</span>
                    <Link href="/#subscribe" passHref>
                        <a className="ml-0 text-yellow-500 hover:text-yellow-400 duration-200 transition-colors">Here</a>
                    </Link>
                </div>
            </Container>
        </div>
    );
}
