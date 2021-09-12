import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

//Component
import PhotosCollection from "../../Components/Restaurant/PhotosCollection";

const Photos = (props) => {
    const [photos, setPhotos] = useState(
        [
            "https://b.zmtcdn.com/data/pictures/chains/1/18774211/c7d0e46627c8e3e78bf5374636afc980.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/1/18774211/89d9cff8e6f8050047471475646d7227.jpg",
            "https://b.zmtcdn.com/data/pictures/1/18774211/3c5702c5aa39e094e2e6a829e777304c.jpg",
        ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={CurrentImg}
                    disableScroll={false}
                    onClose={closeViewer}
                />
            )}

            <div className="flex flex-wrap gap-2">
                {
                    photos.map((photo) => (
                        <PhotosCollection image={photo} openViewer={openViewer} />
                    ))
                }
            </div>
        </>
    );
};

export default Photos;
