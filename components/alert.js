import Container from "./container";
import cn from "classnames";
import { ALERT_PATH } from "../lib/constants";

export default function Alert() {
  return (
    <div
      className={cn("fixed top-0 z-50 mb-16 border-b w-full bg-accent-7 border-accent-7 text-white")}
    >
      <Container>
        <div className="py-2 text-center text-sm">
              {" 🌻 "}Schedule an Intro Session With Me{" "}
              <a
                href={`${ALERT_PATH}`}
                className="font-bold text-yellow-500 hover:text-yellow-400 duration-200 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                Here
              </a>
        </div>
      </Container>
    </div>
  );
}
