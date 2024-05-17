import { Helmet } from "react-helmet";

const MetaTag = ({title} : {title: string} ):React.JSX.Element => {
    return (
        <Helmet>
            <title> {`Fitness - ${title}`}</title>
        </Helmet>
    )
}

export default MetaTag;