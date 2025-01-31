import {Container} from "react-bootstrap";
import {NamedLink} from "../routes/NamedLink";
import LogoutButton from "../components/LogoutButton";

function SamplePageTwo() {
    return (
        <Container className="mt-5 text-center">
            <h2>Welcome to Sample Page 2</h2>
            <div>Go to
                <NamedLink routeName='HOME'> Home</NamedLink>
            </div>
            <div>Go to
                <NamedLink routeName='SAMPLE_PAGE_ONE'> Sample Page 1</NamedLink>
            </div>

            <LogoutButton />
        </Container>
    );
}

export default SamplePageTwo;