import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useGlobalContext } from "./context";

const URL = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`

const Gallery = () => {
    const { searchItem } = useGlobalContext();
    const response = useQuery({
        queryKey: ["images", searchItem],
        queryFn: async () => {
            const result = await axios.get(`${URL}&query=${searchItem}`);
            return result.data;
        },
    })

    console.log(response);

    if (response.isLoading) {
        return <section className="image-container">
            <h4>Loading</h4>
        </section>
    }
    if (response.isError) {
        return <section className="image-container">
            <h4>There's some errr</h4>
        </section>
    }

    const result = response.data.results;
    console.log(result)
    if (result.length < 1) {
        return <section className="image-container">
            <h4>There's some errr</h4>
        </section>
    }
    return (
        <section className="image-container">
            {result.map((item) => {
                const url = item?.urls?.regular;
                return < img src={url} alt={item.description} className="img" key={item.id} />
            })}
        </section>
    )
}
export default Gallery