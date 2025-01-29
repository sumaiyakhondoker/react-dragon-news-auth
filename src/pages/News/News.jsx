import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const News = () => {
    const {id} = useParams()
    return (
        
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
            <div className="col-span-3">newsdetails, {id}</div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
        </div>
    );
};

export default News;