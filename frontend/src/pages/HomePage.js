import {Container} from "react-bootstrap";
import {NamedLink} from "../routes/NamedLink";
import LogoutButton from "../components/LogoutButton";
import DeleteButton from "../components/DeleteButton";

function HomePage() {
    return (
        <Container className="mt-5 text-center">
            <h2>Welcome to Home</h2>
            <div>Go to
                <NamedLink routeName='SAMPLE_PAGE_ONE'> Sample Page 1</NamedLink>
            </div>
            <div>Go to
                <NamedLink routeName='SAMPLE_PAGE_TWO'> Sample Page 2</NamedLink>
            </div>
            <LogoutButton />
            <DeleteButton />
        </Container>
    );
}

export default HomePage;