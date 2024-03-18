import app from '../utils/axiosConfig';
import { useOutletContext } from 'react-router-dom';

function AddBookmark(post_id) {
    
    const { isUser } = useOutletContext();



    async function AddBook(post_id) {

        const responce = app.get(`bookmark/add-bookmark/${post_id}${isUser.id}`);
        return responce;
    }

    AddBook(post_id);

    return AddBook;
}

export default AddBookmark