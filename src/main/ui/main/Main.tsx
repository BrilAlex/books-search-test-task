import {FC} from "react";
import {Header} from "./header/Header";
import {Pages} from "./pages/Pages";

export const Main: FC = () => {
  return (
    <div>
      <Header/>
      <Pages/>
    </div>
  );
};
