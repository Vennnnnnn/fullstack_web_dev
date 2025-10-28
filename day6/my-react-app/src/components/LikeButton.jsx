import { useState } from 'react';

function LikeButton() {
    const [liked, setLiked] = useState(false);

    return (
        <button onClick={() => setLiked(!liked)}>
            {liked ? '♡ Like' : '❤️ Liked'}
        </button>
    );
}

export default LikeButton;