import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
import FavoritesProvider from "../../context/Favorites";
import Footer from "../../components/Footer";

function BasePage() {
    return (
        <div>
            <Header/>
            <FavoritesProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritesProvider>
            <Footer/>
        </div>
    )
}

export default BasePage;