import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {photoServise} from "../../services/photo.service";
import {Photo} from "../Photo/Photo";


export const Photos = () => {
    const {albumId} = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(async () => {
        const photos = await photoServise.getPhotoById(albumId)
        setPhotos(photos);
    }, [albumId]);
    console.log(photos)
    return (
        <div>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
};
