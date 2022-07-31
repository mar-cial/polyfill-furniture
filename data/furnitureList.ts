import { Furniture } from "interfaces/Furniture";
import Furniture1 from '@images/furniture1.jpg';
import Furniture2 from '@images/furniture2.jpg';
import Furniture3 from '@images/furniture3.jpg';

const furnitureList: Furniture[] = [
  {
    id: "1",
    name: 'Gobi',
    price: '12 ETH',
    image: Furniture1,
    alt: 'Hidden trasure beneath the sand.',
    description: `Sands, unbroken by mosque or minaret,
    Unstruck by tower or battlement;
    Sands, endless, unbounded, eternal;
    Sands, quivering with reflected heat,
    Undulating as waves upon a frozen sea,
    Conjoining the sky in a coppered haze
    Where monstrous demons, sight-conjured,
    Tread reelingly a dance of sun-desire,
    Twisting and turning in a burning maze,
    Tireless, grotesque, sinister.`
  },
  {
    id: "2",
    name: 'Sahara',
    price: '24 ETH',
    image: Furniture2,
    alt: 'A diamond in the desert.',
    description: `Have you slept in a tent alone—a tent
    Out under the desert sky—
    Where a thousand thousand desert miles
    All silent round you lie?—
    The dust of the aeons of ages dead,
    And the peoples that trampled by?`
  },
  {
    id: "3",
    name: 'Kalahari',
    price: '36 ETH',
    image: Furniture3,
    alt: 'An exquisite piece of furniture.',
    description: `Down from the mesa's wind-blown height,
    While sunset fires the western steep,
    Toward the low shelters of the night
    The herder guides his sheep.
    They huddle by, sun-drowsed and mute,
    As following some magic flute
    Four thousand banded sheep, and more,
    Across the dusty desert floor.`
  },
];

export default furnitureList;