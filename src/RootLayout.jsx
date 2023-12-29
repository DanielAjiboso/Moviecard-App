import { Outlet } from "react-router-dom";

export default function RootLayout(){

    return(
        <div className="root-layout">
            <h2>Daniel Ajiboso</h2>
            <Outlet />
        </div>
    )
}