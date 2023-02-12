import "./TripStyles.css";
import TripData from "./TripData";
import KharUsLake from '../../assets/Khar us lake.jpg';
import ThreeSenkhere from '../../assets/cave of the three senkhere.jpg'
import waterfall from '../../assets/waterfall.jpg'

function Trip() {
  return (
    <div className="trip">
      <h1>Our suggested Trip</h1>
      <p>All you need to do is follow our suggested itinerary and get ready for the trip of a lifetime. </p>
      <div className="tripcard">
        <TripData
        image={KharUsLake}
        heading='Khar Us Lake'
        text='One of the largest lakes in Mongolia, Khar Us Lake has an area of 1,153 square kilometers, is 72 kilometers long and 26 kilometers wide, has an island in the middle, and has bamboo and reeds on the southern edge. It is a desert lake with rare animals such as reed hogs, desert steppes and desert lakes. It is a flowing lake with fresh water at an altitude of 1157 meters above sea level. Despite its large area, it is a very shallow lake, with a maximum depth of 4.4 meters and an average depth of 2 meters.'
        />
        <TripData
        image={ThreeSenkhere}
        heading='The Three Senkhere'
        text='It is a cave at an altitude of 2100-2400 meters above sea level, 25 kilometers west of the center of Manhan Sum, Khovd Province. It is made of carbonate rock or white-gray calcareous marble, the height of the inner wall is 15 meters, from the floor to the ceiling is 20 meters. If you look at the blackened state of the cave walls in the fire, it proves that people have lived in the cave for a long time. There is also a historical monument with 40,000-year-old petroglyphs on the wall.'
        />
        <TripData
        image={waterfall}
        heading='Goojuur waterfall'
        text='Goojuur waterfall is located in Olon Nuur Mountains, one of the branch mountains of the Mongolian Altai Mountains in the Khovd Sum region of Uvs Province, southwest of the Kharhiraa Turgeni Mountains. Locals call it Huren Hanang Falls. Many Lake Mountains are 3,000 meters above sea level. They have eternal snow and majestic rocks, and there are 20 species of wild animals, such as rare leopards, ibex, deer, and more than 30 species of plants. It has 108 large and small lakes, so it is called the Mountains of Many Lakes.'
        />
        {/* <TripData
        image={MountainWolf}
        heading='Chono Khariah River'
        text='Chono Khariah River is a lake in the depression of the Great Lakes of Western Mongolia. It will be connected to Durgan Lake in the south by a pipeline.On the western and northwestern sides, mountains such as Gezeg Dhal, Gezeg Khairkhan, Chandman, and Tavan Khar continue to Chono Kharaikh River and separate Khar-Us Lake from Khar Lake.Surplus water from Khar-Us Lake flows into Khar Lake through Chono Kharaikh River.'
        /> */}
      </div>
    </div>
  );
}

export default Trip;
