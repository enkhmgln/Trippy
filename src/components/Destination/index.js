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
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <div className='Header'>
      <h1>Popular destinations in Khovd</h1>
      <p id='zail'>Tours give you the opportunity to see a lot, within a time frame. </p>
      </div>
      <DestinationData
      className='first-des'
      heading='Khar Us Lake'
      text='One of the largest lakes in Mongolia, Khar Us Lake has an area of 1,153 square kilometers, is 72 kilometers long and 26 kilometers wide, has an island in the middle, and has bamboo and reeds on the southern edge. It is a desert lake with rare animals such as reed hogs, desert steppes and desert lakes. It is a flowing lake with fresh water at an altitude of 1157 meters above sea level. Despite its large area, it is a very shallow lake, with a maximum depth of 4.4 meters and an average depth of 2 meters.'
      img1={KharUsLake}
      img2={KharUsLake2}
      />
      <DestinationData
      className='first-des-reverse'
      heading='Tsambagarav Mountain'
      text='Mount Tsambagarav is a snow-capped mountain with a height of 4195 meters. This mountain is in the Mongolian Altai Mountains, rich in wildlife. It is suitable for climbing and trekking programs in Tsambagarav Mountain. In the past, the highlanders called Mount Tsambagarav Tsats. An artist created the color of a human mountain, and God named it Tsambagarav, and after the snow-covered Jinst was placed on the top of the mountain, he found it and named it Tsambagarav. Oulds had 11 teams, and each team had a sacrificial mound to worship Mount Tsambaga. The fruits and plants of the sacred mountain were not touched, and a special recitation was recited if touched.'
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
