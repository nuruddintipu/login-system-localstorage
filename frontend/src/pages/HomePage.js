import {Container} from "react-bootstrap";
import {NamedLink} from "../routes/NamedLink";

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
        </Container>
    );
}

export default HomePage;