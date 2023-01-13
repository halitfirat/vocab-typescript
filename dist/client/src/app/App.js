"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const Header_1 = __importDefault(require("../Header"));
const Homepage_1 = __importDefault(require("../Homepage"));
const VocabList_1 = __importDefault(require("../features/vocab/VocabList"));
const VocabOne_1 = __importDefault(require("../features/vocab/VocabOne"));
const VocabNew_1 = __importDefault(require("../features/vocab/VocabNew"));
function App() {
    const routes = (0, react_router_dom_1.useRoutes)([
        {
            path: "/",
            element: <Homepage_1.default />,
        },
        {
            path: "/vocabs",
            children: [
                {
                    index: true,
                    element: <VocabList_1.default />,
                },
                { path: ":id", element: <VocabOne_1.default /> },
                { path: "new", element: <VocabNew_1.default /> },
            ],
        },
    ]);
    return (<>
      <Header_1.default />
      {routes}
      <react_toastify_1.ToastContainer autoClose={1200}/>
    </>);
}
exports.default = App;
