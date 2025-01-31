import {Container} from "react-bootstrap";
import {NamedLink} from "../routes/NamedLink";
import LogoutButton from "../components/LogoutButton";

function SamplePageOne() {
    return (
        <Container className="mt-5 text-center">
            <h2>Welcome to Sample Page 1</h2>
            <div>Go to
                <NamedLink routeName='HOME'> Home</NamedLink>
            </div>
            <div>Go to
                <NamedLink routeName='SAMPLE_PAGE_TWO'> Sample Page 2</NamedLink>
            </div>

            <LogoutButton />
        </Container>
    );
}

export default SamplePageOne;