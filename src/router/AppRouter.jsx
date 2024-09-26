import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { 
    ActivateUserPage,
    ChangePasswordPage,
    CookiesPage,
    LoginPage, 
    MainPage, 
    PrivacyPage, 
    RegisterPage,
    TermsPage
} from "../ui-user/pages";
import { 
    Layout 
} from "../ui-user/components/Layout";
import { 
    AlertMessage, 
} from "../ui-user/components";


export const AppRouter = () => {

    const { isActiveMessage } = useSelector( state => state.alertMessage );

    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0,0);
    }, [ pathname ]);
    
  return (
    <>
        <Layout>
            <Routes>
                <Route path="/" element={ <MainPage /> } />
                <Route path="/entrar" element={ <LoginPage /> } />
                <Route path="/registro" element={ <RegisterPage /> } />
                <Route path="/politica-de-cookies" element={ <CookiesPage /> } />
                <Route path="/politica-de-privacidad" element={ <PrivacyPage /> } />
                <Route path="/terminos-y-condiciones" element={ <TermsPage /> } />
                <Route path="/activar-usuario/:token" element={ <ActivateUserPage /> } />
                <Route path="/cambiar-password/:token" element={ <ChangePasswordPage /> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
        </Layout>
        {
            isActiveMessage && 
                <AlertMessage />
        }
    </>
  );
};
