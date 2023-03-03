import "./bootstrap";
import "../css/app.css";
import "react-datepicker/dist/react-datepicker.css";
import {Flip, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import {createRoot} from "react-dom/client";
import {createInertiaApp} from "@inertiajs/react";
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <>
                <App {...props} />
                <ToastContainer transition={Flip} autoClose={2000} />
            </>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
