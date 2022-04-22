import Photo from '../component/Photo';

export default function Gallery({ photos }) {


    const createPhotoList = () => {

        return photos.map((photo) => {
            return (
                <Photo key={photo.id} photo={photo}></Photo>
            )
        })

    }

    return (
        <div className="row">
            {createPhotoList()}
        </div>
    )
}