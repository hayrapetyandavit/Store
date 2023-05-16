import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const App: FC = () => {
const i: { [key: string]: string[] } = {};
i.am        = ['a front end developer'];
i.love      = ['javascript', 'aviation', 'climbing', 'snowboarding'];
i.workWith  = ['js', 'ts', 'react', 'redux', 'scss', 'node', 'mysql', 'whatever is necessary'];
i.aspire    = ['to be better than yesterday'];
  return (
    <div className="wrapper">
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
