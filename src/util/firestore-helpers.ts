import {mDb} from "./firebase";
import {getDocs} from "firebase/firestore";
import {Movie} from "./interfaces";

const store = {
    fetchMovies: async (): Promise<Movie[]> => {
        const data = await getDocs(mDb);
        return data.docs.map(doc => doc.data() as Movie);
    }
}

export default store;