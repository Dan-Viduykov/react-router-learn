import React, { FC } from "react";
import { useParams } from "react-router-dom";

const EditPost: FC = () => {
    const { id } = useParams();

    return (
        <div>
            EditPost {id}
        </div>
    )
}

export default EditPost