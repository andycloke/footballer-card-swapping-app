import * as React from 'react';

import ImageCarousel from '../../common/components/ImageCarousel';
import PLAYER_IMAGES from '../data/playerImages';

/* For now this component is so simple it's almost redudant, since it just imports the data.
However in a real world application it might handee fetching the data from a server etc. */

const PlayersCarousel = () => <ImageCarousel images={PLAYER_IMAGES} />;

export default PlayersCarousel;
