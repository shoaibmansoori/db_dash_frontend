import React from "react";
// import PropTypes from "prop-types";
import Navbar from "../component/apiDoc/navbarApi";
import CodeTab from "../component/apiDoc/codeSection/codeTab";




function ApiDocPage() {
    // const location = useLocation();
    // const [dbData, setDbData] = useState(null);

    // useEffect(() => {   
    //     if (location?.state) {
    //         setDbData(location?.state);
    //     } else {
    //         // handle case where no data was passed
    //     }
    // }, [props?.location?.state]);

    return (
        <>
        <Navbar/>
        <CodeTab/>
        {/* <Container maxWidth="sm">
           
                <Typography variant="body1" align="center">
                    {dbData.db.name}
                </Typography>
           
        </Container> */}
        

   </>
    );
}

export default ApiDocPage;
// apidocPage.propTypes = {
//     location: PropTypes.shape({
//         state: PropTypes.object
//     })
// };
