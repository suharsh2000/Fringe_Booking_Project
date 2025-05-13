import { useEffect, useState } from "react"
import ShowCard from "./showCard"
import axios from "axios";

const ShowsDashboard = ({ isAddShowClicked, isGetInvolvedClicked }) => {
    const [shows, setShows] = useState([]);
    async function getShows() {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/show/getAllShows`);
            if (result.status == 200) {
                setShows(result.data)
                const userShows = result.data.filter(show => show.status == "APPROVED")
                const adminShows = result.data.filter(show => show.status == "INPROGRESS")
                isGetInvolvedClicked ? setShows(adminShows) : setShows(userShows)
            }
        } catch {
            alert("error while fetching shows from backend system")
        }
    }
    useEffect(() => {
        getShows()
    }, [])
    return (
        <>
            {shows.length > 0 ? (
                shows.map(show => (
                    <ShowCard
                        key={show.id}
                        show={show}
                        getShows={getShows}
                        isGetInvolvedClicked={isGetInvolvedClicked}
                    />
                ))
            ) : isGetInvolvedClicked ? (
                <h1>No shows available to review</h1>
            ) : (
                <h1>No shows available</h1>
            )}

        </>


    )
}
export default ShowsDashboard