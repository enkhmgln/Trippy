import React from 'react';

import KharUsLake from '../../assets/Khar us lake.jpg';
import KharUsLake2 from '../../assets/Khar us lake-2.jpg';
import ThreeSenkhere from '../../assets/cave of the three senkhere.jpg'
import ThreeSenkhere2 from '../../assets/threeSenkhere.jpg'
import Tsambagarav from '../../assets/Tsambagarav.jpg'
import Tsambagarav2 from '../../assets/Tsambagarav-2.jpg'
import BaatarKhairkhan from '../../assets/BaatarKhairkan.jpeg'
import BaatarKhairkhan2 from '../../assets/BaatarKhairkan-2.jpeg'


import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="my-4 mx-24 md:mx-5">
      <div className='Header'>
      <h1 className='text-3xl'>Popular destinations in Khovd</h1>
      <p className='p'>Tours give you the opportunity to see a lot, within a time frame. </p>
      </div>
      <DestinationData
      className='first-des '
      heading='Khar Us Lake'
      text='One of the largest lakes in Mongolia, Khar Us Lake has an area of 1,153 square kilometers, is 72 kilometers long and 26 kilometers wide, has an island in the middle, and has bamboo and reeds on the southern edge. It is a desert lake with rare animals such as reed hogs, desert steppes and desert lakes. It is a flowing lake with fresh water at an altitude of 1157 meters above sea level. Despite its large area, it is a very shallow lake, with a maximum depth of 4.4 meters and an average depth of 2 meters.'
      img1={KharUsLake}
      img2={KharUsLake2}
      />
      <DestinationData
      className='first-des-reverse'
      heading='Mount Tsambagarav'
      text='Mount Tsambagarav is a 4,195-meter high, snow-capped mountain. This mountain is rich in wildlife in the Mongolian Altai Mountains. Mount Tsambagarav is suitable for climbing and trekking. In the past, high mountains were called Tsambagarav mountain. An artist created the color of a human mountain, and God named him Tsambagarav, and after placing the same snowy Jinst on the top of the mountain, he named it Tsambagarav. The Oulds had 11 teams, and each team had a sacrificial mound to worship Mount Tsambaga. The fruits and plants of the sacred mountain were not touched, and special recitations were recited if touched.'
      img1={Tsambagarav}
      img2={Tsambagarav2}
      />
      <DestinationData
      className='first-des'
      heading='The Three Senkhere Mountain'
      text='It is a cave at an altitude of 2100-2400 meters above sea level, 25 kilometers west of the center of Manhan Sum, Khovd Province. It is made of carbonate rock or white-gray calcareous marble, the height of the inner wall is 15 meters, from the floor to the ceiling is 20 meters. If you look at the blackened state of the cave walls in the fire, it proves that people have lived in the cave for a long time. There is also a historical monument with 40,000-year-old petroglyphs on the wall.'
      img1={ThreeSenkhere}
      img2={ThreeSenkhere2}
      />
<DestinationData
className='first-des-reverse'
heading='Baatar Khairhan Mountain'
text='Eight kilometers from the center of Hovd province, there is a mountain with soyombs in Mongolia called Baatarkhairkhan. The fact that this mountain standing in the plain looks strange to people and is decorated with Soyombo characters has historical significance.Specifically, the soldiers of General Khatanbaatar S. Magsarjav descended on the mountain to attack the Manchurian Amban, which was centered on the Sang wall and protected by Chinese soldiers.'
img1={BaatarKhairkhan}
img2={BaatarKhairkhan2}
/>
    </div>
  );
};

export default Destination;
